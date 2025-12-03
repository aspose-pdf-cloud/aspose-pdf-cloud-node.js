import credentials from "./../../settings/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud/src/api/api.js";
import { OptimizeOptions } from "asposepdfcloud/src/models/optimizeOptions.js";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "sample.pdf",
    TEMP_FOLDER : 'TempPdfCloud',
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const PdfCompress = {
    async uploadDocument (fileName, localFolder) {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const fileData = await fs.readFile(fileNamePath);
        const storagePath = path.join(configParams.TEMP_FOLDER, configParams.PDF_DOCUMENT_NAME);
        await pdfApi.uploadFile(storagePath, fileData)
            .then(() => console.log("File: '" + configParams.PDF_DOCUMENT_NAME +"' successfully uploaded."));
    },

    async downloadResult() {
        const fileName = path.join( configParams.TEMP_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const changedPdfData = await pdfApi.downloadFile(fileName);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async compressPdfDocument() {
        if ( pdfApi ) {

            const optimizeOptions = new OptimizeOptions();
            optimizeOptions.allowReusePageContent = true;
            optimizeOptions.compressImages = true;
            optimizeOptions.imageQuality = 100;
            optimizeOptions.linkDuplcateStreams = true;
            optimizeOptions.removeUnusedObjects = true;
            optimizeOptions.removeUnusedStreams = true;            
            optimizeOptions.unembedFonts = true;
  
            const response = await pdfApi.postOptimizeDocument(configParams.PDF_DOCUMENT_NAME, optimizeOptions, null, configParams.TEMP_FOLDER);
            if (response.body.code != 200)
                console.error("compressPdfDocument(): Failed to compress the PDF document!");
            else
                console.log("compressPdfDocument(): Successfully copressed the PDF document '" + configParams.PDF_DOCUMENT_NAME + "' !");
        }
    },
};

async function main() {
    try {
        await PdfCompress.uploadDocument();
        await PdfCompress.compressPdfDocument();
        await PdfCompress.downloadResult();

    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();