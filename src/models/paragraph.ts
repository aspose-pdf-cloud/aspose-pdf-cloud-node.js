 /**
 *
 *   Copyright (c) 2018 Aspose.PDF Cloud
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

import { TextLine } from "./textLine";
import { VerticalAlignment } from "./verticalAlignment";
import { TextHorizontalAlignment } from "./textHorizontalAlignment";
import { WrapMode } from "./wrapMode";
import { LineSpacing } from "./lineSpacing";

/**
* Paragraph DTO for add text functionality.
*/
export class Paragraph {
    'lineSpacing': LineSpacing;
    'wrapMode': WrapMode;
    'horizontalAlignment': TextHorizontalAlignment;
    'leftMargin': number;
    'rightMargin': number;
    'topMargin': number;
    'bottomMargin': number;
    'rectangle': RectanglePdf;
    'rotation': number;
    'subsequentLinesIndent': number;
    'verticalAlignment': VerticalAlignment;
    'lines': Array<TextLine>;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lineSpacing",
            "baseName": "LineSpacing",
            "type": "LineSpacing"
        },
        {
            "name": "wrapMode",
            "baseName": "WrapMode",
            "type": "WrapMode"
        },
        {
            "name": "horizontalAlignment",
            "baseName": "HorizontalAlignment",
            "type": "TextHorizontalAlignment"
        },
        {
            "name": "leftMargin",
            "baseName": "LeftMargin",
            "type": "number"
        },
        {
            "name": "rightMargin",
            "baseName": "RightMargin",
            "type": "number"
        },
        {
            "name": "topMargin",
            "baseName": "TopMargin",
            "type": "number"
        },
        {
            "name": "bottomMargin",
            "baseName": "BottomMargin",
            "type": "number"
        },
        {
            "name": "rectangle",
            "baseName": "Rectangle",
            "type": "RectanglePdf"
        },
        {
            "name": "rotation",
            "baseName": "Rotation",
            "type": "number"
        },
        {
            "name": "subsequentLinesIndent",
            "baseName": "SubsequentLinesIndent",
            "type": "number"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        },
        {
            "name": "lines",
            "baseName": "Lines",
            "type": "Array<TextLine>"
        }    ];

    static getAttributeTypeMap() {
        return Paragraph.attributeTypeMap;
    }
}


