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

 import { XmpMetadata } from "../src/models/xmpMetadata";
import { XmpMetadataProperty } from "../src/models/xmpMetadataProperty";
import * as BaseTest from "./baseTestPdfApi";
 import "mocha";
 
 var assert = require('assert');
 
 describe("Xmp Metadata Tests", () => {
 
     const name = "4pages.pdf";
 
     beforeEach( async ()=> {
         await BaseTest.uploadFile(name);
     });

     describe("Get Xmp Metadata in Json format Test", () => {

        it("should return response with code 200", async () => {
            
            let result = await BaseTest.getPdfApi().getXmpMetadataJson(name, BaseTest.remoteTempFolder)
            assert.equal(200, result.response.statusCode);
            assert.equal(9, result.body.properties.length);
        });
    });

    describe("Get Xmp Metadata in Xml format Test", () => {

        it("should return response with code 200", async () => {
            
            let result = await BaseTest.getPdfApi().getXmpMetadataXml(name, BaseTest.remoteTempFolder)
            assert.equal(200, result.response.statusCode);
            assert.notEqual(0, result.body.length);
        });
    });

    describe("Post Xmp Metadata Test", () => {

        it("should return response with code 200", async () => {
            
            const date = "2024-10-27T09:59:52+02:00";
            let metadata = new XmpMetadata()
            {
                metadata.properties = [
                    {
                        key: "ModifyDate",
                        value: date,
                        namespaceUri: null
                    },
                    {
                        key: "xmp:CreateDate",
                        value: date,
                        namespaceUri: null
                    },
                    {
                        key: "CreatorTool",
                        value: null,
                        namespaceUri: null
                    },
                    {
                        key: "BaseURL",
                        value: "http://www.somename.com/path",
                        namespaceUri: null
                    },
                    {
                        key: "dc:title",
                        value: null,
                        namespaceUri: null
                    },
                    {
                        key: "pdf:Producer",
                        value: "Aspose.PDF Cloud",
                        namespaceUri: "http://ns.adobe.com/pdf/1.3/"
                    },
                    {
                        key: "pdf:Prop",
                        value: "PropValue",
                        namespaceUri: "http://ns.adobe.com/pdf/1.3/"
                    },
                ]
            }

            let result = await BaseTest.getPdfApi().postXmpMetadata(name, metadata, BaseTest.remoteTempFolder)
            assert.equal(200, result.response.statusCode);

            let xmp = await BaseTest.getPdfApi().getXmpMetadataJson(name, BaseTest.remoteTempFolder)
            assert.equal(200, xmp.response.statusCode);
            assert.equal(9, xmp.body.properties.length);
        });
    });
}); 