const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/freeTextAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');

const freeTextAnnotation = new FreeTextAnnotation();
freeTextAnnotation.name = "Test Free Text";
freeTextAnnotation.textStyle = textStyle;
freeTextAnnotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
freeTextAnnotation.flags = [AnnotationFlags.Default];
freeTextAnnotation.horizontalAlignment = HorizontalAlignment.Center;
freeTextAnnotation.intent = FreeTextIntent.FreeTextTypeWriter;
freeTextAnnotation.richText = "Rich Text";
freeTextAnnotation.subject = "Text Box Subj";
freeTextAnnotation.zIndex = 1;
freeTextAnnotation.justification = Justification.Center;
freeTextAnnotation.title = "Title"


pdfApi.postPageFreeTextAnnotations("PdfWithAnnotations.pdf", 1, [freeTextAnnotation], null, null)
    .then((result) => {
        console.log(result.response);
    });