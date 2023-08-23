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
import { PdfAType } from "../src/models/pdfAType";
import { OutputFormat } from "../src/models/outputFormat";
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToDoc Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToDoc(simplePdf, outPath, null, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToDoc Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToDoc(outPath, null, null, null, null, null, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToPdfA Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToPdfA(simplePdf, outPath, PdfAType.PDFA1A, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToPdfA Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToPdfA(outPath, PdfAType.PDFA1A, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToTiff Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToTiff(simplePdf, outPath, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToTiff Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToTiff(outPath, null, null, null, null, null, null, null, null, 
                    null, null, null, null, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToSvg Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToSvg(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToSvg Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToSvg(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToXps Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXps(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToXps Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXps(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToXls Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXls(simplePdf, outPath, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToXls Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXls(outPath, null, null, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("To XLSX Tests", () => {

        const resFileName = "result.xlsx";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToXlsx Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToXlsx(simplePdf, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToXlsx Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXlsx(simplePdf, outPath, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToXlsx Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXlsx(outPath, null, null, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToHtml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToHtml(simplePdf, outPath, null, null, null, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
                        null, BaseTest.remoteTempFolder, null, null, OutputFormat.Folder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToHtml Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToHtml(outPath, null, null, null, null, null, null, null, null, null, 
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
                        null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToEpub Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToEpub(simplePdf, outPath, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToEpub Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToEpub(outPath, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetPdfInStorageToPptxWithPassword Test", () => {
            it("should return response with code 200", async () => {
                const name = "4pagesEncrypted.pdf";
                await BaseTest.uploadFile(name);
                const userPassword = 'user $^Password!&';
                return BaseTest.getPdfApi().getPdfInStorageToPptx(name, null, null, BaseTest.remoteTempFolder, null, BaseTest.toBase64(userPassword))
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToPptx Test", () => {
            it("should return response with code 200", async () => {
                return BaseTest.getPdfApi().putPdfInStorageToPptx(simplePdf, outPath, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToPptxWithPassword Test", () => {
            it("should return response with code 200", async () => {
                const name = "4pagesEncrypted.pdf";
                await BaseTest.uploadFile(name);
                const userPassword = 'user $^Password!&';
                return BaseTest.getPdfApi().putPdfInStorageToPptx(simplePdf, outPath, null, null, BaseTest.remoteTempFolder, null, BaseTest.toBase64(userPassword))
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToPptx Test", () => {
            it("should return response with code 200", async () => {
                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);
                return BaseTest.getPdfApi().putPdfInRequestToPptx(outPath, null, null, null, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToPptxWithPassword Test", () => {
            it("should return response with code 200", async () => {
                const name = "4pagesEncrypted.pdf";
                const userPassword = 'user $^Password!&';
                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + name);
                return BaseTest.getPdfApi().putPdfInRequestToPptx(outPath, null, null, null, BaseTest.toBase64(userPassword), data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("To TeX Tests", () => {

        const resFileName = "result.tex";
        const outPath = BaseTest.remoteTempFolder + "/" + resFileName;
        
        describe("GetPdfInStorageToTeX Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPdfInStorageToTeX(simplePdf, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToTeX Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToTeX(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToTeX Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToTeX(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToMobiXml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToMobiXml(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToMobiXml Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToMobiXml(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutXfaPdfInStorageToAcroForm Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putXfaPdfInStorageToAcroForm(xfaPdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutXfaPdfInRequestToAcroForm Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + xfaPdf);

                return BaseTest.getPdfApi().putXfaPdfInRequestToAcroForm(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
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
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInStorageToXml Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPdfInStorageToXml(simplePdf, outPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutPdfInRequestToXml Test", () => {

            it("should return response with code 200", async () => {

                var data = fs.readFileSync(BaseTest.localTestDataFolder + "/" + simplePdf);

                return BaseTest.getPdfApi().putPdfInRequestToXml(outPath, null, data)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
});