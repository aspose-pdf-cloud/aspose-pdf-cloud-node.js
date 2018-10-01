 /**
 *
 *   Copyright (c) 2018 Aspose.PDF Cloud
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

describe("Storage Tests", () => {
    
    const name = "4pages.pdf";
    const path = BaseTest.remoteTempFolder + "/" + name;

    describe("PutCreate Test", () => {

        it("should return response with code 200", () => {

            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().putCreate(path, data)
            .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetDownload Test", () => {

        it("should return file", async () => {
    
            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            await BaseTest.getPdfApi().putCreate(path, data);
            
            return BaseTest.getPdfApi().getDownload(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});