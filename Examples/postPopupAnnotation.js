const { PdfApi } = require("asposepdfcloud");
const { PolygonAnnotation } = require("asposepdfcloud/src/models/polygonAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');



let parentId = "GI5TCMR3GE2TQLBSGM3CYMJYGUWDENRV";

const annotation = new PopupAnnotation();
annotation.name = "Name";
annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
annotation.flags = [AnnotationFlags.Default];
annotation.horizontalAlignment = HorizontalAlignment.Center;
annotation.zIndex = 1;
annotation.modified = "01/01/2018 00:00:00.000 AM";


pdfApi.postPopupAnnotation(name, parentId, annotation, null, null)
    .then((result) => {
        console.log(result.response);
    });