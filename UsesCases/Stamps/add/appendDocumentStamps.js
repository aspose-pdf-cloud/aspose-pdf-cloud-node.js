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
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    IMAGE_STAMP_FILE: "sample.png",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
    TEXT_STAMP_VALUE: "NEW TEXT STAMP",
    IMAGE_TEXT_STAMP_VALUE: "NEW IMAGE STAMP",
    IMAGE_STAMP_LLY: 800,
    IMAGE_STAMP_WIDTH: 24,
    IMAGE_STAMP_HEIGHT: 24,
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfStamps = {
    async uploadFile (fileName) {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, fileName);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },
                    
    async downloadResult () {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async uploadDocument () {
        await this.uploadFile(configParams.PDF_DOCUMENT_NAME);
    },

    async addStamps () {
        const textStamp = new Stamp();
        textStamp.type = StampType.Text;
        textStamp.background = true;
        textStamp.horizontalAlignment = HorizontalAlignment.Center;
        textStamp.textAlignment = HorizontalAlignment.Center;
        textStamp.value = configParams.TEXT_STAMP_VALUE;

        const imageStamp = new Stamp();
            imageStamp.type = StampType.Image;
            imageStamp.background = true;
            imageStamp.horizontalAlignment = HorizontalAlignment.Center;
            imageStamp.textAlignment = HorizontalAlignment.Center;
            imageStamp.value = configParams.IMAGE_TEXT_STAMP_VALUE;
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
            console.error("Unexpected error : can't get pages!!!");
    },
}

async function main() {
    try {
        await pdfStamps.uploadDocument();
        await pdfStamps.uploadFile(configParams.IMAGE_STAMP_FILE);
        await pdfStamps.addStamps();
        await pdfStamps.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
