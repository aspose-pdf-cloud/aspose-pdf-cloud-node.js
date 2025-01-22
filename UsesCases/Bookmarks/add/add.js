// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Bookmarks with the required properties
// 5. Append new Bookmarks to the document using postBookmark() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const LOCAL_PATH = "C:\\Samples\\";
const PDF_DOCUMENT_NAME = "Sample-Document.pdf";

const STORAGE_PATH = "YOUR_REMOTE_PATH/";

const pdfApi = new PdfApi(credentials.id, credentials.key);

const storage = null;

const folder = "Documents";

const pdfFileData = fs.readFileSync(LOCAL_PATH + PDF_DOCUMENT_NAME);
await api.uploadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, pdfFileData, storage);

const bookmarkPath = "2";

const linkBookmark = {
    Href : "0",
    Rel : "self"
};
      
const colorBookmark = {
    A : 255,
    R : 0,
    G : 255,
    B : 0
};

const newBookmark = {
    Title               : "New Bookmark",
    Italic              : true,
    Bold                :  false,
    Links               :  [ linkBookmark ],
    Color               : colorBookmark,
    Action              : "GoTo",
    Level               : 1,
    Destination         : "",
    PageDisplay         : "Appended bookmark",
    PageDisplayBottom   : 0,
    PageDisplayLeft     : 100,
    PageDisplayRight    :  0,
    PageDisplayTop      : 700,
    PageDisplayZoom     : 2,
    PageNumber          : 1
  };
  
const newBookmarks = [ newBookmark ];

const addResponse = await postBookmark(STORAGE_PATH + PDF_DOCUMENT_NAME, bookmarkPath, newBookmarks, folder, storage, null);

if (addResponse.status == 200)
{
    const changedPdfData = pdfApi.downloadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, storage);

    const filePath = "YOUR_LOCAL_OUTPUT_FOLDER/ResultAddBookmarkFile.pdf";

    await fs.writeFile(filePath, changedPdfData.body);
    console.log("downloaded: " + filePath);
}
else
    throw new Error("Unexpected error : can't append new bookmark!!!");