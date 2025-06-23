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
import { OptimizeOptions } from "../src/models/optimizeOptions";
import { SplitRangePdfOptions } from "../src/models/splitRangePdfOptions";
import { PageRange } from "../src/models/pageRange";
import { DocumentConfig } from "../src/models/documentConfig";
import { DocumentProperties } from "../src/models/documentProperties";
import { DisplayProperties } from "../src/models/displayProperties";
import { DefaultPageConfig } from "../src/models/defaultPageConfig";
import { Direction } from "../src/models/direction";
import { PageMode } from "../src/models/pageMode";
import { PageLayout } from "../src/models/pageLayout";
import { OrganizeDocumentRequest } from "../src/models/organizeDocumentRequest";
import { Rotation } from "../src/models/rotation"

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

  describe("PostOptimizeDocument with password Test", () => {    
    it("should return response with code 200", async () => {
      const name = "4pagesEncrypted.pdf";
      let optimizeOptions = new OptimizeOptions();
      optimizeOptions.password = BaseTest.toBase64("user $^Password!&");
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

  describe("PostSplitRangePdfDocument Test", () => {    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);
      let pageRange1 = new PageRange();
      pageRange1.to = 2;
      let pageRange2 = new PageRange();
      pageRange2.from = 3;
      let pageRange3 = new PageRange();
      pageRange3.from = 2;
      pageRange3.to = 3;
      let rangeOptions = new SplitRangePdfOptions();
      rangeOptions.pageRanges = [pageRange1, pageRange2, pageRange3];
      return BaseTest.getPdfApi().postSplitRangePdfDocument(name, rangeOptions, null, BaseTest.remoteTempFolder)
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

  describe("Create Empty Document with config Test", () => {
    
    it("should return response with code 200", () => {

      const name = "empty_post.pdf";
      
      const displayProperties = new DisplayProperties();
      displayProperties.centerWindow = true;
      displayProperties.hideMenuBar = true;

      const defaultPageConfig = new DefaultPageConfig();
      defaultPageConfig.height = 100;
      defaultPageConfig.width = 100;

      const config = new DocumentConfig();
      config.pagesCount = 2;
      config.documentProperties = { list: [{name: "prop1", value: "Val1", builtIn: false, links: null}], links: null};
      config.displayProperties = displayProperties;
      config.defaultPageConfig = defaultPageConfig;

      return BaseTest.getPdfApi().postCreateDocument(name, config, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("GetDocumentDisplayProperties Test", () => {
            
    it("should return response with code 200", async () => {

        const name = "4pages.pdf";
        await BaseTest.uploadFile(name);

        return BaseTest.getPdfApi().getDocumentDisplayProperties(name, null, BaseTest.remoteTempFolder)
            .then((result) => {
                assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("PutDocumentDisplayProperties Test", () => {
            
    it("should return response with code 200", async () => {

        const name = "4pages.pdf";
        await BaseTest.uploadFile(name);

        const displayProperties = new DisplayProperties();
        displayProperties.centerWindow = true;
        displayProperties.direction = Direction.L2R;
        displayProperties.displayDocTitle = true;
        displayProperties.hideMenuBar = true;
        displayProperties.hideToolBar = true;
        displayProperties.hideWindowUI = true;
        displayProperties.nonFullScreenPageMode = PageMode.UseNone;
        displayProperties.pageLayout = PageLayout.TwoPageLeft;
        displayProperties.pageMode = PageMode.UseOC;

        return BaseTest.getPdfApi().putDocumentDisplayProperties(name, displayProperties, null, BaseTest.remoteTempFolder)
            .then((result) => {
                assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("PostOrganizeDocument Test", () => {    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);
      return BaseTest.getPdfApi().postOrganizeDocument(name, "1,4-2", BaseTest.remoteTempFolder + "/" + name, null, BaseTest.remoteTempFolder)
        .then((result) => {
          assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("PostOrganizeDocuments Test", () => {    
    it("should return response with code 200", async () => {
      const name1 = "4pages.pdf";
      await BaseTest.uploadFile(name1);
      const name2 = "marketing.pdf";
      await BaseTest.uploadFile(name2);
      const request = new OrganizeDocumentRequest();
      request.list = [
        {path: BaseTest.remoteTempFolder + "/" + name1, pages: "4-2"},
        {path: BaseTest.remoteTempFolder + "/" + name2, pages: "2"},
        {path: BaseTest.remoteTempFolder + "/" + name1, pages: "3,1"},
      ];
      return BaseTest.getPdfApi().postOrganizeDocuments(request, BaseTest.remoteTempFolder + "/OrganizeMany.pdf")
        .then((result) => {
          assert.equal(result.response.statusCode, 200);
        });
    });
  });

  describe("PostDocumentPagesRotate Test", () => {    
    it("should return response with code 200", async () => {
      const name = "4pages.pdf";
      await BaseTest.uploadFile(name);
      const result = await BaseTest.getPdfApi().postDocumentPagesRotate(name, Rotation.on90, "2-3", null, BaseTest.remoteTempFolder)
      assert.equal(result.response.statusCode, 200);
    });
  });
});
