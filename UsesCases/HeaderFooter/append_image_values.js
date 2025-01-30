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
import { ImageHeader } from "asposepdfcloud/src/models/imageHeader.js";
import { ImageFooter } from "asposepdfcloud/src/models/imageFooter.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    IMAGE_HEADER_FILE: "sample.png",
    IMAGE_FOOTER_FILE: "sample.png",
    PAGE_NUMBER: 2,     // Your document page number...
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

    adddImageHeader: async function () {
        const imageHeader = new ImageHeader();
        imageHeader.background = true;
        imageHeader.value = "TEST HEADER VALUE";
        imageHeader.horizontalAlignment = "Center";
        imageHeader.fileName = configParams.IMAGE_HEADER_FILE;
        imageHeader.width = 24;
        imageHeader.height = 24;

        const resultLinks = await pdfApi.postDocumentImageHeader(configParams.PDF_DOCUMENT_NAME, imageHeader);

        if (resultLinks.body.code == 200) {
            return resultLinks.body;
        }
        else
            throw new Error("Unexpected error : can't append Text Header!");
    },

    addImageFooter: async function () {
        const imageHeader = new ImageHeader();
        imageHeader.background = true;
        imageHeader.value = "TEST FOOTER VALUE";
        imageHeader.horizontalAlignment = "Center";
        imageHeader.fileName = configParams.IMAGE_HEADER_FILE;
        imageHeader.width = 24;
        imageHeader.height = 24;

        const resultLinks = await pdfApi.postDocumentImageFooter(configParams.PDF_DOCUMENT_NAME, imageHeader);

        if (resultLinks.body.code == 200) {
            return resultLinks.body;
        }
        else
            throw new Error("Unexpected error : can't append Text Header!");
    },
}

export default pdfHeaderFooter;

// Demonstrating functionality
await (async () => {
    await pdfHeaderFooter.uploadDocument();
    await pdfHeaderFooter.uploadFiles(configParams.IMAGE_HEADER_FILE);
    await pdfHeaderFooter.uploadFiles(configParams.IMAGE_FOOTER_FILE);
    await pdfHeaderFooter.adddImageHeader();
    await pdfHeaderFooter.addImageFooter();
    await pdfHeaderFooter.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
