const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "PdfWithImages2.pdf";
// Use default storage.
const storage = null;
// Width of coverted image.
const width = 100;
// Heigth of coverted image.
const heigth = 100;
// Set document folder.
const folder = "Documents";
// Set extracted image folder.
const destFolder = "testOutput";

async function main()
{
    // Read document images.
    const result = await api.getImages(fileName, 1, null, null);
    const imageId = result.body.images.list[0].id;
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/GetImageExtractAsPng
    // Extract document image in PNG format.
    const response = await api.getImageExtractAsPng(fileName, imageId, width, heigth, storage, folder);  
    if (response.response.statusCode == 200)
    {
        console.log("OK");
        // Write extracted image on disk.
        fs.writeFileSync(destFolder + "/" + fileName + ".png", response.body);    
    }
}

main();