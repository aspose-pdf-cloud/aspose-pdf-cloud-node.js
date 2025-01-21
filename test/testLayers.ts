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
 
 describe("Layers Tests", () => {
 
     const name = "PdfWithLayers.pdf";
 
     beforeEach( async ()=> {
         await BaseTest.uploadFile(name);
     });

     describe("Get Document Layers Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentLayers(name, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
                    assert.equal(result.body.layers.length, 2);
                });
        });
    });

    describe("Delete Document Layer Test", () => {

        it("should return response with code 200", async () => {
            
            let result = await BaseTest.getPdfApi().deleteDocumentLayer(name, 1, "oc1", BaseTest.remoteTempFolder)
            assert.equal(result.response.statusCode, 200);

            var layers = await BaseTest.getPdfApi().getDocumentLayers(name, BaseTest.remoteTempFolder)
            assert.equal(layers.response.statusCode, 200);
            assert.equal(layers.body.layers.length, 1);
        });
    });

    describe("Put Create Pdf From Layer Test", () => {

        it("should return response with code 200", async () => {
            
            let result = await BaseTest.getPdfApi().putCreatePdfFromLayer(name, 1, "output.pdf", "oc1", BaseTest.remoteTempFolder)
            assert.equal(result.response.statusCode, 200);
        });
    });
}); 