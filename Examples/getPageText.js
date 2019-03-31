const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/stamp");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

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