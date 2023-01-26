 /**
 *
 * Copyright (c) 2023 Aspose.PDF Cloud
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
import { DocumentProperty } from "../src/models/documentProperty";
var assert = require('assert');

describe("Properties Tests", () => {

    const name = "PdfWithAcroForm.pdf";
    
    const propertyNames = [ "prop1", "prop2" ];
    const propertyValues = [ "val1", "val2" ];

    const property1 = new DocumentProperty();
    property1.name = propertyNames[0];
    property1.value = propertyValues[0];
    
    const property2 = new DocumentProperty();
    property2.name = propertyNames[1];
    property2.value = propertyValues[1];
    

    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("DeleteProperties Test", () => {
        
        it("should return response with code 200", async () => {

            await BaseTest.getPdfApi().putSetProperty(name, property1.name, property1.value, null, BaseTest.remoteTempFolder);
            await BaseTest.getPdfApi().putSetProperty(name, property2.name, property2.value, null, BaseTest.remoteTempFolder);

            return BaseTest.getPdfApi().deleteProperties(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteProperty Test", () => {
        
        it("should return response with code 200", async () => {

            await BaseTest.getPdfApi().putSetProperty(name, property1.name, property1.value, null, BaseTest.remoteTempFolder);
            
            return BaseTest.getPdfApi().deleteProperty(name, property1.name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetDocumentProperties Test", () => {
        
        it("should return response with code 200", async () => {

            await BaseTest.getPdfApi().putSetProperty(name, property1.name, property1.value, null, BaseTest.remoteTempFolder);
            await BaseTest.getPdfApi().putSetProperty(name, property2.name, property2.value, null, BaseTest.remoteTempFolder);

            return BaseTest.getPdfApi().getDocumentProperties(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetDocumentProperty Test", () => {
        
        it("should return response with code 200", async () => {

            await BaseTest.getPdfApi().putSetProperty(name, property1.name, property1.value, null, BaseTest.remoteTempFolder);
           
            return BaseTest.getPdfApi().getDocumentProperty(name, property1.name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutSetProperty Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().putSetProperty(name, property1.name, property1.value, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});