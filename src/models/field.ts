 /**
 *
 * Copyright (c) 2021 Aspose.PDF Cloud
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
import { FieldType } from "./fieldType";
import { LinkElement } from "./linkElement";

/**
* Represents form field.
*/
export class Field extends LinkElement {
    /**
    * Field name.
    */
    'name': string;
    /**
    * Selected items.
    */
    'selectedItems': Array<number>;
    /**
    * Field type.
    */
    'type': FieldType;
    /**
    * Field rectangle.
    */
    'rect': Rectangle;
    /**
    * Field values.
    */
    'values': Array<string>;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "selectedItems",
            "baseName": "SelectedItems",
            "type": "Array<number>"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "FieldType"
        },
        {
            "name": "rect",
            "baseName": "Rect",
            "type": "Rectangle"
        },
        {
            "name": "values",
            "baseName": "Values",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Field.attributeTypeMap);
    }
}


