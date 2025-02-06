// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Bookmark from the document using getBookmark() function
// 6. Perform some action after successful retrieving the Bookmark from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "../../../../Credentials/credentials.json" with { type: "json" };
import fs from "node:fs/promises";
import path from "node:path";
import { PdfApi } from "../../../src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    BOOKMARK_PATH: "/5",
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfBookmarks = {
    async uploadDocument() {
        const pdfFilePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(pdfFilePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },

    async getBookmarkByPath() {
        const resultBookmark = await pdfApi.getBookmark(configParams.PDF_DOCUMENT_NAME, configParams.BOOKMARK_PATH);
        const { code, bookmark } = resultBookmark.body;

        console.log(`Found bookmark title: ${bookmark.title}`);
        return bookmark;
    },

};

async function main() {
    try {
        await pdfBookmarks.uploadDocument();
        await pdfBookmarks.getBookmarkByPath();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();