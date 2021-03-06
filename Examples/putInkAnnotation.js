const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/inkAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const annotation = new InkAnnotation();
annotation.name = "Name Updated";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text Updated";
annotation.subject = "Subj Updated";
annotation.zIndex = 1;
annotation.title = "Title Updated"
annotation.inkList = [
    [
        { x: 10, y: 40 },
        { x: 30, y: 40 }
    ],
    [
        { x: 10, y: 20 },
        { x: 20, y: 20 },
        { x: 30, y: 20 }
    ]
];
annotation.capStyle = CapStyle.Rounded;
annotation.modified = "01/01/2018 00:00:00.000 AM";

const result = await pdfApi.getDocumentInkAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.putInkAnnotation("PdfWithAnnotations.pdf", annotationId, annotation, null, null)
    .then((result) => {
        console.log(result.response);
    });