const { PdfApi } = require("asposepdfcloud");
const { Paragraph } = require("asposepdfcloud/src/models/paragraph");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const name = "4pages.pdf";
pdfApi.getDocumentTextAnnotations(name, null, null)
    .then((result) => {
        console.log(result.response);
    });