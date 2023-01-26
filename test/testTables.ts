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
var assert = require('assert');

describe("Tables Tests", () => {

    const name = "PdfWithTable.pdf";
    const pageNumber = 1;

    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document Tables Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentTables(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Document Tables Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().deleteDocumentTables(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Page Tables Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getPageTables(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Page Tables Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().deletePageTables(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Table Test", () => {

        it("should return response with code 200", async () => {
            
            const result = await BaseTest.getPdfApi().getDocumentTables(name, null, BaseTest.remoteTempFolder)
            const tableId = result.body.tables.list[0].id;

            return BaseTest.getPdfApi().getTable(name, tableId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Table Test", () => {

        it("should return response with code 200", async () => {
            
            const result = await BaseTest.getPdfApi().getDocumentTables(name, null, BaseTest.remoteTempFolder)
            const tableId = result.body.tables.list[0].id;

            return BaseTest.getPdfApi().deleteTable(name, tableId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page Tables Test", () => {

        it("should return response with code 200", async () => {
            
            const pdf = "4pages.pdf";
            await BaseTest.uploadFile(pdf);

            const table = BaseTest.drawTable();

            return BaseTest.getPdfApi().postPageTables(pdf, pageNumber, [table], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Table Test", () => {

        it("should return response with code 200", async () => {
            
            const table = BaseTest.drawTable();
            
            const result = await BaseTest.getPdfApi().getDocumentTables(name, null, BaseTest.remoteTempFolder)
            const tableId = result.body.tables.list[0].id;

            return BaseTest.getPdfApi().putTable(name, tableId, table, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});