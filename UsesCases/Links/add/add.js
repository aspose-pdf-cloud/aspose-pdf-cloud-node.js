// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
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

const pageNumber = "1";

const linkColor = {
    a : 255,
    r : 0,
    g : 255,
    b : 0
};

const linkRectangle = {
    llx: 100,
    lly: 100,
    urx: 200,
    ury: 150
};

const linkItem = {
    href: "https://reference.aspose.cloud/pdf/#/",
    rel: "",
    type: "text/html",
    title: "Aspose.PDF Cloud API Reference"
};

const newLink = 
    [
        {
          links: [ linkItem ],
          actionType: "GoToURIAction",
          action: "https://reference.aspose.cloud/pdf/#/",
          highlighting: "Invert",
          color: linkColor,
          rect: linkRectangle
        }
    ];

const addResponse = await postPageLinkAnnotations(STORAGE_PATH + PDF_DOCUMENT_NAME, pageNumber, newLink, storage, folder);

if (addResponse.status == 200)
{
    const changedPdfData = pdfApi.downloadFile(STORAGE_PATH + PDF_DOCUMENT_NAME, storage);

    const filePath = "YOUR_LOCAL_OUTPUT_FOLDER/ResultChangedFile.pdf";

    await fs.writeFile(filePath, changedPdfData.body);
    console.log("downloaded: " + filePath);
}
else
    throw new Error("Unexpected error : can't append new link annotation!!!");
