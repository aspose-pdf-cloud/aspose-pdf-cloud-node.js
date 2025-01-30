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
import { Stamp } from "asposepdfcloud/src/models/stamp.js"; 

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    IMAGE_STAMP_FILE: "sample.png",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
    IMAGE_STAMP_LLY: 800,
    IMAGE_STAMP_WIDTH: 24,
    IMAGE_STAMP_HEIGHT: 24,
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
        await this.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    addPageTextStamp: async function (pageNumber) {

        const pageStamp = new Stamp();
        pageStamp.type = "Text";
        pageStamp.background = true;
        pageStamp.horizontalAlignment = "Center";
        pageStamp.textAlignment = "Center";
        pageStamp.value = "NEW TEXT STAMP";
        pageStamp.pageIndex = configParams.PAGE_NUMBER;
        
        const resultPages = await pdfApi.putPageAddStamp(configParams.PDF_DOCUMENT_NAME, pageNumber, pageStamp);

        if (resultPages.body.code == 200) {
            console.log("Text Stamp added!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    addPageImageStamp: async function (pageNumber) {

        const pageStamp = new Stamp();
        pageStamp.type = "Image";
        pageStamp.background = true;
        pageStamp.horizontalAlignment = "Center";
        pageStamp.textAlignment = "Center";
        pageStamp.value = "NEW TEXT STAMP";
        pageStamp.pageIndex = configParams.PAGE_NUMBER;
        pageStamp.fileName = configParams.IMAGE_STAMP_FILE;
        pageStamp.yIndent = configParams.IMAGE_STAMP_LLY;
        pageStamp.width = configParams.IMAGE_STAMP_WIDTH;
        pageStamp.height = configParams.IMAGE_STAMP_HEIGHT;
        
        const resultPages = await pdfApi.putPageAddStamp(configParams.PDF_DOCUMENT_NAME, pageNumber, pageStamp);

        if (resultPages.body.code == 200) {
            console.log("Image Stamp added!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },
}

export default pdfPages;

// Demonstrating functionality
await (async () => {
    await pdfPages.uploadDocument();
    await pdfPages.addPageTextStamp(configParams.PAGE_NUMBER);
    await pdfPages.uploadFiles(configParams.IMAGE_STAMP_FILE);
    await pdfPages.addPageImageStamp(configParams.PAGE_NUMBER);
    await pdfPages.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
