const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/stamp");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');
const name = "4pages.pdf";
const x = 0;
const y = 0;
const width = 0;
const height = 0;
const pageNumber = 1;
const format = ["First Page", "Second Page"];

pdfApi.getPageText(name, pageNumber, x, y, width, height, format, null, null, null)
    .then((result) => {
        console.log(result.response);
    });