const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "PdfWithImages2.pdf";
// Use default storage.
const storage = null;
// Width of coverted image.
const width = 100;
// Heigth of coverted image.
const heigth = 100;
// Set document folder.
const folder = "Documents";
// Set extracted image folder.
const destFolder = "Images";

async function main()
{
    // Read document images.
    const imagesResult = await api.getImages(fileName, 1, storage, folder);
    const imageId = imagesResult.body.images.list[0].id;
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/PutImageExtractAsGif
    // Extract document image in GIF format to folder.
    const result = await api.putImageExtractAsGif(
        fileName,
        imageId,
        width,
        heigth,
        storage,
        folder,
        destFolder);

    console.log(result.body.status)
}

main();
