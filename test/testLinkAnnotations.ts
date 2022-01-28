 /**
 *
 * Copyright (c) 2022 Aspose.PDF Cloud
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
import { LinkAnnotation } from "../src/models/linkAnnotation";
import { LinkActionType } from "../src/models/linkActionType";
var assert = require('assert');

describe("Links Tests", () => {

    const name = "PdfWithLinks.pdf";
    const pageNumber = 1;
    let linkId: string;

    before( async () => {
        await BaseTest.uploadFile(name);
        const result = await BaseTest.getPdfApi().getPageLinkAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder);
        linkId = result.body.links.list[0].id;
    });

    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("GetPageLinkAnnotation Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getPageLinkAnnotation(name, pageNumber, linkId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteLinkAnnotation Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().deleteLinkAnnotation(name, linkId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetPageLinkAnnotations Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getPageLinkAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostPageLinkAnnotations Test", () => {
        
        it("should return response with code 200", () => {

            const linkAnnotation = new LinkAnnotation();
            linkAnnotation.actionType = LinkActionType.GoToURIAction;
            linkAnnotation.action = "https://products.aspose.cloud/pdf";
            linkAnnotation.rect = {lLX: 100, lLY: 100, uRX: 500, uRY: 500 };

            return BaseTest.getPdfApi().postPageLinkAnnotations(name, pageNumber, [linkAnnotation], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutLinkAnnotation Test", () => {
        
        it("should return response with code 200", () => {

            const linkAnnotation = new LinkAnnotation();
            linkAnnotation.actionType = LinkActionType.GoToURIAction;
            linkAnnotation.action = "https://products.aspose.cloud/pdf";
            linkAnnotation.rect = {lLX: 100, lLY: 100, uRX: 500, uRY: 500 };

            return BaseTest.getPdfApi().putLinkAnnotation(name, linkId, linkAnnotation, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeletePageLinkAnnotations Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().deletePageLinkAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteDocumentLinkAnnotations Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().deleteDocumentLinkAnnotations(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetLinkAnnotation Test", () => {
        
        it("should return response with code 200", () => {

            return BaseTest.getPdfApi().getLinkAnnotation(name, linkId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
});