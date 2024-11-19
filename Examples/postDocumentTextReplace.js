const { PdfApi } = require("asposepdfcloud");
const { TextState } = require("asposepdfcloud/src/models/textState");
const { FontStyles } = require("asposepdfcloud/src/models/fontStyles");
const { Color } = require("asposepdfcloud/src/models/color");
const { TextReplace } = require("asposepdfcloud/src/models/textReplace");
const { Rectangle } = require("asposepdfcloud/src/models/rectangle");
const { TextReplaceListRequest } = require("asposepdfcloud/src/models/textReplaceListRequest");

const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name.
const fileName = "4pages.pdf";
// Represents color DTO.
const color = new Color
{
    // Set an alpha component.
    a = 0,
    // Set the red component.
    r = 255,
    // Set the green component.
    g = 255,
    // Set the blue component.
    b = 255
};
// Represents a text state of a text
const textState = new TextState
{
    // Set font size of the text.
    fontSize = 14;
    // Set font name of the text.
    font = "Arial";
    // Set foreground color of the text.
    foregroundColor = color;
    // Set background color of the text.
    backgroundColor = color;
    // Set font style of the text.
    fontStyle = FontStyles.Regular;
    // Set path of font file in storage.
    fontFile = "";
    // Set underline of the text.
    underline = true;
    // Set strikeout of the text.
    strikeOut = false;
    // Set superscript mode of the text.
    superscript = false;
    // Set subscript mode of the text.
    subscript = false;
};
// Represents rectangle DTO.
const rect = new Rectangle
{
    // Set the X-coordinate of lower-left corner.
    lLX = 0;
    // Set the Y-coordinate of lower-left corner.
    lLY = 0;
    // Set the X-coordinate of upper-right corner.
    uRX = 400;
    // Set the Y-coordinate of upper-right corner.
    uRY = 400;
};
// Single text replacement setting.
const textReplace = new TextReplace
{
    // Set an original text.
    oldValue = "Page",
    // Set the new text.
    newValue = "Replacement",
    // Set a value indicating whether search text is regular expression.
    regex = false,
    // Set the text properties of a new text.
    textState = textState,
    // Set the rectangle area where searched original text.
    rect = rect,
    // Set the text after replacement is centered horizontally relative to the text being replaced.
    centerTextHorizontally = true
};
// Multiple text replacements request.
const textReplaceList = new TextReplaceListRequest
{
    // Set the list of text replacement settings.
    textReplaces = [ textReplace ],
    // Set the name of font to use if requested font is not embedded into document.
    defaultFont = "Arial";
    // Set the index of first match to be replaced.
    startIndex = 0;
    // Set the number of matches to be replaced.
    countReplace = 5;   

};
// Use default storage.
const storage = null;
// Set document folder.
const folder = "Documents";

async function main()
{
    // Swagger method definition available at
    //     https://reference.aspose.cloud/pdf/#/TextReplace/PostDocumentTextReplace
    // Document's replace text method.
    const result = await api.postDocumentTextReplace(
        fileName,
        textReplaceList,
        storage,
        folder);

    // todo: parse response
    console.log(result.body.status);
}

main();
