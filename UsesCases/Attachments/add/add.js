/*****************************************************************************************************************
    1. Load your Application Secret and Key from the JSON file or set credentials in another way
    2. Create an object to connect to the Pdf.Cloud API
    3. Upload your document file using pdfApi.UploadFile() function of the Storage API object
    4. Create an AttachmentInfo object, which maust be inserted into Pdf file
    5. Perform append attachment into Pdf document using postAddDocumentAttachment() function and (AttachmentInfo) 
        object [https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/AttachmentInfo.md]
    6. Check result and perform some actions with result.body object in 
        in format (Attachment)[https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/Attachment.md]

    All values of variables starting with "YOUR_****" should be replaced by real user values
*********************************************************************************************************/

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const LOCAL_PATH = "C:\\Samples\\";
const FILE_NAME = "Sample-Document-01";
const LOCAL_FILE_NAME = LOCAL_PATH + FILE_NAME + ".pdf";
const ATTACHMENT_IMDEX = 1;

const STORAGE_FILE_NAME = FILE_NAME + ".pdf";

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

const addAttachment = async function (atName, atPath, atDescription, atMIME) 
{
    try {

        const pdfApi = new PdfApi(credentials.id, credentials.key);

        const buffer = await fs.readFile(LOCAL_FILE_NAME);
        await pdfApi.uploadFile(STORAGE_FILE_NAME, buffer);

        const attachment = new AttachmentInfo();
        attachment.name = atName;
        attachment.path = atPath;
        attachment.description = atDescription;
        attachment.mimeType = atMIME;

        const appendResult = await pdfApi.postAddDocumentAttachment(STORAGE_FILE_NAME, attachment, null, null);

        if (appendResult.statusCode == 200)
        {
            const attachments = appendResult.body;
                        
            await ProcessPdfAttachments(attachments);
        }
        else
            console.log("Unexpected error : can't download attachments");

    } catch (error) {
        console.error(error.message);
    }
}

await addAttachment("YOUR_ATTACHMENT_NAME", "YOUR_ATTACHMENT_PATH", "YOUR_ATTACHMENT_DESCRIPTION", "type/YOUR_SUBTYPE");
