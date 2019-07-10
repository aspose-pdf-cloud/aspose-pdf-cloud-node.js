const { PdfApi } = require("asposepdfcloud");
const { Paragraph } = require("asposepdfcloud/src/models/paragraph");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const name = "4pages.pdf";
pdfApi.getDocumentTextAnnotations(name, null, null)
    .then((result) => {
        console.log(result.response);
    });