const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/pdfAType");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.putHtmlInStorageToPdf("fromHtml.pdf", "HtmlWithImage.zip", "HtmlWithImage.html", 650, 250, null, null,
    null, null, null,null)
    .then((result) => {
        console.log(result.response);
    });