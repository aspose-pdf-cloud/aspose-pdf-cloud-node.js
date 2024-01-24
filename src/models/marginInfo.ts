 /**
 *
 * Copyright (c) 2024 Aspose.PDF Cloud
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
* This class represents a margin for different objects.
*/
export class MarginInfo {
    /**
    * Gets or sets a float value that indicates the left margin.
    */
    'left': number;
    /**
    * Gets or sets a float value that indicates the right margin.
    */
    'right': number;
    /**
    * Gets or sets a float value that indicates the top margin.
    */
    'top': number;
    /**
    * Gets or sets a float value that indicates the bottom margin.
    */
    'bottom': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "left",
            "baseName": "Left",
            "type": "number"
        },
        {
            "name": "right",
            "baseName": "Right",
            "type": "number"
        },
        {
            "name": "top",
            "baseName": "Top",
            "type": "number"
        },
        {
            "name": "bottom",
            "baseName": "Bottom",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MarginInfo.attributeTypeMap;
    }
}


