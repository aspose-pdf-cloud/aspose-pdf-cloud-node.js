 /**
 *
 *   Copyright (c) 2018 Aspose.Pdf for Cloud
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
import { OptimizeOptions } from "../src/models/optimizeOptions";
import { ImagesListRequest } from "../src/models/imagesListRequest";

var assert = require('assert');

describe("Document Tests", () => {

  describe("GetDocument Test", () => {
    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);

      return BaseTest.getPdfApi().getDocument(name, null, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });
  
  describe("PostOptimizeDocument Test", () => {
    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";

      let optimizeOptions = new OptimizeOptions();
      optimizeOptions.allowReusePageContent = false;
      optimizeOptions.compressImages = true;
      optimizeOptions.imageQuality = 100;
      optimizeOptions.linkDuplcateStreams = true;
      optimizeOptions.removeUnusedObjects = true;
      optimizeOptions.removeUnusedStreams = true;
      optimizeOptions.unembedFonts = true;

      await BaseTest.uploadFile(name);

      return BaseTest.getPdfApi().postOptimizeDocument(name, optimizeOptions, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });

  describe("PostSplitDocument Test", () => {
    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);

      return BaseTest.getPdfApi().postSplitDocument(name, null, null, null, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });

  describe("PutConvertDocument Test", () => {
    
    it("should return response with code 200", () => {
      const urlToFile = "http://pdf995.com/samples/pdf.pdf";
      const format = "tiff";

      return BaseTest.getPdfApi().putConvertDocument(format, urlToFile)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });

  describe("Create Empty Document Test", () => {
    
    it("should return response with code 200", () => {

      const name = "empty_node.pdf";

      return BaseTest.getPdfApi().putCreateDocument(name, null, null, null, null, BaseTest.remoteTempFolder, null, null)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });

  describe("PutCreateDocument Test", () => {
    
    it("should return response with code 200", async () => {

      const name = "HtmlExample1.pdf";
      const templateName = "HtmlExample1.html";
      const templateFile = BaseTest.remoteTempFolder + "/" + templateName;
      const templateType = "html";
      await BaseTest.uploadFile(templateName);

      return BaseTest.getPdfApi().putCreateDocument(name, templateFile, null, templateType, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });

  describe("PutCreateDocumentFromImages Test", () => {
    
    it("should return response with code 200", async () => {

      const image1 = "33539.jpg";
      await BaseTest.uploadFile(image1);

      const image2 = "44781.jpg";
      await BaseTest.uploadFile(image2);

      const name = "pdffromimagesinquery_net.pdf";

      let imagesListRequest = new ImagesListRequest();
      imagesListRequest.imagesList = [ BaseTest.remoteTempFolder + "/" + image1, BaseTest.remoteTempFolder + "/" + image2];

      const ocr = false;

      return BaseTest.getPdfApi().putCreateDocumentFromImages(name, imagesListRequest, ocr, null, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, HttpStatusCode.OK);
        });
    });
  });
});
