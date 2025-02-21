// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new XmpMetadataProperty with Your key and null as value for delete XmpMetadataProperty
// 5. Delete XMpMetadataProperty in the document using postXmpMetadata() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { XmpMetadata } from "asposepdfcloud/src/models/xmpMetadata.js";
import { XmpMetadataProperty } from "asposepdfcloud/src/models/xmpMetadataProperty.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfMetadatas = {
    async uploadDocument() {
        const pdfFilePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(pdfFilePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },
    
    async downloadResult() {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async getMetadata () {
        const responseMetadata = await pdfApi.getXmpMetadataJson(configParams.PDF_DOCUMENT_NAME);

        if (responseMetadata.response.status == 200)
        {
            const props = responseMetadata.body.properties;
            props.forEach((prop) =>{
                console.log(prop.key);
            });
        }
    },

    async deleteMetadata () {
        const prop = new XmpMetadataProperty();
        prop.key = 'dc:creator';
        prop.value = null;        // null value means delete property...
        prop.namespaceUri = 'http://purl.org/dc/elements/1.1/';

        const metadata = new XmpMetadata();
        metadata.properties = [prop];
        
        const response = await pdfApi.postXmpMetadata(configParams.PDF_DOCUMENT_NAME, metadata);

        if (response.body.code == 200) {
            console.log("Dlete metadata '" + prop.key + "' successful!");
            return true;
        }
    },
}

async function main() {
    try {
        await pdfMetadatas.uploadDocument();
        await pdfMetadatas.getMetadata();
        await pdfMetadatas.deleteMetadata();
        await pdfMetadatas.getMetadata();
        await pdfMetadatas.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
