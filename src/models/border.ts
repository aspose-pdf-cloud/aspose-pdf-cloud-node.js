 /**
 *
 * Copyright (c) 2025 Aspose.PDF Cloud
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
import { Dash } from "./dash";
import { BorderEffect } from "./borderEffect";
import { BorderStyle } from "./borderStyle";

/**
* Class representing characteristics of annotation border.
*/
export class Border {
    /**
    * Gets or sets border width.
    */
    'width': number;
    /**
    * Gets or sets effect intencity. Valid range of value is [0..2].
    */
    'effectIntensity': number;
    /**
    * Gets or sets border style.
    */
    'style': BorderStyle;
    /**
    * Gets or sets border effect.
    */
    'effect': BorderEffect;
    /**
    * Gets or sets dash pattern.
    */
    'dash': Dash;
    /**
    * Gets or sets border color.
    */
    'color': Color;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "width",
            "baseName": "Width",
            "type": "number"
        },
        {
            "name": "effectIntensity",
            "baseName": "EffectIntensity",
            "type": "number"
        },
        {
            "name": "style",
            "baseName": "Style",
            "type": "BorderStyle"
        },
        {
            "name": "effect",
            "baseName": "Effect",
            "type": "BorderEffect"
        },
        {
            "name": "dash",
            "baseName": "Dash",
            "type": "Dash"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        }    ];

    static getAttributeTypeMap() {
        return Border.attributeTypeMap;
    }
}


