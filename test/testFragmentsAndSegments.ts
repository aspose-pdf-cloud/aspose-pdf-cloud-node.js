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

describe("Fragments And Segments Tests", () => {

    const name = "4pages.pdf";
    const pageNumber = 1;
    const fragmentNumber = 1;
    
    before( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("Fragments Tests", () => {

        describe("GetFragment Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getFragment(name, pageNumber, fragmentNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("GetFragmentTextFormat Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getFragmentTextFormat(name, pageNumber, fragmentNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("GetFragments Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getFragments(name, pageNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });

    describe("Segments Tests", () => {

        const segmentNumber = 1;

        describe("GetSegment Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getSegment(name, pageNumber, fragmentNumber, segmentNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("GetSegmentTextFormat Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getSegmentTextFormat(name, pageNumber, fragmentNumber, segmentNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("GetSegments Test", () => {
            
            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getSegments(name, pageNumber, fragmentNumber, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
});