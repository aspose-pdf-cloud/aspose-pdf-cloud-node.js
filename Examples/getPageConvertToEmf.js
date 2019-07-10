const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getPageConvertToEmf("4pages.pdf", 1, null, null, null)
    .then((result) => {
        console.log(result.response);
    });