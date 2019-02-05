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
var assert = require('assert');

describe("Page Convert To Image Tests", () => {

    const name = "4pages.pdf";
    const pageNumber = 2;

    before( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("To TIFF Tests", () => {

        describe("GetPageConvertToTiff Test", () => {
            
            it("should return response with code 200", () => {

                return BaseTest.getPdfApi().getPageConvertToTiff(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPageConvertToTiff Test", () => {
            
            it("should return response with code 200", () => {

                const resultFile = "page.tiff";
                const outPath = BaseTest.remoteTempFolder + "/" + resultFile;

                return BaseTest.getPdfApi().putPageConvertToTiff(name, pageNumber, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("To JPEG Tests", () => {

        describe("GetPageConvertToJpeg Test", () => {
            
            it("should return response with code 200", () => {

                return BaseTest.getPdfApi().getPageConvertToJpeg(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPageConvertToJpeg Test", () => {
            
            it("should return response with code 200", () => {

                const resultFile = "page.jpg";
                const outPath = BaseTest.remoteTempFolder + "/" + resultFile;

                return BaseTest.getPdfApi().putPageConvertToJpeg(name, pageNumber, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });

    describe("To PNG Tests", () => {

        describe("GetPageConvertToPng Test", () => {
            
            it("should return response with code 200", () => {

                return BaseTest.getPdfApi().getPageConvertToPng(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPageConvertToPng Test", () => {
            
            it("should return response with code 200", () => {

                const resultFile = "page.png";
                const outPath = BaseTest.remoteTempFolder + "/" + resultFile;

                return BaseTest.getPdfApi().putPageConvertToPng(name, pageNumber, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("To EMF Tests", () => {

        describe("GetPageConvertToEmf Test", () => {
            
            it("should return response with code 200", () => {

                return BaseTest.getPdfApi().getPageConvertToEmf(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPageConvertToEmf Test", () => {
            
            it("should return response with code 200", () => {

                const resultFile = "page.emf";
                const outPath = BaseTest.remoteTempFolder + "/" + resultFile;

                return BaseTest.getPdfApi().putPageConvertToEmf(name, pageNumber, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("To BMP Tests", () => {

        describe("GetPageConvertToBmp Test", () => {
            
            it("should return response with code 200", () => {

                return BaseTest.getPdfApi().getPageConvertToBmp(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPageConvertToBmp Test", () => {
            
            it("should return response with code 200", () => {

                const resultFile = "page.bmp";
                const outPath = BaseTest.remoteTempFolder + "/" + resultFile;

                return BaseTest.getPdfApi().putPageConvertToBmp(name, pageNumber, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });

    describe("To GIF Tests", () => {

        describe("GetPageConvertToGif Test", () => {
            
            it("should return response with code 200", () => {

                return BaseTest.getPdfApi().getPageConvertToGif(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPageConvertToGif Test", () => {
            
            it("should return response with code 200", () => {

                const resultFile = "page.gif";
                const outPath = BaseTest.remoteTempFolder + "/" + resultFile;

                return BaseTest.getPdfApi().putPageConvertToGif(name, pageNumber, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
});