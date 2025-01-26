// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Bookmarks from the document using deleteBookmark() function
// 6. Perform some action after successful removing the Bookmark from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    
    DROP_BOOKMARK_PATH: "/1"
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfBookmarks = {
    uploadFiles: async function (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    downloadFiles: async function (local_path, fileName) {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);

        const filePath = path.join(local_path, fileName);

        await fs.writeFile(filePath, changedPdfData.body);
        console.log("downloaded: " + filePath);
    },

    uploadDocument: async function () {
        await pdfBookmarks.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    getAllBookmarks: async function () {
        const resultBookmarks = await pdfApi.getDocumentBookmarks(configParams.PDF_DOCUMENT_NAME);

        if (resultBookmarks.body.code == 200 && resultBookmarks.body.bookmarks) {
            if (!Array.isArray(resultBookmarks.body.bookmarks.list) || resultBookmarks.body.bookmarks.list.length === 0) {
                throw new Error("Unexpected error : bookmarks list is null or empty!!!");
            }
            return resultBookmarks.body.bookmarks;
        }
        else
            throw new Error("Unexpected error : can't get bookmarks list!!!");
    },

    showBookmarks: function(bookmarks, prefix) {
        if (Array.isArray(bookmarks.list) && bookmarks.list.length > 0)
        {
            bookmarks.list.forEach(function(bookmark) {
                console.log(prefix +" => '" + bookmark.title + "'");
            });
        }
        else
            console.error("showBoormarks() error: array of bookmark is empty!")
    },

    deleteBookmark: async function(bookmarkPath){
        const dropResult = await pdfApi.deleteBookmark(configParams.PDF_DOCUMENT_NAME, bookmarkPath);
        
        if (dropResult.body.code == 200) {
            console.log("Bookmark '" + configParams.DROP_BOOKMARK_PATH + "' successfully deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get bookmarks list!!!");
    },
}

export default pdfBookmarks;

await (async () => {
    await pdfBookmarks.uploadDocument();
    await pdfBookmarks.deleteBookmark(configParams.DROP_BOOKMARK_PATH);
    await pdfBookmarks.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
