// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Bookmarks from the document using getBookmark() function
// 6. Perform some action after successful retrieving the Bookmark from document
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

const bookmarkPath = "1";

const getResponse = await getBookmark(STORAGE_PATH + PDF_DOCUMENT_NAME, bookmarkPath, folder, storage, null);

if (getResponse.status == 200)
{
    var bookmark = getResponse.body.Bookmark;
	console.log("Bookmark Title " + bookmark.Title);
    console.log("Bookmark Level " + bookmark.Level);
}
else
    throw new Error("Unexpected error : can't delete bookmark!!!");