 /**
 *
 * Copyright (c) 2025 Aspose.PDF Cloud
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
import { Signature } from "../src/models/signature";
import { SignatureType } from "../src/models/signatureType";
import { DocMDPAccessPermissionType } from "../src/models/docMDPAccessPermissionType";
var assert = require('assert');

describe("Sign Tests", () => {

    const name = "BlankWithSignature.pdf";
    const signatureName = "test1234.pfx";
    
    const signature = new Signature();
    signature.authority = "Sergey Smal";
    signature.contact = "test@mail.ru"
    signature.date = "08/01/2012 12:15:00.000 PM";
    signature.formFieldName = "Signature1";
    signature.location = "Ukraine";
    signature.password = "test1234";
    signature.rectangle = { lLX: 100, lLY: 100, uRX: 500, uRY: 500 };
    signature.signaturePath = BaseTest.remoteTempFolder + "/" +signatureName;
    signature.signatureType = SignatureType.PKCS7;
    signature.visible = true;
    signature.showProperties = false;

    beforeEach( async () => {
        await BaseTest.uploadFile(name);
        await BaseTest.uploadFile(signatureName);
    });

    describe("PostSignDocument Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().postSignDocument(name, signature, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostSignPage Test", () => {
        
        it("should return response with code 200", () => {

            const pageNumber = 1;

            return BaseTest.getPdfApi().postSignPage(name, pageNumber, signature, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetVerifySignature Test", () => {
        
        it("should return response with code 200", async () => {

            await BaseTest.getPdfApi().postSignDocument(name, signature, null, BaseTest.remoteTempFolder);

            return BaseTest.getPdfApi().getVerifySignature(name, signature.formFieldName, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostPageCertify Test", () => {
        
        it("should return response with code 200", async () => {
            const fileName = "4pages.pdf";
            await BaseTest.uploadFile(fileName);

            const signatureFileName = "33226.p12";
            await BaseTest.uploadFile(signatureFileName);

            const permissionType = DocMDPAccessPermissionType.NoChanges;
            const pageNumber = 1;

            const sign = new Signature();
            sign.authority = "Sergey Smal";
            sign.contact = "test@mail.ru"
            sign.date = "08/01/2012 12:15:00.000 PM";
            sign.formFieldName = "Signature1";
            sign.location = "Ukraine";
            sign.password = "sIikZSmz";
            sign.rectangle = { lLX: 100, lLY: 100, uRX: 500, uRY: 500 };
            sign.signaturePath = BaseTest.remoteTempFolder + "/" + signatureFileName;
            sign.signatureType = SignatureType.PKCS7;
            sign.visible = true;
            sign.showProperties = false;

            return BaseTest.getPdfApi().postPageCertify(fileName, pageNumber, sign, permissionType, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});