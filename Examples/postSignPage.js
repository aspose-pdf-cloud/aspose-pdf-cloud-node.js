const { PdfApi } = require("asposepdfcloud");
const { ScreenAnnotation } = require("asposepdfcloud/src/models/screenAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const signature = new Signature();
signature.authority = "Sergey Smal";
signature.contact = "test@mail.ru"
signature.date = "08/01/2012 12:15:00.000 PM";
signature.formFieldName = "Signature1";
signature.location = "Ukraine";
signature.password = "test1234";
signature.rectangle = { lLX: 100, lLY: 100, uRX: 500, uRY: 500 };
signature.signaturePath = "test1234.pfx";
signature.signatureType = SignatureType.PKCS7;
signature.visible = true;
signature.showProperties = false;

pdfApi.postSignPage("BlankWithSignature.pdf", 1, signature, null, null)
    .then((result) => {
        console.log(result.response);
    });