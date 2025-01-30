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
    PDF_STAMP_FILE: "pdf_stamp.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,             // Your document page number...
    STAMP_ID: "GE5TCOZQ",       // Your Stamp Id to be deleted...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfStamps = {
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

    deletePageStamps: async function () {

        const addResult = await pdfApi.deletePageStamps(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER);

        if (addResult.body.code == 200) {
            console.log("Pdf page stamps deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    deletePageStampById: async function (stamp_id) {
        const addResult = await pdfApi.deleteStamp(configParams.PDF_DOCUMENT_NAME, stamp_id);

        if (addResult.body.code == 200) {
            console.log("Pdf stamps " + stamp_id + " deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },
}

export default pdfStamps;

// Demonstrating functionality
(async () => {
    await pdfStamps.uploadDocument();
    await pdfStamps.uploadFiles(configParams.PDF_STAMP_FILE);
    await pdfStamps.deletePageStampById(configParams.STAMP_ID);
    await pdfStamps.deletePageStamps();
    await pdfStamps.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
