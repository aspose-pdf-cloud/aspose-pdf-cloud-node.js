// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform some actions in Pdf document pages
// 5. Check result and perform some actions with result.body object
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

    getDocumetStamps: async function () {
        const resultStamps = await pdfApi.getDocumentStamps(configParams.PDF_DOCUMENT_NAME);

        if (resultStamps.body.code == 200 && resultStamps.body.stamps.list) {
            if (!Array.isArray(resultStamps.body.stamps.list) || resultStamps.body.stamps.list.length === 0) {
                throw new Error("Unexpected error : Stamps array is null or empty!!!");
            }
            pdfStamps.showStampInfo(resultStamps.body.stamps.list, "doc");
            return resultStamps.body.stamps.list;
        }
        else
            throw new Error("Unexpected error : can't get Stamps !");
    },

    getPageStamps: async function (pageNumber) {
        const resultStamps = await pdfApi.getPageStamps(configParams.PDF_DOCUMENT_NAME, pageNumber);

        if (resultStamps.body.code == 200 && resultStamps.body.stamps.list) {
            if (!Array.isArray(resultStamps.body.stamps.list) || resultStamps.body.stamps.list.length === 0) {
                throw new Error("Unexpected error : Stamps array is null or empty!!!");
            }
            pdfStamps.showStampInfo(resultStamps.body.stamps.list, "page");
            return resultStamps.body.stamps.list;
        }
        else
            throw new Error("Unexpected error : can't get Stamps !");
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

        const addResult = await (async () => {
            await pdfApi.postDocumentTextStamps(configParams.PDF_DOCUMENT_NAME, [ textStamp ])
            return await pdfApi.postDocumentImageStamps(configParams.PDF_DOCUMENT_NAME, [ imageStamp ]);
        })();

        if (addResult.body.code == 200) {
            console.log("Text and image stamps added!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get pages!!!");
    },

    showStampInfo: function(stamps, prefix) {
        if (Array.isArray(stamps) && stamps.length > 0)
        {
            stamps.forEach(function(stamp) {
                console.log(prefix +" => '" + stamp.id + "', '" + stamp.indexOnPage + "', '" + stamp.stampType + "', '" + stamp.text + "'");
            });
        }
        else
            console.error("showPages() error: array of pages is empty!")
    },
}

export default pdfStamps;

(async () => {
    await pdfStamps.uploadDocument();
    await pdfStamps.uploadFiles(configParams.IMAGE_STAMP_FILE);
    await pdfStamps.getDocumetStamps();
    await pdfStamps.addStamps();
    await pdfStamps.getPageStamps(configParams.PAGE_NUMBER);
    await pdfStamps.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });