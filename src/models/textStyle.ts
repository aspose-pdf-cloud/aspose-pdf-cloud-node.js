﻿ /**
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

import { Color } from "./color";

/**
* Represents a text style of a text
*/
export class TextStyle {
    /**
    * Gets or sets font size of the text.
    */
    'fontSize': number;
    /**
    * Gets or sets font of the text.
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
    * Sets path of font file in storage.
    */
    'fontFile': string;

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
            "name": "fontFile",
            "baseName": "FontFile",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TextStyle.attributeTypeMap;
    }
}


