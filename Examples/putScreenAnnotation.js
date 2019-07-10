const { PdfApi } = require("asposepdfcloud");
const { ScreenAnnotation } = require("asposepdfcloud/src/models/screenAnnotation");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');



const annotation = new ScreenAnnotation();
annotation.name = "Name Updated";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.zIndex = 1;
annotation.title = "Title Updated";
annotation.modified = "01/01/2018 12:01:02.000 AM";
annotation.filePath = "4pages.pdf";

const result = await pdfApi.getDocumentScreenAnnotations("PdfWithScreenAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;


pdfApi.putScreenAnnotation(name, annotationId, annotation, null, null)
    .then((result) => {
        console.log(result.response);
    });