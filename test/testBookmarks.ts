 /**
 *
 *   Copyright (c) 2019 Aspose.PDF Cloud
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
import { Bookmark } from "../src/models/bookmark";
var assert = require('assert');

describe("Bookmark Tests", () => {

    const name = "PdfWithBookmarks.pdf";
    
    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document Bookmarks Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentBookmarks(name, BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Bookmarks Test", () => {

        it("should return response with code 200", async () => {
            
            const bookmarkPath = "1";
            return BaseTest.getPdfApi().getBookmarks(name, bookmarkPath, BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Bookmark Test", () => {

        it("should return response with code 200", async () => {
            
            const bookmarkPath = "1";
            return BaseTest.getPdfApi().getBookmark(name, bookmarkPath, BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Document Bookmarks Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().deleteDocumentBookmarks(name, BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Delete Bookmark Test", () => {

        it("should return response with code 200", async () => {
            
            const bookmarkPath = "1";
            return BaseTest.getPdfApi().deleteBookmark(name, bookmarkPath, BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Bookmark Test", () => {

        it("should return response with code 200", async () => {
            
            const bookmark = new Bookmark();
            bookmark.action = "GoTo";
            bookmark.bold = true;
            bookmark.italic = false;
            bookmark.title = "New Bookmark XYZ";
            bookmark.pageDisplay = "XYZ";
            bookmark.pageDisplayBottom = 10;
            bookmark.pageDisplayLeft = 10;
            bookmark.pageDisplayRight = 10;
            bookmark.pageDisplayTop = 10;
            bookmark.pageDisplayZoom = 2;
            bookmark.pageNumber = 2;
            bookmark.color = { a: 0xFF, r: 0x00, g: 0xFF, b: 0x00 };

            const bookmarkPath = "1";
            return BaseTest.getPdfApi().postBookmark(name, bookmarkPath, [bookmark], BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Bookmark Test", () => {

        it("should return response with code 200", async () => {
            
            const bookmark = new Bookmark();
            bookmark.action = "GoTo";
            bookmark.bold = true;
            bookmark.italic = false;
            bookmark.title = "New Bookmark XYZ";
            bookmark.pageDisplay = "XYZ";
            bookmark.pageDisplayBottom = 10;
            bookmark.pageDisplayLeft = 10;
            bookmark.pageDisplayRight = 10;
            bookmark.pageDisplayTop = 10;
            bookmark.pageDisplayZoom = 2;
            bookmark.pageNumber = 2;
            bookmark.color = { a: 0xFF, r: 0x00, g: 0xFF, b: 0x00 };

            const bookmarkPath = "1";
            return BaseTest.getPdfApi().putBookmark(name, bookmarkPath, bookmark, BaseTest.remoteTempFolder, null)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});