const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "4pages.pdf";
// Path to image file in storage. Image content is used otherwise.
const imageFilePath = "Koala.jpg";
// Set page number to insert an image to.
const pageNumber = 1;
// Set left bottom x coordinate of an image.
const llx = 10;
// Set left bottom y coordinate of an image.
const lly = 10;
// Set right upper x coordinate of an image.
const urx = 100;
// Set right upper y coordinate of an image.
const ury = 100;
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";
// Set image buffer.
const imageContent = null

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Images/PostInsertImage
    // Insert image to document page.
    const result = await api.postInsertImage(
        fileName,
        pageNumber,
        llx,
        lly,
        urx,
        ury,
        imageFilePath,
        storage,
        folder,
        null);
    // todo: parse response
    console.log(result.body.status);
}

main();
