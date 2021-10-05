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


/**
* Represents color DTO.
*/
export class Color {
    /**
    * Alpha component.
    */
    'a': number;
    /**
    * Red component.
    */
    'r': number;
    /**
    * Green component.
    */
    'g': number;
    /**
    * Blue component.
    */
    'b': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "a",
            "baseName": "A",
            "type": "number"
        },
        {
            "name": "r",
            "baseName": "R",
            "type": "number"
        },
        {
            "name": "g",
            "baseName": "G",
            "type": "number"
        },
        {
            "name": "b",
            "baseName": "B",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Color.attributeTypeMap;
    }
}


