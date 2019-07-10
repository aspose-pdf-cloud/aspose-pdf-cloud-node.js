const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getDocumentHighlightAnnotations("PdfWithAnnotations.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });