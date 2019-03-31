const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const imageName = "Koala.jpg";


pdfApi.postInsertImage("4pages.pdf", 2, 10, 10, 100, 100, imageName, null, null)
    .then((result) => {
        console.log(result.response);
});