// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Bookmarks from the document using getBookmark() function
// 6. Perform some action after successful retrieving the Bookmark from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",                        //"YOUR_LOCAL_PATH",

    PDF_DOCUMENT_NAME: "sample.pdf",                    //"YPUR_INPUT_PDF",

    BOOKMARK_PATH: "/1"
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfBookmarks = {
    uploadFiles: async function (fileName) {
        try
        {
            const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
            await pdfApi.uploadFile(fileName, pdfFileData);
        }
        catch (e) {
            console.log("Unexpected error : can't upload file - " + e.message);
            throw e;
        }
    },

    uploadDocument: async function () {
        await pdfBookmarks.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    getAllBookmarks: async function () {
        const resultBookmarks = await pdfApi.getDocumentBookmarks(configParams.PDF_DOCUMENT_NAME);

        if (resultBookmarks.body.code == 200 && resultBookmarks.body.bookmarks)
        {
            if (!Array.isArray(resultBookmarks.body.bookmarks.list) || resultBookmarks.body.bookmarks.list.length === 0) {
                throw new Error("Unexpected error : bookmarks list is null or empty!!!");
            }
            pdfBookmarks.showBookmarks(resultBookmarks.body.bookmarks, "in");
            return resultBookmarks.body.bookmarks;
        }
        else
            throw new Error("Unexpected error : can't get bookmarks list!!!");
    },

    getBookmarkByPath: async function (boomarkPath) {
        const resultBookmark = await pdfApi.getBookmark(configParams.PDF_DOCUMENT_NAME, boomarkPath);

        if (resultBookmark.body.code == 200 && resultBookmark.body.bookmark)
        {
            console.log("Found bookmark title: " + resultBookmark.body.bookmark.title);
            return resultBookmark.body.bookmark;
        }
        else
            throw new Error("Unexpected error : can't get bookmark!!!");
    },

    showBookmarks: function(bookmarks, prefix) {
        if (Array.isArray(bookmarks.list) && bookmarks.list.length > 0)
        {
            bookmarks.list.forEach(function(bookmark) {
                console.log(prefix +" => '" + bookmark.title + "'");
            });
        }
    },
}

export default pdfBookmarks;

await (async () => {
    await pdfBookmarks.uploadDocument();
    await pdfBookmarks.getAllBookmarks();
    await pdfBookmarks.getBookmarkByPath(configParams.BOOKMARK_PATH);
})().catch((error) => { console.log(error.message); });
