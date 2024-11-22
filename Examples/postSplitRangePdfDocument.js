const { PdfApi } = require("asposepdfcloud");
const { SplitRangePdfOptions } = require("asposepdfcloud/src/models/splitRangePdfOptions");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name.
const fileName = "4pages.pdf";
//
const options = new SplitRangePdfOptions();
options.
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";
// Set no password.
const password = null;

async function main()
{
    const result = await api.postSplitRangePdfDocument(fileName, null, storage, folder, password);
    console.log(result.body.status);
}

main();