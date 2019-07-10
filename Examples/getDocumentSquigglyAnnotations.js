const { PdfApi } = require("asposepdfcloud");
const { SquareAnnotation } = require("asposepdfcloud/src/models/squareAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getDocumentSquigglyAnnotations("PdfWithAnnotations.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });