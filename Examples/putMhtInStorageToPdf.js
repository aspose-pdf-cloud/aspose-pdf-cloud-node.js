const { PdfApi } = require("asposepdfcloud");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

pdfApi.putMhtInStorageToPdf("result.pdf", "MhtExample.mht", BaseTest.remoteTempFolder)
    .then((result) => {
        console.log(result.response);
    });