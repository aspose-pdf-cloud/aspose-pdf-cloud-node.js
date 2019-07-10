const { PdfApi } = require("asposepdfcloud");
const { SoundAnnotation } = require("asposepdfcloud/src/models/soundAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const result = await BaseTest.getPdfApi().getDocumentSquareAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;


pdfApi.getSquareAnnotation("PdfWithAnnotations.pdf", annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });