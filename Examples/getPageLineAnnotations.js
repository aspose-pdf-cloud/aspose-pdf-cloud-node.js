const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/inkAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getPageLineAnnotations("PdfWithAnnotations.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });