 /**
 *
 *   Copyright (c) 2019 Aspose.Pdf for Cloud
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
import { Stamp } from "../src/models/stamp";
import { StampType } from "../src/models/stampType";
var assert = require('assert');

describe("Pages Tests", () => {

    const name = "4pages.pdf";
    
    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("DeletePage Test", () => {
        
        it("should return response with code 200", () => {

            const pageNumber = 3;

            return BaseTest.getPdfApi().deletePage(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetPage Test", () => {
        
        it("should return response with code 200", () => {

            const pageNumber = 3;

            return BaseTest.getPdfApi().getPage(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetPages Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getPages(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetWordsPerPage Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getWordsPerPage(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostMovePage Test", () => {
        
        it("should return response with code 200", () => {
            const pageNumber = 3;
            const newIndex = 2;

            return BaseTest.getPdfApi().postMovePage(name, pageNumber, newIndex, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutAddNewPage Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().putAddNewPage(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutPageAddStamp Test", () => {
        
        it("should return response with code 200", async () => {

            const stampFile = "Penguins.jpg";
            await BaseTest.uploadFile(stampFile);
            
            const pageNumber = 1;

            const stamp = new Stamp(); 
            stamp.type = StampType.Image;
            stamp.fileName = BaseTest.remoteTempFolder + "/" + stampFile;
            stamp.background = true;
            stamp.width = 200;
            stamp.height = 200;
            stamp.xIndent = 100;
            stamp.yIndent = 100;
            
            return BaseTest.getPdfApi().putPageAddStamp(name, pageNumber, stamp, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});