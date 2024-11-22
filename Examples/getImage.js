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
    const imagesResult = await api.getImages(fileName, 1, null, null);
    const imageId = imagesResult.body.images.list[0].id;
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/DeleteImage
    // Delete image from document page.
    const result = await api.getImage(fileName, imageId, storage, folder);
    // todo: parse response
    console.log(result.body.status);
}

main();
