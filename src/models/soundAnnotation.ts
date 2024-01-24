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

import { SoundEncoding } from "./soundEncoding";
import { SoundIcon } from "./soundIcon";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides SoundAnnotation.
*/
export class SoundAnnotation extends MarkupAnnotation {
    /**
    * A sound file path defining the sound to be played when the annotation is activated.
    */
    'filePath': string;
    /**
    * Gets or sets an icon to be used in displaying the annotation.
    */
    'icon': SoundIcon;
    /**
    * Gets or sets the sampling rate, in samples per second.
    */
    'rate': number;
    /**
    * Gets or sets the number of sound channels.
    */
    'channels': number;
    /**
    * Gets or sets the number of bits per sample value per channel.
    */
    'bits': number;
    /**
    * Gets or sets the encoding format for the sample data.
    */
    'encoding': SoundEncoding;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filePath",
            "baseName": "FilePath",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "Icon",
            "type": "SoundIcon"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        },
        {
            "name": "channels",
            "baseName": "Channels",
            "type": "number"
        },
        {
            "name": "bits",
            "baseName": "Bits",
            "type": "number"
        },
        {
            "name": "encoding",
            "baseName": "Encoding",
            "type": "SoundEncoding"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SoundAnnotation.attributeTypeMap);
    }
}


