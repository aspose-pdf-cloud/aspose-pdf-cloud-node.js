/**
 * Update the XMP metadata property from a PDF document using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Read the XMP metadata from pdf document using the Aspose.PDF Cloud API.
 * 5. Update the XMP metadata property using the Aspose.PDF Cloud API.
 * 6. Read an updated XMP metadata from pdf document using the Aspose.PDF Cloud API.
 * 7. Log to the console that the XMP metadata property was updated.
 *
 */

// Import the necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Update xmp metadata property from a PDF document using the Aspose.PDF Cloud API.
 *
 * @returns {Promise<void>} A promise that resolves when the xmp metadata property update completes.
 */
async function updateXmpMetadataProperty()
{
    // The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
    const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

    // Set the PDF document name.
    const fileName = "4pages.pdf";
    // Set the folder where the document is stored.
    const folder = "Documents";
    // Set storage name (null indicates default storage).
    const storage = null;
    // Set the password if the document is password-protected.
    const password = null;
    // Set the XMP metadata property name.
    const xmpMetadataProperty = "dc:title";
  
    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    await api.uploadFile(folder + "/" +fileName, buffer, storage)
    
    // Read XMP metadata from pdf document.
    var metadata = await api.getXmpMetadataJson(fileName, folder, storage, password);
    // Find the title property.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/XmpMetadataProperty.md
    var titleProperty = metadata.body.properties.find(property => property.key == xmpMetadataProperty);
    // Update the title property.
    titleProperty.value = "New title";

    // Create an instance of XmpMetadata.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/XmpMetadata.md
    const xmpMetadata = {
        properties: [titleProperty]
    };
    // Update the XMP metadata.
    const result = await api.postXmpMetadata(fileName, xmpMetadata, folder, storage, password);
    console.log(result.body.status);

    // Read XMP metadata from PDF document.
    metadata = await api.getXmpMetadataJson(fileName, folder, storage, password);
    // Log XMP metadata property was updated.
    titleProperty = metadata.body.properties.find(property => property.key == xmpMetadataProperty);
    console.log("Updated xmpMetadataProperty: " + titleProperty.key + "=" + titleProperty.value);
}

// Execute the updateXmpMetadataProperty function
updateXmpMetadataProperty();
