// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Link Annotation from the document using getPageLinkAnnotation() function
// 6. Perform some action after successful retrieving the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "../../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../../src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
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

    async getPagesInfo () {
        const resultPages = await pdfApi.getPages(configParams.PDF_DOCUMENT_NAME);

        if (resultPages.body.code == 200 && resultPages.body.pages.list) {
            this.showPages(resultPages.body.pages.list, "pages");
            return resultPages.body.pages.list;
        }
        else
            console.error("Unexpected error : can't get pages!!!");
    },

    async getPageInfo (pageNumber) {
        const resultPages = await pdfApi.getPage(configParams.PDF_DOCUMENT_NAME, pageNumber);

        if (resultPages.body.code == 200 && resultPages.body.page) {
            this.showPages( [ resultPages.body.page ], "page");
            return resultPages.body.page;
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
        await pdfPages.getPagesInfo();
        await pdfPages.getPageInfo(configParams.PAGE_NUMBER);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();