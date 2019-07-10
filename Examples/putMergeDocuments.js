const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/mergeDocuments");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

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
