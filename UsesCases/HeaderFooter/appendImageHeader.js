// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving link annotattions from Pdf document using getPageLinkAnnotations() function
// 5. Check result and perform some actions with result.body object
// 6. Create a new Link Annotation with the required properties
// 7. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 8. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { ImageHeader } from "asposepdfcloud/src/models/imageHeader.js";
import { HorizontalAlignment } from "asposepdfcloud/src/models/horizontalAlignment.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    IMAGE_HEADER_FILE: "sample.png",
    PAGE_NUMBER: 2,     // Your document page number...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfHederFooter = {
    async uploadFile (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_FOLDER + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    async uploadDocument () {
        await pdfHederFooter.uploadFile(configParams.PDF_DOCUMENT_NAME);
    },

    async downloadResult() {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async adddImageHeader () {
        const imageHeader = new ImageHeader();
        imageHeader.background = true;
        imageHeader.value = "TEST HEADER VALUE";
        imageHeader.horizontalAlignment = HorizontalAlignment.Center;
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
}

async function main() {
    try {
        await pdfHederFooter.uploadDocument();
        await pdfHederFooter.uploadFile(configParams.IMAGE_HEADER_FILE);
        await pdfHederFooter.adddImageHeader();
        await pdfHederFooter.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
