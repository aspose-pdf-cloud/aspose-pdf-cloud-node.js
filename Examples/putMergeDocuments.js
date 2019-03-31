const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/mergeDocuments");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const names = ["4pages.pdf", "PdfWithImages2.pdf", "marketing.pdf"];
const resultName = "MergingResult.pdf";
const mergeDocuments = new MergeDocuments();
mergeDocuments.list = [];
names.forEach((file) => {
    mergeDocuments.list.push(file);
});


pdfApi.putMergeDocuments(resultName, mergeDocuments, null, null)
    .then((result) => {
        console.log(result.response);
    });
