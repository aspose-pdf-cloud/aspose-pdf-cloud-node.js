const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/pdfAType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getFields("PdfWithAcroForm.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });