// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "../../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../../src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    PDF_STAMP_FILE: "pdf_stamp.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,             // Your document page number...
    STAMP_ID: "GE5TCOZQ",       // Your Stamp Id to be deleted...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfStamps = {
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

    async deletePageStamps () {
        const addResult = await pdfApi.deletePageStamps(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER);

        if (addResult.body.code == 200) {
            console.log("Pdf page stamps on page #" + configParams.PAGE_NUMBER + " deleted!");
            return true;
        }
        else
            console.error("Unexpected error : can't get pages!!!");
    },

    async deletePageStampById (stamp_id) {
        const addResult = await pdfApi.deleteStamp(configParams.PDF_DOCUMENT_NAME, stamp_id);

        if (addResult.body.code == 200) {
            console.log("Pdf stamps " + stamp_id + " deleted!");
            return true;
        }
        else
            console.error("Unexpected error : can't get pages!!!");
    },

}

async function main() {
    try {
        await pdfStamps.uploadDocument();
        await pdfStamps.deletePageStampById(configParams.STAMP_ID);
        await pdfStamps.deletePageStamps();
        await pdfStamps.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();