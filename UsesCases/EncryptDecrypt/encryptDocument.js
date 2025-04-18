import credentials from "../../../Credentials/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";
import { CryptoAlgorithm } from "../../src/models/cryptoAlgorithm.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    ENCRYPT_ALGORITHM: CryptoAlgorithm.AESx256,
    USER_PASSWORD: "User-Password",
    OWNER_PASSWORD: "Owner-Password",
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

    async encrypt_document() {
        const user_password_encoded = btoa(configParams.USER_PASSWORD)

        const owner_password_encoded = btoa(configParams.OWNER_PASSWORD)

        const response = await pdfApi.postEncryptDocumentInStorage(configParams.PDF_DOCUMENT_NAME, user_password_encoded, owner_password_encoded, configParams.ENCRYPT_ALGORITHM);
        
        if (response.body.code == 200)
            console.log("encrypt_document(): Document #'" + configParams.PDF_DOCUMENT_NAME + "' successfully encrypted.")
        else
            throw new Error("encrypt_document(): Failed to encrypt document #'" + configParams.PDF_DOCUMENT_NAME + "'. Response code: {" + response.code + "}")
    },
    
}

async function main() {
    try {
        await pdfEncoder.uploadDocument();
        await pdfEncoder.encrypt_document();
        await pdfEncoder.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();