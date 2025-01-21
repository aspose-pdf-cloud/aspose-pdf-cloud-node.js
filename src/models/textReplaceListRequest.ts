 /**
 *
 * Copyright (c) 2025 Aspose.PDF Cloud
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

import { TextReplace } from "./textReplace";

/**
* Multiple text replacements request.
*/
export class TextReplaceListRequest {
    /**
    * A list of text replacement settings.
    */
    'textReplaces': Array<TextReplace>;
    /**
    * Name of font to use if requested font is not embedded into document.
    */
    'defaultFont': string;
    /**
    * The index of first match to be replaced.
    */
    'startIndex': number;
    /**
    * The number of matches to be replaced.
    */
    'countReplace': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "textReplaces",
            "baseName": "TextReplaces",
            "type": "Array<TextReplace>"
        },
        {
            "name": "defaultFont",
            "baseName": "DefaultFont",
            "type": "string"
        },
        {
            "name": "startIndex",
            "baseName": "StartIndex",
            "type": "number"
        },
        {
            "name": "countReplace",
            "baseName": "CountReplace",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TextReplaceListRequest.attributeTypeMap;
    }
}


