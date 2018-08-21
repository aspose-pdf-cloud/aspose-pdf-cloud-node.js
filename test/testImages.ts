 /**
 *
 *   Copyright (c) 2018 Aspose.Pdf for Cloud
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
import { HttpStatusCode } from "../src/models/httpStatusCode";
var assert = require('assert');
var fs = require('fs');

describe("Images Tests", () => {

    const name = "PdfWithImages2.pdf";
    const pageNumber = 1;
    const imageNumber = 1;
    const format = "jpeg";
    const height = 100;
    const width = 100;

    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("GetImage Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getImage(name, pageNumber, imageNumber, null, null, null, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("GetImage With Format Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getImage(name, pageNumber, imageNumber, format, width, height, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("GetImages Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getImages(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostReplaceImage From Storage Test", () => {
        
        it("should return response with code 200", async () => {

            const imageName = "Koala.jpg";
            await BaseTest.uploadFile(imageName);
            const imageFile = BaseTest.remoteTempFolder + "/" + imageName;

            return BaseTest.getPdfApi().postReplaceImage(name, pageNumber, imageNumber, imageFile, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostReplaceImage From Request Test", () => {
        
        it("should return response with code 200", async () => {

            const imageName = "Koala.jpg";
            const image = fs.readFileSync(BaseTest.localTestDataFolder + "/" + imageName);

            return BaseTest.getPdfApi().postReplaceImage(name, pageNumber, imageNumber, null, null, BaseTest.remoteTempFolder, image)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("Images Extract Tests", () => {

        describe("PutImagesExtractAsJpeg Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_jpg";

                return BaseTest.getPdfApi().putImagesExtractAsJpeg(name, pageNumber, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutImagesExtractAsTiff Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_tiff";

                return BaseTest.getPdfApi().putImagesExtractAsTiff(name, pageNumber, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutImagesExtractAsGif Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_gif";

                return BaseTest.getPdfApi().putImagesExtractAsGif(name, pageNumber, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutImagesExtractAsPng Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_png";

                return BaseTest.getPdfApi().putImagesExtractAsPng(name, pageNumber, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
});