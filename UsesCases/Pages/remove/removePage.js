// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Link Annotation from the document using deleteLinkAnnotation() function
// 6. Perform some action after successful removing the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./../../../settings/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

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

    async deletePage () {
        const resultPages = await pdfApi.deletePage(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER);

        if (resultPages.body.code == 200) {
            console.log("Page #" + configParams.PAGE_NUMBER + " - deleted!");
            return true;
        }
        else
        console.error("Unexpected error : can't get pages!!!");
    },

}

async function main() {
    try {
        await pdfPages.uploadDocument();
        await pdfPages.deletePage();
        await pdfPages.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
