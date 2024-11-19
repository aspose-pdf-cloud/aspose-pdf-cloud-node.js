const { PdfApi } = require("asposepdfcloud");

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
// Set root folder.
const folder = "Documents";
// Set default storage.
const storage = null;
// Set pdf document password.
const password = null

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/PutPdfInStorageToXlsx
    // Converts PDF document (located on storage) to XLSX format and uploads resulting file to storage
    const response = await api.putPdfInStorageToXlsx(fileName,
        outPath,
        insertBlankColumnAtFirst,
        minimizeTheNumberOfWorksheets,
        scaleFactor,
        uniformWorksheets, 
        folder,
        storage,
        password);

    console.log(response.response.statusCode);
}

main();