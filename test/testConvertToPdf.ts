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
import { ImageTemplatesRequest } from "../src/models/imageTemplatesRequest";
import { ImageTemplate } from "../src/models/imageTemplate";
import { ImageSrcType } from "../src/models/imageSrcType";
var assert = require('assert');

describe("Convert To PDF Tests", () => {
    
    describe("EPUB To PDF Tests", () => {
        
        const name = "4pages.epub";
        const resFileName = "fromEpub.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetEpubInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getEpubInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutEpubInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putEpubInStorageToPdf(resFileName, srcPath, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("WEB To PDF Tests", () => {
            
        const sourceUrl = "http://google.com";
        const resFileName = "fromWeb.pdf";

        describe("GetWebInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getWebInStorageToPdf(sourceUrl)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutWebInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putWebInStorageToPdf(resFileName, sourceUrl, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("LaTex To PDF Tests", () => {
            
        const name = "TexExample.tex";
        const resFileName = "fromLaTeX.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetLaTeXInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getLaTeXInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutLaTeXInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putLaTeXInStorageToPdf(resFileName, srcPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("MHT To PDF Tests", () => {
                
        const name = "MhtExample.mht";
        const resFileName = "fromMht.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetMhtInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getMhtInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutMhtInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putMhtInStorageToPdf(resFileName, srcPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("HTML To PDF Tests", () => {
                    
        const name = "HtmlWithImage.zip";
        const resFileName = "fromHtml.pdf";
        const htmlFileName = "HtmlWithImage.html";
        const height = 650;
        const width = 250;
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetHtmlInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getHtmlInStorageToPdf(srcPath, htmlFileName, height, width)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutHtmlInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putHtmlInStorageToPdf(resFileName, srcPath, htmlFileName, height, width, null, null,
                        null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("XLS FO To PDF Tests", () => {
                    
        const name = "XslfoExample.xslfo";
        const resFileName = "fromXlsFo.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetXslFoInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getXslFoInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutXslFoInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putXslFoInStorageToPdf(resFileName, srcPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("XPS To PDF Tests", () => {
                        
        const name = "Simple.xps";
        const resFileName = "fromXps.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetXpsInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getXpsInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutXpsInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putXpsInStorageToPdf(resFileName, srcPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("SVG To PDF Tests", () => {
                            
        const name = "Simple.svg";
        const resFileName = "fromSvg.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetSvgInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getSvgInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutSvgInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putSvgInStorageToPdf(resFileName, srcPath, null, null, null, null, null,
                        null, null, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("PCL To PDF Tests", () => {
                                
        const name = "template.pcl";
        const resFileName = "fromPcl.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetPclInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPclInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutPclInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPclInStorageToPdf(resFileName, srcPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("XML To PDF Tests", () => {
                                    
        const name = "template.xml";
        const resFileName = "fromXml.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetXmlInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getXmlInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutXmlInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putXmlInStorageToPdf(resFileName, srcPath, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("PS To PDF Tests", () => {
                                        
        const name = "Typography.PS";
        const resFileName = "fromPs.pdf";
        const srcPath = BaseTest.remoteTempFolder + "/" + name;
        
        before( async ()=> {
            await BaseTest.uploadFile(name);
        });

        describe("GetPsInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().getPsInStorageToPdf(srcPath)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
        
        describe("PutPsInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putPsInStorageToPdf(resFileName, srcPath, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
    
    describe("Images To PDF Tests", () => {
                                            
        const images = ["33539.jpg", "44781.jpg"];
        const resFileName = "fromImages.pdf";
        
        before( async ()=> {
            
            await BaseTest.uploadFile(images[0]);
            await BaseTest.uploadFile(images[1]);
        });

        let imageTemplateList: ImageTemplate[] = [];
        images.forEach( (name) => {
            let imageTemplate = new ImageTemplate();
            imageTemplate.imagePath = BaseTest.remoteTempFolder + "/" + name;
            imageTemplate.imageSrcType = ImageSrcType.Common;
            imageTemplateList.push(imageTemplate);
        })

        let imageTemplatesRequest = new ImageTemplatesRequest();
        imageTemplatesRequest.isOCR = true;
        imageTemplatesRequest.oCRLangs = "eng";
        imageTemplatesRequest.imagesList = imageTemplateList;

        describe("PutImageInStorageToPdf Test", () => {

            it("should return response with code 200", async () => {

                return BaseTest.getPdfApi().putImageInStorageToPdf(resFileName, imageTemplatesRequest, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
});