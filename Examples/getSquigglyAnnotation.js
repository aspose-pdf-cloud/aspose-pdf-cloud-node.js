const { PdfApi } = require("asposepdfcloud");
const { SquareAnnotation } = require("asposepdfcloud/src/models/squareAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const result = await pdfApi.getDocumentSquigglyAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getSquigglyAnnotation("PdfWithAnnotations.pdf", annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });