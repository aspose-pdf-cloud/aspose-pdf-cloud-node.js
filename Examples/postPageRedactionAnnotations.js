const { PdfApi } = require("asposepdfcloud");
const { DocumentProperty } = require("asposepdfcloud/src/models/DocumentProperty");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');

const annotation = new RedactionAnnotation();
annotation.name = "Name";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.zIndex = 1;
annotation.quadPoint = [
    {x: 10, y: 40},
    {x: 30, y: 40}
];
annotation.modified = "01/01/2018 00:00:00.000 AM";


pdfApi.postPageRedactionAnnotations("PdfWithAnnotations.pdf", 1, [annotation], null, null)
                .then((result) => {
                    console.log(result.response);
                });