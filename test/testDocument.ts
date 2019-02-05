 /**
 *
 *   Copyright (c) 2019 Aspose.Pdf for Cloud
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
import { OptimizeOptions } from "../src/models/optimizeOptions";

var assert = require('assert');

describe("Document Tests", () => {

  describe("GetDocument Test", () => {
    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);

      return BaseTest.getPdfApi().getDocument(name, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, 200);
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
          assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("PostSplitDocument Test", () => {
    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);

      return BaseTest.getPdfApi().postSplitDocument(name, null, null, null, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("Create Empty Document Test", () => {
    
    it("should return response with code 200", () => {

      const name = "empty_node.pdf";

      return BaseTest.getPdfApi().putCreateDocument(name, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, 200);
        });
    });
  });
});
