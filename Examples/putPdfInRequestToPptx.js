const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const fileName = "4pages.pdf";
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Detailed description of available parameters at 
//     https://reference.aspose.com/pdf/net/aspose.pdf/pptxsaveoptions/

// Set an extracted image path.
const outPath = "Pptx/" + fileName + ".pptx";
// If set to true then images are separated from all other graphics
const separateImages = true;
// If set to true then all the content is recognized as images (one per page).
const slidesAsImages = false;
// Set default storage.
const storage = null;
// Set pdf document password.
const password = null;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/PutPdfInRequestToPptx
    // Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.
    const response = await api.putPdfInRequestToPptx(
        outPath,
        separateImages,
        slidesAsImages,
        storage,
        password,
        fs.readFileSync("testData/" + fileName));

    console.log(response.body.status);
}

main();