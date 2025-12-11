import credentials from "./../../settings/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud/src/api/api.js";
import {Signature} from "asposepdfcloud/src/models/signature.js";
import {SignatureType} from "asposepdfcloud/src/models/signatureType.js";
import {SignatureField} from "asposepdfcloud/src/models/signatureField.js";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    LOCAL_SIGNATURE_PATH: "testData/",
    SIGNATURE_PFX: "test1234.pfx",
    SIGNATURE_FORM_FIELD: 'Signature1',
    SIGNATURE_PASSWORD: 'test1234',
    SIGNATURE_CONTACT: 'Contact',
    SIGNATURE_LOCATION: 'Location',
    SIGNATURE_AUTHORITY: 'Sergey Smal',
    SIGNATURE_DATE: '04/19/2025 12:15:00.000 PM',
    SIGNATURE_RECT:  { lLX: 100, lLY: 100, uRX: 0, uRY: 0 }
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const pdfSignatures = {
    async uploadFile (folder, fileName) {
        const fileNamePath = path.join(folder, fileName);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(fileName, pdfFileData);
        console.log("File '" + fileName + "' successfully uploaded!");
    },

    async uploadDocument () {
        await this.uploadFile(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
    },
                    
    async downloadResult () {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async addSignature () {
        if (pdfApi)
        {  
            
            const signature = new Signature();
            signature.authority = configParams.SIGNATURE_AUTHORITY;
            signature.contact = configParams.SIGNATURE_CONTACT;
            signature.date = configParams.SIGNATURE_DATE;
            signature.formFieldName = configParams.SIGNATURE_FORM_FIELD;
            signature.location = configParams.SIGNATURE_LOCATION;
            signature.password = configParams.SIGNATURE_PASSWORD;
            signature.rectangle = configParams.SIGNATURE_RECT;
            signature.signaturePath = configParams.SIGNATURE_PFX;
            signature.signatureType = SignatureType.PKCS7;
            signature.visible = true;
            signature.showProperties = true;

            const field = new SignatureField();
            field.pageIndex = 1;
            field.signature = signature;
            field.partialName = 'sign1';
            field.rect = configParams.SIGNATURE_RECT;

            const response = await pdfApi.postSignatureField(configParams.PDF_DOCUMENT_NAME, field);

            if (response.body.code == 200)
                console.log("addSignature(): Signature '" + configParams.SIGNATURE_CONTACT + "' successfully added to the document.");
            else
                console.error("addSignature(): Failed to add signature to the document. Response code: " + response.body.code);
        }
    },
}

async function main() {
    try {
        await pdfSignatures.uploadFile(configParams.LOCAL_SIGNATURE_PATH, configParams.SIGNATURE_PFX);
        await pdfSignatures.uploadDocument();
        await pdfSignatures.addSignature();
        await pdfSignatures.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();