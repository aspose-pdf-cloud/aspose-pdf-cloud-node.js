const { PdfApi } = require("asposepdfcloud");

pdfApi = new PdfApi("XXXX", "XXXXXXX")



console.log('running example');
pdfApi.postSplitDocument("4pages.pdf", null, null, null, null, null)
    .then((result) => {
        console.log(result.response);
    });