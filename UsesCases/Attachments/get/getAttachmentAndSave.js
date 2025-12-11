// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Get all document attachments by using getDocumentAttachments() function
// 5. Perform some action with attachments array (for example, show information)
// 6. Get attachment by path using getDocumentAttachmentByIndex() function
// 7. Perform some action after successful retrieving attachmwent file name using getDownloadDocumentAttachmentByIndex() function
// 8. Save response body to local file name
// All values of variables starting with "YOUR_****" should be replaced by real user values
import credentials from "./../../settings/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "PdfWithEmbeddedFiles.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    ATTACHMENT_PATH: "",    // filed will be setting by using attachments.list[0].links[0].href after call getDocumentAttachments() function
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const pdfAttachments = {
    async uploadDocument() {
        const pdfFilePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(pdfFilePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
        console.log("Uploaded file: " + configParams.PDF_DOCUMENT_NAME);
    },

    showAttachments(attachments, prefix) {
        if (Array.isArray(attachments) && attachments.length > 0)
        {
            attachments.forEach(function(attachment) {
                console.log(prefix +" => name: '" + attachment.name + "', path: '" + attachment.links[0].href + "'");
            });
        }
    },

    async getAttachments() {
        const response = await pdfApi.getDocumentAttachments(configParams.PDF_DOCUMENT_NAME);
        const { code, attachments } = response.body;

        if (code === 200 && attachments.list && attachments.list.length > 0) {
            this.showAttachments(attachments.list, "all");
            configParams.ATTACHMENT_PATH = attachments.list[0].links[0].href;
        }
        else
        {
            console.error("Document has no attachmnets!!!");
        }
    },
    async getAttachmentById() {
        const response = await pdfApi.getDocumentAttachmentByIndex(configParams.PDF_DOCUMENT_NAME, configParams.ATTACHMENT_PATH);
        const { code, attachment } = response.body;

        if (code == 200) {
            console.log("Attachment file: " + attachment.name);
            const attachmentFile = await pdfApi.getDownloadDocumentAttachmentByIndex(configParams.PDF_DOCUMENT_NAME, configParams.ATTACHMENT_PATH)
            const localPath = path.join(configParams.LOCAL_FOLDER, attachment.name);
            await fs.writeFile(localPath, attachmentFile.body);
            console.log("Downloaded: " + localPath);
        }
    } 
};

async function main() {
    try {
        await pdfAttachments.uploadDocument();
        await pdfAttachments.getAttachments();
        await pdfAttachments.getAttachmentById();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
