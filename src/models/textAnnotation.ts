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

import { TextIcon } from "./textIcon";
import { Color } from "./color";
import { AnnotationState } from "./annotationState";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides TextAnnotation.
*/
export class TextAnnotation extends MarkupAnnotation {
    /**
    * Gets or sets the state to which the original annotation should be set.
    */
    'state': AnnotationState;
    /**
    * Gets or sets is the annotation open.
    */
    'open': boolean;
    /**
    * Color of the annotation.
    */
    'color': Color;
    /**
    * Gets or sets an icon to be used in displaying the annotation.
    */
    'icon': TextIcon;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "state",
            "baseName": "State",
            "type": "AnnotationState"
        },
        {
            "name": "open",
            "baseName": "Open",
            "type": "boolean"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "icon",
            "baseName": "Icon",
            "type": "TextIcon"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextAnnotation.attributeTypeMap);
    }
}


