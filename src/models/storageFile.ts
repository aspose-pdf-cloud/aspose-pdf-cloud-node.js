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


/**
* File or folder information
*/
export class StorageFile {
    /**
    * File or folder name.
    */
    'name': string;
    /**
    * True if it is a folder.
    */
    'isFolder': boolean;
    /**
    * File or folder last modified DateTime.
    */
    'modifiedDate': Date;
    /**
    * File or folder size.
    */
    'size': number;
    /**
    * File or folder path.
    */
    'path': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "isFolder",
            "baseName": "IsFolder",
            "type": "boolean"
        },
        {
            "name": "modifiedDate",
            "baseName": "ModifiedDate",
            "type": "Date"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "path",
            "baseName": "Path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }
}


