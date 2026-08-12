/**
 * Remove text of a PDF document using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Remove text of the PDF document using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 */

// Import necessary classes from the Aspose PDF Cloud library
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Remove text of a PDF document using the Aspose.PDF Cloud API.
 *
 * @returns {Promise<void>} A promise that is resolves after text deletion is complete.
 */
async function removeText()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

    // Set the document name
    const fileName = "4pages.pdf";
    // Use default storage (null indicates default storage)
    const storage = null;
    // Set the folder where the document is stored
    const folder = "Documents";

    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    await api.uploadFile(folder + "/" +fileName, buffer, storage)

    // Create TextReplaceListRequest instance.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/TextReplaceListRequest.md
    const textReplaceList = 
    {
        // Set the text replaces list.
        textReplaces:
            [
                {
                    // Set the text to replace.
                    regex: false,
                    // Set the text to replace.
                    newValue: "",
                    // Set the oldValue is regex.
                    oldValue: "Page"
                }
            ],
        // Set the start index of text items to replace.
        startIndex: 2,
        // Set the count replacements.
        countReplace: 2
    };

    // Swagger method for adding text: 
    //     https://reference.aspose.cloud/pdf/#/TextReplace/PostDocumentTextReplace
    // Remove text in the PDF document.
    const result = await api.postDocumentTextReplace(
        fileName,
        textReplaceList,
        storage,
        folder);

    // Log the response to console.
    console.log(result.body.status);
}

// Execute the removeText function
removeText();
