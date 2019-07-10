const { PdfApi } = require("asposepdfcloud");
const { PdfAType }  = require("asposepdfcloud/src/models/pdfAType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');



pdfApi.getPdfInStorageToPdfA("4pages.pdf", PdfAType.PDFA1A, null)
    .then((result) => {
        console.log(result.response);
    });
