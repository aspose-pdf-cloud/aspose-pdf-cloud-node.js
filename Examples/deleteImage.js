const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "PdfWithImages2.pdf";
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";
// Set extracted image folder.
const destFolder = "testOutput";

async function main()
{
    // Read document images.
    const result = await api.getImages(fileName, 1, null, null);
    const imageId = result.body.images.list[0].id;
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/DeleteImage
    // Delete image from document page.
    const response = await api.deleteImage(fileName, imageId, storage, folder);  
    console.log(response.body.status);
}

main();
