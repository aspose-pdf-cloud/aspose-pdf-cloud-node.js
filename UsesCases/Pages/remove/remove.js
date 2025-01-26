// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Link Annotation from the document using deleteLinkAnnotation() function
// 6. Perform some action after successful removing the Link Annotation from document
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

    deletePage: async function (pageNumber) {
        const resultPages = await pdfApi.deletePage(configParams.PDF_DOCUMENT_NAME, pageNumber);

        if (resultPages.body.code == 200) {
            console.log("Page '" + pageNumber + "' deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

}

export default pdfPages;

(async () => {
    await pdfPages.uploadDocument();
    await pdfPages.deletePage(configParams.PAGE_NUMBER);
    await pdfPages.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
