// Import the necessary class from the Aspose PDF Cloud SDK
const { PdfApi } = require("asposepdfcloud");
const { XmpMetadata } = require("asposepdfcloud/src/models/xmpMetadata");
const { XmpMetadataProperty } = require("asposepdfcloud/src/models/xmpMetadataProperty");

// Create an instance of the PdfApi with the base URL
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name (the PDF file you want to retrieve metadata from)
const fileName = "example.pdf"; // Replace with your PDF file name
// Set the folder where the document is stored (if applicable)
const folder = "Documents"; // Replace with your folder name if applicable
// Optional parameters
const storage = null; // Specify storage name if using a specific storage
const password = null; // Specify the password if the document is password-protected

// Initialize properties using empty constructors

// Property for ModifyDate
const modifyDateProperty = new XmpMetadataProperty(); 
// Set the key
modifyDateProperty.Key = "ModifyDate"; 
// Set the value to the predefined date
modifyDateProperty.Value = date; 

// Property for xmp:CreateDate
const createDateProperty = new XmpMetadataProperty(); 
// Set the key
createDateProperty.Key = "xmp:CreateDate"; 
// Set the value to the predefined date
createDateProperty.Value = date; 

// Property for CreatorTool (to be removed)
const creatorToolProperty = new XmpMetadataProperty(); 
// Set the key
creatorToolProperty.Key = "CreatorTool"; 
// Value is null (indicating removal)
creatorToolProperty.Value = null; 

// Property for BaseURL
const baseUrlProperty = new XmpMetadataProperty(); 
// Set the key
baseUrlProperty.Key = "BaseURL"; 
// Set the value to a URL
baseUrlProperty.Value = "http://www.somename.com/path"; 

// Property for dc:title (to be removed)
const dcTitleProperty = new XmpMetadataProperty(); 
// Set the key
dcTitleProperty.Key = "dc:title"; 
// Value is null (indicating removal)
dcTitleProperty.Value = null; 

// Property for pdf:Producer
const pdfProducerProperty = new XmpMetadataProperty(); 
// Set the key
pdfProducerProperty.Key = "pdf:Producer"; 
// Set the value
pdfProducerProperty.Value = "Aspose.PDF Cloud"; 
// Set the namespace URI
pdfProducerProperty.NamespaceUri = "http://ns.adobe.com/pdf/1.3/"; 

// Property for pdf:Prop
const pdfPropProperty = new XmpMetadataProperty(); 
// Set the key
pdfPropProperty.Key = "pdf:Prop"; 
// Set the value
pdfPropProperty.Value = "PropValue"; 
// Set the namespace URI
pdfPropProperty.NamespaceUri = "http://ns.adobe.com/pdf/1.3/"; 

// Create an instance of XmpMetadata
const xmpMetadata = new XmpMetadata()
{
    properties = [
        modifyDateProperty,
        createDateProperty,
        creatorToolProperty,
        baseUrlProperty,
        dcTitleProperty,
        pdfProducerProperty,
        pdfPropProperty
    ]
};

// Main function to execute the API call
async function main() {
    try {
        // Call the getXmpMetadataJson method to retrieve the XMP metadata
        const result = await api.postXmpMetadata(fileName, xmpMetadata, folder, storage, password);

        // Log the retrieved XMP metadata
        console.log(result.body.status);
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error retrieving XMP metadata:", error);
    }
}

// Execute the main function
main();
