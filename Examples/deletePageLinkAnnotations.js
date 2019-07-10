const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/linkAnnotation");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.deletePageLinkAnnotations("PdfWithLinks.pdf", 1, null, null)
    .then((result) => {
        console.log(result.response);
    });