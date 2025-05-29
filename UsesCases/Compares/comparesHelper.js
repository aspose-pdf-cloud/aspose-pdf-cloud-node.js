import credentials from "../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";

export const pdfApi = new PdfApi(credentials.id, credentials.key);

export const pdfComparesHelper = {
    async uploadFile (fileName, localFolder, remoteFolder) {
        const localFilePath = path.join(localFolder, fileName);
        const fileData = await fs.readFile(localFilePath);
        const remoteFilePath = path.join(remoteFolder, fileName);
        await pdfApi.uploadFile(remoteFilePath, fileData);
        console.log("Uploaded: " + fileName);
    },
                            
    async downloadResult (fileName, localFolder, remoteFolder) {
        const remoteFilePath = path.join(remoteFolder, fileName);
        const changedPdfData = await pdfApi.downloadFile(remoteFilePath);
        const localFilePath = path.join(localFolder, fileName);
        await fs.writeFile(localFilePath, changedPdfData.body);
        console.log("Downloaded: " + localFilePath);
    },

};
