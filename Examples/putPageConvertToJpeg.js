const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const outPath = "page.jpg";

pdfApi.putPageConvertToJpeg("4pages.pdf", 1, outPath, null, null, null)
    .then((result) => {
        console.log(result.response);
    });