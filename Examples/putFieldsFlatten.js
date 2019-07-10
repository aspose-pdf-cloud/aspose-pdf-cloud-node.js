const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.putFieldsFlatten("PdfWithAcroForm.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });