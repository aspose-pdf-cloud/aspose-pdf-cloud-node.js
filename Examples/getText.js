const { PdfApi } = require("asposepdfcloud");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// The document name.
const fileName = "4pages.pdf";
// X-coordinate of lower-left corner.
const llx = 0;
// Y-coordinate of lower-left corner.
const lly = 0;
// X-coordinate of upper-right corner.
const urx = 0;
// Y-coordinate of upper-right corner.
const ury = 0;
// List of formats for search.
const format = [];
// Formats are specified as a regular expression.
const regex = null;
// Split result fragments (default is true).
const splitRects = true;
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Text/GetText
    // Read document text.
    const result = await api.getText(
        fileName,
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
