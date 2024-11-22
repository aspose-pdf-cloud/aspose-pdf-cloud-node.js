// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create a Storage API object for uploading Pdf file
// 3. Create an object to connect to the Pdf.Cloud API
// 4. Upload your document file using PutCreate() function of the Storage API object
// 5. To extract attachments from a PDF document, using getDocumentAttachmentByIndex() function
// 6. Download the result if need it
// All values of variables starting with "YOUR_****" should be replaced by real user values

var fs = require('fs');
var PdfApi = require('asposepdfcloud');
var StorageApi = require('asposestoragecloud');

var configProps = require('YOUR_CONFIG_FFOLDER/YOUR_CONFIG.json');

var data_path = 'YOUR_DATA_FOLDER_WITH_PATH/';

var AppSID = configProps.app_sid;
var AppKey = configProps.api_key;
var config = { 'appSid': AppSID, 'apiKey': AppKey, 'debug' : true };

var storageApi = new StorageApi(config);

var pdfApi = new PdfApi(config);

var fileName = "YOUR_ATTACHMENT_FILE_NAME";
var name = fileName + ".pdf";
var attachmentIndex = 1;

storageApi.PutCreate(name, null, null, data_path + name , async function(responseMessage)
{

	let result = await pdfApi.getDownloadDocumentAttachmentByIndex(name, attachmentIndex, null, null);

	var outfilename = fileName + attachmentIndex + ".text";
	var writeStream = fs.createWriteStream(data_path + outfilename);
	writeStream.write(result.body);

});