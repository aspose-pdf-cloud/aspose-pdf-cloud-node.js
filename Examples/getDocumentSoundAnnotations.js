const { PdfApi } = require("asposepdfcloud");
const { ScreenAnnotation } = require("asposepdfcloud/src/models/screenAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getDocumentSoundAnnotations( "PdfWithAnnotations.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });