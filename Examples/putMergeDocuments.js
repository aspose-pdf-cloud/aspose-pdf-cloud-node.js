const { PdfApi } = require("asposepdfcloud");
const { MergeDocuments } = require("asposepdfcloud/src/models/mergeDocuments");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";
// Set result file name.
const resultName = "MergingResult.pdf";
// Create merge request.
const mergeDocuments = new MergeDocuments();
mergeDocuments.list = [folder + "/4pages.pdf", folder + "/PdfWithImages2.pdf", folder + "/marketing.pdf"];

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/Merge/PutMergeDocuments
    // Merge a list of documents.
    const result = await api.putMergeDocuments(resultName, mergeDocuments, storage, folder);
    console.log(result.body.status);
}

main();
