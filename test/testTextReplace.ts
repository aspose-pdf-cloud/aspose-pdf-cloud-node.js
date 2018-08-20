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
import { beforeEach } from "mocha";
import { TextReplaceRequest } from "../src/models/textReplaceRequest";
import { TextReplaceListRequest } from "../src/models/textReplaceListRequest";
import { Rectangle } from "../src/models/rectangle";
import { TextReplace } from "../src/models/textReplace";
var assert = require('assert');

describe("TextReplace Tests", () => {

    const name = "4pages.pdf";
    
    const replaceRequest = new TextReplaceRequest();
    replaceRequest.oldValue = "Page";
    replaceRequest.newValue = "p_a_g_e";
    replaceRequest.regex = false;

    const replaceListRequest = new TextReplaceListRequest(); 
    replaceListRequest.textReplaces = [
        { oldValue: "First", newValue: "1", regex: false, textState: null, rect: null },
        { oldValue: "Page", newValue: "p_a_g_e", regex: false, textState: null, rect: null }
    ];

    const rect: Rectangle = { x: 100, y: 700, width: 300, height: 300 };
    
    const textReplace: TextReplace = { 
        oldValue: "Page", 
        newValue: "p_a_g_e", 
        regex: false, 
        textState: null, 
        rect: rect 
    };
    
    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("PostDocumentReplaceText Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().postDocumentReplaceText(name, replaceRequest, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostDocumentReplaceTextList Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().postDocumentReplaceTextList(name, replaceListRequest, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostPageReplaceText Test", () => {
        
        it("should return response with code 200", () => {

            const pageNumber = 1;

            return BaseTest.getPdfApi().postPageReplaceText(name, pageNumber, replaceRequest, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostPageReplaceTextList Test", () => {
        
        it("should return response with code 200", () => {

            const pageNumber = 1;

            return BaseTest.getPdfApi().postPageReplaceTextList(name, pageNumber, replaceListRequest, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostDocumentTextReplace Test", () => {
        
        it("should return response with code 200", () => {

            const trr = new TextReplaceListRequest();
            trr.textReplaces = [textReplace];
            trr.startIndex = 0;
            trr.countReplace = 0;

            return BaseTest.getPdfApi().postDocumentTextReplace(name, trr, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PostPageTextReplace Test", () => {
        
        it("should return response with code 200", () => {

            const trr = new TextReplaceListRequest();
            trr.textReplaces = [textReplace];
            trr.startIndex = 0;
            trr.countReplace = 0;

            const pageNumber = 1;

            return BaseTest.getPdfApi().postPageTextReplace(name, pageNumber, trr, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });
});