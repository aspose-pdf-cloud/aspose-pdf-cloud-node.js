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

import { HorizontalAlignment } from "./horizontalAlignment";
import { Color } from "./color";
import { Point } from "./point";
import { Annotation } from "./annotation";

/**
* Provides RedactionAnnotation.
*/
export class RedactionAnnotation extends Annotation {
    /**
    * An array of 8xN numbers specifying the coordinates of content region that is intended to be removed. 
    */
    'quadPoint': Array<Point>;
    /**
    * Gets or sets color to fill annotation.
    */
    'fillColor': Color;
    /**
    * Gets or sets color of border which is drawn when redaction is not active.
    */
    'borderColor': Color;
    /**
    * Text to print on redact annotation.
    */
    'overlayText': string;
    /**
    * If true overlay text will be repeated on the annotation. 
    */
    'repeat': boolean;
    /**
    * Gets or sets. Alignment of Overlay Text.
    */
    'textAlignment': HorizontalAlignment;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "quadPoint",
            "baseName": "QuadPoint",
            "type": "Array<Point>"
        },
        {
            "name": "fillColor",
            "baseName": "FillColor",
            "type": "Color"
        },
        {
            "name": "borderColor",
            "baseName": "BorderColor",
            "type": "Color"
        },
        {
            "name": "overlayText",
            "baseName": "OverlayText",
            "type": "string"
        },
        {
            "name": "repeat",
            "baseName": "Repeat",
            "type": "boolean"
        },
        {
            "name": "textAlignment",
            "baseName": "TextAlignment",
            "type": "HorizontalAlignment"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RedactionAnnotation.attributeTypeMap);
    }
}


