const { PdfApi } = require("asposepdfcloud");
const { SquareAnnotation } = require("asposepdfcloud/src/models/squareAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const annotation = new SquareAnnotation();
annotation.name = "Name Updated";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text Updated";
annotation.subject = "Subj Updated";
annotation.zIndex = 1;
annotation.title = "Title Updated"

const result = await pdfApi.getDocumentSquareAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.getPdfApi().putSquareAnnotation(name, annotationId, annotation, null, null)
    .then((result) => {
        console.log(result.response);
    });