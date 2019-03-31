const { PdfApi } = require("asposepdfcloud");
const {OptimizeOptions} =require("asposepdfcloud/src/models/optimizeOptions")

pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

    
console.log('running example');
let optimizeOptions = new OptimizeOptions();
optimizeOptions.allowReusePageContent = false;
optimizeOptions.compressImages = true;
optimizeOptions.imageQuality = 100;
optimizeOptions.linkDuplcateStreams = true;
optimizeOptions.removeUnusedObjects = true;
optimizeOptions.removeUnusedStreams = true;
optimizeOptions.unembedFonts = true;


pdfApi.postOptimizeDocument("4pages.pdf", optimizeOptions, null, null)
    .then((result) => {
        console.log(result.response);
    });