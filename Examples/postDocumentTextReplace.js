const { PdfApi } = require("asposepdfcloud");
const { TextReplaceListRequest } = require("asposepdfcloud/src/models/textReplace");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

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