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
import { beforeEach } from "mocha";
import { TextReplaceListRequest } from "../src/models/textReplaceListRequest";
import { Rectangle } from "../src/models/rectangle";
import { TextReplace } from "../src/models/textReplace";
var assert = require('assert');

describe("TextReplace Tests", () => {

    const name = "marketing.pdf";
    const rect: Rectangle = { lLX: 100, lLY: 100, uRX: 300, uRY: 300 };
    
    const textReplace: TextReplace = { 
        oldValue: "market",
        newValue: "m_a_r_k_e_t",
        regex: false,
        textState: null,
        rect: rect,
        centerTextHorizontally: false
    };
    
    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("PostDocumentTextReplace Test", () => {
        
        it("should return response with code 200", () => {

            const trr = new TextReplaceListRequest();
            trr.textReplaces = [textReplace];
            trr.startIndex = 0;
            trr.countReplace = 0;

            return BaseTest.getPdfApi().postDocumentTextReplace(name, trr, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
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
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});