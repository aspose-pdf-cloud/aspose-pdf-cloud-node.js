// Import the necessary class from the Aspose PDF Cloud SDK
const { PdfApi } = require("asposepdfcloud");

// Create an instance of the PdfApi with the base URL
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name (the PDF file you want to retrieve metadata from)
const fileName = "example.pdf"; // Replace with your PDF file name
// Set the folder where the document is stored (if applicable)
const folder = "Documents"; // Replace with your folder name if applicable
// Optional parameters
const storage = null; // Specify storage name if using a specific storage
const password = null; // Specify the password if the document is password-protected

// Main function to execute the API call
async function main() {
    try {
        // Call the getXmpMetadataJson method to retrieve the XMP metadata
        const result = await api.getXmpMetadataXml(fileName, folder, storage, password);

        // Log the retrieved XMP metadata
        console.log("XMP Metadata:", result.body);
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error retrieving XMP metadata:", error);
    }
}

// Execute the main function
main();
