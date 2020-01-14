 /**
 *
 *   Copyright (c) 2020 Aspose.PDF Cloud
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

/**
* Represents graphics info.
*/
export class GraphInfo {
    /**
    * Gets or sets a float value that indicates the line width of the graph.
    */
    'lineWidth': number;
    /**
    * Gets or sets a Color object that indicates the color of the graph.
    */
    'color': Color;
    /**
    * Gets or sets a dash array.
    */
    'dashArray': Array<number>;
    /**
    * Gets or sets a dash phase.
    */
    'dashPhase': number;
    /**
    * Gets or sets a Color object that indicates the fill color of the graph.
    */
    'fillColor': Color;
    /**
    * Gets or sets is border doubled.
    */
    'isDoubled': boolean;
    /**
    * Gets or sets a float value that indicates the skew angle of the x-coordinate when transforming a coordinate system.
    */
    'skewAngleX': number;
    /**
    * Gets or sets a float value that indicates the skew angle of the y-coordinate when transforming a coordinate system.
    */
    'skewAngleY': number;
    /**
    * Gets or sets a float value that indicates the scaling rate of the x-coordinate when transforming a coordinate system.
    */
    'scalingRateX': number;
    /**
    * Gets or sets a float value that indicates the scaling rate of the y-coordinate when transforming a coordinate system.
    */
    'scalingRateY': number;
    /**
    * Gets or sets a float value that indicates the rotation angle of the coordinate system  when transforming a coordinate system.
    */
    'rotationAngle': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lineWidth",
            "baseName": "LineWidth",
            "type": "number"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "dashArray",
            "baseName": "DashArray",
            "type": "Array<number>"
        },
        {
            "name": "dashPhase",
            "baseName": "DashPhase",
            "type": "number"
        },
        {
            "name": "fillColor",
            "baseName": "FillColor",
            "type": "Color"
        },
        {
            "name": "isDoubled",
            "baseName": "IsDoubled",
            "type": "boolean"
        },
        {
            "name": "skewAngleX",
            "baseName": "SkewAngleX",
            "type": "number"
        },
        {
            "name": "skewAngleY",
            "baseName": "SkewAngleY",
            "type": "number"
        },
        {
            "name": "scalingRateX",
            "baseName": "ScalingRateX",
            "type": "number"
        },
        {
            "name": "scalingRateY",
            "baseName": "ScalingRateY",
            "type": "number"
        },
        {
            "name": "rotationAngle",
            "baseName": "RotationAngle",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GraphInfo.attributeTypeMap;
    }
}


