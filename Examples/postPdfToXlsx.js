const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const fileName = "PdfWithImages2.pdf";
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Detailed description of available parameters at 
//     https://reference.aspose.com/pdf/net/aspose.pdf/excelsaveoptions/

// Insert blank column at first.
const insertBlankColumnAtFirst = true;
// Save of each PDF page as separated worksheet.
const minimizeTheNumberOfWorksheets = false;
// Columns division will independent for each page.
const uniformWorksheets = true;
// Set pdf document password.
const password = null;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/PostPdfToXlsx
    // Converts PDF document (in request content) to XLSX format and uploads and returns resulting file in response content.
    const result = await api.postPdfToXlsx(
        insertBlankColumnAtFirst,
        minimizeTheNumberOfWorksheets,
        uniformWorksheets, 
        password,
        fs.readFileSync("testData/" + fileName));
    
    if (result.response.statusCode == 200)
    {
        fs.writeFileSync("testOutput/" + fileName + ".xlsx", result.body)
        console.log("OK");
    }
}

main();