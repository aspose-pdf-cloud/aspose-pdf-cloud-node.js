/**************************************************************************************************
    1. Load your Application Secret and Key from the JSON file or set credentials in another way
    2. Create an object to connect to the Pdf.Cloud API
    3. Upload your document file using UploadFile() function of the Storage API object
    4. Upload your document file using PutCreate() function of the Storage API object
    5. To extract attachments from a PDF document, using getDocumentAttachments() function
    6. Check result and perform some actions with result.body object
        in format (Attachments)[https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/Attachments.md]
    
    All values of variables starting with "YOUR_****" should be replaced by real user values
****************************************************************************************************/
import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const LOCAL_PATH = "C:\\Samples\\";
const FILE_NAME_SHORT = "Sample-Document";
const FILE_NAME = FILE_NAME_SHORT + ".pdf";

const pdfApi = new PdfApi(credentials.id, credentials.key);

async function ProcessPdfAttachments(attachments)
{
    if (attachments != null && attachments != undefined)
    {
        await Promise.all(
            attachments.map(async (attachment, index) => {
                const downloadRes = await pdfApi.downloadFile(attachment.href);
                await fs.writeFile( LOCAL_PATH + FILE_NAME_SHORT + "_attachment_" + (index + 1) + ".data", downloadRes.body);
            })
        );
    }
    else
        console.log("Unexpected error : can't download attachments");
}

async function getPdfDocumentAttachments(api, pdfFilePath, pdfFileName)
{
    // Null value means default storage
    let storage = null;

    const pdfFileData = await fs.readFile(pdfFilePath + pdfFileName);

    await api.uploadFile(pdfFileName, pdfFileData, storage);

    let result = await pdfApi.getDocumentAttachments(pdfFileName, storage, null);
    
    if (result.statusCode == 200)
    {
        const attachments = result.body.attachments;
				
        await ProcessPdfAttachments(attachments);
    }

}

await getPdfDocumentAttachments(pdfApi, LOCAL_PATH, FILE_NAME);
