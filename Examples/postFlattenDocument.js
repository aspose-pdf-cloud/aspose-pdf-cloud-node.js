const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.postFlattenDocument("PdfWithAcroForm.pdf", true, null, false, null, null)
    .then((result) => {
        console.log(result.response);
    });