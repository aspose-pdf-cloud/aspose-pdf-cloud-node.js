const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.putAddNewPage("4pages.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });