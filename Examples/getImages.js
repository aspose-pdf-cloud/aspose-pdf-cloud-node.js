const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "PdfWithImages2.pdf";
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/GetImages
    // Read document images.
    const result = await api.getImages(fileName, 1, storage, folder);
    console.log(result.body.status);
}

main();
