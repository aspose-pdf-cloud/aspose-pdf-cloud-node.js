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
import { HttpStatusCode } from "../src/models/httpStatusCode";
import { PdfAType } from "../src/models/pdfAType";
var assert = require('assert');
var fs = require('fs');

describe("Convert Tests", () => {

    const simplePdf = "4pages.pdf";
    const xfaPdf = "PdfWithXfaForm.pdf";

    before( async ()=> {
        await BaseTest.uploadFile(simplePdf);
        await BaseTest.uploadFile(xfaPdf);
    });

    describe("To DOC Tests", () => {
        const resFileName = "result.doc";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;

        describe("GetPdfInStorageToDoc Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToDoc(simplePdf, null, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToDoc Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToDoc(simplePdf, outPath, null, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToDoc Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToDoc(outPath, null, null, null, null, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });

    describe("To PDFA Tests", () => {

        const resFileName = "result.pdf";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;

        describe("GetPdfInStorageToPdfA Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToPdfA(simplePdf, PdfAType.PDFA1A, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToPdfA Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToPdfA(simplePdf, outPath, PdfAType.PDFA1A, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToPdfA Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToPdfA(outPath, PdfAType.PDFA1A, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    

    describe("To TIFF Tests", () => {

        const resFileName = "result.tiff";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToTiff Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToTiff(simplePdf, null, null, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToTiff Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToTiff(simplePdf, outPath, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToTiff Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToTiff(outPath, null, null, null, null, null, null, null, null, 
                    null, null, null, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

    });
    
    describe("To SVG Tests", () => {

        const resFileName = "result.svg";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToSvg Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToSvg(simplePdf, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToSvg Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToSvg(simplePdf, outPath, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToSvg Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToSvg(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To XPS Tests", () => {

        const resFileName = "result.xps";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToXps Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToXps(simplePdf, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToXps Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXps(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToXps Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXps(outPath, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To XLS Tests", () => {

        const resFileName = "result.xls";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToXls Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToXls(simplePdf, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToXls Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXls(simplePdf, outPath, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToXls Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXls(outPath, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To HTML Tests", () => {

        const resFileName = "result.zip";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToHtml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToHtml(simplePdf, null, null, null, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
                        null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToHtml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToHtml(simplePdf, outPath, null, null, null, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
                        null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToHtml Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToHtml(outPath, null, null, null, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
                        null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To EPUB Tests", () => {

        const resFileName = "result.epub";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToEpub Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToEpub(simplePdf, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToEpub Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToEpub(simplePdf, outPath, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToEpub Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToEpub(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To PPTX Tests", () => {

        const resFileName = "result.epub";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToPptx Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToPptx(simplePdf, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToPptx Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToPptx(simplePdf, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToPptx Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToPptx(outPath, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To LaTeX Tests", () => {

        const resFileName = "result.latex";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToLaTeX Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToLaTeX(simplePdf, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToLaTeX Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToLaTeX(simplePdf, outPath, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToLaTeX Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToLaTeX(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To MOBI XML Tests", () => {

        const resFileName = "result.mobi";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToMobiXml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToMobiXml(simplePdf, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToMobiXml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToMobiXml(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToMobiXml Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToMobiXml(outPath, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("PDF XFA To PDF ACRO FORM Tests", () => {

        const resFileName = "result.pdf";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetXfaPdfInStorageToAcroForm Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getXfaPdfInStorageToAcroForm(xfaPdf, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutXfaPdfInStorageToAcroForm Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putXfaPdfInStorageToAcroForm(xfaPdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutXfaPdfInRequestToAcroForm Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + xfaPdf);

                return BaseTest.getPdfApi().putXfaPdfInRequestToAcroForm(outPath, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
    
    describe("To XML Tests", () => {

        const resFileName = "result.xml";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToXml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToXml(simplePdf, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInStorageToXml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXml(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });

        describe("PutPdfInRequestToXml Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXml(outPath, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, HttpStatusCode.OK);
                });
            });
        });
    });
});