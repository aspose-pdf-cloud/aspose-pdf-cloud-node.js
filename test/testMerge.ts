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
import { MergeDocuments } from "../src/models/mergeDocuments";
var assert = require('assert');

describe("Merge Tests", () => {

    const names = ["4pages.pdf", "PdfWithImages2.pdf", "marketing.pdf"];
    const resultName = "MergingResult.pdf";
    const mergeDocuments = new MergeDocuments();
    mergeDocuments.list = []; 
    names.forEach( (file) => {
        mergeDocuments.list.push(BaseTest.remoteTempFolder + "/" + file);
    });

    before( async () => {
        await BaseTest.uploadFile(names[0]);
        await BaseTest.uploadFile(names[1]);
        await BaseTest.uploadFile(names[2]);
    });

    describe("PutMergeDocuments Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().putMergeDocuments(resultName, mergeDocuments, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });
});