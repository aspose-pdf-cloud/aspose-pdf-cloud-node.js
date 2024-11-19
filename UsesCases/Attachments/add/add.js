// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Create an AttachmentInfo object, which maust be inserted into Pdf file
// 4. Perform append attachment into Pdf document using postAddDocumentAttachment() function and AttachmentImfo object
// 5. Check result and perform some actions with result.body object
// All values of variables starting with "YOUR_****" should be replaced by real user values

var PdfApi = require('asposepdfcloud');

var configProps = require('YOUR_CONFIG_FFOLDER/YOUR_CONFIG.json');

var AppSID = configProps.app_sid;
var AppKey = configProps.api_key;
var config = { 'appSid': AppSID, 'apiKey': AppKey, 'debug' : true };

var pdfApi = new PdfApi(config);

const attachment = new AttachmentInfo();
attachment.name = "YOUR_ATTACHMENT_NAME";
attachment.path = "YOUR_ATTACHMENT_PATH";
attachment.description = "YOUR_ATTACHMENT_DESCRIPTION";
attachment.mimeType = "type/YOUR_SUBTYPE";

let result = await pdfApi.postAddDocumentAttachment ("YOUR_PDF_FILE_NAME.pdf", attachment, null, null);

console.log(result.response);

console.log(result.body);