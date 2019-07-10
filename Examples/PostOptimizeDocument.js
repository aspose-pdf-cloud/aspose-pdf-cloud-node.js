const { PdfApi } = require("asposepdfcloud");
const {OptimizeOptions} =require("asposepdfcloud/src/models/optimizeOptions")


pdfApi = new PdfApi("XXXX", "XXXXXXX")

    
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