// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform some actions in Pdf document pages
// 5. Check result and perform some actions with result.body object
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    PAGE_NUMBER: 2,     // Your document page number...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfPages = {
    uploadFiles: async function (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    downloadFiles: async function (local_path, fileName) {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);

        const filePath = path.join(local_path, fileName);

        await fs.writeFile(filePath, changedPdfData.body);
        console.log("downloaded: " + filePath);
    },

    uploadDocument: async function () {
        await pdfPages.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    getPagesInfo: async function () {
        const resultPages = await pdfApi.getPages(configParams.PDF_DOCUMENT_NAME);

        if (resultPages.body.code == 200 && resultPages.body.pages.list) {
            if (!Array.isArray(resultPages.body.pages.list) || resultPages.body.pages.list.length === 0) {
                throw new Error("Unexpected error : pages is null or empty!!!");
            }
            return resultPages.body.pages.list;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    getPageInfo: async function (pageNumber) {
        const resultPages = await pdfApi.getPage(configParams.PDF_DOCUMENT_NAME, pageNumber);

        if (resultPages.body.code == 200 && resultPages.body.page) {
            return resultPages.body.page;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    addPage: async function () {
        const resultPages = await pdfApi.putAddNewPage(configParams.PDF_DOCUMENT_NAME);

        if (resultPages.body.code == 200 && resultPages.body.pages) {
            if (!Array.isArray(resultPages.body.pages.list) || resultPages.body.pages.list.length === 0) {
                throw new Error("Unexpected error : pages is null or empty!!!");
            }
            return resultPages.body.pages.list[resultPages.body.pages.list.length - 1];
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    deletePage: async function (pageNumber) {
        const resultPages = await pdfApi.deletePage(configParams.PDF_DOCUMENT_NAME, pageNumber);

        if (resultPages.body.code == 200) {
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    showPages: function(pages, prefix) {
        if (Array.isArray(pages) && pages.length > 0)
        {
            pages.forEach(function(page) {
                console.log(prefix +" => '" + page.id + "', '" + page.rectangle.lLX + "', '" + page.rectangle.lLY + "', '" + page.rectangle.uRX + "', '" + page.rectangle.uRY + "'");
            });
        }
        else
            console.error("showPages() error: array of pages is empty!")
    },

}

export default pdfPages;

await pdfPages.uploadDocument()
    .then(async () =>{
        return await pdfPages.getPagesInfo();
    })
    .then((pages) =>{
        pdfPages.showPages(pages, "in");
    })
    .then(async () =>{
        return await pdfPages.getPageInfo(configParams.PAGE_NUMBER);
    })
    .then((page) =>{
        pdfPages.showPages( [ page ], "pg");
    })
    .then(async () =>{
        return await pdfPages.addPage();
    })
    .then((page) =>{
        pdfPages.showPages( [ page ], "add");
    })
    .then(async () =>{
        return await pdfPages.deletePage(configParams.PAGE_NUMBER);
    })
    .then((complete) =>{
        console.log("Page '" + configParams.PAGE_NUMBER + "' deleted!");
    })
    .then(async () =>{
        await pdfPages.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
    })
    .catch((message) =>{
        console.log(message);
    });