const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const result = await pdfApi.getDocumentInkAnnotations(name, null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getInkAnnotation("PdfWithAnnotations.pdf", annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });