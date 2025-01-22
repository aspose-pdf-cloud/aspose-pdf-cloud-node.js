// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Link Annotation from the document using deleteLinkAnnotation() function
// 6. Perform some action after successful removing the Link Annotation from document
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

const linkId = "YOUR_LINK_ANNOTATION_ID";

const dropResponse = await deleteLinkAnnotation(STORAGE_PATH + PDF_DOCUMENT_NAME, linkId, storage, folder);

if (dropResponse.status == 200)
{
    const changedPdfData = pdfApi.downloadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, storage);

    const filePath = "YOUR_LOCAL_OUTPUT_FOLDER/ResultDropBookmarkFile.pdf";

    await fs.writeFile(filePath, changedPdfData.body);
    console.log("downloaded: " + filePath);
}
else
    throw new Error("Unexpected error : can't delete bookmark!!!");