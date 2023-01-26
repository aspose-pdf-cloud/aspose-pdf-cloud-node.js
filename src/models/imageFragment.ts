 /**
 *
 * Copyright (c) 2023 Aspose.PDF Cloud
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

import { MarginInfo } from "./marginInfo";
import { VerticalAlignment } from "./verticalAlignment";
import { HorizontalAlignment } from "./horizontalAlignment";

/**
* Represents Image Fragment DTO.
*/
export class ImageFragment {
    /**
    * Gets or sets full storage path of image.
    */
    'imageFile': string;
    /**
    * Gets or sets fix width of the image.
    */
    'fixWidth': number;
    /**
    * Gets or sets fix height of the image.
    */
    'fixHeight': number;
    /**
    * Gets or sets horizontal alignment of the image.
    */
    'horizontalAlignment': HorizontalAlignment;
    /**
    * Gets or sets vertical alignment of the image.
    */
    'verticalAlignment': VerticalAlignment;
    /**
    * Gets or sets ImageScale of the image.
    */
    'imageScale': number;
    /**
    * Gets or sets Margin of the image.
    */
    'margin': MarginInfo;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imageFile",
            "baseName": "ImageFile",
            "type": "string"
        },
        {
            "name": "fixWidth",
            "baseName": "FixWidth",
            "type": "number"
        },
        {
            "name": "fixHeight",
            "baseName": "FixHeight",
            "type": "number"
        },
        {
            "name": "horizontalAlignment",
            "baseName": "HorizontalAlignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        },
        {
            "name": "imageScale",
            "baseName": "ImageScale",
            "type": "number"
        },
        {
            "name": "margin",
            "baseName": "Margin",
            "type": "MarginInfo"
        }    ];

    static getAttributeTypeMap() {
        return ImageFragment.attributeTypeMap;
    }
}


