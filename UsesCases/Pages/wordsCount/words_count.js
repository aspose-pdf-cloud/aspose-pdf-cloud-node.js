// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
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

    async getWordsCount () {
        const resultPages = await pdfApi.getWordsPerPage(configParams.PDF_DOCUMENT_NAME);

        if (resultPages.body.code == 200) {
            if (resultPages.body.code == 200 && resultPages.body.wordsPerPage) {
                this.showWordsCount(resultPages.body.wordsPerPage.list);
                return resultPages.body.wordsPerPage.list;
            }
            else
                console.error("Unexpected error : can't get pages!!!");
        }
        else
            console.error("Unexpected error : can't move page!!!");
    },

    showWordsCount: function(wordsCountArray) {
        if (Array.isArray(wordsCountArray) && wordsCountArray.length > 0)
        {
            wordsCountArray.forEach(function(item) {
                console.log(item.pageNumber +" => '" + "', words = '" + item.count);
            });
        }
        else
            console.error("showPages() error: array of pages is empty!")
    },

}

export default pdfPages;

(async () => {
    await pdfPages.uploadDocument();
    await pdfPages.getWordsCount();
})().catch((error) => { console.log(error.message); });