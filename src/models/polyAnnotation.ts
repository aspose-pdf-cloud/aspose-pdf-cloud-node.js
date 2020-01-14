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

import { Point } from "./point";
import { PolyIntent } from "./polyIntent";
import { LineEnding } from "./lineEnding";
import { Color } from "./color";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides PolyAnnotation.
*/
export class PolyAnnotation extends MarkupAnnotation {
    /**
    * Gets or sets the interior color with which to fill the annotation’s line endings.
    */
    'interiorColor': Color;
    /**
    * Gets or sets the style of first line ending.
    */
    'startingStyle': LineEnding;
    /**
    * Gets or sets the style of second line ending.
    */
    'endingStyle': LineEnding;
    /**
    * Gets or sets the intent of the polygon or polyline annotation.
    */
    'intent': PolyIntent;
    /**
    * Gets or sets an array of points representing the horizontal and vertical coordinates of each vertex.
    */
    'vertices': Array<Point>;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "interiorColor",
            "baseName": "InteriorColor",
            "type": "Color"
        },
        {
            "name": "startingStyle",
            "baseName": "StartingStyle",
            "type": "LineEnding"
        },
        {
            "name": "endingStyle",
            "baseName": "EndingStyle",
            "type": "LineEnding"
        },
        {
            "name": "intent",
            "baseName": "Intent",
            "type": "PolyIntent"
        },
        {
            "name": "vertices",
            "baseName": "Vertices",
            "type": "Array<Point>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PolyAnnotation.attributeTypeMap);
    }
}


