const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const result = await pdfApi.getImages("PdfWithImages2.pdf", 1, null, null);
imageId = result.body.images.list[0].id;

pdfApi.putImageExtractAsJpeg("PdfWithImages2.pdf", imageId, null, null, null, null, null)
    .then((result) => {
        console.log(result.response);
    });