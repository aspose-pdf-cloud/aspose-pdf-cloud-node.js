// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Attachment with the required properties
// 5. Append new Attachment to the document using postAddDocumentAttachment() function
// 6. Perform some action after successful addition attachment
// 7. Download result file after appending Attachment
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { AttachmentInfo } from "asposepdfcloud/src/models/attachmentInfo.js"; 

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    NEW_ATTACHMENT_FILE: "sample_video.mp4",
    NEW_ATTACHMENT_MIME: "video/mp4",
    NEW_ATTACHMENT_DECRIPTION: 'This is a sample attachment',
    PAGE_NUMBER: 2,
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfAttachments = {
    async uploadFile (fileName) {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, fileName);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },
                        
    async downloadResult () {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },
    
    async uploadDocument () {
        await this.uploadFile(configParams.PDF_DOCUMENT_NAME);
    },

    async appendAttachment() {

        const newAttachment = new AttachmentInfo();
        newAttachment.path = configParams.NEW_ATTACHMENT_FILE;
        newAttachment.description = configParams.NEW_ATTACHMENT_DECRIPTION;
        newAttachment.name = configParams.NEW_ATTACHMENT_FILE;
        
        const response = await pdfApi.postAddDocumentAttachment(configParams.PDF_DOCUMENT_NAME, newAttachment);
        const { code } = response.body;

        if (code === 200) {
            console.log("Appended attachment successfulll");
        }
    },
};

async function main() {
    try {
        await pdfAttachments.uploadDocument();
        await pdfAttachments.uploadFile(configParams.NEW_ATTACHMENT_FILE);
        await pdfAttachments.appendAttachment();
        await pdfAttachments.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
