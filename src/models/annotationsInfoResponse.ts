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

import { AnnotationsInfo } from "./annotationsInfo";
import { AsposeResponse } from "./asposeResponse";

/**
* Represents multiple annotations info reponse
*/
export class AnnotationsInfoResponse extends AsposeResponse {
    /**
    * Annotations info
    */
    'annotations': AnnotationsInfo;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "annotations",
            "baseName": "Annotations",
            "type": "AnnotationsInfo"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AnnotationsInfoResponse.attributeTypeMap);
    }
}


