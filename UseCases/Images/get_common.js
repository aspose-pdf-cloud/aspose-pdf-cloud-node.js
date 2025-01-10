// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving image Id from Pdf document using getIimages() function
// 5. Perform the reading image from Pdf document using getImage() function and image ID value
// 6. Check result and perform some actions with result.body object
// 7. Perform extrating image in Png format from Pdf document into local folder using putImageExtractAsPng() function and image ID value
// 8. Check result and perform some actions with result.body object
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

let resultImage = await pdfApi.getImage(fileName, imageID, null, null);

console.log(resultImage.response);

console.log(resultImage.body);

let extractResult = await pdfApi.putImageExtractAsPng(fileName, imageID, 512, 512, null, null, 'YOUR_DESTINATION_FOLDER');

console.log(extractResult.response);

console.log(extractResult.body);