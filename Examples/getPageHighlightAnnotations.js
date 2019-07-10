const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getPageHighlightAnnotations("PdfWithAnnotations.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });