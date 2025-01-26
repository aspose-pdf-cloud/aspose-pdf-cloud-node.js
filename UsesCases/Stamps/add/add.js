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
import { Stamp } from "asposepdfcloud/src/models/stamp.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    IMAGE_STAMP_FILE: "sample.png",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    PAGE_NUMBER: 2,     // Your document page number...

    IMAGE_STAMP_LLY: 800,

    IMAGE_STAMP_WIDTH: 24,

    IMAGE_STAMP_HEIGHT: 24,
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
        await pdfStamps.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    addStamps: async function () {

        const textStamp = new Stamp();
        textStamp.type = "Text";
        textStamp.background = true;
        textStamp.horizontalAlignment = "Center";
        textStamp.textAlignment = "Center";
        textStamp.value = "NEW TEXT STAMP";

        const imageStamp = new Stamp();
        imageStamp.type = "Image";
        imageStamp.background = true;
        imageStamp.horizontalAlignment = "Center";
        imageStamp.textAlignment = "Center";
        imageStamp.value = "NEW IMAGE STAMP";
        imageStamp.fileName = configParams.IMAGE_STAMP_FILE;
        imageStamp.yIndent = configParams.IMAGE_STAMP_LLY;
        imageStamp.width = configParams.IMAGE_STAMP_WIDTH;
        imageStamp.height = configParams.IMAGE_STAMP_HEIGHT;

        const addResult = await pdfApi.postDocumentTextStamps(configParams.PDF_DOCUMENT_NAME, [ textStamp ])
            .then(async () => {
                return await pdfApi.postDocumentImageStamps(configParams.PDF_DOCUMENT_NAME, [ imageStamp ]);
            });

        if (addResult.body.code == 200) {
            console.log("Text and image stamps added!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    addPageTextStamp: async function (pageNumber) {
        const textStamp = new Stamp();
        textStamp.type = "Text";
        textStamp.background = true;
        textStamp.horizontalAlignment = "Left";
        textStamp.textAlignment = "Center";
        textStamp.value = "ANOTHER TEXT STAMP";

        const addResult = await pdfApi.putPageAddStamp(configParams.PDF_DOCUMENT_NAME, pageNumber, textStamp);

        if (addResult.body.code == 200) {
            console.log("Another text stamp added on page #" + configParams.PAGE_NUMBER);
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
            
    },

    addPageImageStamp: async function (pageNumber) {
        const imageStamp = new Stamp();
        imageStamp.type = "Image";
        imageStamp.background = true;
        imageStamp.horizontalAlignment = "Left";
        imageStamp.textAlignment = "Center";
        imageStamp.value = "ANOTHER IMAGE STAMP";
        imageStamp.fileName = configParams.IMAGE_STAMP_FILE;
        imageStamp.yIndent = configParams.IMAGE_STAMP_LLY;
        imageStamp.width = configParams.IMAGE_STAMP_WIDTH;
        imageStamp.height = configParams.IMAGE_STAMP_HEIGHT;

        const addResult = await pdfApi.putPageAddStamp(configParams.PDF_DOCUMENT_NAME, pageNumber, imageStamp);
        
        if (addResult.body.code == 200) {
            console.log("Another image stamp added on page #" + configParams.PAGE_NUMBER);
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },
}

export default pdfStamps;

(async () => {
    await pdfStamps.uploadDocument();
    await pdfStamps.uploadFiles(configParams.IMAGE_STAMP_FILE);
    await pdfStamps.addStamps();
    await pdfStamps.addPageTextStamp(configParams.PAGE_NUMBER);
    await pdfStamps.addPageImageStamp(configParams.PAGE_NUMBER);
    await pdfStamps.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });