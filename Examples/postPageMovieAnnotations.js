const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const annotation = new MovieAnnotation();
annotation.name = "Name";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.zIndex = 1;
annotation.filePath = attachmentFile;
annotation.modified = "01/01/2018 00:00:00.000 AM";


pdfApi.postPageMovieAnnotations("PdfWithAnnotations1.pdf", 1, [annotation], null, null)
    .then((result) => {
        console.log(result.response);
    });