const { PdfApi } = require("asposepdfcloud");

console.log('running example');
pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

pdfApi.getDocument("mpdf.pdf", null, "").then((result) => {
    console.log(result.response);
});