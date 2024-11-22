// Import necessary classes from the Aspose PDF Cloud library
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

// The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

// The document name.
const fileName = "4pages.pdf";
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";

/**
 * Extract text of a PDF document using the Aspose.PDF Cloud API.
 *
 * This function performs the following steps:
 * 1. Reads a PDF file from the local file system.
 * 2. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 3. Initializing parameters for searching text on a PDF document page.
 * 4. Read text of PDF document using the Aspose.PDF Cloud API.
 * 5. Logs an extracted text.
 *
 * @returns {Promise<void>} A promise that is resolves after text extraction is complete.
 */
async function extractText()
{
    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    const uploadResponse = await api.uploadFile(folder + "/" +fileName, buffer, storage)

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

    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Text/GetText
    // Extract document text.
    const result = await api.getText(
        uploadResponse.body.uploaded[0],
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
    for (const text of result.body.textOccurrences.list)
    {
        console.log(text.text);
    }
}

extractText();
