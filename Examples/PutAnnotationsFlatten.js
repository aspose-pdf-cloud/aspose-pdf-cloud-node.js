const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")
console.log('running example');


pdfApi.putAnnotationsFlatten("4pages.pdf", null, endPage, annotationTypes, null, null)
    .then((result) => {
        console.log(result.response);
    });