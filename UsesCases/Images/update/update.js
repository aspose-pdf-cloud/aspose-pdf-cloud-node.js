// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving image Id from Pdf document using getIimages() function
// 5. Perform the unpdating image in Pdf document using putReplaceImage() function, image ID value and new image file
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

const IMAGE_FILE_NAME = "YOUR_IMAGE_FOLDER_AND_PATH";

const pdfApi = new PdfApi(credentials.id, credentials.key);

const storage = null;

const pdfFileData = fs.readFileSync(LOCAL_PATH + PDF_DOCUMENT_NAME);
await api.uploadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, pdfFileData, storage);

const folder = "Documents";

let resultImageId = await pdfApi.getImages(fileName, 1, storage, folder);
const imageID = resultImageId.body.images.list[0].id;

let resultUpdate = await pdfApi.putReplaceImage(fileName, imageID, IMAGE_FILE_NAME, storage, folder, null);

if (resultAppend.body.status == 200)
{
    const dropPdfData = pdfApi.downloadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, storage);

    const filePath = "YOUR_LOCAL_OUTPUT_FOLDER/ResultDeleteImageFile.pdf";

    await fs.writeFile(filePath, dropPdfData.body);
    console.log("downloaded: " + filePath);
}
else
    console.log("Unable to insert image into the file!!!");