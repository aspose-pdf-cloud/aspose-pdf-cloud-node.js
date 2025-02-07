// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Bookmarks with the required properties
// 5. Append new Bookmarks to the document using postBookmark() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" }; // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { Color } from "asposepdfcloud/src/models/color.js";
import { Link } from "asposepdfcloud/src/models/link.js";
import { Bookmark } from "asposepdfcloud/src/models/bookmark.js";
import { Bookmarks } from "asposepdfcloud/src/models/bookmarks.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    NEW_BOOKMARK_TITLE: "• Productivity improvement",
    PARENT_BOOKMARK_FOR_APPEND: "",     //The parent bookmark path. Specify an empty string when adding a bookmark to the root.
    NEW_BOOKMARK_PAGE_NUMBER: 2,
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

    async appendBookmarkLink() {
        const bookmarkLink = new Link({ rel: "self" });
        const bookmarkColor = new Color({ a: 255, r: 0, g: 255, b: 0 });

        const newBookmark = new Bookmark();
        newBookmark.title = configParams.NEW_BOOKMARK_TITLE;
        newBookmark.italic = true;
        newBookmark.bold = false;
        newBookmark.links = [bookmarkLink];
        newBookmark.color = bookmarkColor;
        newBookmark.action = "GoTo";
        newBookmark.level = 1;
        newBookmark.pageDisplayLeft = 83;
        newBookmark.pageDisplayTop = 751;
        newBookmark.pageDisplayZoom = 2;
        newBookmark.pageNumber = configParams.NEW_BOOKMARK_PAGE_NUMBER;

        const response = await pdfApi.postBookmark(configParams.PDF_DOCUMENT_NAME, configParams.PARENT_BOOKMARK_FOR_APPEND, [newBookmark]);
        const { code, bookmarks } = response.body;

        if (code === 200 && bookmarks) {
            const addedBookmark = bookmarks.list[bookmarks.list.length - 1];
            console.log("Appended bookmark: " + addedBookmark.links[0].href + " => " + addedBookmark.title);
            return addedBookmark;
        }
    },
};

async function main() {
    try {
        await pdfBookmarks.uploadDocument();
        await pdfBookmarks.appendBookmarkLink();
        await pdfBookmarks.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
