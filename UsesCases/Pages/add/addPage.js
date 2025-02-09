// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf"
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfPages = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
        },
    
    async downloadResult () {
            const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
            const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
            await fs.writeFile(filePath, changedPdfData.body);
            console.log("Downloaded: " + filePath);
        },

    async addPage () {
        const resultPages = await pdfApi.putAddNewPage(configParams.PDF_DOCUMENT_NAME);

        if (resultPages.body.code == 200 && resultPages.body.pages) {
            this.showPages( [ resultPages.body.pages.list[resultPages.body.pages.list.length - 1] ], "new page");
            return resultPages.body.pages.list[resultPages.body.pages.list.length - 1];
        }
        else
            console.error("Unexpected error : can't get pages!!!");
    },

    showPages (pages, prefix) {
        if (Array.isArray(pages) && pages.length > 0)
        {
            pages.forEach(function(page) {
                console.log(prefix +" => id: '" + page.id + "', lLx: '" + page.rectangle.lLX + "', lLY: '" + page.rectangle.lLY + "', uRX: '" + page.rectangle.uRX + "', uRY: '" + page.rectangle.uRY + "'");
            });
        }
        else
            console.error("showPages() error: array of pages is empty!")
    },
}

async function main() {
    try {
        await pdfPages.uploadDocument();
        await pdfPages.addPage();
        await pdfPages.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
