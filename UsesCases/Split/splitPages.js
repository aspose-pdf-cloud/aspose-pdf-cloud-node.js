import credentials from "../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfSplitter = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
        console.log("Source document uploaded!");
        },
    
    async downloadPages (pageHref, index) {
            const changedPdfData = await pdfApi.downloadFile(pageHref);
            const filePath = path.join(configParams.LOCAL_FOLDER, 'Page_' + index +'_' +  pageHref);
            await fs.writeFile(filePath, changedPdfData.body);
            console.log("Downloaded: " + filePath);
        },

    async splitPages () {
        const resultPages = await pdfApi.postSplitDocument(configParams.PDF_DOCUMENT_NAME, "pdf");

        if (resultPages.body.code == 200 && resultPages.body.result.documents) {
            resultPages.body.result.documents.forEach(async (docPage, index) => {
                await this.downloadPages(docPage.href, index);
            })
        }
        else
            console.error("Unexpected error : can't get splitted documents!!!");
    },

    
}

async function main() {
    try {
        await pdfSplitter.uploadDocument();
        await pdfSplitter.splitPages();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();