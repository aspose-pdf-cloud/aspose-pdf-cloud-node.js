// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
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
        return await pdfPages.addPage();
    })
    .then((page) =>{
        pdfPages.showPages( [ page ], "add");
    })
    .catch((message) =>{
        console.log(message);
    });