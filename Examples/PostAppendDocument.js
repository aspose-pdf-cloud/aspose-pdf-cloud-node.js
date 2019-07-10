const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")
console.log('running example');



pdfApi.postAppendDocument("4pages.pdf", null, "4pages.pdf", 1, 2, null, null)
    .then((result) => {
        console.log(result.response);
    });