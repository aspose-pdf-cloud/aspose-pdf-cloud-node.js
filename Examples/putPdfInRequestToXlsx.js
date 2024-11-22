const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const fileName = "4pages.pdf";
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Detailed description of available parameters at 
//     https://reference.aspose.com/pdf/net/aspose.pdf/excelsaveoptions/

// Set an extracted image path.
const outPath = "Xls/" + fileName + ".xlsx";
// Insert blank column at first.
const insertBlankColumnAtFirst = true;
// Save of each PDF page as separated worksheet.
const minimizeTheNumberOfWorksheets = false;
// Obsolete.
const scaleFactor = null;
// Columns division will independent for each page.
const uniformWorksheets = true;
// Set default storage.
const storage = null;
// Set pdf document password.
const password = null;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/PutPdfInRequestToXlsx
    // Converts PDF document (in request content) to XLSX format and uploads resulting file to storage.
    const response = await api.putPdfInRequestToXlsx(
        outPath,
        insertBlankColumnAtFirst,
        minimizeTheNumberOfWorksheets,
        scaleFactor,
        uniformWorksheets, 
        storage,
        password,
        fs.readFileSync("testData/" + fileName));

    console.log(response.body.status);
}

main();