// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Bookmarks from the document using deleteBookmark() function
// 6. Perform some action after successful removing the Bookmark from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",    
    DROP_BOOKMARK_PATH: "/1"
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfBookmarks = {
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

    async deleteBookmark(){
        const dropResult = await pdfApi.deleteBookmark(configParams.PDF_DOCUMENT_NAME, configParams.DROP_BOOKMARK_PATH);
        
        if (dropResult.body.code == 200) {
            console.log("Bookmark '" + configParams.DROP_BOOKMARK_PATH + "' successfully deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get bookmarks list!!!");
    },
};

async function main() {
    try
    {
        await pdfBookmarks.uploadDocument();
        await pdfBookmarks.deleteBookmark();
        await pdfBookmarks.downloadResult();
    }
    catch(error) {
        console.log(error.message);
    }
}

main();