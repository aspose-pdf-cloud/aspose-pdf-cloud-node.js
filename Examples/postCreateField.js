const { PdfApi } = require("asposepdfcloud");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.postCreateField("PdfWithAcroForm.pdf", 1, field, null, null)
    .then((result) => {
        console.log(result.response);
    });