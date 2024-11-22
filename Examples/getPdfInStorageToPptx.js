const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const fileName = "4pages.pdf";
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Detailed description of available parameters at 
//     https://reference.aspose.com/pdf/net/aspose.pdf/pptxsaveoptions/

// If set to true then images are separated from all other graphics
const separateImages = true;
// If set to true then all the content is recognized as images (one per page).
const slidesAsImages = false;
// Set root folder.
const folder = null;
// Set default storage.
const storage = null;
// Set pdf document password.
const password = null;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/GetPdfInStorageToPptx
    // Converts PDF document (located on storage) to PPTX format and returns resulting file in response content
    const result = await api.getPdfInStorageToPptx(fileName,
        separateImages,
        slidesAsImages,
        folder,
        storage,
        password);

    if (result.response.statusCode == 200)
    {
        fs.writeFileSync("testOutput/" + fileName + ".pptx", result.body)
        console.log("OK");
    }
}

main();