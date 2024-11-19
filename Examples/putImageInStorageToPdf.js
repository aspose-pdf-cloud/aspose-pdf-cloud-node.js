const { PdfApi } = require("asposepdfcloud");
const { ImageSrcType } = require("asposepdfcloud/src/models/imageSrcType");
const { ImageTemplate } = require("asposepdfcloud/src/models/imageTemplate");
const { ImageTemplatesRequest } = require("asposepdfcloud/src/models/imageTemplatesRequest");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "PdfWithImages2.pdf";
// Use default storage.
const storage = null;
// Set extracted image folder.
const destFolder = "Images";
// Initialize image template.
const imageTemplate1 = new ImageTemplate
{
    // Set path to image.
    imagePath = "testData/33539.jpg",
    // Set image src type.
    imageSrcType = ImageSrcType.Common
};
const imageTemplate2 = new ImageTemplate
{
    // Set path to image.
    imagePath = "testData/44781.jpg",
    // Set image src type.
    imageSrcType = ImageSrcType.Common
};
// Initialize image template request.
const imageTemplatesRequest = new ImageTemplatesRequest
{
    // Use ocr.
    isOCR = true,
    // Set language for ocr procedure.
    oCRLangs = "eng",
    // Image templates.
    imagesList = [ imageTemplate1, imageTemplate2 ]
};

async function main()
{
    // Read document images.
    const imagesResult = await api.getImages(fileName, 1, storage, folder);
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/PutImageInStorageToPdf
    // Convert image file (located on storage) to PDF format and upload resulting file to storage.
    const result = await api.putImageInStorageToPdf(
        fileName,
        imageTemplatesRequest,
        destFolder,
        storage);

    console.log(result.body.status)
}

main();
