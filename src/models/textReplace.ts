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

import { Rectangle } from "./rectangle";
import { TextState } from "./textState";

/**
* Single text replacement setting.
*/
export class TextReplace {
    /**
    * Original text.
    */
    'oldValue': string;
    /**
    * New text.
    */
    'newValue': string;
    /**
    * Gets or sets a value indicating whether search text is regular expression.
    */
    'regex': boolean;
    /**
    * Text properties of a new text.
    */
    'textState': TextState;
    /**
    * Rectangle area where searched original text.
    */
    'rect': Rectangle;
    /**
    * The text after replacement is centered horizontally relative to the text being replaced.
    */
    'centerTextHorizontally': boolean;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "oldValue",
            "baseName": "OldValue",
            "type": "string"
        },
        {
            "name": "newValue",
            "baseName": "NewValue",
            "type": "string"
        },
        {
            "name": "regex",
            "baseName": "Regex",
            "type": "boolean"
        },
        {
            "name": "textState",
            "baseName": "TextState",
            "type": "TextState"
        },
        {
            "name": "rect",
            "baseName": "Rect",
            "type": "Rectangle"
        },
        {
            "name": "centerTextHorizontally",
            "baseName": "CenterTextHorizontally",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TextReplace.attributeTypeMap;
    }
}


