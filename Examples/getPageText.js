const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name.
const fileName = "4pages.pdf";
// Set the page number.
const pageNumber = 1;
// Set the X-coordinate of lower-left corner.
const llx = 0;
// Set an Y-coordinate of lower-left corner.
const lly = 0;
// Set the X-coordinate of upper-right corner.
const urx = 0;
// Set an Y-coordinate of upper-right corner.
const ury = 0;
// Set list of formats for search.
const format = ["First Page", "Second Page"];
// Set formats are specified as a regular expression.
const regex = null;
// Set split result fragments (default is true).
const splitRects = true;
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Text/GetPageText
    // Read page text items.
    const result = await api.getPageText(
        fileName,
        pageNumber,
        llx,
        lly,
        urx,
        ury,
        format,
        regex,
        splitRects,
        folder,
        storage);

    // todo: parse response
    console.log(result.body.status);
}

main();
