const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');

pdfApi.getImages("PdfWithImages2.pdf", 1, null, null);
const imageId = result.body.images.list[0].id;

pdfApi.getImage("PdfWithImages2.pdf", imageId, null, null)
    .then((result) => {
        console.log(result.response);
    });