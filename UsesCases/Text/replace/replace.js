/**
 * Replace text of a PDF document using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Replace text of the PDF document using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 */

// Import necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Replace text of a PDF document using the Aspose.PDF Cloud API.
 *
 * @returns {Promise<void>} A promise that is resolves after text replacement is complete.
 */
async function replaceText()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

    // Set the document name
    const fileName = "4pages.pdf";
    // Use default storage (null indicates default storage)
    const storage = null;
    // Set the folder where the document is stored
    const folder = "Documents";

    // Create TextReplaceListRequest instance.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/TextReplaceListRequest.md
    const textReplaceList =
    {
        // Set the text replaces list.
        textReplaces: 
        [
            {
                // Set the text state.
                textState:
                {
                    // Set font name of the text.
                    font: "Arial",
                    // Set font size of the text.
                    fontSize: 12,
                    // Set underline for the text.
                    underline: true
                },
                // Set the text to replace.
                oldValue: "Page",
                // Set the replacement text.
                newValue: "Replacement"
            }
        ],
        // Set the start index of text items to replace.
        startIndex: 2,
        // Set the count replacements.
        countReplace: 2
    }

    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    await api.uploadFile(folder + "/" +fileName, buffer, storage);

    // Swagger method definition available at: 
    //     https://reference.aspose.cloud/pdf/#/TextReplace/PostDocumentTextReplace
    // Replace text in the PDF document.
    const result = await api.postDocumentTextReplace(
        folder + "/" +fileName,
        textReplaceList,
        storage,
        folder);

    // Log the response to console.
    console.log(result.body.status);
}

// Execute the replaceText function
replaceText();
