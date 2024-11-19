const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name.
const fileName = "4pages.pdf";
// Set the page number.
const pageNumber = 1;
// Set an extracted image path.
const outPath = "Images/" + fileName + "_" + pageNumber + ".png";
// Set the width of coverted image.
const width = (595 / 2) | 0;
// Set the heigth of coverted image.
const heigth = (842 / 2) | 0;
// Set document folder.
const folder = "Documents";
// Use default storage.
const storage = null;
// Set no password.
const password = null;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Pages/PutPageConvertToPng
    // Convert document page to png image and upload resulting file to storage.
    const response = await api.putPageConvertToPng(fileName, pageNumber, outPath, width, heigth, folder, storage, password);  
    console.log(response.body.status)
}

main();
