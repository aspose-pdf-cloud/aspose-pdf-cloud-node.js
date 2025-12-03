import credentials from "./../../settings/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud/src/api/api.js";

const loccalFolder = "testData";
const pdfDocument = "output_sample.pdf";

// Create PDF Rest API object
const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

// Create empty Pdf 
const pdfResponse = await pdfApi.putCreateDocument(pdfDocument, null, null)
    .then(async () => {
        console.log("Document #" + pdfDocument + " successfully created.");

        // Download empty Pdf document to local folder
        await pdfApi.downloadFile(pdfDocument)
            .then (async (data) => {
                const filePath = path.join(loccalFolder, pdfDocument);
                await fs.writeFile(filePath, data.body);
                console.log("Downloaded: " + filePath);
            });
    })
    .catch((error) => {
        // Catch any exceptions
        console.log("Failed to create empty DPDF dcument '" + pdfDocument + "' !")
        console.error("Error:", error.message);
    });