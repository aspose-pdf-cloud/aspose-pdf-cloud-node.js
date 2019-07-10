const { PdfApi } = require("asposepdfcloud");
const { PolyLineAnnotation } = require("asposepdfcloud/src/models/polyAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const annotation = new PolyLineAnnotation();
annotation.name = "Name";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text";
annotation.subject = "Text Box Subj";
annotation.zIndex = 1;
annotation.title = "Title"
annotation.vertices = [
    { x: 10, y: 10 },
    { x: 20, y: 10 },
    { x: 10, y: 20 },
    { x: 10, y: 10 }
]

pdfApi.postPagePolyLineAnnotations("PdfWithAnnotations.pdf", 1, [annotation], null, null)
    .then((result) => {
        console.log(result.response);
    });