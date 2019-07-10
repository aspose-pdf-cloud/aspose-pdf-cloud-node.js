const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.putImagesExtractAsTiff("PdfWithImages2.pdf", 1, null, null, null, null, null)
    .then((result) => {
        console.log(result.response);
    });