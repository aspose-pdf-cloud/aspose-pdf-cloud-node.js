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

import { LinkElement } from "./linkElement";

/**
* Provides link to attachment.
*/
export class Attachment extends LinkElement {
    /**
    * Gets text associated with the attachment. 
    */
    'description': string;
    /**
    * Gets subtype of the attachment file.
    */
    'mimeType': string;
    /**
    * Gets the name of the attachment. 
    */
    'name': string;
    /**
    * The date and time when the embedded file was created.
    */
    'creationDate': string;
    /**
    * The date and time when the embedded file was last modified.
    */
    'modificationDate': string;
    /**
    * The size of the uncompressed embedded file, in bytes.
    */
    'size': number;
    /**
    * A 16-byte string that is the checksum of the bytes of the uncompressed embedded file.  The checksum is calculated by applying the standard MD5 message-digest algorithm  to the bytes of the embedded file stream.
    */
    'checkSum': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "MimeType",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "creationDate",
            "baseName": "CreationDate",
            "type": "string"
        },
        {
            "name": "modificationDate",
            "baseName": "ModificationDate",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "checkSum",
            "baseName": "CheckSum",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Attachment.attributeTypeMap);
    }
}


