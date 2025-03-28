import credentials from "../../../Credentials/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "../../src/api/api.js";
import { SplitRangePdfOptions } from "../../src/models/splitRangePdfOptions.js";
import { PageRange } from "../../src/models/pageRange.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
};

const range_1 = new PageRange();
range_1.from = 1;
range_1.to = 3;

const range_2 = new PageRange();
range_2.from = 4;
range_2.to = 7;

const splitRangesArray = new SplitRangePdfOptions();
splitRangesArray.pageRanges = [ range_1, range_2 ];

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

    async splitRanges () {
        const resultPages = await pdfApi.postSplitRangePdfDocument(configParams.PDF_DOCUMENT_NAME, splitRangesArray);

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
        await pdfSplitter.splitRanges();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();