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

import { StampType } from "./stampType";
import { Rectangle } from "./rectangle";
import { LinkElement } from "./linkElement";

/**
* Provides stamp info.
*/
export class StampInfo extends LinkElement {
    /**
    * Gets ID of the stamp.
    */
    'id': string;
    /**
    * Gets index on page of the stamp.
    */
    'indexOnPage': number;
    /**
    * Gets PageIndex of the annotation.
    */
    'pageIndex': number;
    /**
    * Gets Rect of the annotation.
    */
    'rect': Rectangle;
    /**
    * Get the text content.
    */
    'text': string;
    /**
    * Gets the stamp is visible.
    */
    'visible': boolean;
    /**
    * Gets stamp type.
    */
    'stampType': StampType;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "indexOnPage",
            "baseName": "IndexOnPage",
            "type": "number"
        },
        {
            "name": "pageIndex",
            "baseName": "PageIndex",
            "type": "number"
        },
        {
            "name": "rect",
            "baseName": "Rect",
            "type": "Rectangle"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        },
        {
            "name": "visible",
            "baseName": "Visible",
            "type": "boolean"
        },
        {
            "name": "stampType",
            "baseName": "StampType",
            "type": "StampType"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StampInfo.attributeTypeMap);
    }
}


