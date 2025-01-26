// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving bookmarks from Pdf document using getDocumentBookmarks() function
// 5. Check result and perform some actions with result.body object
// 6. Create a new Bookmarks with the required properties
// 7. Append new Bookmarks to the document using postBookmark() function
// 8. After successful addition, perform some action - upload the modified document, for example.
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { Color } from "asposepdfcloud/src/models/color.js";
import { Link } from "asposepdfcloud/src/models/link.js";
import { Bookmark } from "asposepdfcloud/src/models/bookmark.js";
import { Bookmarks } from "asposepdfcloud/src/models/bookmarks.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\", 

    PDF_DOCUMENT_NAME: "sample.pdf", 

    DOCUMENT_BOOKMARK_HREF: "/samples/sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    NEW_BOOKMARK_TITLE: "• Підвищення продуктивності",

    NEW_BOOKMARK_PAGE_NUMBER: 2, // Your bookmark page number...
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
            pdfBookmarks.showBookmarks(resultBookmarks.body.bookmarks, "in");
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

    appendBookmark: async function (bookmarkPath) {
        
        const linkBookmark = new Link();
        linkBookmark.rel = "self";
      
        const colorBookmark = new Color();
        colorBookmark.a = 255;
        colorBookmark.r = 0;
        colorBookmark.g = 255;
        colorBookmark.b = 0;

        const newBookmark = new Bookmark();
        newBookmark.title = configParams.NEW_BOOKMARK_TITLE,
        newBookmark.italic = true,
        newBookmark.bold = false,
        newBookmark.links = [ linkBookmark ];
        newBookmark.color = colorBookmark;
        newBookmark.action = "GoTo";
        newBookmark.level = 1;
        newBookmark.destination = "";
        newBookmark.pageDisplay = "XYZ";
        newBookmark.pageDisplayBottom = null;
        newBookmark.pageDisplayLeft = 83;
        newBookmark.pageDisplayRight = null;
        newBookmark.pageDisplayTop = 751;
        newBookmark.pageDisplayZoom = 2;
        newBookmark.pageNumber = configParams.NEW_BOOKMARK_PAGE_NUMBER;
        
        const newBookmarks = new Bookmarks()
        newBookmarks.list = [ newBookmark ];

        var addResponse = await pdfApi.postBookmark(configParams.PDF_DOCUMENT_NAME, bookmarkPath, [ newBookmark ], null, null, null);

        if (addResponse.body.code == 200 && addResponse.body.bookmarks) {
            console.log("Appended bookmark: " + addResponse.body.bookmarks.list[addResponse.body.bookmarks.list.length - 1].links[0].href + " => " + bookmark.title);
            return addResponse.body.bookmarks.list[addResponse.body.bookmarks.list.length - 1];
        }
        else
            throw new Error("Unexpected error : can't append bookmarks list!!!");
    },

}

export default pdfBookmarks;

await (async () => {
    await pdfBookmarks.uploadDocument();
    await pdfBookmarks.getAllBookmarks();
    await pdfBookmarks.appendBookmark("");
    await pdfBookmarks.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
