 /**
 *
 *   Copyright (c) 2020 Aspose.PDF Cloud
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

import { FormField } from "./formField";

/**
* Provides TextBoxField.
*/
export class TextBoxField extends FormField {
    /**
    * Gets or sets multiline flag of the field. If Multiline is true field can contain multiple lines of text.
    */
    'multiline': boolean;
    /**
    * Gets or sets spellcheck flag for field. If true field shall be spell checked.
    */
    'spellCheck': boolean;
    /**
    * Gets or sets scrollable flag of field. If true field can be scrolled.
    */
    'scrollable': boolean;
    /**
    * Gets or sets flag which indicates is field divided into spaced positions.
    */
    'forceCombs': boolean;
    /**
    * Gets or sets maximum length of text in the field.
    */
    'maxLen': number;
    /**
    * Adds barcode 128 into the field. Field value will be changed onto the code and field become read only.
    */
    'barcode': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "multiline",
            "baseName": "Multiline",
            "type": "boolean"
        },
        {
            "name": "spellCheck",
            "baseName": "SpellCheck",
            "type": "boolean"
        },
        {
            "name": "scrollable",
            "baseName": "Scrollable",
            "type": "boolean"
        },
        {
            "name": "forceCombs",
            "baseName": "ForceCombs",
            "type": "boolean"
        },
        {
            "name": "maxLen",
            "baseName": "MaxLen",
            "type": "number"
        },
        {
            "name": "barcode",
            "baseName": "Barcode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextBoxField.attributeTypeMap);
    }
}


