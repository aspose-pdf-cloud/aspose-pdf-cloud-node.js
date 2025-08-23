// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the rtreiving image Id from Pdf document using getIimages function
// 5. Delete image from Pdf document using deleteImage function and image ID value
// 6. Check result and perform some actions with result.body object
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const LOCAL_PATH = "C:\\Samples\\";
const FILE_NAME = "Sample-Document";
const FILE_EXT = ".pdf";

const STORAGE_PATH = "YOUR_REMOTE_PATH/";
const PDF_DOCUMENT_NAME = FILE_NAME + FILE_EXT;

const pdfApi = new PdfApi(credentials.id, credentials.key);

const storage = null;

const folder = "Documents";

const pdfFileData = fs.readFileSync(LOCAL_PATH + PDF_DOCUMENT_NAME);
await api.uploadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, pdfFileData, storage);

let resultImageId = await pdfApi.getImages(fileName, 1, storage, folder);
const imageID = resultImageId.body.images.list[0].id;

let resultDelete = await pdfApi.deleteImage(STORAGE_PATH + PDF_DOCUMENT_NAME, imageID, storage, folder);

if (resultAppend.body.status == 200)
{
    const newPdfData = pdfApi.downloadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, storage);

    const filePath = "YOUR_LOCAL_OUTPUT_FOLDER/ResultDeleteImageFile.pdf";

    await fs.writeFile(filePath, newPdfData.body);
    console.log("downloaded: " + filePath);
}
else
    console.log("Unable to delete image from the file!!!");