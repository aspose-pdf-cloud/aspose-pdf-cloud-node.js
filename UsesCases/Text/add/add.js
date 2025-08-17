/**
 * Add text to a PDF document page using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Put text on the PDF document page using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 */

// Import necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Add text to a PDF document page using the Aspose.PDF Cloud API.
 * 
 * @returns {Promise<void>} A Promise that resolves when the adding text is complete.
 */
async function addText()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

    // Set the document name.
    const fileName = "4pages.pdf";
    // Set the page number where the text will be added.
    const pageNumber = 3;
    // Use default storage (null indicates default storage).
    const storage = null;
    // Set the folder where the document is stored.
    const folder = "Documents";

    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    await api.uploadFile(folder + "/" +fileName, buffer, storage);

    // Create new text paragraph.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/Paragraph.md
    const paragraph =
    {
        // Set the left margin for the paragraph.
        leftMargin: 100,
        // Set the bottom margin for the paragraph.
        bottomMargin: 200,
        // Set the rotation angle of the text in degrees.
        rotation: 10,
        // Define an array of text lines for the paragraph.
        lines: [{
            // Define the segments that form the line.
            segments: [{
                // Text value for the segment.
                value: "segment text 1 with text state",
                // Define the text state for formatting.
                textState: {
                    // Set font size of the text.
                    fontSize: 20,
                    // Set font name of the text.
                    font: "Arial",
                    // Set underline for the text.
                    underline: true
                }
            }]
        }]
    };

    // Swagger method definition available at: 
    //     https://reference.aspose.cloud/pdf/#/Text/PutAddText
    // Adding text to the PDF document page.
    const result = await api.putAddText(
        fileName,
        pageNumber,
        paragraph,
        folder,
        storage);

    // Log the response to console.
    console.log(result.body.status);
}

// Execute the addText function.
addText();
