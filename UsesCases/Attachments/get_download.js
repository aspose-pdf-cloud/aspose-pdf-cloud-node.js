/************************************************************************************************
	1. Load your Application Secret and Key from the JSON file or set credentials in another way
 	2. Initialize local path, uploading Pdf file and attachment index and get attachment function
	3. Create an object to connect to the Pdf.Cloud API
	4. Upload your document file using uploadFile() function of the Pdf.Cloud Rest API object
	5. To extract attachments from a PDF document, using getDocumentAttachmentByIndex() function
	6. Write extracting attachment stream to local file using createWriteStream() function of the Node.js file system object
	
	All initialized values of variables should be replaced by real user values
************************************************************************************************/

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud";

const LOCAL_PATH = "C:\\Samples\\";
const FILE_NAME = "Sample-Document-01";
const LOCAL_FILE_NAME = LOCAL_PATH + FILE_NAME + ".pdf";
const ATTACHMENT_IMDEX = 1;

const STORAGE_FILENAME = FILE_NAME + ".pdf";

const getAttachment = async function (attachIndex) 
{
    try {
        const pdfApi = new PdfApi(credentials.id, credentials.key);

        const buffer = await fs.readFile(LOCAL_FILE_NAME);
        await pdfApi.uploadFile(STORAGE_FILENAME, buffer);

		await pdfApi.getDownloadDocumentAttachmentByIndex(STORAGE_FILENAME, attachIndex, null, null, 
			function (response) {
				console.log(response.status);

				const outfilename = FILE_NAME + "_attachment_" + (index + 1) + ".data";
				const writeStream = fs.createWriteStream(LOCAL_PATH + outfilename);
				writeStream.write(response.body);
				});
		
    } catch (error) {
        console.error(error.message);
    }
}

await getAttachment(ATTACHMENT_IMDEX);