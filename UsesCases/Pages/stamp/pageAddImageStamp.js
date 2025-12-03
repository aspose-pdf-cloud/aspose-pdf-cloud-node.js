// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Image stamp for page with the required properties
// 5. Append new Image stamp to the document page using putPageAddStamp() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./../../../settings/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { Stamp } from "asposepdfcloud/src/models/stamp.js"; 

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "sample.pdf",
    IMAGE_STAMP_FILE: "sample.png",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
    IMAGE_STAMP_WIDTH: 24,
    IMAGE_STAMP_HEIGHT: 24,
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const pdfPages = {
    async uploadFile (fileName) {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, fileName);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },
                    
    async downloadResult () {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async uploadDocument () {
        await this.uploadFile(configParams.PDF_DOCUMENT_NAME);
    },

    async addPageImageStamp () {
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
        
        const resultPages = await pdfApi.putPageAddStamp(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, pageStamp);

        if (resultPages.body.code == 200) {
            console.log("Image Stamp added!");
            return true;
        }
        else
            console.error("Unexpected error : can't get pages!!!");
    },
}

async function main() {
    try {
        await pdfPages.uploadDocument();
        await pdfPages.uploadFile(configParams.IMAGE_STAMP_FILE);
        await pdfPages.addPageImageStamp();
        await pdfPages.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
