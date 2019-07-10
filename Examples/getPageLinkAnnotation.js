const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/lineAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const result = await pdfApi.getPageLinkAnnotations("PdfWithLinks.pdf", 1, null, null);
linkId = result.body.links.list[0].id;
pdfApi.getPageLinkAnnotation("PdfWithLinks.pdf", 1, linkId, null, null)
    .then((result) => {
        console.log(result.response);
    });