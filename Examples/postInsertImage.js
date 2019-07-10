const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const imageName = "Koala.jpg";


pdfApi.postInsertImage("4pages.pdf", 2, 10, 10, 100, 100, imageName, null, null)
    .then((result) => {
        console.log(result.response);
});