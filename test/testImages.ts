 /**
 *
 * Copyright (c) 2025 Aspose.PDF Cloud
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
var fs = require('fs');

describe("Images Tests", () => {

    const name = "PdfWithImages2.pdf";
    const pageNumber = 1;

    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("GetImage Test", () => {
        
        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getImages(name, pageNumber, null, BaseTest.remoteTempFolder);
            const imageId = result.body.images.list[0].id;

            return BaseTest.getPdfApi().getImage(name, imageId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteImage Test", () => {
        
        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getImages(name, pageNumber, null, BaseTest.remoteTempFolder);
            const imageId = result.body.images.list[0].id;

            return BaseTest.getPdfApi().deleteImage(name, imageId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetImages Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getImages(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutReplaceImage Test", () => {
        
        it("should return response with code 200", async () => {
            const imageName = "Koala.jpg";
            await BaseTest.uploadFile(imageName);
            const imageFile = BaseTest.remoteTempFolder + "/" + imageName;
            const result = await BaseTest.getPdfApi().getImages(name, pageNumber, null, BaseTest.remoteTempFolder);
            const imageId = result.body.images.list[0].id;
            return BaseTest.getPdfApi().putReplaceImage(name, imageId, imageFile, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutReplaceMultipleImage Test", () => {        
        it("should return response with code 200", async () => {
            const name = "PdfWithImages.pdf";
            await BaseTest.uploadFile(name);
            const imageName = "butterfly.jpg";
            await BaseTest.uploadFile(imageName);
 
            const result1 = await BaseTest.getPdfApi().getImages(name, 1, null, BaseTest.remoteTempFolder);
            const imageId1 = result1.body.images.list[0].id;
            const result2 = await BaseTest.getPdfApi().getImages(name, 16, null, BaseTest.remoteTempFolder);
            const imageId2 = result2.body.images.list[0].id;
            const imageIds = [imageId1, imageId2];
            const imageFile = BaseTest.remoteTempFolder + "/" + imageName;
            return BaseTest.getPdfApi().putReplaceMultipleImage(name, imageIds, imageFile, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostInsertImage Test", () => {        
        it("should return response with code 200", async () => {
            const imageName = "Koala.jpg";
            await BaseTest.uploadFile(imageName);
            const imageFile = BaseTest.remoteTempFolder + "/" + imageName;
            return BaseTest.getPdfApi().postInsertImage(name, pageNumber, 10, 10, 100, 100, imageFile, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Images Extract Tests", () => {

        describe("PutImagesExtractAsJpeg Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_jpg";

                return BaseTest.getPdfApi().putImagesExtractAsJpeg(name, pageNumber, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutImagesExtractAsTiff Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_tiff";

                return BaseTest.getPdfApi().putImagesExtractAsTiff(name, pageNumber, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutImagesExtractAsGif Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_gif";

                return BaseTest.getPdfApi().putImagesExtractAsGif(name, pageNumber, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutImagesExtractAsPng Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_png";

                return BaseTest.getPdfApi().putImagesExtractAsPng(name, pageNumber, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });

    describe("Image Extract Tests", () => {

        let imageId = "";

        before( async () => {
            const result = await BaseTest.getPdfApi().getImages(name, pageNumber, null, BaseTest.remoteTempFolder);
            imageId = result.body.images.list[0].id;
        });

        describe("PutImageExtractAsJpeg Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_jpg";

                return BaseTest.getPdfApi().putImageExtractAsJpeg(name, imageId, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetImageExtractAsJpeg Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getImageExtractAsJpeg(name, imageId, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutImageExtractAsTiff Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_tiff";

                return BaseTest.getPdfApi().putImageExtractAsTiff(name, imageId, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetImageExtractAsTiff Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getImageExtractAsTiff(name, imageId, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutImageExtractAsGif Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_gif";

                return BaseTest.getPdfApi().putImageExtractAsGif(name, imageId, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetImageExtractAsGif Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getImageExtractAsGif(name, imageId, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutImageExtractAsPng Test", () => {
            
            it("should return response with code 200", async () => {

                const destFolder = BaseTest.remoteTempFolder + "/extract_png";

                return BaseTest.getPdfApi().putImageExtractAsPng(name, imageId, null, null, null, BaseTest.remoteTempFolder, destFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetImageExtractAsPng Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getImageExtractAsPng(name, imageId, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetImagesExtractAsSvg Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getImagesExtractSvg("alfa.pdf", pageNumber, null, BaseTest.remoteTempFolder, null)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                        assert.equal(13, result.body.list.length);
                });
            });
        });
    });
});