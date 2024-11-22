const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name.
const fileName = "4pages.pdf";
// Set the page number.
const pageNumber = 1;
// Set the width of coverted image.
const width = (595 / 2) | 0;
// Set the heigth of coverted image.
const heigth = (842 / 2) | 0;
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";
// Set no password.
const password = null;
// Set an extracted image folder.
const destFolder = "testOutput";

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Pages/GetPageConvertToPng
    // Convert document page to Png image and return resulting file in response..
    const response = await api.getPageConvertToPng(fileName, pageNumber, width, heigth, folder, storage, password);  
    if (response.response.statusCode == 200)
    {
        console.log("OK");
        // Write extracted image on disk.
        fs.writeFileSync(destFolder + "/" + fileName + ".png", response.body);    
    }
}

main();
