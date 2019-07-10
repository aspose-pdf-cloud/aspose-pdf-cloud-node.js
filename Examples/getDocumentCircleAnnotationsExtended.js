const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const result = await BaseTest.getPdfApi().getDocumentCircleAnnotations(name, null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getCircleAnnotation(name, annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });