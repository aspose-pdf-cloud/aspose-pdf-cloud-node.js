const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/stamp");




pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const name = "4pages.pdf";
const x = 0;
const y = 0;
const width = 0;
const height = 0;

pdfApi.getText(name, x, y, width, height, null, null, null, null)
    .then((result) => {
        console.log(result.response);
    });