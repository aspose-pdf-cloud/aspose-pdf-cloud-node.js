﻿ /**
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

import { GraphInfo } from "./graphInfo";

/**
* This class represents border for graphics elements.
*/
export class BorderInfo {
    /**
    * Gets or sets a object that indicates left of the border.
    */
    'left': GraphInfo;
    /**
    * Gets or sets a object that indicates right of the border.
    */
    'right': GraphInfo;
    /**
    * Gets or sets a object that indicates the top border.
    */
    'top': GraphInfo;
    /**
    * Gets or sets a object that indicates bottom of the border.
    */
    'bottom': GraphInfo;
    /**
    * Gets or sets a rouded border radius
    */
    'roundedBorderRadius': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "left",
            "baseName": "Left",
            "type": "GraphInfo"
        },
        {
            "name": "right",
            "baseName": "Right",
            "type": "GraphInfo"
        },
        {
            "name": "top",
            "baseName": "Top",
            "type": "GraphInfo"
        },
        {
            "name": "bottom",
            "baseName": "Bottom",
            "type": "GraphInfo"
        },
        {
            "name": "roundedBorderRadius",
            "baseName": "RoundedBorderRadius",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BorderInfo.attributeTypeMap;
    }
}


