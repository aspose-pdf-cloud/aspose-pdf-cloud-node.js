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

import { VerticalAlignment } from "./verticalAlignment";
import { TextState } from "./textState";
import { HorizontalAlignment } from "./horizontalAlignment";
import { StampBase } from "./stampBase";

/**
* Represents Pdf stamps.
*/
export class TextStamp extends StampBase {
    /**
    * Alignment of the text inside the stamp.
    */
    'textAlignment': HorizontalAlignment;
    /**
    * Gets or sets string value which is used as stamp on the page.
    */
    'value': string;
    /**
    * Gets text properties of the stamp. See TextState for details.
    */
    'textState': TextState;
    /**
    * Gets or sets vertical alignment of stamp on page.
    */
    'verticalAlignment': VerticalAlignment;
    /**
    * Gets or sets bottom margin of stamp.
    */
    'bottomMargin': number;
    /**
    * Gets or sets left margin of stamp.
    */
    'leftMargin': number;
    /**
    * Gets or sets top margin of stamp.
    */
    'topMargin': number;
    /**
    * Gets or sets right margin of stamp.
    */
    'rightMargin': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "textAlignment",
            "baseName": "TextAlignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        },
        {
            "name": "textState",
            "baseName": "TextState",
            "type": "TextState"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        },
        {
            "name": "bottomMargin",
            "baseName": "BottomMargin",
            "type": "number"
        },
        {
            "name": "leftMargin",
            "baseName": "LeftMargin",
            "type": "number"
        },
        {
            "name": "topMargin",
            "baseName": "TopMargin",
            "type": "number"
        },
        {
            "name": "rightMargin",
            "baseName": "RightMargin",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextStamp.attributeTypeMap);
    }
}


