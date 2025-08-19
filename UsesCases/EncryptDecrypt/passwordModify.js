import credentials from "../../../Credentials/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample_encrypted.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    DOCUMENT_PASSWORD: "Owner-Password",
    NEW_USER_PASSWORD: "NEW-User-Password",
    NEW_OWNER_PASSWORD: "NEW-Owner-Password",
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfPasswordModify = {
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

    async change_passwords() {
        const password_encoded = btoa(configParams.DOCUMENT_PASSWORD);
        const new_user_password_encoded = btoa(configParams.NEW_USER_PASSWORD);
        const new_owner_password_encoded = btoa(configParams.NEW_OWNER_PASSWORD);

        const response = await pdfApi.postChangePasswordDocumentInStorage(configParams.PDF_DOCUMENT_NAME, password_encoded, new_user_password_encoded, new_owner_password_encoded);

        if (response.body.code == 200)
            console.log("change_passwords(): Password in document #'" + configParams.PDF_DOCUMENT_NAME + "' successfully changed.")
        else
            throw new Error("change_passwords(): Failed to change password in document #'" + configParams.PDF_DOCUMENT_NAME + "'. Response code: {" + response.code + "}")
    },
    
}

async function main() {
    try {
        await pdfPasswordModify.uploadDocument();
        await pdfPasswordModify.change_passwords();
        await pdfPasswordModify.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}


main();
