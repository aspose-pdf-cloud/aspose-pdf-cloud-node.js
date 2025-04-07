import credentials from "../../../Credentials/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample_encrypted.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    DOCUMENT_PASSWORD: "Owner-Password"
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfEncoder = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData)
            .then(() => console.log("File: '" + configParams.PDF_DOCUMENT_NAME +"' successfully uploaded."));
    },

    async downloadResult() {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async decrypt_document() {
        const password_encoded = btoa(configParams.DOCUMENT_PASSWORD)

        const response = await pdfApi.postDecryptDocumentInStorage(configParams.PDF_DOCUMENT_NAME, password_encoded);

        if (response.body.code == 200)
            console.log("decrypt_document(): Document #'" + configParams.PDF_DOCUMENT_NAME + "' successfully decrypted.")
        else
            throw new Error("decrypt_document(): Failed to decrypt document #'" + configParams.PDF_DOCUMENT_NAME + "'. Response code: {" + response.code + "}")
    },
    
}

async function main() {
    try {
        await pdfEncoder.uploadDocument();
        await pdfEncoder.decrypt_document();
        await pdfEncoder.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();