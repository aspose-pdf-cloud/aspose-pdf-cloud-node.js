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


    describe("PostMoveFile Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const src = BaseTest.remoteTempFolder + '/' + name;
            const dest = BaseTest.remoteTempFolder + '/4pages_renamed.pdf';

            return BaseTest.getPdfApi().postMoveFile(src, dest)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteFile Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const path = BaseTest.remoteTempFolder + '/' + name;
            
            return BaseTest.getPdfApi().deleteFile(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetListFiles Test", () => {

        it("should return response with code 200", async () => {
    
            return BaseTest.getPdfApi().getListFiles(BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutCreateFolder Test", () => {

        it("should return response with code 200", async () => {
            const path = BaseTest.remoteTempFolder + '/testFolder';

            return BaseTest.getPdfApi().putCreateFolder(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostMoveFolder Test", () => {

        it("should return response with code 200", async () => {
            const src = BaseTest.remoteTempFolder + '/testFolder';
            await BaseTest.getPdfApi().putCreateFolder(src)
            
            const dest = BaseTest.remoteTempFolder + '/testFolderRenamed';
            
            return BaseTest.getPdfApi().postMoveFolder(src, dest)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteFolder Test", () => {

        it("should return response with code 200", async () => {
            const path = BaseTest.remoteTempFolder + '/testFolder';
            await BaseTest.getPdfApi().putCreateFolder(path)
            
            return BaseTest.getPdfApi().deleteFolder(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetIsStorageExist Test", () => {

        it("should return response with code 200", async () => {
            const name = "PDF-CI";

            return BaseTest.getPdfApi().getIsStorageExist(name)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetIsExist Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const path = BaseTest.remoteTempFolder + '/' + name;
            
            return BaseTest.getPdfApi().getIsExist(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetDiscUsage Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDiscUsage()
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetListFileVersions Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const path = BaseTest.remoteTempFolder + '/' + name;
            
            return BaseTest.getPdfApi().getListFileVersions(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});