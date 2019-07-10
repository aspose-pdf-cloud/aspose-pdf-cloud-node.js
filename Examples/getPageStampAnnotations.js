const { PdfApi } = require("asposepdfcloud");
const { SquigglyAnnotation } = require("asposepdfcloud/src/models/squigglyAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getPageStampAnnotations("PdfWithAnnotations.pdf", 2, null, null)
    .then((result) => {
        console.log(result.response);
    });