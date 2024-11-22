const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "PdfWithImages2.pdf";
// Path to image file in storage. Image content is used otherwise.
const imageFilePath = "";
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";
// Set image buffer.
const imageContent = null

async function main()
{
    // Read document images.
    const imagesResult = await api.getImages(fileName, 1, storage, folder);
    const imageId = imagesResult.body.images.list[0].id;
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/PutReplaceImage
    // Replace document image.
    const result = await api.putReplaceImage(
        fileName,
        imageId,
        imageFilePath,
        storage,
        folder,
        imageContent);

    console.log(result.body.status);
}

main();
