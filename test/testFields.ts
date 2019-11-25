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
import { CheckBoxField } from "../src/models/checkBoxField";
import { RadioButtonField } from "../src/models/radioButtonField";
import { BoxStyle } from "../src/models/boxStyle";
import { RadioButtonOptionField } from "../src/models/radioButtonOptionField";
import { Option } from "../src/models/option";
import { ComboBoxField } from "../src/models/comboBoxField";
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

    describe("CheckBoxField Tests", () => {

        describe("GetDocumentCheckBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
    
                return BaseTest.getPdfApi().getDocumentCheckBoxFields(name, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetPageCheckBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const pageNumber = 1;

                return BaseTest.getPdfApi().getPageCheckBoxFields(name, pageNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetCheckBoxField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "checkboxField";

                return BaseTest.getPdfApi().getCheckBoxField(name, fieldName, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PostCheckBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "4pages.pdf";
                await BaseTest.uploadFile(name);
                
                const field = new CheckBoxField();
                field.pageIndex = 1; 
                field.isGroup = false;
                field.color = {a: 255, r: 255, g: 0, b: 0};
                field.checked = true;
                field.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
                field.exportValue = "true";
                field.partialName = "testField";
                field.style = BoxStyle.Cross;
                

                return BaseTest.getPdfApi().postCheckBoxFields(name, [field], null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutCheckBoxField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "checkboxField";

                const field = new CheckBoxField();
                field.pageIndex = 1; 
                field.isGroup = false;
                field.color = {a: 255, r: 255, g: 0, b: 0};
                field.checked = true;
                field.rect = { lLX: 100, lLY: 100, uRX: 200, uRY: 200};
                field.exportValue = "true";
                field.partialName = "testField";
                field.style = BoxStyle.Cross;
                

                return BaseTest.getPdfApi().putCheckBoxField(name, fieldName, field, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });

    describe("RadioButtonField Tests", () => {

        describe("GetDocumentRadioButtonFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
    
                return BaseTest.getPdfApi().getDocumentRadioButtonFields(name, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetPageRadioButtonFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const pageNumber = 1;

                return BaseTest.getPdfApi().getPageRadioButtonFields(name, pageNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetRadioButtonField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "radiobuttonField";

                return BaseTest.getPdfApi().getRadioButtonField(name, fieldName, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PostRadioButtonFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "4pages.pdf";
                await BaseTest.uploadFile(name);
                
                const option1 = new RadioButtonOptionField();
                option1.pageIndex = 1;
                option1.isGroup = false;
                option1.optionName = "1";
                option1.rect = { lLX: 100, lLY: 130, uRX: 160, uRY: 140};
                option1.style = BoxStyle.Cross;

                const option2 = new RadioButtonOptionField();
                option2.pageIndex = 1;
                option2.isGroup = false;
                option2.optionName = "2";
                option2.rect = { lLX: 150, lLY: 120, uRX: 160, uRY: 130};
                option2.style = BoxStyle.Cross;

                const field = new RadioButtonField();
                field.pageIndex = 1; 
                field.isGroup = false;
                field.selected = 1;
                field.color = {a: 255, r: 255, g: 0, b: 0};
                field.rect = { lLX: 100, lLY: 100, uRX: 160, uRY: 140};
                field.partialName = "testField";
                field.style = BoxStyle.Cross;
                field.margin = { bottom: 0, left: 0, right: 0, top: 0 };
                field.radioButtonOptionsField = [
                    option1, option2
                ]
                

                return BaseTest.getPdfApi().postRadioButtonFields(name, [field], null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutRadioButtonField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "radiobuttonField";

                const option1 = new RadioButtonOptionField();
                option1.pageIndex = 1;
                option1.isGroup = false;
                option1.optionName = "1";
                option1.rect = { lLX: 100, lLY: 130, uRX: 160, uRY: 140};
                option1.style = BoxStyle.Cross;

                const option2 = new RadioButtonOptionField();
                option2.pageIndex = 1;
                option2.isGroup = false;
                option2.optionName = "2";
                option2.rect = { lLX: 150, lLY: 120, uRX: 160, uRY: 130};
                option2.style = BoxStyle.Cross;

                const field = new RadioButtonField();
                field.pageIndex = 1; 
                field.isGroup = false;
                field.selected = 1;
                field.color = {a: 255, r: 255, g: 0, b: 0};
                field.rect = { lLX: 100, lLY: 100, uRX: 160, uRY: 140};
                field.partialName = "testField";
                field.style = BoxStyle.Cross;
                field.margin = { bottom: 0, left: 0, right: 0, top: 0 };
                field.radioButtonOptionsField = [
                    option1, option2
                ]
                

                return BaseTest.getPdfApi().putRadioButtonField(name, fieldName, field, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });


    describe("ComboBoxField Tests", () => {

        describe("GetDocumentComboBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
    
                return BaseTest.getPdfApi().getDocumentComboBoxFields(name, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetPageComboBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const pageNumber = 1;

                return BaseTest.getPdfApi().getPageComboBoxFields(name, pageNumber, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("GetComboBoxField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "comboboxField";

                return BaseTest.getPdfApi().getComboBoxField(name, fieldName, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PostComboBoxFields Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "4pages.pdf";
                await BaseTest.uploadFile(name);
                
                const option1 = new Option();
                option1.name = "one";
                option1.value = "one";

                const option2 = new Option();
                option1.name = "two";
                option1.value = "two";

                const field = new ComboBoxField();
                field.pageIndex = 1; 
                field.isGroup = false;
                field.selected = 1;
                field.color = {a: 255, r: 255, g: 0, b: 0};
                field.rect = { lLX: 100, lLY: 100, uRX: 160, uRY: 140};
                field.partialName = "testField";
                field.margin = { bottom: 0, left: 0, right: 0, top: 0 };
                field.options = [
                    option1, option2
                ]
                

                return BaseTest.getPdfApi().postComboBoxFields(name, [field], null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });

        describe("PutComboBoxField Test", () => {
            
            it("should return response with code 200", async () => {
    
                const name = "PdfWithAcroForm.pdf";
                await BaseTest.uploadFile(name);
                
                const fieldName = "comboboxField";

                const option1 = new Option();
                option1.name = "one";
                option1.value = "one";

                const option2 = new Option();
                option1.name = "two";
                option1.value = "two";

                const field = new ComboBoxField();
                field.pageIndex = 1; 
                field.isGroup = false;
                field.selected = 1;
                field.color = {a: 255, r: 255, g: 0, b: 0};
                field.rect = { lLX: 100, lLY: 100, uRX: 160, uRY: 140};
                field.partialName = "testField";
                field.margin = { bottom: 0, left: 0, right: 0, top: 0 };
                field.options = [
                    option1, option2
                ]
                

                return BaseTest.getPdfApi().putComboBoxField(name, fieldName, field, null, BaseTest.remoteTempFolder)
                    .then((result) => {
                        assert.equal(result.response.statusCode, 200);
                });
            });
        });
    });
});