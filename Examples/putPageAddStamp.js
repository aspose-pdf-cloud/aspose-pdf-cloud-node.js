const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/stamp");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const pageNumber = 1;

const stamp = new Stamp();
stamp.type = StampType.Image;
stamp.fileName = "penguins.jpg";
stamp.background = true;
stamp.width = 200;
stamp.height = 200;
stamp.xIndent = 100;
stamp.yIndent = 100;

pdfApi.putPageAddStamp("4pages.pdf", 2, stamp, null, null)
    .then((result) => {
        console.log(result.response);
    });