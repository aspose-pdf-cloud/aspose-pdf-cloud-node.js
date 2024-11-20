// Import necessary classes from the Aspose PDF Cloud library
const fs = require("fs");
const { PdfApi } = require("asposepdfcloud");
const { Color } = require("asposepdfcloud/src/models/color");
const { FontStyles } = require("asposepdfcloud/src/models/fontStyles");
const { Rectangle } = require("asposepdfcloud/src/models/rectangle");
const { TextState } = require("asposepdfcloud/src/models/textState");
const { TextReplace } = require("asposepdfcloud/src/models/textReplace");
const { TextReplaceListRequest } = require("asposepdfcloud/src/models/textReplaceListRequest");

// The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

// Set the document name
const fileName = "4pages.pdf";
// Use default storage (null indicates default storage)
const storage = null;
// Set the folder where the document is stored
const folder = "Documents";

/**
 * Replace text of a PDF document using the Aspose.PDF Cloud API.
 *
 * This function performs the following steps:
 * 1. Reads a PDF file from the local file system.
 * 2. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 3. Creates an `TextReplaceListRequest` object with the replacements list.
 * 4. Replace text of PDF document using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 * @returns {Promise<void>} A promise that is resolves after text replacement is complete.
 */
async function postDocumentTextReplace()
{
    // Read file from file system.
    const buffer = fs.readFileSync("testData/" + fileName);
    // Upload file to cloud storage.
    const uploadResponse = await api.uploadFile(folder + "/" +fileName, buffer, storage)

    // Represents color DTO.
    const foregroundColor = new Color();
    // Set an alpha component.
    foregroundColor.a = 255;
    // Set the red component.
    foregroundColor.r = 0;
    // Set the green component.
    foregroundColor.g = 0;
    // Set the blue component.
    foregroundColor.b = 255;

    // Represents color DTO.
    const backgroundColor = new Color();
    // Set an alpha component.
    backgroundColor.a = 100;
    // Set the red component.
    backgroundColor.r = 255;
    // Set the green component.
    backgroundColor.g = 255;
    // Set the blue component.
    backgroundColor.b = 0;

    // Create the new paragraph object to represent text paragraphs.
    const rectangle = new Rectangle();
    // Lower left x coordinate.
    rectangle.lLX = 10;
    // Lower left y coordinate.
    rectangle.lLY = 10;
    // Upper right x coordinate.
    rectangle.uRX = 300;
    // Upper right y coordinate.
    rectangle.uRY = 500;

    // Create the new text state.
    const textState = new TextState();
    // Set font size of the text.
    textState.fontSize = 12;
    // Set font name of the text.
    textState.font = "Arial";
    // Set foreground color of the text.
    textState.foregroundColor = foregroundColor;
    // Set background color of the text.
    textState.backgroundColor = backgroundColor;
    // Set font style of the text.
    textState.fontStyle = FontStyles.Regular;
    // Font file path in storage (null means default font).
    textState.fontFile = null;
    // Set underline for the text.
    textState.underline = true;
    // Set strikeout for the text.
    textState.strikeOut = false;
    // Set superscript mode for the text.
    textState.superscript = false;
    // Set subscript mode for the text.
    textState.subscript = false;

    // Create TextReplace request.
    const textReplace = new TextReplace();
    // Set the text to replace.
    textReplace.oldValue = "Page";
    // Set the replacement text.
    textReplace.newValue = "Replacement";
    // Set the oldValue is regex.
    textReplace.regex = false;
    // Set the text state.
    textReplace.textState = textState;
    // Set the text aligment.
    textReplace.centerTextHorizontally = false;

    // Create TextReplaceListRequest instance.
    const textReplaceList = new TextReplaceListRequest();
    // Set the text replaces list.
    textReplaceList.textReplaces = [textReplace];
    // Set the start index of text items to replace.
    textReplaceList.startIndex = 2;
    // Set the count replacements.
    textReplaceList.countReplace = 2;

    // Swagger method for adding text: https://reference.aspose.cloud/pdf/#/TextReplace/PostDocumentTextReplace
    // Call the API to replace text in the specified PDF document.
    const result = await api.postDocumentTextReplace(
        uploadResponse.body.uploaded[0],
        textReplaceList,
        storage,
        folder);

    // Log the response to console.
    console.log(result.body.status);
}

// Execute the postDocumentTextReplace function
postDocumentTextReplace();
