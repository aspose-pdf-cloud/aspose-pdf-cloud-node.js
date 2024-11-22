const { PdfApi } = require("asposepdfcloud");

const fileName = "28968-1.pdf";
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Detailed description of available parameters at
//     https://reference.aspose.com/pdf/net/aspose.pdf/docsaveoptions/

// Use paragraph instead of line breaks.
const addReturnToLineEndings = true;
// Convert to doc format (default value).
const format = "doc";
// Converted images X resolution default value is 300.
const imageResolutionX = 300;
// Converted images Y resolution default value is 300.
const imageResolutionY = 300;
// Specified in hundreds of percent of the text lines height.
const maxDistanceBetweenLines = 10;
// This mode is fast and good for maximally preserving original look of the PDF file.
const mode = "Textbox";
// Recognition of bullets.
const recognizeBullets = true;
// It's normed to font size -  1.0 means 100% of supposed word's font size
const relativeHorizontalProximity = 1.0;
// Set root folder.
const folder = "Documents";
// Set default storage.
const storage = null;
// Set pdf document password.
const password = null;
// Set an extracted image path.
const outPath = "Doc/" + fileName + "." + format;

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Convert/PutPdfInStorageToDoc
    // Converts PDF document (located on storage) to DOC format and uploads resulting file to storage.
    const result = await api.putPdfInStorageToDoc(
        fileName,
        fileName + "." + format,
        addReturnToLineEndings,
        format,
        imageResolutionX,
        imageResolutionY, 
        maxDistanceBetweenLines,
        mode,
        recognizeBullets,
        relativeHorizontalProximity,
        folder,
        storage,
        password);
    
    console.log(result.body.status);
}

main();
