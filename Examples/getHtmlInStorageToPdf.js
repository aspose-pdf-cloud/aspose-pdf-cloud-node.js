const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/pdfAType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.getHtmlInStorageToPdf("HtmlWithImage.zip", "HtmlWithImage.html", 650, 250)
    .then((result) => {
        console.log(result.response);
    });