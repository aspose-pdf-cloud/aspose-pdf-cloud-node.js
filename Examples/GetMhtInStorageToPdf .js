const { PdfApi } = require("asposepdfcloud");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getMhtInStorageToPdf("MhtExample.mht")
    .then((result) => {
        console.log(result.response);
    });