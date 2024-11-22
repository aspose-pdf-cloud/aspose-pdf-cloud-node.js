const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const fileName = "4pages.pdf";
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Detailed description of available parameters at 
//     https://reference.aspose.com/pdf/net/aspose.pdf/excelsaveoptions/

// Insert blank column at first.
const insertBlankColumnAtFirst = true;
// Save of each PDF page as separated worksheet.
const minimizeTheNumberOfWorksheets = false;
// Obsolete.
const scaleFactor = null;
// Columns division will independent for each page.
const uniformWorksheets = true;
// Set root folder.
const folder = null;
// Set default storage.
const storage = null;
// Set pdf document password.
const password = null;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/GetPdfInStorageToXls
    // Converts PDF document (located on storage) to XLS format and returns resulting file in response content
    const result = await api.getPdfInStorageToXls(fileName,
        insertBlankColumnAtFirst,
        minimizeTheNumberOfWorksheets,
        scaleFactor,
        uniformWorksheets, 
        folder,
        storage,
        password);

    if (result.response.statusCode == 200)
    {
        fs.writeFileSync("testOutput/" + fileName + ".xls", result.body)
        console.log("OK");
    }
}

main();