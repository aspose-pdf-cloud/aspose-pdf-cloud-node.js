import credentials from "../../../Credentials/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";

export { configParams, pdfApi, ParserHelper };

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    REMOTE_FOLDER: 'TempPdfCloud',
    
    XML_OUTPUT_FILE:  "output_sample.xml",
    FDF_OUTPUT_FILE: "output_sample.fdf",

    PAGE_NUMBER: 1,

};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const ParserHelper = {
    async uploadFile (fileName, localFolder, tempFolder) {
        const fileNamePath = path.join(localFolder, fileName);
        const fileData = await fs.readFile(fileNamePath);
        const storagePath = path.join(tempFolder, fileName);
        await pdfApi.uploadFile(storagePath, fileData)
            .then(() => console.log("File: '" + fileName +"' successfully uploaded."));
    },

    async uploadDocument(document, localFolder, tempFolder) {
        await this.uploadFile(document, localFolder, tempFolder)
    },

    async downloadResult(document, localFolder, tempFolder, prefix) {
        const fileName = path.join(tempFolder, document);
        const changedPdfData = await pdfApi.downloadFile(fileName);
        const filePath = path.join(localFolder, prefix + document);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },
};