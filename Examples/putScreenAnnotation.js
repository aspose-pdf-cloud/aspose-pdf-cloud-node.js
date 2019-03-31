const { PdfApi } = require("asposepdfcloud");
const { ScreenAnnotation } = require("asposepdfcloud/src/models/screenAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

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