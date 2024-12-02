/**
 * Add the XMP metadata property to a PDF document using the Aspose.PDF Cloud API.
 *
 * This use case performs the following steps:
 * 1. Import the necessary classes.
 * 2. Reads a PDF file from the local file system.
 * 3. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 4. Add the XMP metadata property using Aspose.PDF Cloud API.
 * 5. Read an updated XMP metadata from pdf document using the Aspose.PDF Cloud API.
 * 6. Log to the console that the XMP metadata property was added.
 *
 */

// Import the necessary classes.
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");

/**
 * Add the xmp metadata property to the PDF document using the Aspose.PDF Cloud API.
 *
 * @returns {Promise<void>} A promise that resolves when the xmp metadata property is completed adding.
 */
async function addXmpMetadataProperty()
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
    const xmpMetadataProperty = "pdf:Prop";

    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    await api.uploadFile(folder + "/" +fileName, buffer, storage)
    
    // Create instance of XmpMetadataProperty for pdf:Prop.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/XmpMetadataProperty.md
    var pdfPropProperty = {
        key: xmpMetadataProperty,
        value: "PropValue",
        namespaceUri: "http://ns.adobe.com/pdf/1.3/"
    }; 
    // Create an instance of XmpMetadata.
    // Documentation available at: https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js/blob/master/docs/XmpMetadata.md
    const xmpMetadata = {
        properties: [pdfPropProperty]
    };
    // Update the XMP metadata.
    const result = await api.postXmpMetadata(fileName, xmpMetadata, folder, storage, password);
    console.log(result.body.status);
    
    // Read XMP metadata from PDF document.
    metadata = await api.getXmpMetadataJson(fileName, folder, storage, password);
    // Log XMP metadata property was added.
    pdfPropProperty = metadata.body.properties.find(property => property.key == xmpMetadataProperty);
    console.log("Added xmpMetadataProperty: " + pdfPropProperty.key + "=" + pdfPropProperty.value);
}

// Execute the addXmpMetadataProperty function
addXmpMetadataProperty();
