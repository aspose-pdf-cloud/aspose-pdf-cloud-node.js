// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving link annotattions from Pdf document using getPageLinkAnnotations() function
// 5. Check result and perform some actions with result.body object
// 6. Create a new Link Annotation with the required properties
// 7. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 8. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { TextHeader } from "asposepdfcloud/src/models/textHeader.js";
import { TextFooter } from "asposepdfcloud/src/models/textFooter.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    HEDER_VALUE: "New Heder Value",
    FOOTER_VALUE: "New Footer Value"
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfHeaderFooter = {
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

    adddTextHeader: async function () {
        const textHeader = new TextHeader();
        textHeader.background = true;
        textHeader.value = configParams.HEDER_VALUE;
        textHeader.horizontalAlignment = "Center";

        await pdfApi.postDocumentTextHeader(configParams.PDF_DOCUMENT_NAME, textHeader);
    },

    adddTextFooter: async function () {

        const textFooter = new TextFooter();
        textFooter.background = true;
        textFooter.value = configParams.FOOTER_VALUE;
        textFooter.horizontalAlignment = "Center";

        await pdfApi.postDocumentTextFooter(configParams.PDF_DOCUMENT_NAME, textFooter);
    },
}

export default pdfHeaderFooter;

// Demonstrating functionality
await (async () => {
    await pdfHeaderFooter.uploadDocument();
    await pdfHeaderFooter.adddTextHeader();
    await pdfHeaderFooter.adddTextFooter();
    await pdfHeaderFooter.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
