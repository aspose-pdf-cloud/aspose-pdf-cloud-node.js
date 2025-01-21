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

import { Rectangle } from "./rectangle";
import { Color } from "./color";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides CommonFigureAnnotation.
*/
export class CommonFigureAnnotation extends MarkupAnnotation {
    /**
    * Get the annotation InteriorColor.
    */
    'interiorColor': Color;
    /**
    * Get or set the annotation Rectangle of frame.
    */
    'frame': Rectangle;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "interiorColor",
            "baseName": "InteriorColor",
            "type": "Color"
        },
        {
            "name": "frame",
            "baseName": "Frame",
            "type": "Rectangle"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommonFigureAnnotation.attributeTypeMap);
    }
}


