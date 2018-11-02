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

import { LineIntent } from "./lineIntent";
import { CaptionPosition } from "./captionPosition";
import { Color } from "./color";
import { LineEnding } from "./lineEnding";
import { Point } from "./point";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides LineAnnotation.
*/
export class LineAnnotation extends MarkupAnnotation {
    /**
    * Gets or sets starting point of line.
    */
    'starting': Point;
    /**
    * Gets or sets line ending style for line starting point.
    */
    'startingStyle': LineEnding;
    /**
    * Gets or sets ending point of line.
    */
    'ending': Point;
    /**
    * Gets or sets ending style for end point of line.
    */
    'endingStyle': LineEnding;
    /**
    * Gets or sets interior color of the annotation.
    */
    'interiorColor': Color;
    /**
    * Gets or sets leader line length.
    */
    'leaderLine': number;
    /**
    * Gets or sets length of leader line extension.
    */
    'leaderLineExtension': number;
    /**
    * Gets or sets leader line offset.
    */
    'leaderLineOffset': number;
    /**
    * Gets or sets boolean flag which determinies is contents must be shown as caption.
    */
    'showCaption': boolean;
    /**
    * Gets or sets caption text offset from its normal position.
    */
    'captionOffset': Point;
    /**
    * Gets or sets annotation caption position.
    */
    'captionPosition': CaptionPosition;
    /**
    * Color of the annotation.
    */
    'color': Color;
    /**
    * Gets or sets the intent of the line annotation.
    */
    'intent': LineIntent;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "starting",
            "baseName": "Starting",
            "type": "Point"
        },
        {
            "name": "startingStyle",
            "baseName": "StartingStyle",
            "type": "LineEnding"
        },
        {
            "name": "ending",
            "baseName": "Ending",
            "type": "Point"
        },
        {
            "name": "endingStyle",
            "baseName": "EndingStyle",
            "type": "LineEnding"
        },
        {
            "name": "interiorColor",
            "baseName": "InteriorColor",
            "type": "Color"
        },
        {
            "name": "leaderLine",
            "baseName": "LeaderLine",
            "type": "number"
        },
        {
            "name": "leaderLineExtension",
            "baseName": "LeaderLineExtension",
            "type": "number"
        },
        {
            "name": "leaderLineOffset",
            "baseName": "LeaderLineOffset",
            "type": "number"
        },
        {
            "name": "showCaption",
            "baseName": "ShowCaption",
            "type": "boolean"
        },
        {
            "name": "captionOffset",
            "baseName": "CaptionOffset",
            "type": "Point"
        },
        {
            "name": "captionPosition",
            "baseName": "CaptionPosition",
            "type": "CaptionPosition"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "intent",
            "baseName": "Intent",
            "type": "LineIntent"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LineAnnotation.attributeTypeMap);
    }
}


