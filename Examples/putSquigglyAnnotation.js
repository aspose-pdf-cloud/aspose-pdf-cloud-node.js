const { PdfApi } = require("asposepdfcloud");
const { SquigglyAnnotation } = require("asposepdfcloud/src/models/squigglyAnnotation");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const annotation = new SquigglyAnnotation();
annotation.name = "Name Updated";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text Updated";
annotation.subject = "Subj Updated";
annotation.zIndex = 1;
annotation.title = "Title Updated"
annotation.quadPoints = [
    {x: 10, y: 10},
    {x: 20, y: 10},
    {x: 10, y: 20},
    {x: 10, y: 10}
];
annotation.modified = "01/01/2018 00:00:00.000 AM";


const result = await pdfApi.getDocumentSquigglyAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.putSquigglyAnnotation("PdfWithAnnotations.pdf", annotationId, annotation, null, null)
    .then((result) => {
        console.log(result.response);
    });