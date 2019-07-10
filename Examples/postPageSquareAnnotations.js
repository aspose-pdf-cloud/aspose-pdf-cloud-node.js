const { PdfApi } = require("asposepdfcloud");
const { SquareAnnotation } = require("asposepdfcloud/src/models/squareAnnotation");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const annotation = new SquareAnnotation();
annotation.name = "Name";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text";
annotation.subject = "Text Box Subj";
annotation.zIndex = 1;
annotation.title = "Title"

pdfApi.postPageSquareAnnotations("PdfWithAnnotations.pdf", 1, [annotation], null, null)
    .then((result) => {
        console.log(result.response);
    });
