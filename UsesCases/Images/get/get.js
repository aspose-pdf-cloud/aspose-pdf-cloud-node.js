// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the rtreiving image Id from Pdf document using getIimages function
// 5. Perform the extracting image from Pdf document using getImage() function and image ID value
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

const pdfFileData = fs.readFileSync(LOCAL_PATH + PDF_DOCUMENT_NAME);
await api.uploadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, pdfFileData, storage);

const folder = "Documents";

let resultImageId = await pdfApi.getImages(fileName, 1, storage, folder);
const imageID = resultImageId.body.images.list[0].id;

let resultImage = await pdfApi.getImage(fileName, imageID, storage, folder);

await Promise.all(
    resultImage.body.images.map(async (image, index) => {
        const filePath = "YOUR_LOCAL_OUTPUT_PATH/image_" + FILE_NAME + "_" + (index + 1) + ".jpg";
        fs.writeFileSync(filePath, image.links[0].href);
    })
);