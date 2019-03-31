const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');
const annotation = new FileAttachmentAnnotation();
annotation.name = "Name";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text";
annotation.subject = "Text Box Subj";
annotation.zIndex = 1;
annotation.title = "Title";
annotation.modified = "01/01/2018 00:00:00.000 AM";
annotation.fileName = "4pages.pdf";

const result = await pdfApi.getDocumentFileAttachmentAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;
pdfApi.putFileAttachmentAnnotationDataExtract("PdfWithAnnotations.pdf", annotationId, null, null, null)
    .then((result) => {
        console.log(result.response);
    });