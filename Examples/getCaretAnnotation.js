const { PdfApi } = require("asposepdfcloud");

pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');

const result = await pdfApi.getDocumentCaretAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getCaretAnnotation("PdfWithAnnotations.pdf", annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });