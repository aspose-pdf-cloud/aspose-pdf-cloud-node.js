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
import { Field } from "../src/models/field";
import { FieldType } from "../src/models/fieldType";
import { TextBoxField } from "../src/models/textBoxField";
var assert = require('assert');

describe("Fields Tests", () => {

    describe("GetField Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            const fieldName = "textField";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().getField(name, fieldName, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("GetFields Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            const fieldName = "textField";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().getFields(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostCreateField Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "Hello world.pdf";
            await BaseTest.uploadFile(name);
            
            const pageNumber = 1;

            let field = new Field();
            field.name = "checkboxfield";
            field.type = FieldType.Boolean;
            field.values = ["1"];
            field.rect = {
                lLX: 50,
                lLY: 200,
                uRX: 200,
                uRY: 400
            };

            return BaseTest.getPdfApi().postCreateField(name, pageNumber, field, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutUpdateField Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            await BaseTest.uploadFile(name);
            
            const fieldName = "textField";
            
            const field = {
                name: fieldName,
                type: FieldType.Text,
                values: ["Text field updated value."],
                selectedItems: null,
                rect: null,
                links: null
            }

            return BaseTest.getPdfApi().putUpdateField(name, fieldName, field, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutUpdateFields Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            await BaseTest.uploadFile(name);
            
            const fieldName = "textField";
            
            const field = {
                name: fieldName,
                type: FieldType.Text,
                values: ["Text field updated value."],
                selectedItems: null,
                rect: null,
                links: null
            }

            const fields = {links: null, list: [field]}

            return BaseTest.getPdfApi().putUpdateFields(name, fields, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("DeleteField Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            const fieldName = "textField";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().deleteField(name, fieldName, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PutFieldsFlatten Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            await BaseTest.uploadFile(name);

            return BaseTest.getPdfApi().putFieldsFlatten(name, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("PostFlattenDocument Test", () => {
        
        it("should return response with code 200", async () => {

            const name = "PdfWithAcroForm.pdf";
            const fieldName = "textField";
            await BaseTest.uploadFile(name);

            const updateAppearances = true;
            const hideButtons = true;


            return BaseTest.getPdfApi().postFlattenDocument(name, updateAppearances, null, hideButtons, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, 200);
            });
        });
    });

    describe("SignatureField Tests", () => {

        describe("GetDocumentSignatureFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "adbe.x509.rsa_sha1.valid.pdf";
                await BaseTest.uploadFile(name);
    
                return BaseTest.getPdfApi().getDocumentSignatureFields(name, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetPageSignatureFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "adbe.x509.rsa_sha1.valid.pdf";
                await BaseTest.uploadFile(name);

                const pageNumber = 1;
    
                return BaseTest.getPdfApi().getPageSignatureFields(name, pageNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetSignatureField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "adbe.x509.rsa_sha1.valid.pdf";
                await BaseTest.uploadFile(name);

                const fieldName = "Signature1";
    
                return BaseTest.getPdfApi().getSignatureField(name, fieldName, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });

    describe("TextBoxField Tests", () => {

        describe("GetDocumentTextBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "FormDataTextBox.pdf";
                await BaseTest.uploadFile(name);
    
                return BaseTest.getPdfApi().getDocumentTextBoxFields(name, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetPageTextBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "FormDataTextBox.pdf";
                await BaseTest.uploadFile(name);
                
                const pageNumber = 1;

                return BaseTest.getPdfApi().getPageTextBoxFields(name, pageNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetTextBoxField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "FormDataTextBox.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "Petitioner";

                return BaseTest.getPdfApi().getTextBoxField(name, fieldName, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PostTextBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "4pages.pdf";
                await BaseTest.uploadFile(name);
                
                const textBox = new TextBoxField();
                textBox.pageIndex = 1; 
                textBox.isGroup = false;
                textBox.color = {a: 255, r: 255, g: 0, b: 0};
                textBox.multiline = true;
                textBox.maxLen = 100;
                textBox.rect = { lLX: 100, lLY: 100, uRX: 500, uRY: 200};
                textBox.value = "Page 1\nValue";
                textBox.partialName = "testField";
                

                return BaseTest.getPdfApi().postTextBoxFields(name, [textBox], null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutTextBoxField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "FormDataTextBox.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "Petitioner";

                const textBox = new TextBoxField();
                textBox.pageIndex = 1; 
                textBox.isGroup = false;
                textBox.color = {a: 255, r: 255, g: 0, b: 0};
                textBox.multiline = true;
                textBox.maxLen = 100;
                textBox.rect = { lLX: 100, lLY: 100, uRX: 500, uRY: 200};
                textBox.value = "Page 1\nValue";
                textBox.partialName = "testField";
                

                return BaseTest.getPdfApi().putTextBoxField(name, fieldName, textBox, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        
    });
});