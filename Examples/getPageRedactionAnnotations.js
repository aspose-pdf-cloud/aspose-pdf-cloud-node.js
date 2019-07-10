const { PdfApi } = require("asposepdfcloud");
const { DocumentProperty } = require("asposepdfcloud/src/models/DocumentProperty");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getPageRedactionAnnotations("PdfWithAnnotations.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });