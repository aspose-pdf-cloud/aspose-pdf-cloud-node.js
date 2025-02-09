// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Text stamp for page with the required properties
// 5. Append new Text stamp to the document page using putPageAddStamp() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "../../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../../src/api/api.js";
import { Stamp } from "../../../src/models/stamp.js"; 

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfPages = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },
                    
    async downloadResult () {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async addPageTextStamp () {

        const pageStamp = new Stamp();
        pageStamp.type = "Text";
        pageStamp.background = true;
        pageStamp.horizontalAlignment = "Center";
        pageStamp.textAlignment = "Center";
        pageStamp.value = "NEW TEXT STAMP";
        pageStamp.pageIndex = configParams.PAGE_NUMBER;
        
        const resultPages = await pdfApi.putPageAddStamp(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, pageStamp);

        if (resultPages.body.code == 200) {
            console.log("Text Stamp added!");
            return true;
        }
        else
            console.error("Unexpected error : can't get pages!!!");
    },
}

async function main() {
    try {
        await pdfPages.uploadDocument();
        await pdfPages.addPageTextStamp();
        await pdfPages.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();