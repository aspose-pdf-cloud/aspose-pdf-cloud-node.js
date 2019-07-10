const { PdfApi } = require("asposepdfcloud");
const { RedactionAnnotation } = require("asposepdfcloud/src/models/redactionAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getPageScreenAnnotations("PdfWithScreenAnnotations.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });