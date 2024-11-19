// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving image Id from Pdf document using getIimages() function
// 5. Perform the unpdating image in Pdf document using putReplaceImage() function, image ID value and new image file
// 6. Check result and perform some actions with result.body object
// All values of variables starting with "YOUR_****" should be replaced by real user values


var PdfApi = require('asposepdfcloud');

var configProps = require('YOUR_CONFIG_FFOLDER/YOUR_CONFIG.json');

var AppSID = configProps.app_sid;
var AppKey = configProps.api_key;
var config = { 'appSid': AppSID, 'apiKey': AppKey, 'debug' : true };

pdfApi = new PdfApi(AppSID, AppKey);

let fileName = "YOUR_PDF_DOCUMENT.pdf";

let resultImageId = await pdfApi.getImages(fileName, 1, null, null);
const imageID = resultImageId.body.images.list[0].id;

let resultUpdate = await pdfApi.putReplaceImage (fileName, imageID, "YOUR_NEW_IMAGE_FOLDER_AND_NAME", null, null, null);

console.log(resultUpdate.response);

console.log(resultUpdate.body);