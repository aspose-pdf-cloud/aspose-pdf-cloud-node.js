const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/linkAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');



const linkAnnotation = new LinkAnnotation();
linkAnnotation.actionType = LinkActionType.GoToURIAction;
linkAnnotation.action = "https://products.aspose.cloud/pdf";
linkAnnotation.rect = { lLX: 100, lLY: 100, uRX: 500, uRY: 500 };

pdfApi.putLinkAnnotation("PdfWithLinks.pdf", linkId, linkAnnotation, null, null)
    .then((result) => {
        console.log(result.response);
    });