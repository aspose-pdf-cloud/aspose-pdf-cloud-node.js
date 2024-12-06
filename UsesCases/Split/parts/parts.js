/**
 * Splitting the PDF document to pages using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Splitting document to pages using the Aspose.PDF Cloud API.
 * 5. Write the split result to the local file system.
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
async function splitDocumentRanges()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    // const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");
    const api = new PdfApi("http://172.17.0.1:5000/v3.0");

    // Set the document name.
    const fileName = "4pages.pdf";
    // Set the page ranges for splitting.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/SplitRangePdfOptions.md
    const options =
    {
        pageRanges: [
            // first and second pages.
            {
                to: 2
            },
            // third and fourth pages.
            {
                from: 3
            },
            // second and third pages.
            {
                from: 2,
                to: 3
            },
            // first page.
            {
                from: 1,
                to: 1
            }
        ]
    };
    // Use default storage (null indicates default storage).
    const storage = null;
    // Set the folder where the document is stored.
    const folder = "Documents";

    // Read the file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload the file to cloud storage.
    await api.uploadFile(folder + "/" + fileName, buffer, storage)

    // Swagger documentation available at: 
    //     https://reference.aspose.cloud/pdf/#/Document/PostSplitRangePdfDocument
    // Split the PDF document to page ranges.
    const result = await api.postSplitRangePdfDocument(
        fileName,
        options,
        storage,
        folder);

    // Log the response to console.
    console.log(result.body.status);
    // Write the split result to the local file system.
    for (const [index, page] of result.body.result.documents.entries())
    {
        const pageRange = options.pageRanges[index];
        // Download the PDF file from cloud storage.
        const file = await api.downloadFile(page.href, storage);
        const filePath = `testOutput/pageRange${pageRange.from ?? 1}_${pageRange.to ?? result.body.result.documents.length}.pdf`;
        // Write the file to the local file system.
        fs.writeFileSync(filePath, file.body);
        console.log(index + 1 + ") " + filePath);
    }
}

// Execute the splitDocumentRanges function.
splitDocumentRanges();
