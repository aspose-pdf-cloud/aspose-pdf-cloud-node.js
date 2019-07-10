const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/pdfAType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.putXpsInStorageToPdf("result.pdf", "Simple.xps", null)
    .then((result) => {
        console.log(result.response);
    });