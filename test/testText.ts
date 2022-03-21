 /**
 *
 * Copyright (c) 2022 Aspose.PDF Cloud
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import * as BaseTest from "./baseTestPdfApi";
import "mocha";
import { Paragraph } from "../src/models/paragraph";
import { TextHorizontalAlignment } from "../src/models/textHorizontalAlignment";
import { LineSpacing } from "../src/models/lineSpacing";
import { VerticalAlignment } from "../src/models/verticalAlignment";
import { WrapMode } from "../src/models/wrapMode";
import { FontStyles } from "../src/models/fontStyles";
var assert = require('assert');

describe("Text Tests", () => {

    const name = "4pages.pdf";
    const x = 0;
    const y = 0;
    const width = 0;
    const height = 0;

    before( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("GetText Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getText(name, x, y, width, height, null, null, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetPageText Test", () => {
        
        it("should return response with code 200", () => {

            const pageNumber = 1;
            const format = [ "First Page", "Second Page" ];

            return BaseTest.getPdfApi().getPageText(name, pageNumber, x, y, width, height, format, null, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutAddText Test", () => {
        
        it("should return response with code 200", async() => {

            let fontName = 'Righteous-Regular.ttf';
            await BaseTest.uploadFile(fontName);

            const paragraph = new Paragraph();
            paragraph.rectangle = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
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
                                font: "Righteous",
                                fontSize: 10,
                                foregroundColor: { a: 0x00, r: 0x00, g: 0xFF, b: 0x00 },
                                backgroundColor: { a: 0x00, r: 0xFF, g: 0x00, b: 0x00},
                                fontStyle: FontStyles.Bold,
                                fontFile: BaseTest.remoteTempFolder + '/' + fontName,
                                underline: false,
                                strikeOut: false,
                                superscript: false,
                                subscript: false,
                            }
                        }
                    ]
                }
            ];

            const pageNumber = 3;

            return BaseTest.getPdfApi().putAddText(name, pageNumber, paragraph, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});