const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getDocumentCircleAnnotations("PdfWithAnnotations.pdf", null, BaseTest.remoteTempFolder)
    .then((result) => {
        console.log(result.response);
    });