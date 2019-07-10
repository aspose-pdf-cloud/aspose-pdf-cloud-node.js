const { PdfApi } = require("asposepdfcloud");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');



pdfApi.getDocumentMovieAnnotations("PdfWithAnnotations1.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });