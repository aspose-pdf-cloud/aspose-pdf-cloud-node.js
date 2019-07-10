const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');
pdfApi.putPageConvertToBmp("4pages.psd", 1, "page.bmp", null, null, null)
    .then((result) => {
        console.log(result.response);
    });