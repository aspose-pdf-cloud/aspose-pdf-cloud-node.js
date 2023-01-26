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
var fs = require('fs');

describe("Storage Tests", () => {
    
    const name = "4pages.pdf";
    const path = BaseTest.remoteTempFolder + "/" + name;

    describe("UploadFile Test", () => {

        it("should return response with code 200", () => {

            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().uploadFile(path, data)
            .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DownloadFile Test", () => {

        it("should return file", async () => {
    
            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            await BaseTest.getPdfApi().uploadFile(path, data);
            
            return BaseTest.getPdfApi().downloadFile(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });


    describe("MoveFile Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const src = BaseTest.remoteTempFolder + '/' + name;
            const dest = BaseTest.remoteTempFolder + '/4pages_renamed.pdf';

            return BaseTest.getPdfApi().moveFile(src, dest)
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

    describe("GetFilesList Test", () => {

        it("should return response with code 200", async () => {
    
            return BaseTest.getPdfApi().getFilesList(BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("CreateFolder Test", () => {

        it("should return response with code 200", async () => {
            const path = BaseTest.remoteTempFolder + '/testFolder';

            return BaseTest.getPdfApi().createFolder(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("MoveFolder Test", () => {

        it("should return response with code 200", async () => {
            const src = BaseTest.remoteTempFolder + '/testFolder';
            await BaseTest.getPdfApi().createFolder(src)
            
            const dest = BaseTest.remoteTempFolder + '/testFolderRenamed';
            
            return BaseTest.getPdfApi().moveFolder(src, dest)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteFolder Test", () => {

        it("should return response with code 200", async () => {
            const path = BaseTest.remoteTempFolder + '/testFolder';
            await BaseTest.getPdfApi().createFolder(path)
            
            return BaseTest.getPdfApi().deleteFolder(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("StorageExists Test", () => {

        it("should return response with code 200", async () => {
            const name = "PDF-CI";

            return BaseTest.getPdfApi().storageExists(name)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("ObjectExists Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const path = BaseTest.remoteTempFolder + '/' + name;
            
            return BaseTest.getPdfApi().objectExists(path)
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

    describe("GetFileVersions Test", () => {

        it("should return response with code 200", async () => {
    
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const path = BaseTest.remoteTempFolder + '/' + name;
            
            return BaseTest.getPdfApi().getFileVersions(path)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});