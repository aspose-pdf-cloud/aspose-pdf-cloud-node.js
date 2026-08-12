// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving image Id from Pdf document using getIimages() function
// 5. Perform the reading image from Pdf document using getImage() function and image ID value
// 6. Check result and perform some actions with result.body object
// 7. Perform extrating image in Png format from Pdf document into local folder using putImageExtractAsPng() function and image ID value
// 8. Check result and perform some actions with result.body object
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const LOCAL_PATH = "C:\\Samples\\";
const FILE_NAME = "Sample-Document";
const FILE_EXT = ".pdf";

const PDF_DOCUMENT_NAME = FILE_NAME + FILE_EXT;

const pdfApi = new PdfApi(credentials.id, credentials.key);

const storage = null;

const width = 512;

const heigth = 512;

const folder = "Documents";

const destFolder = "Images";

const pdfFileData = fs.readFileSync(LOCAL_PATH + PDF_DOCUMENT_NAME);
await api.uploadFile(PDF_DOCUMENT_NAME, pdfFileData, storage);

const  resultImageId = await pdfApi.getImages(PDF_DOCUMENT_NAME, 1, storage, folder);

const imageID = resultImageId.body.images.list[0].id;

const extractResult = await pdfApi.putImageExtractAsPng(PDF_DOCUMENT_NAME, imageID, width, heigth, storage, folder, destFolder);

console.log(extractResult.body.status);