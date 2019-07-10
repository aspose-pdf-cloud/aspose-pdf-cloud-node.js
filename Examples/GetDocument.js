const { PdfApi } = require("asposepdfcloud");

console.log('running example');

pdfApi = new PdfApi("XXXX", "XXXXXXX")

pdfApi.getDocument("mpdf.pdf", null, "").then((result) => {
    console.log(result.response);
});