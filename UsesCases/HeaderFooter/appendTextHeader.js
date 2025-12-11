// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving link annotattions from Pdf document using getPageLinkAnnotations() function
// 5. Check result and perform some actions with result.body object
// 6. Create a new Link Annotation with the required properties
// 7. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 8. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./../../settings/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { TextHeader } from "asposepdfcloud/src/models/textHeader.js";
import { HorizontalAlignment } from "asposepdfcloud/src/models/horizontalAlignment.js";

const configParams = {
    LOCAL_FOLDER: "testData/",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    HEADER_VALUE: "New Heder Value",
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const pdfHederFooter = {
    async uploadFile (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_FOLDER + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    async downloadResult() {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async uploadDocument () {
        await pdfHederFooter.uploadFile(configParams.PDF_DOCUMENT_NAME);
    },

    async adddTextHeader () {
        const textHeader = new TextHeader();
        textHeader.background = true;
        textHeader.value = configParams.HEADER_VALUE;
        textHeader.horizontalAlignment = HorizontalAlignment.Center;

        await pdfApi.postDocumentTextHeader(configParams.PDF_DOCUMENT_NAME, textHeader);
    },
}

async function main() {
    try {
        await pdfHederFooter.uploadDocument();
        await pdfHederFooter.adddTextHeader();
        await pdfHederFooter.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
