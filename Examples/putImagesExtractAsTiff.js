const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name.
const fileName = "PdfWithImages2.pdf";
// Set the page number.
const pageNumber = 1;
// Use default storage.
const storage = null;
// Set the width of coverted image.
const width = 100;
// Set the heigth of coverted image.
const heigth = 100;
// Set the document folder.
const folder = "Documents";
// Set an extracted image folder.
const destFolder = "Images";

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/PutImagesExtractAsTiff
    // Extract document images in TIFF format to folder.
    const response = await api.putImagesExtractAsTiff(
        fileName,
        pageNumber,
        width,
        heigth,
        storage,
        folder,
        destFolder);

    console.log(response.body.status)
}

main();
