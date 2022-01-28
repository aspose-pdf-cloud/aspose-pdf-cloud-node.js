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


/**
* Represents the privileges for accessing Pdf file.
*/
export class DocumentPrivilege {
    /**
    * Sets the permission which allow print or not.  true is allow and false or not set is forbidden.
    */
    'allowPrint': boolean;
    /**
    * Sets the permission which allow degraded printing or not.  true is allow and false or not set is forbidden.
    */
    'allowDegradedPrinting': boolean;
    /**
    * Sets the permission which allow modify contents or not.  true is allow and false or not set is forbidden.
    */
    'allowModifyContents': boolean;
    /**
    * Sets the permission which allow copy or not.  true is allow and false or not set is forbidden.
    */
    'allowCopy': boolean;
    /**
    * Sets the permission which allow modify annotations or not.  true is allow and false or not set is forbidden.
    */
    'allowModifyAnnotations': boolean;
    /**
    * Sets the permission which allow fill in forms or not.  true is allow and false or not set is forbidden.
    */
    'allowFillIn': boolean;
    /**
    * Sets the permission which allow screen readers or not.  true is allow and false or not set is forbidden.
    */
    'allowScreenReaders': boolean;
    /**
    * Sets the permission which allow assembly or not.  true is allow and false or not set is forbidden.
    */
    'allowAssembly': boolean;
    /**
    * Sets the print level of  document's privilege. Just as the Adobe Professional's Printing Allowed settings. 0: None. 1: Low Resolution (150 dpi). 2: High Resolution.
    */
    'printAllowLevel': number;
    /**
    * Sets the change level of  document's privilege. Just as the Adobe Professional's Changes Allowed settings. 0: None. 1: Inserting, Deleting and Rotating pages. 2: Filling in form fields and signing existing signature fields. 3: Commenting, filling in form fields, and signing existing signature fields. 4: Any except extracting pages.
    */
    'changeAllowLevel': number;
    /**
    * Sets the copy level of  document's privilege. Just as the Adobe Professional's permission settings. 0: None. 1: Enable text access for screen reader devices for the visually impaired. 2: Enable copying of text, images and other content.
    */
    'copyAllowLevel': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPrint",
            "baseName": "AllowPrint",
            "type": "boolean"
        },
        {
            "name": "allowDegradedPrinting",
            "baseName": "AllowDegradedPrinting",
            "type": "boolean"
        },
        {
            "name": "allowModifyContents",
            "baseName": "AllowModifyContents",
            "type": "boolean"
        },
        {
            "name": "allowCopy",
            "baseName": "AllowCopy",
            "type": "boolean"
        },
        {
            "name": "allowModifyAnnotations",
            "baseName": "AllowModifyAnnotations",
            "type": "boolean"
        },
        {
            "name": "allowFillIn",
            "baseName": "AllowFillIn",
            "type": "boolean"
        },
        {
            "name": "allowScreenReaders",
            "baseName": "AllowScreenReaders",
            "type": "boolean"
        },
        {
            "name": "allowAssembly",
            "baseName": "AllowAssembly",
            "type": "boolean"
        },
        {
            "name": "printAllowLevel",
            "baseName": "PrintAllowLevel",
            "type": "number"
        },
        {
            "name": "changeAllowLevel",
            "baseName": "ChangeAllowLevel",
            "type": "number"
        },
        {
            "name": "copyAllowLevel",
            "baseName": "CopyAllowLevel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DocumentPrivilege.attributeTypeMap;
    }
}


