 /**
 *
 * Copyright (c) 2023 Aspose.PDF Cloud
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

import { FontStyles } from "./fontStyles";
import { Color } from "./color";

/**
* Represents a text state of a text
*/
export class TextState {
    /**
    * Gets or sets font size of the text.
    */
    'fontSize': number;
    /**
    * Gets or sets font name of the text.
    */
    'font': string;
    /**
    * Gets or sets foreground color of the text.
    */
    'foregroundColor': Color;
    /**
    * Sets background color of the text.
    */
    'backgroundColor': Color;
    /**
    * Sets font style of the text.
    */
    'fontStyle': FontStyles;
    /**
    * Sets path of font file in storage.
    */
    'fontFile': string;
    /**
    * Gets or sets underline of the text.
    */
    'underline': boolean;
    /**
    * Gets or sets strikeout of the text.
    */
    'strikeOut': boolean;
    /**
    * Gets or sets superscript mode of the text.
    */
    'superscript': boolean;
    /**
    * Gets or sets subscript mode of the text.
    */
    'subscript': boolean;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fontSize",
            "baseName": "FontSize",
            "type": "number"
        },
        {
            "name": "font",
            "baseName": "Font",
            "type": "string"
        },
        {
            "name": "foregroundColor",
            "baseName": "ForegroundColor",
            "type": "Color"
        },
        {
            "name": "backgroundColor",
            "baseName": "BackgroundColor",
            "type": "Color"
        },
        {
            "name": "fontStyle",
            "baseName": "FontStyle",
            "type": "FontStyles"
        },
        {
            "name": "fontFile",
            "baseName": "FontFile",
            "type": "string"
        },
        {
            "name": "underline",
            "baseName": "Underline",
            "type": "boolean"
        },
        {
            "name": "strikeOut",
            "baseName": "StrikeOut",
            "type": "boolean"
        },
        {
            "name": "superscript",
            "baseName": "Superscript",
            "type": "boolean"
        },
        {
            "name": "subscript",
            "baseName": "Subscript",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TextState.attributeTypeMap;
    }
}


