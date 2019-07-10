const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")
console.log('running example');

pdfApi.deletePageAnnotations("4pages.pdf", pageNumber, null, null)
    .then((result) => {
        console.log(result.response);
    });