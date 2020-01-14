 /**
 *
 *   Copyright (c) 2020 Aspose Pty Ltd
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
import { FreeTextAnnotation } from "../src/models/freeTextAnnotation" 
import { TextStyle } from "../src/models/textStyle" 
import { AnnotationFlags } from "../src/models/annotationFlags" 
import { HorizontalAlignment } from "../src/models/horizontalAlignment" 
import { FreeTextIntent } from "../src/models/freeTextIntent" 
import { Justification } from "../src/models/justification"

describe("Free Text Annotations Tests", () => {

    const name = "PdfWithAnnotations.pdf";
    const pageNumber = 2;

    beforeEach( async ()=> {
        await BaseTest.uploadFile(name);
    });

    describe("Get Document Free Text Annotations Test", () => {

        it("should return response with code 200", async () => {
            
            return BaseTest.getPdfApi().getDocumentFreeTextAnnotations(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Page Free Text Annotations Test", () => {

        it("should return response with code 200", async () => {

            return BaseTest.getPdfApi().getPageFreeTextAnnotations(name, pageNumber, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Get Free Text Annotation Test", () => {

        it("should return response with code 200", async () => {

            const result = await BaseTest.getPdfApi().getDocumentFreeTextAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;
            
            return BaseTest.getPdfApi().getFreeTextAnnotation(name, annotationId, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("Post Page Free Text Annotations Test", () => {

        it("should return response with code 200", async () => {
            
            const textStyle = new TextStyle();
            textStyle.fontSize = 12; 
            textStyle.font = "Arial";
            textStyle.foregroundColor = { a: 0xFF, r: 0, g: 0xFF, b: 0};
            textStyle.backgroundColor = { a: 0xFF, r: 0xFF, g: 0, b: 0};

            const freeTextAnnotation = new FreeTextAnnotation();
            freeTextAnnotation.name = "Test Free Text";
            freeTextAnnotation.textStyle = textStyle;
            freeTextAnnotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
            freeTextAnnotation.flags = [AnnotationFlags.Default];
            freeTextAnnotation.horizontalAlignment = HorizontalAlignment.Center;
            freeTextAnnotation.intent = FreeTextIntent.FreeTextTypeWriter;
            freeTextAnnotation.richText = "Rich Text";
            freeTextAnnotation.subject = "Text Box Subj";
            freeTextAnnotation.zIndex = 1;
            freeTextAnnotation.justification = Justification.Center;
            freeTextAnnotation.title = "Title"
                

            return BaseTest.getPdfApi().postPageFreeTextAnnotations(name, pageNumber, [freeTextAnnotation], null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    

    describe("Put Free Text Annotation Test", () => {

        it("should return response with code 200", async () => {
            
            const textStyle = new TextStyle();
            textStyle.fontSize = 12; 
            textStyle.font = "Arial";
            textStyle.foregroundColor = { a: 0xFF, r: 0, g: 0xFF, b: 0};
            textStyle.backgroundColor = { a: 0xFF, r: 0xFF, g: 0, b: 0};

            const freeTextAnnotation = new FreeTextAnnotation();
            freeTextAnnotation.name = "Test Free Text";
            freeTextAnnotation.textStyle = textStyle;
            freeTextAnnotation.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
            freeTextAnnotation.flags = [AnnotationFlags.Default];
            freeTextAnnotation.horizontalAlignment = HorizontalAlignment.Center;
            freeTextAnnotation.intent = FreeTextIntent.FreeTextTypeWriter;
            freeTextAnnotation.richText = "Rich Text";
            freeTextAnnotation.subject = "Text Box Subj";
            freeTextAnnotation.zIndex = 1;
            freeTextAnnotation.justification = Justification.Center;
            freeTextAnnotation.title = "Title"
            
            const result = await BaseTest.getPdfApi().getDocumentFreeTextAnnotations(name, null, BaseTest.remoteTempFolder)
            const annotationId = result.body.annotations.list[0].id;

            return BaseTest.getPdfApi().putFreeTextAnnotation(name, annotationId, freeTextAnnotation, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    
});