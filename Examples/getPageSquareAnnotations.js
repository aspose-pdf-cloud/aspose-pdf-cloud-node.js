const { PdfApi } = require("asposepdfcloud");
const { SoundAnnotation } = require("asposepdfcloud/src/models/soundAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getPageSquareAnnotations("PdfWithAnnotations.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });