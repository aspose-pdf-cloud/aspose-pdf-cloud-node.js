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
    
    IMAGE_WIDTH: 24,

    IMAGE_HEIGHT: 24,
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfHederFooter = {
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
        await pdfHederFooter.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    adddImageHeader: async function () {
        const imageHeader = new ImageHeader();
        imageHeader.background = true;
        imageHeader.value = "TEST HEADER VALUE";
        imageHeader.horizontalAlignment = "Center";
        imageHeader.fileName = configParams.IMAGE_HEADER_FILE;
        imageHeader.width = configParams.IMAGE_WIDTH;
        imageHeader.height = configParams.IMAGE_HEIGHT;

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
        imageHeader.width = configParams.IMAGE_WIDTH;
        imageHeader.height = configParams.IMAGE_HEIGHT;

        const resultLinks = await pdfApi.postDocumentImageFooter(configParams.PDF_DOCUMENT_NAME, imageHeader);

        if (resultLinks.body.code == 200) {
            return resultLinks.body;
        }
        else
            throw new Error("Unexpected error : can't append Text Header!");
    },

}

export default pdfHederFooter;

await pdfHederFooter.uploadDocument()
    .then(async () => {
        await pdfHederFooter.uploadFiles(configParams.IMAGE_HEADER_FILE);
    })
    .then(async () => {
        await pdfHederFooter.uploadFiles(configParams.IMAGE_FOOTER_FILE);
    })
    .then(async () =>{
        await pdfHederFooter.adddImageHeader();
    })
    .then(async () =>{
        await pdfHederFooter.addImageFooter();
    })
    .then(async () =>{
        await pdfHederFooter.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
    })
    .catch((message) =>{
        console.log(message);
    });