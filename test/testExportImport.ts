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
var assert = require('assert');
var fs = require('fs');

describe("Export Import Tests", () => {

    describe("Get Export Fields From Pdf To Xml In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().getExportFieldsFromPdfToXmlInStorage(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Export Fields From Pdf To Fdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().getExportFieldsFromPdfToFdfInStorage(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Export Fields From Pdf To Xfdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().getExportFieldsFromPdfToXfdfInStorage(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Export Fields From Pdf To Xml In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            const outPath = BaseTest.remoteTempFolder + "/exportData.xml";

            return BaseTest.getPdfApi().putExportFieldsFromPdfToXmlInStorage(name, outPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Export Fields From Pdf To Fdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            const outPath = BaseTest.remoteTempFolder + "/exportData.fdf";

            return BaseTest.getPdfApi().putExportFieldsFromPdfToFdfInStorage(name, outPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
    
    describe("Put Export Fields From Pdf To Xfdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            const outPath = BaseTest.remoteTempFolder + "/exportData.xfdf";

            return BaseTest.getPdfApi().putExportFieldsFromPdfToXfdfInStorage(name, outPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Import Fields From Fdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormData.fdf";
            await BaseTest.uploadFile(dataFile);

            const dataPath = BaseTest.remoteTempFolder + "/" + dataFile;

            return BaseTest.getPdfApi().getImportFieldsFromFdfInStorage(name, dataPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Import Fields From Xfdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormDataXfdf_in.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormDataXfdf_in.xfdf";
            await BaseTest.uploadFile(dataFile);

            const dataPath = BaseTest.remoteTempFolder + "/" + dataFile;

            return BaseTest.getPdfApi().getImportFieldsFromXfdfInStorage(name, dataPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Import Fields From Xml In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormDataXfa_in.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormDataXfa_in.xml";
            await BaseTest.uploadFile(dataFile);

            const dataPath = BaseTest.remoteTempFolder + "/" + dataFile;

            return BaseTest.getPdfApi().getImportFieldsFromXmlInStorage(name, dataPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Import Fields From Fdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormData.fdf";
            await BaseTest.uploadFile(dataFile);

            const dataPath = BaseTest.remoteTempFolder + "/" + dataFile;

            return BaseTest.getPdfApi().putImportFieldsFromFdfInStorage(name, dataPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Import Fields From Xfdf In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormDataXfdf_in.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormDataXfdf_in.xfdf";
            await BaseTest.uploadFile(dataFile);

            const dataPath = BaseTest.remoteTempFolder + "/" + dataFile;

            return BaseTest.getPdfApi().putImportFieldsFromXfdfInStorage(name, dataPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put Import Fields From Xml In Storage Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormDataXfa_in.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormDataXfa_in.xml";
            await BaseTest.uploadFile(dataFile);

            const dataPath = BaseTest.remoteTempFolder + "/" + dataFile;

            return BaseTest.getPdfApi().putImportFieldsFromXmlInStorage(name, dataPath, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Import Fields From Fdf Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormData.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormData.fdf";
            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + dataFile);

            return BaseTest.getPdfApi().postImportFieldsFromFdf(name, null, BaseTest.remoteTempFolder, data)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Import Fields From Xfdf Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormDataXfdf_in.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormDataXfdf_in.xfdf";
            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + dataFile);

            return BaseTest.getPdfApi().postImportFieldsFromXfdf(name, null, BaseTest.remoteTempFolder, data)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Import Fields From Xml Test", () => {

        it("should return response with code 200", async () => {
            const name = "FormDataXfa_in.pdf";
            await BaseTest.uploadFile(name);

            const dataFile = "FormDataXfa_in.xml";
            var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + dataFile);

            return BaseTest.getPdfApi().postImportFieldsFromXml(name, null, BaseTest.remoteTempFolder, data)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});