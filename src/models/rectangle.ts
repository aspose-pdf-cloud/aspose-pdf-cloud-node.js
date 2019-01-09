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


/**
* Represents rectangle DTO.
*/
export class Rectangle {
    /**
    * X-coordinate of lower - left corner.
    */
    'lLX': number;
    /**
    * Y - coordinate of lower-left corner.
    */
    'lLY': number;
    /**
    * X - coordinate of upper-right corner.
    */
    'uRX': number;
    /**
    * Y - coordinate of upper-right corner.
    */
    'uRY': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lLX",
            "baseName": "LLX",
            "type": "number"
        },
        {
            "name": "lLY",
            "baseName": "LLY",
            "type": "number"
        },
        {
            "name": "uRX",
            "baseName": "URX",
            "type": "number"
        },
        {
            "name": "uRY",
            "baseName": "URY",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Rectangle.attributeTypeMap;
    }
}


