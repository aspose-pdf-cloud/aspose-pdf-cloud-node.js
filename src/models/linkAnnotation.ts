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
import { Color } from "./color";
import { LinkHighlightingMode } from "./linkHighlightingMode";
import { LinkActionType } from "./linkActionType";
import { LinkElement } from "./linkElement";

/**
* Provides link to linkAnnotation.
*/
export class LinkAnnotation extends LinkElement {
    'actionType': LinkActionType;
    'action': string;
    'highlighting': LinkHighlightingMode;
    'color': Color;
    'rect': Rectangle;
    'id': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actionType",
            "baseName": "ActionType",
            "type": "LinkActionType"
        },
        {
            "name": "action",
            "baseName": "Action",
            "type": "string"
        },
        {
            "name": "highlighting",
            "baseName": "Highlighting",
            "type": "LinkHighlightingMode"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "rect",
            "baseName": "Rect",
            "type": "Rectangle"
        },
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LinkAnnotation.attributeTypeMap);
    }
}


