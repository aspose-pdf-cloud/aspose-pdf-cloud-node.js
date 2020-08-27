 /**
 *
 *   Copyright (c) 2020 Aspose Pty Ltd
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
import { TextHeader } from "../src/models/textHeader";
import { HorizontalAlignment } from "../src/models/horizontalAlignment";
import { Rotation } from "../src/models/rotation";
import { FontStyles } from "../src/models/fontStyles";
import { TextFooter } from "../src/models/textFooter";
import { ImageHeader } from "../src/models/imageHeader";
import { ImageFooter } from "../src/models/imageFooter";
var assert = require('assert');

describe("Header Footer Tests", () => {

    const name = "4pages.pdf";
    
    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Post Document Text Header Test", () => {

        it("should return response with code 200", async () => {
            
            const header = new TextHeader();
            header.background = true;
            header.leftMargin = 1;
            header.rightMargin = 2
            header.topMargin = 20;
            header.horizontalAlignment = HorizontalAlignment.Center;
            header.opacity = 1;
            header.rotate = Rotation.None;
            header.rotateAngle = 10;
            header.xIndent = 0;
            header.yIndent = 0;
            header.zoom = 1;
            header.textAlignment = HorizontalAlignment.Center;
            header.value = "Header";
            header.textState = {
                font: "Arial Bold",
                fontSize: 14,
                foregroundColor: { a: 0x00, r: 0x00, g: 0xFF, b: 0x00 },
                backgroundColor: { a: 0x00, r: 0xFF, g: 0x00, b: 0x00},
                fontStyle: FontStyles.Bold,
                fontFile: null
            };

            const startPage = 2;
            const endPage = 3;

            return BaseTest.getPdfApi().postDocumentTextHeader(name, header, startPage, endPage, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });


    describe("Post Document Text Footer Test", () => {

        it("should return response with code 200", async () => {
            
            const footer = new TextFooter();
            footer.background = true;
            footer.leftMargin = 1;
            footer.rightMargin = 2
            footer.bottomMargin = 20;
            footer.horizontalAlignment = HorizontalAlignment.Center;
            footer.opacity = 1;
            footer.rotate = Rotation.None;
            footer.rotateAngle = 10;
            footer.xIndent = 0;
            footer.yIndent = 0;
            footer.zoom = 1;
            footer.textAlignment = HorizontalAlignment.Center;
            footer.value = "Footer";
            footer.textState = {
                font: "Arial Bold",
                fontSize: 14,
                foregroundColor: { a: 0x00, r: 0x00, g: 0xFF, b: 0x00 },
                backgroundColor: { a: 0x00, r: 0xFF, g: 0x00, b: 0x00},
                fontStyle: FontStyles.Bold,
                fontFile: null
            };

            const startPage = 2;
            const endPage = 3;

            return BaseTest.getPdfApi().postDocumentTextFooter(name, footer, startPage, endPage, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Document Image Header Test", () => {

        it("should return response with code 200", async () => {
            const image = "Koala.jpg";
            await BaseTest.uploadFile(image);

            const header = new ImageHeader();
            header.background = true;
            header.leftMargin = 1;
            header.rightMargin = 2
            header.topMargin = 20;
            header.horizontalAlignment = HorizontalAlignment.Center;
            header.opacity = 1;
            header.rotate = Rotation.None;
            header.rotateAngle = 10;
            header.xIndent = 0;
            header.yIndent = 0;
            header.zoom = 1;
            header.fileName = BaseTest.remoteTempFolder + '/' + image;
            

            const startPage = 2;
            const endPage = 3;

            return BaseTest.getPdfApi().postDocumentImageHeader(name, header, startPage, endPage, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Document Image Footer Test", () => {

        it("should return response with code 200", async () => {
            const image = "Koala.jpg";
            await BaseTest.uploadFile(image);

            const footer = new ImageFooter();
            footer.background = true;
            footer.leftMargin = 1;
            footer.rightMargin = 2
            footer.bottomMargin = 20;
            footer.horizontalAlignment = HorizontalAlignment.Center;
            footer.opacity = 1;
            footer.rotate = Rotation.None;
            footer.rotateAngle = 10;
            footer.xIndent = 0;
            footer.yIndent = 0;
            footer.zoom = 1;
            footer.fileName = BaseTest.remoteTempFolder + '/' + image;

            const startPage = 2;
            const endPage = 3;

            return BaseTest.getPdfApi().postDocumentImageFooter(name, footer, startPage, endPage, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
    
});