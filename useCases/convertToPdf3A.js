// Import necessary classes from the Aspose PDF Cloud library
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/pdfAType");

// The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

// Set the document name
const fileName = "4pages.pdf";
// Set the document name
const outputPath = "PDF3A/4pages.pdf";
// Use default storage (null indicates default storage)
const storage = null;
// Set the folder where the document is stored
const folder = "Documents";
// Set the pdf document has no password.
const password = null;

/**
 * Convert the PDF document to PDF3A using the Aspose.PDF Cloud API.
 *
 * This function performs the following steps:
 * 1. Reads a PDF file from the local file system.
 * 2. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 3. Convert PDF document to PDF3A format using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 * @returns {Promise<void>} A Promise that resolves when the adding text is complete.
 */
async function getPdfInStorageToPdfA()
{
    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    const uploadResponse = await api.uploadFile(folder + "/" +fileName, buffer, storage)
    // Swagger method for adding text: https://reference.aspose.cloud/pdf/#/Convert/PutPdfAInStorageToPdf
    // Call the API to convert the specified PDF document to PDF3A format
    const result = await api.putPdfInStorageToPdfA(
        uploadResponse.body.uploaded[0],
        outputPath,
        PdfAType.PDFA3A,
        folder,
        storage,
        password);

    // Log the response to console.
    console.log(result.body.status); // Log the status of the operation
}

// Execute the putAddText function
getPdfInStorageToPdfA();
