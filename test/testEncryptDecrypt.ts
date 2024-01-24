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
import { CryptoAlgorithm } from "../src/models/cryptoAlgorithm";
var assert = require('assert');
var fs = require('fs');

describe("Encrypt Decrypt Tests", () => {

    describe("Put Encrypt Document Test", () => {

        it("should return response with code 200", async () => {
            const name = "4pages.pdf";

            const outPath = BaseTest.remoteTempFolder + '/' + name;
            const userPassword = 'user $^Password!&';
            const ownerPassword = 'owner\\//? $12^Password!&';
            
            var file = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().putEncryptDocument(outPath, BaseTest.toBase64(userPassword),
                BaseTest.toBase64(ownerPassword), CryptoAlgorithm.AESx128, null, null, null, file)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Encrypt Document In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "4pages.pdf";
            await BaseTest.uploadFile(name);

            const userPassword = 'user $^Password!&';
            const ownerPassword = 'owner\\//? $12^Password!&';
            
            var file = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().postEncryptDocumentInStorage(name, BaseTest.toBase64(userPassword),
                BaseTest.toBase64(ownerPassword), CryptoAlgorithm.AESx128, null, null, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Decrypt Document Test", () => {

        it("should return response with code 200", async () => {
            const name = "4pagesEncrypted.pdf";

            const outPath = BaseTest.remoteTempFolder + '/' + name;
            const userPassword = 'user $^Password!&';
            
            var file = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().putDecryptDocument(outPath, BaseTest.toBase64(userPassword), null, file)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Decrypt Document In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "4pagesEncrypted.pdf";
            await BaseTest.uploadFile(name);

            const userPassword = 'user $^Password!&';
            
            var file = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().postDecryptDocumentInStorage(name, BaseTest.toBase64(userPassword), null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Change Password Document Test", () => {

        it("should return response with code 200", async () => {
            const name = "4pagesEncrypted.pdf";

            const outPath = BaseTest.remoteTempFolder + '/' + name;
            const ownerPassword = 'owner\\//? $12^Password!&';
            const newUserPassword = 'user new\\//? $12^Password!&';
            const newOwnerPassword = 'owner new\\//? $12^Password!&';

            var file = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);

            return BaseTest.getPdfApi().putChangePasswordDocument(outPath, BaseTest.toBase64(ownerPassword),
                BaseTest.toBase64(newUserPassword), BaseTest.toBase64(newOwnerPassword), null, file)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Change Password Document In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "4pagesEncrypted.pdf";
            await BaseTest.uploadFile(name);

            const ownerPassword = 'owner\\//? $12^Password!&';
            const newUserPassword = 'user new\\//? $12^Password!&';
            const newOwnerPassword = 'owner new\\//? $12^Password!&';

            return BaseTest.getPdfApi().postChangePasswordDocumentInStorage(name, BaseTest.toBase64(ownerPassword),
                BaseTest.toBase64(newUserPassword), BaseTest.toBase64(newOwnerPassword), null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });


});