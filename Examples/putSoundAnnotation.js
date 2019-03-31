const { PdfApi } = require("asposepdfcloud");
const { SoundAnnotation } = require("asposepdfcloud/src/models/soundAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const annotation = new SoundAnnotation();
annotation.name = "Name Updated";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.richText = "Rich Text Updated";
annotation.subject = "Text Box Subj Updated";
annotation.zIndex = 1;
annotation.title = "Title Updated";
annotation.modified = "01/01/2018 12:01:02.000 AM";
annotation.filePath = BaseTest.remoteTempFolder + "/" + attachmentFile;

const result = await pdfApi.getDocumentSoundAnnotations("PdfWithAnnotations.pdf", null, null)
const annotationId = result.body.annotations.list[0].id;

pdfApi.putSoundAnnotation("PdfWithAnnotations.pdf", annotationId, annotation, null, null)
    .then((result) => {
        console.log(result.response);
    });