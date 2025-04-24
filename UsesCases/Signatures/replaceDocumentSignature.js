import credentials from "../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";
import {Signature} from "../../src/models/signature.js";
import {SignatureType} from "../../src/models/signatureType.js";
import {SignatureField} from "../../src/models/signatureField.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    LOCAL_SIGNATURE_PATH: "C:\\Samples\\Signatures\\3",
    SIGNATURE_PFX: "signature.pfx",
    SIGNATURE_FORM_FIELD: 'Signature_1',
    SIGNATURE_PASSWORD: 'Password',
    SIGNATURE_CONTACT: 'Contact',
    SIGNATURE_LOCATION: 'Location',
    SIGNATURE_AUTHORITY: 'Issuer',
    SIGNATURE_DATE: '04/19/2025 12:15:00.000 PM',
    SIGNATURE_RECT:  { lLx: 100, lLy: 100, uRx: 500, uRy: 500 }
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

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

    async replaceSignature () {
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

            const field = new SignatureField();
            field.pageIndex = 1;
            field.signature = signature;
            field.partialName = 'sign1';
            field.rect = configParams.SIGNATURE_RECT;

            const response = await pdfApi.putSignatureField(configParams.PDF_DOCUMENT_NAME, configParams.SIGNATURE_FORM_FIELD, field);

            if (response.body.code == 200)
                console.log("replaceSignature(): Signature '" + configParams.SIGNATURE_CONTACT + "' successfully replaced in the document.");
            else
                console.error("replaceSignature(): Failed to replace signature in the document. Response code: " + response.body.code);
        }
    },
}

async function main() {
    try {
        await pdfSignatures.uploadFile(configParams.LOCAL_SIGNATURE_PATH, configParams.SIGNATURE_PFX);
        await pdfSignatures.uploadDocument();
        await pdfSignatures.replaceSignature();
        await pdfSignatures.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();