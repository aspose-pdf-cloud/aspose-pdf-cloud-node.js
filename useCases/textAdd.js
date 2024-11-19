// Import necessary classes from the Aspose PDF Cloud library
const fs = require("fs");
const { PdfApi } = require("../src/api/api");
const { Color } = require("../src/models/color");
const { FontStyles } = require("../src/models/fontStyles");
const { LineSpacing } = require("../src/models/lineSpacing");
const { Paragraph } = require("../src/models/paragraph");
const { TextHorizontalAlignment } = require("../src/models/textHorizontalAlignment");
const { VerticalAlignment } = require("../src/models/verticalAlignment");
const { WrapMode } = require("../src/models/wrapMode");
const { TextLine } = require("asposepdfcloud/src/models/textLine");
const { Segment } = require("asposepdfcloud/src/models/segment");
const { Rectangle } = require("asposepdfcloud/src/models/rectangle");
const { TextState } = require("asposepdfcloud/src/models/textState");

// The initialization assumes that the necessary credentials (Application ID and Application Key) from https://dashboard.aspose.cloud/
const api = new PdfApi("YOUR_API_SID", "YOUR_API_KEY");

// Set the document name
const fileName = "4pages.pdf";
// Set the page number where the text will be added
const pageNumber = 3;
// Use default storage (null indicates default storage)
const storage = null;
// Set the folder where the document is stored
const folder = "Documents";

/**
 * Add text to a PDF document page using the Aspose.PDF Cloud API.
 *
 * This function performs the following steps:
 * 1. Reads a PDF file from the local file system.
 * 2. Uploads the PDF file to the Aspose.PDF Cloud storage.
 * 3. Creates an `Paragraph` object with the inserted text.
 * 4. Put text on the third page of PDF document using the Aspose.PDF Cloud API.
 * 5. Logs the result to the console.
 *
 * @returns {Promise<void>} A Promise that resolves when the adding text is complete.
 */
async function putAddText()
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

    // Create the new paragraph object to represent text paragraphs
    const rectangle = new Rectangle();
    // Lower left x coordinate
    rectangle.lLX = 10;
    // Lower left y coordinate
    rectangle.lLY = 10;
    // Upper right x coordinate
    rectangle.uRX = 300;
    // Upper right y coordinate
    rectangle.uRY = 500;

    // Create the new text state.
    const textState = new TextState();
    // Set font size of the text
    textState.fontSize = 20;
    // Set font name of the text
    textState.font = "Arial";
    // Set foreground color of the text
    textState.foregroundColor = foregroundColor;
    // Set background color of the text
    textState.backgroundColor = backgroundColor;
    // Set font style of the text
    textState.fontStyle = FontStyles.Regular;
    // Font file path in storage (null means default font)
    textState.fontFile = null;
    // Set underline for the text
    textState.underline = true;
    // Set strikeout for the text
    textState.strikeOut = false;
    // Set superscript mode for the text
    textState.superscript = false;
    // Set subscript mode for the text
    textState.subscript = false;

    // Create the new text segment.
    const segment = new Segment();
    // Text value for the segment
    segment.value = "segment text 1 with text state";
    // Define the text state for formatting
    segment.textState = textState;

    // Create the new text line.
    const textLine = new TextLine();
    // Set the line's horizontal alignment to Right
    textLine.horizontalAlignment = TextHorizontalAlignment.Right;
    // Define the segments that form the line
    textLine.segments = [segment];

    // Create new text paragraph.
    const paragraph = new Paragraph();
    // Set the line spacing mode to FullSize
    paragraph.lineSpacing = LineSpacing.FullSize;
    // Set the word wrap mode to wrap by words
    paragraph.wrapMode = WrapMode.ByWords;
    // Set the horizontal alignment for the text inside the paragraph
    paragraph.horizontalAlignment = TextHorizontalAlignment.FullJustify;
    // Set the left margin for the paragraph
    paragraph.leftMargin = 100;
    // Set the right margin for the paragraph
    paragraph.rightMargin = 100;
    // Set the top margin for the paragraph
    paragraph.topMargin = 200;
    // Set the bottom margin for the paragraph
    paragraph.bottomMargin = 200;
    // Define the rectangle area for the paragraph
    paragraph.rectangle = rectangle;
    // Set the rotation angle of the text in degrees
    paragraph.rotation = 10,
    // Set the indent for subsequent lines
    paragraph.subsequentLinesIndent = 30,
    // Set the vertical alignment for the text inside the paragraph
    paragraph.vercolorticalAlignment = VerticalAlignment.Center,
    // Define an array of text lines for the paragraph
    paragraph.lines = [textLine];

    // Swagger method for adding text: https://reference.aspose.cloud/pdf/#/Text/PutAddText
    // Call the API to add text to the specified PDF document page
    const result = await api.putAddText(
        uploadResponse.body.uploaded[0],
        pageNumber,
        paragraph,
        folder,
        storage);

    // Log the response to console.
    console.log(result.body.status); // Log the status of the operation
}

// Execute the putAddText function
putAddText();
