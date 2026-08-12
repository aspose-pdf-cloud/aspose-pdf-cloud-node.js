/**
 * Extract text of a PDF document using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Read text of the PDF document using the Aspose.PDF Cloud API.
 * 5. Logs an extracted text.
 *
 */

// Import necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Extract text of a PDF document using the Aspose.PDF Cloud API.
 * 
 * @returns {Promise<void>} A promise that is resolves after text extraction is complete.
 */
async function extractText()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

    // The document name.
    const fileName = "4pages.pdf";
    // Use default storage.
    const storage = null;
    // Set document folder.
    const folder = "Documents";
    // X-coordinate of lower-left corner.
    const llx = 100;
    // Y-coordinate of lower-left corner.
    const lly = 700;
    // X-coordinate of upper-right corner.
    const urx = 200;
    // Y-coordinate of upper-right corner.
    const ury = 800;
    // List of formats to search.
    const format = [ ".* Page" ];
    // Formats are specified as a regular expression.
    const regex = true;
    // Split result fragments (default is true).
    const splitRects = true;
 
    // Read file from filesystem.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    await api.uploadFile(folder + "/" +fileName, buffer, storage);

    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Text/GetText
    // Extract text from the PDF document.
    const result = await api.getText(
        fileName,
        llx,
        lly,
        urx,
        ury,
        format,
        regex,
        splitRects,
        folder,
        storage);

    // Log extracted text.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/TextRectsResponse.md
    for (const text of result.body.textOccurrences.list)
    {
        console.log(text.text);
    }
}

// Execute the extractText function.
extractText();
