const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/linkAnnotation");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const linkAnnotation = new LinkAnnotation();
linkAnnotation.actionType = LinkActionType.GoToURIAction;
linkAnnotation.action = "https://products.aspose.cloud/pdf";
linkAnnotation.rect = { lLX: 100, lLY: 100, uRX: 500, uRY: 500 };

pdfApi.postPageLinkAnnotations("PdfWithLinks.pdf", 1, [linkAnnotation], null, null)
    .then((result) => {
        console.log(result.response);
    });