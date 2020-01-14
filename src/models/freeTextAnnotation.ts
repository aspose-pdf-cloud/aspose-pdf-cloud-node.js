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

import { TextStyle } from "./textStyle";
import { Rotation } from "./rotation";
import { FreeTextIntent } from "./freeTextIntent";
import { Justification } from "./justification";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides FreeTextAnnotation.
*/
export class FreeTextAnnotation extends MarkupAnnotation {
    /**
    * Gets Justification of the annotation.
    */
    'justification': Justification;
    /**
    * Gets or sets the intent of the free text annotation.
    */
    'intent': FreeTextIntent;
    /**
    * Angle of annotation rotation.
    */
    'rotate': Rotation;
    /**
    * Text style of the annotation.
    */
    'textStyle': TextStyle;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "justification",
            "baseName": "Justification",
            "type": "Justification"
        },
        {
            "name": "intent",
            "baseName": "Intent",
            "type": "FreeTextIntent"
        },
        {
            "name": "rotate",
            "baseName": "Rotate",
            "type": "Rotation"
        },
        {
            "name": "textStyle",
            "baseName": "TextStyle",
            "type": "TextStyle"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FreeTextAnnotation.attributeTypeMap);
    }
}


