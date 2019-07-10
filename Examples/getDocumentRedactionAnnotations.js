const { PdfApi } = require("asposepdfcloud");
const { DocumentProperty } = require("asposepdfcloud/src/models/DocumentProperty");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getDocumentRedactionAnnotations("PdfWithAnnotations.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });