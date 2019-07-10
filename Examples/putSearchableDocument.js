const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/movieAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const lang = "rus,eng";

pdfApi.putSearchableDocument("rusdoc.pdf", null, null, lang)
    .then((result) => {
        console.log(result.response);
    });