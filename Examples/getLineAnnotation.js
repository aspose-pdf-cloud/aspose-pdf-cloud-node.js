const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/inkAnnotation");




pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const result = awaitpdfApi.getDocumentLineAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getLineAnnotation(name, annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });