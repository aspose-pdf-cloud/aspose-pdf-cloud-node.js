const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/pdfAType");


pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getXslFoInStorageToPdf("XslfoExample.xslfo")
    .then((result) => {
        assert.equal(result.response.statusCode, 200);
    });