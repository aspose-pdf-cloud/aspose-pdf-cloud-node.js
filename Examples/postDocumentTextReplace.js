const { PdfApi } = require("asposepdfcloud");
const { TextReplaceListRequest } = require("asposepdfcloud/src/models/textReplace");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const name = "4pages.pdf";
const trr = new TextReplaceListRequest();
trr.textReplaces = [textReplace];
trr.startIndex = 0;
trr.countReplace = 0;


pdfApi.postDocumentTextReplace(name, trr, null, null)
    .then((result) => {
        console.log(result.response);
    });