// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Initialize neccessary values for append image
// 4. Perform the inserting image in Pdf document using postInsertImage() function and new image file initialized values
// 6. Check result and perform some actions with result.body object
// All values of variables starting with "YOUR_****" should be replaced by real user values


var PdfApi = require('asposepdfcloud');

var configProps = require('YOUR_CONFIG_FFOLDER/YOUR_CONFIG.json');

var AppSID = configProps.app_sid;
var AppKey = configProps.api_key;
var config = { 'appSid': AppSID, 'apiKey': AppKey, 'debug' : true };

pdfApi = new PdfApi(AppSID, AppKey);

let fileName = "YOUR_PDF_DOCUMENT.pdf";

let pageNum = "YOUR_PAGE_NUMBER";

let posLeftDownX = "YOUR_IMAGE_LLX";
let posLeftDownY = "YOUR_IMAGE_LLY";

let posRighUptX = "YOUR_IMAGE_URX";
let posRightUpY = "YOUR_IMAGE_URY";

let imageFile = "YOUR_IMAGE_FOLDER_AND_PATH";

let resultAppend = await pdfApi.postInsertImage (fileName, pageNum, posLeftDownX, posLeftDownY, posRighUptX, posRightUpY, imageFile, null, null, null);

console.log(resultAppend.response);

console.log(resultAppend.body);