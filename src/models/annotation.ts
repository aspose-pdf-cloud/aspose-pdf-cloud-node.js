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

import { Color } from "./color";
import { LinkElement } from "./linkElement";

/**
* Provides annotation.
*/
export class Annotation extends LinkElement {
    /**
    * Get the annotation color.
    */
    'color': Color;
    /**
    * Get the annotation content.
    */
    'contents': string;
    /**
    * The date and time when the annotation was created.
    */
    'creationDate': string;
    /**
    * Get the annotation subject.
    */
    'subject': string;
    /**
    * Get the annotation title.
    */
    'title': string;
    /**
    * The date and time when the annotation was last modified.
    */
    'modified': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "contents",
            "baseName": "Contents",
            "type": "string"
        },
        {
            "name": "creationDate",
            "baseName": "CreationDate",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "Subject",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        },
        {
            "name": "modified",
            "baseName": "Modified",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Annotation.attributeTypeMap);
    }
}

