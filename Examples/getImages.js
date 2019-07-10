const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getImages("PdfWithImages2.pdf", 1, null, null);
const imageId = result.body.images.list[0].id;

pdfApi.getImage("PdfWithImages2.pdf", imageId, null, null)
    .then((result) => {
        console.log(result.response);
    });