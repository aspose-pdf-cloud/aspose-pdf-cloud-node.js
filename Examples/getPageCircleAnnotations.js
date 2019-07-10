const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getPageCircleAnnotations("PdfWithAnnotations.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });