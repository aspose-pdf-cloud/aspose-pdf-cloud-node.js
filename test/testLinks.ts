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

describe("Links Tests", () => {

    const name = "PdfWithLinks.pdf";
    const pageNumber = 1;
    const linkIndex = 1;

    before( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("GetPageLinkAnnotationByIndex Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getPageLinkAnnotationByIndex(name, pageNumber, linkIndex, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("GetPageLinkAnnotations Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getPageLinkAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });
});