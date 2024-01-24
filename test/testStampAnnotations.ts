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
import { StampAnnotation } from "../src/models/stampAnnotation";
import { AnnotationFlags } from "../src/models/annotationFlags"; 
import { HorizontalAlignment } from "../src/models/horizontalAlignment"; 

describe("Stamp Annotations Tests", () => {

    const name = "PdfWithAnnotations.pdf";
    const pageNumber = 2;

    const attachmentFile = "4pages.pdf";

    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document Stamp Annotations Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentStampAnnotations(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Page Stamp Annotations Test", () => {

        it("should return response with code 200", async () => {

            return BaseTest.getPdfApi().getPageStampAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Stamp Annotation Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentStampAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().getStampAnnotation(name, annotationId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page Stamp Annotations Test", () => {

        it("should return response with code 200", async () => {
            await BaseTest.uploadFile(attachmentFile);

            const annotation = new StampAnnotation();
            annotation.name = "Name";
            annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
            annotation.flags = [AnnotationFlags.Default];
            annotation.horizontalAlignment = HorizontalAlignment.Center;
            annotation.richText = "Rich Text";
            annotation.subject = "Text Box Subj";
            annotation.zIndex = 1;
            annotation.title = "Title";
            annotation.modified = "01/01/2018 00:00:00.000 AM";
            annotation.filePath = BaseTest.remoteTempFolder + "/" + attachmentFile;

            return BaseTest.getPdfApi().postPageStampAnnotations(name, pageNumber, [annotation], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    

    describe("Put Stamp Annotation Test", () => {

        it("should return response with code 200", async () => {
            
            await BaseTest.uploadFile(attachmentFile);

            const annotation = new StampAnnotation();
            annotation.name = "Name Updated";
            annotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
            annotation.flags = [AnnotationFlags.Default];
            annotation.horizontalAlignment = HorizontalAlignment.Center;
            annotation.richText = "Rich Text Updated";
            annotation.subject = "Text Box Subj Updated";
            annotation.zIndex = 1;
            annotation.title = "Title Updated";
            annotation.modified = "01/01/2018 12:01:02.000 AM";
            annotation.filePath = BaseTest.remoteTempFolder + "/" + attachmentFile;
            
            const result = await BaseTest.getPdfApi().getDocumentStampAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;

            return BaseTest.getPdfApi().putStampAnnotation(name, annotationId, annotation, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Stamp Annotation Data Test", () => {

        it("should return response with code 204", async () => {

            const result = await BaseTest.getPdfApi().getDocumentStampAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().getStampAnnotationData(name, annotationId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 204);
            });
        });
    });

    describe("Put Stamp Annotation Data Extract Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentStampAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            const outFile = "stamp.dat";

            return BaseTest.getPdfApi().putStampAnnotationDataExtract(name, annotationId, outFile, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
    
});