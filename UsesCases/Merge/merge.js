/**
 * Merging the PDF documents using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF files from the local file system.
 * 3. Uploads the PDF files to the Aspose.PDF Cloud storage.
 * 4. Merging the PDF documents using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 */

// Import necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");
const { MergeDocuments } = require("asposepdfcloud/src/models/mergeDocuments");

/**
 * Merging the PDF documents using the Aspose.PDF Cloud API.
 * 
 * @returns {Promise<void>} A Promise that resolves when the splitting document is complete.
 */
async function mergeDocument()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    // const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");
    const api = new PdfApi("http://172.17.0.1:5000/v3.0");

    const fileName = "merged.pdf";
    // Set the document names to merge.
    const fileNames = ["4pages.pdf", "alfa.pdf"];
    // Use default storage (null indicates default storage).
    const storage = null;
    // Set the folder where the document is stored.
    const folder = "Documents";

    // Initialize merge documents request.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/MergeDocuments.md
    const mergeRequest = new MergeDocuments();
    mergeRequest.list = [];
    await Promise.all(
        fileNames.map(async fileName =>
        {
            // Read file from file system.
            const buffer = fs.readFileSync("testData/" + fileName);
            // Upload file to cloud storage.
            await api.uploadFile(folder + "/" + fileName, buffer, storage);
            // Push uploaded file name to merge request.
            mergeRequest.list.push(folder + "/" + fileName);
        })
    );

    // Swagger documentation available at: 
    //     https://reference.aspose.cloud/pdf/#/Merge/PutMergeDocuments
    // Merge PDF documents using PDF Cloud API.
    const result = await api.putMergeDocuments(
        fileName,
        mergeRequest,
        storage,
        folder);

    // Log the response to console.
    console.log(result.body.status);
    // Download the PDF file from cloud storage.
    const file = await api.downloadFile(folder + result.body.document.links[0].href, storage);
    const filePath = `testOutput/merged.pdf`;
    // Write the file to the local file system.
    fs.writeFileSync(filePath, file.body);
    console.log("downloaded: " + filePath);
}

// Execute the mergeDocument function.
mergeDocument();
