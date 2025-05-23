import credentials from "../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";


const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample-signed.pdf",
}

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfSignatures = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
        console.log("File '" + configParams.PDF_DOCUMENT_NAME + "' successfully uploaded!");
    },

    showSignatureFieldsArray(fields)
    {
        if (fields.list.length > 0)
            fields.list.forEach(function(item) {
                console.log("Signature => value: '" + item.signature.contact + "'");
            });
        else
            console.log("Signature fileds is empty!");
    },

    async getSignatureFields () {
        if (pdfApi)
        {
            const response = await pdfApi.getDocumentSignatureFields(configParams.PDF_DOCUMENT_NAME);

            if (response.body.code == 200 && response.body.fields) {
                console.log("getSignatureFields(): Signature fields successfully extracted in to the '" + configParams.PDF_DOCUMENT_NAME + "' documen:")
                this.showSignatureFieldsArray(response.body.fields);
            }
            else
                console.error("getSignatures(): Failed to extract signatures in the document. Response code: " + response.body.code);
        }
    },
}

async function main() {
    try {
        await pdfSignatures.uploadDocument();
        await pdfSignatures.getSignatureFields();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();