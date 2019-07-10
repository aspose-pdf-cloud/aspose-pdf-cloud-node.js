const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/stamp");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const result = await pdfApi.getDocumentPolyLineAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getPolyLineAnnotation(name, annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });