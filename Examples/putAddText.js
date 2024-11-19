// Import necessary classes from the Aspose PDF Cloud library
const { PdfApi } = require("asposepdfcloud");
const { Color } = require("asposepdfcloud/src/models/color");
const { FontStyles } = require("asposepdfcloud/src/models/fontStyles");
const { LineSpacing } = require("asposepdfcloud/src/models/lineSpacing");
const { Paragraph } = require("asposepdfcloud/src/models/paragraph");
const { TextHorizontalAlignment } = require("asposepdfcloud/src/models/textHorizontalAlignment");
const { VerticalAlignment } = require("asposepdfcloud/src/models/verticalAlignment");
const { WrapMode } = require("asposepdfcloud/src/models/wrapMode");

// Create an instance of the PdfApi with the base URL
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

// Set the document name
const fileName = "4pages.pdf";
// Set the page number where the text will be added
const pageNumber = 3;
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
// Create a new paragraph object to represent text paragraphs
const paragraph = new Paragraph()
{
    // Set the line spacing mode to FullSize
    lineSpacing = LineSpacing.FullSize,
    // Set the word wrap mode to wrap by words
    wrapMode = WrapMode.ByWords,
    // Set the horizontal alignment for the text inside the paragraph
    horizontalAlignment = TextHorizontalAlignment.FullJustify,
    // Set the left margin for the paragraph
    leftMargin = 10,
    // Set the right margin for the paragraph
    rightMargin = 10,
    // Set the top margin for the paragraph
    topMargin = 20,
    // Set the bottom margin for the paragraph
    bottomMargin = 20,
    // Define the rectangle area for the paragraph
    rectangle =
    {
        // Lower left x coordinate
        lLX: 100,
        // Lower left y coordinate
        lLY: 100,
        // Upper right x coordinate
        uRX: 200,
        // Upper right y coordinate
        uRY: 200
    },
    // Set the rotation angle of the text in degrees
    rotation = 10,
    // Set the indent for subsequent lines
    subsequentLinesIndent = 20,
    // Set the vertical alignment for the text inside the paragraph
    verticalAlignment = VerticalAlignment.Center,
    // Define an array of text lines for the paragraph
    lines = 
    [
        {
            // Set the line's horizontal alignment to Right
            horizontalAlignment: TextHorizontalAlignment.Right,
            // Define the segments that form the line
            segments: 
            [
                {
                    // Text value for the segment
                    value: "segment 1",
                    // Define the text state for formatting
                    textState: 
                    {
                        // Set font size of the text
                        fontSize: 14,
                        // Set font name of the text
                        font: "Arial",
                        // Set foreground color of the text
                        foregroundColor: color,
                        // Set background color of the text
                        backgroundColor: color,
                        // Set font style of the text
                        fontStyle: FontStyles.Regular,
                        // Font file path in storage (null means default font)
                        fontFile: null,
                        // Set underline for the text
                        underline: true,
                        // Set strikeout for the text
                        strikeOut: false,
                        // Set superscript mode for the text
                        superscript: false,
                        // Set subscript mode for the text
                        subscript: false
                    }
                }
            ]
        }
    ]
}

// Use default storage (null indicates default storage)
const storage = null;
// Set the folder where the document is stored
const folder = "Documents";

// Main function to execute the API call
async function main()
{
    // Reference to the Swagger method for adding text
    // Available at: https://reference.aspose.cloud/pdf/#/Text/PutAddText
    // Call the API to add text to the specified PDF document page
    const result = await api.putAddText(
        fileName,
        pageNumber,
        paragraph,
        folder,
        storage);

    // TODO: Parse the response to handle the result
    console.log(result.body.status); // Log the status of the operation
}

// Execute the main function
main();
