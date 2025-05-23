import credentials from "../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";


const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample-signed.pdf",
    SIGNATURE_NAME: 'sign1',
}

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfSignatures = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
        console.log("File '" + configParams.PDF_DOCUMENT_NAME + "' successfully uploaded!");
    },

    async verifySignature () {
        if (pdfApi)
        {
            const response = await pdfApi.getVerifySignature(configParams.PDF_DOCUMENT_NAME, configParams.SIGNATURE_NAME);

            if (response.body.code == 200) {
                if (response.body.valid == true)
                    console.log("verifySignature(): Signature is VALID for the '" + configParams.PDF_DOCUMENT_NAME + "' document.");
                else
                console.log("verifySignature(): Signature is NOT VALID for the '" + configParams.PDF_DOCUMENT_NAME + "' document.");
            }
            else
                console.error("verifySignature(): Failed to extract signatures in the document. Response code: " + response.body.code);
        }
    },
}

async function main() {
    try {
        await pdfSignatures.uploadDocument();
        await pdfSignatures.verifySignature();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
