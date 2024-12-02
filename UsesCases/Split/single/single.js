/**
 * Splitting the PDF document to pages using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Splitting document to pages using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 */

// Import necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Splitting the PDF document per pages using the Aspose.PDF Cloud API.
 * 
 * @returns {Promise<void>} A Promise that resolves when the splitting document is complete.
 */
async function splitDocument()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

    // Set the document name.
    const fileName = "4pages.pdf";
    // Set the start page number.
    const pageFrom = 2;
    // Set the end page number same as pageFrom.
    const pageTo = 2;
    // Set the resulting documents format.
    // Available formats are: PDF, PDFA1A, PDFA1B, PDFA3A, PDFA3B, DOC, DOCX, XLS, XPS, TIFF, SVG, JPEG, JPG, PNG, EMF, BMP, GIF, PPTX, EPUB.
    const format = "PDF";
    // Use default storage (null indicates default storage).
    const storage = null;
    // Set the folder where the document is stored.
    const folder = "Documents";

    // Read the file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload the file to cloud storage.
    await api.uploadFile(folder + "/" + fileName, buffer, storage)

    // Swagger documentation available at: 
    //     https://reference.aspose.cloud/pdf/#/Document/PostSplitDocument
    // Split the PDF document to single page.
    const result = await api.postSplitDocument(
        fileName,
        format,
        pageFrom,
        pageTo,
        storage,
        folder);

    // Log the response to console.
    console.log(result.body.status);
    // Log split result.
    result.body.result.documents.forEach((document, index) =>
        {
            console.log(index + 1 + ") " + document.href);
        });
    }

// Execute the splitDocument function.
splitDocument();
