 /**
 *
 *   Copyright (c) 2019 Aspose.PDF Cloud
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

import { TextState } from "./textState";
import { Position } from "./position";
import { VerticalAlignment } from "./verticalAlignment";
import { HorizontalAlignment } from "./horizontalAlignment";
import { Rectangle } from "./rectangle";

/**
* Represents text occurrence.
*/
export class TextRect {
    /**
    * Text of the occurrence.
    */
    'text': string;
    /**
    * Page on which the occurrence is found.
    */
    'page': number;
    /**
    * Rectangle of the occurrence.
    */
    'rect': Rectangle;
    /**
    * Gets or sets a horizontal alignment of text fragment. 
    */
    'horizontalAlignment': HorizontalAlignment;
    /**
    * Gets or sets a vertical alignment of text fragment. 
    */
    'verticalAlignment': VerticalAlignment;
    /**
    * Gets or sets text position for text, represented with TextRect object.
    */
    'position': Position;
    /**
    * Gets text position for text, represented with TextRect object. The YIndent of the Position structure represents baseline coordinate of the text fragment.
    */
    'baselinePosition': Position;
    /**
    * Gets or sets text state for the text that TextRect object represents.
    */
    'textState': TextState;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        },
        {
            "name": "page",
            "baseName": "Page",
            "type": "number"
        },
        {
            "name": "rect",
            "baseName": "Rect",
            "type": "Rectangle"
        },
        {
            "name": "horizontalAlignment",
            "baseName": "HorizontalAlignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        },
        {
            "name": "position",
            "baseName": "Position",
            "type": "Position"
        },
        {
            "name": "baselinePosition",
            "baseName": "BaselinePosition",
            "type": "Position"
        },
        {
            "name": "textState",
            "baseName": "TextState",
            "type": "TextState"
        }    ];

    static getAttributeTypeMap() {
        return TextRect.attributeTypeMap;
    }
}


