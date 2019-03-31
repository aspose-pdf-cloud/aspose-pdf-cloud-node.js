const { PdfApi } = require("asposepdfcloud");
const { Paragraph } = require("asposepdfcloud/src/models/paragraph");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const paragraph = new Paragraph();
paragraph.rectangle = { lLX: 100, lLY: 100, uRX: 200, uRY: 200 };
paragraph.leftMargin = 10;
paragraph.rightMargin = 10;
paragraph.topMargin = 20;
paragraph.bottomMargin = 20;
paragraph.horizontalAlignment = TextHorizontalAlignment.FullJustify;
paragraph.lineSpacing = LineSpacing.FontSize;
paragraph.rotation = 10;
paragraph.subsequentLinesIndent = 20;
paragraph.verticalAlignment = VerticalAlignment.Center;
paragraph.wrapMode = WrapMode.ByWords;

paragraph.lines = [
    {
        horizontalAlignment: TextHorizontalAlignment.Right,
        segments: [
            {
                value: "segment 1",
                textState: {
                    font: "Arial",
                    fontSize: 10,
                    foregroundColor: { a: 0x00, r: 0x00, g: 0xFF, b: 0x00 },
                    backgroundColor: { a: 0x00, r: 0xFF, g: 0x00, b: 0x00 },
                    fontStyle: FontStyles.Bold
                }
            }
        ]
    }
];

const pageNumber = 3;
const name = "4pages.pdf";

pdfApi.putAddText(name, pageNumber, paragraph, null)
    .then((result) => {
        console.log(result.response);

    });