// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Bookmarks from the document using getBookmark() function
// 6. Perform some action after successful retrieving the Bookmark from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./../../settings/credentials.json"  with { type: "json" }; // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from "node:path";
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "PdfWithBookmarks.pdf",
    BOOKMARK_PATH: "/5",
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const pdfBookmarks = {
    async uploadDocument() {
        const pdfFilePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(pdfFilePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },

    async getAllBookmarks() {
        const resultBookmarks = await pdfApi.getDocumentBookmarks(configParams.PDF_DOCUMENT_NAME);
        const { code, bookmarks } = resultBookmarks.body;

        this.showBookmarks(bookmarks, "all");
        return bookmarks;
    },

    async showBookmarks(bookmarks, prefix) {
        if (Array.isArray(bookmarks.list) && bookmarks.list.length > 0) {
            for (const bookmark of bookmarks.list) {
                console.log(`${prefix} => level: '${bookmark.level}', title: '${bookmark.title}'`);
            }
        }
    },
};

async function main() {
    try {
        await pdfBookmarks.uploadDocument();
        await pdfBookmarks.getAllBookmarks();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
