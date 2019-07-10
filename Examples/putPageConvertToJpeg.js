const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const outPath = "page.jpg";

pdfApi.putPageConvertToJpeg("4pages.pdf", 1, outPath, null, null, null)
    .then((result) => {
        console.log(result.response);
    });