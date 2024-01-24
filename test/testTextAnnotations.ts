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
import { TextAnnotation } from "../src/models/textAnnotation" 
import { AnnotationFlags } from "../src/models/annotationFlags" 
import { HorizontalAlignment } from "../src/models/horizontalAlignment" 
import { AnnotationState } from "../src/models/annotationState";

describe("Text Annotations Tests", () => {

    const name = "PdfWithAnnotations.pdf";
    const pageNumber = 2;

    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document Text Annotations Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentTextAnnotations(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Page Text Annotations Test", () => {

        it("should return response with code 200", async () => {

            return BaseTest.getPdfApi().getPageTextAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Text Annotation Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentTextAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().getTextAnnotation(name, annotationId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page Free Text Annotations Test", () => {

        it("should return response with code 200", async () => {
            
            const textAnnotation = new TextAnnotation();
            textAnnotation.name = "Test Free Text";
            textAnnotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
            textAnnotation.flags = [AnnotationFlags.Default];
            textAnnotation.horizontalAlignment = HorizontalAlignment.Center;
            textAnnotation.richText = "Rich Text";
            textAnnotation.subject = "Text Box Subj";
            textAnnotation.zIndex = 1;
            textAnnotation.state = AnnotationState.Undefined;

            return BaseTest.getPdfApi().postPageTextAnnotations(name, pageNumber, [textAnnotation], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    

    describe("Put Text Annotation Test", () => {

        it("should return response with code 200", async () => {
            
            const textAnnotation = new TextAnnotation();
            textAnnotation.name = "Test Free Text";
            textAnnotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
            textAnnotation.flags = [AnnotationFlags.Default];
            textAnnotation.horizontalAlignment = HorizontalAlignment.Center;
            textAnnotation.richText = "Rich Text";
            textAnnotation.subject = "Text Box Subj";
            textAnnotation.zIndex = 1;
            textAnnotation.state = AnnotationState.Undefined;
            
            const result = await BaseTest.getPdfApi().getDocumentTextAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;

            return BaseTest.getPdfApi().putTextAnnotation(name, annotationId, textAnnotation, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    
});