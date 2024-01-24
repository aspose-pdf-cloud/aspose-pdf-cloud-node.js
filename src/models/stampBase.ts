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

import { Rotation } from "./rotation";
import { HorizontalAlignment } from "./horizontalAlignment";
import { LinkElement } from "./linkElement";

/**
* Represents Pdf stamps.
*/
export class StampBase extends LinkElement {
    /**
    * Sets or gets a bool value that indicates the content is stamped as background. If the value is true, the stamp content is layed at the bottom. By defalt, the value is false, the stamp content is layed at the top.
    */
    'background': boolean;
    /**
    * Gets or sets Horizontal alignment of stamp on the page. 
    */
    'horizontalAlignment': HorizontalAlignment;
    /**
    * Gets or sets a value to indicate the stamp opacity. The value is from 0.0 to 1.0. By default the value is 1.0.
    */
    'opacity': number;
    /**
    * Sets or gets the rotation of stamp content according Rotation values. Note. This property is for set angles which are multiples of 90 degrees (0, 90, 180, 270 degrees). To set arbitrary angle use RotateAngle property.  If angle set by ArbitraryAngle is not multiple of 90 then Rotate property returns Rotation.None.
    */
    'rotate': Rotation;
    /**
    * Gets or sets rotate angle of stamp in degrees. This property allows to set arbitrary rotate angle. 
    */
    'rotateAngle': number;
    /**
    * Horizontal stamp coordinate, starting from the left.
    */
    'xIndent': number;
    /**
    * Vertical stamp coordinate, starting from the bottom.
    */
    'yIndent': number;
    /**
    * Zooming factor of the stamp. Allows to scale stamp.
    */
    'zoom': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "background",
            "baseName": "Background",
            "type": "boolean"
        },
        {
            "name": "horizontalAlignment",
            "baseName": "HorizontalAlignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "opacity",
            "baseName": "Opacity",
            "type": "number"
        },
        {
            "name": "rotate",
            "baseName": "Rotate",
            "type": "Rotation"
        },
        {
            "name": "rotateAngle",
            "baseName": "RotateAngle",
            "type": "number"
        },
        {
            "name": "xIndent",
            "baseName": "XIndent",
            "type": "number"
        },
        {
            "name": "yIndent",
            "baseName": "YIndent",
            "type": "number"
        },
        {
            "name": "zoom",
            "baseName": "Zoom",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StampBase.attributeTypeMap);
    }
}


