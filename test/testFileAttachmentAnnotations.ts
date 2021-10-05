 /**
 *
 * Copyright (c) 2021 Aspose.PDF Cloud
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
import { FileAttachmentAnnotation } from "../src/models/fileAttachmentAnnotation";
import { AnnotationFlags } from "../src/models/annotationFlags"; 
import { HorizontalAlignment } from "../src/models/horizontalAlignment"; 

describe("FileAttachment Annotations Tests", () => {

    const name = "PdfWithAnnotations.pdf";
    const pageNumber = 2;

    const attachmentFile = "4pages.pdf";

    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document FileAttachment Annotations Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentFileAttachmentAnnotations(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Page FileAttachment Annotations Test", () => {

        it("should return response with code 200", async () => {

            return BaseTest.getPdfApi().getPageFileAttachmentAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get FileAttachment Annotation Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentFileAttachmentAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().getFileAttachmentAnnotation(name, annotationId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page FileAttachment Annotations Test", () => {

        it("should return response with code 200", async () => {
            await BaseTest.uploadFile(attachmentFile);

            const annotation = new FileAttachmentAnnotation();
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
            annotation.fileName = attachmentFile;

            return BaseTest.getPdfApi().postPageFileAttachmentAnnotations(name, pageNumber, [annotation], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    

    describe("Put FileAttachment Annotation Test", () => {

        it("should return response with code 200", async () => {
            
            await BaseTest.uploadFile(attachmentFile);

            const annotation = new FileAttachmentAnnotation();
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
            annotation.fileName = attachmentFile;
            
            const result = await BaseTest.getPdfApi().getDocumentFileAttachmentAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;

            return BaseTest.getPdfApi().putFileAttachmentAnnotation(name, annotationId, annotation, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get FileAttachment Annotation Data Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentFileAttachmentAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().getFileAttachmentAnnotationData(name, annotationId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Put FileAttachment Annotation Data Extract Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentFileAttachmentAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().putFileAttachmentAnnotationDataExtract(name, annotationId, null, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });
    
});