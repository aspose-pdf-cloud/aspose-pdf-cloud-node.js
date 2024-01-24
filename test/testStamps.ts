 /**
 *
 * Copyright (c) 2024 Aspose.PDF Cloud
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
var assert = require('assert');
import { HorizontalAlignment } from "../src/models/horizontalAlignment"; 
import { TextStamp } from "../src/models/textStamp";
import { VerticalAlignment } from "../src/models/verticalAlignment";
import { Rotation } from "../src/models/rotation";
import { TextState } from "../src/models/textState";
import { ImageStamp } from "../src/models/imageStamp";
import { PdfPageStamp } from "../src/models/pdfPageStamp";
import { PageNumberStamp } from "../src/models/pageNumberStamp";

describe("Stamps Tests", () => {

    const name = "PageNumberStamp.pdf";
    const pageNumber = 1;

    const pdfFile = "4pages.pdf";
    const imageFile = "Koala.jpg";

    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentStamps(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Document Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().deleteDocumentStamps(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Page Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getPageStamps(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Page Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().deletePageStamps(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page Text Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            const textState = new TextState();
            textState.fontSize = 14;
            textState.font = 'Arial';

            const stamp = new TextStamp();
            stamp.background = true;
            stamp.leftMargin = 1;
            stamp.rightMargin = 2;
            stamp.topMargin = 3;
            stamp.bottomMargin = 4;
            stamp.horizontalAlignment = HorizontalAlignment.Center;
            stamp.verticalAlignment = VerticalAlignment.Center;
            stamp.opacity = 1;
            stamp.rotate = Rotation.None;
            stamp.rotateAngle = 0;
            stamp.xIndent = 0;
            stamp.yIndent = 0;
            stamp.zoom = 1;
            stamp.textAlignment = HorizontalAlignment.Center;
            stamp.value = "Text Stamp";
            stamp.textState = textState;


            return BaseTest.getPdfApi().postPageTextStamps(name, pageNumber, [stamp], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page Image Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            await BaseTest.uploadFile(imageFile);

            const stamp = new ImageStamp();
            stamp.background = true;
            stamp.leftMargin = 1;
            stamp.rightMargin = 2;
            stamp.topMargin = 3;
            stamp.bottomMargin = 4;
            stamp.horizontalAlignment = HorizontalAlignment.Center;
            stamp.verticalAlignment = VerticalAlignment.Center;
            stamp.opacity = 1;
            stamp.rotate = Rotation.None;
            stamp.rotateAngle = 0;
            stamp.xIndent = 0;
            stamp.yIndent = 0;
            stamp.zoom = 1;
            stamp.fileName = BaseTest.remoteTempFolder + '/' + imageFile;


            return BaseTest.getPdfApi().postPageImageStamps(name, pageNumber, [stamp], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page PdfPage Stamps Test", () => {

        it("should return response with code 200", async () => {
            
            await BaseTest.uploadFile(pdfFile);

            const stamp = new PdfPageStamp();
            stamp.background = true;
            stamp.leftMargin = 1;
            stamp.rightMargin = 2;
            stamp.topMargin = 3;
            stamp.bottomMargin = 4;
            stamp.horizontalAlignment = HorizontalAlignment.Center;
            stamp.verticalAlignment = VerticalAlignment.Center;
            stamp.opacity = 1;
            stamp.rotate = Rotation.None;
            stamp.rotateAngle = 0;
            stamp.xIndent = 0;
            stamp.yIndent = 0;
            stamp.zoom = 1;
            stamp.fileName = BaseTest.remoteTempFolder + '/' + pdfFile;
            stamp.pageIndex = 2;

            return BaseTest.getPdfApi().postPagePdfPageStamps(name, pageNumber, [stamp], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Stamp Test", () => {

        it("should return response with code 200", async () => {
            
            const result = await BaseTest.getPdfApi().getDocumentStamps(name, null, BaseTest.remoteTempFolder)
            const stampId = result.body.stamps.list[0].id;

            return BaseTest.getPdfApi().deleteStamp(name, stampId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Document PageNumber Stamps", () => {

        it("should return response with code 200", async () => {
            
            await BaseTest.uploadFile(pdfFile);

            const stamp = new PageNumberStamp();
            stamp.background = true;
            stamp.leftMargin = 1;
            stamp.rightMargin = 2;
            stamp.topMargin = 3;
            stamp.bottomMargin = 4;
            stamp.horizontalAlignment = HorizontalAlignment.Center;
            stamp.verticalAlignment = VerticalAlignment.Center;
            stamp.opacity = 1;
            stamp.rotate = Rotation.None;
            stamp.rotateAngle = 0;
            stamp.xIndent = 0;
            stamp.yIndent = 0;
            stamp.zoom = 1;
            stamp.startingNumber = 3;
            stamp.value = "Page #";

            const startPageNumber = 2;
            const endPageNumber = 3;

            return BaseTest.getPdfApi().postDocumentPageNumberStamps(name, stamp, startPageNumber, endPageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});