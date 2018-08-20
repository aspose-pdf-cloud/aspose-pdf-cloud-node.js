 /**
 *
 *   Copyright (c) 2018 Aspose.PDF Cloud
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

import { ShapeType } from "./shapeType";
import { ColorDepth } from "./colorDepth";
import { CompressionType } from "./compressionType";

/**
* Used for tiff export options setting.
*/
export class TiffExportOptions {
    /**
    * Image brightness.
    */
    'brightness': number;
    /**
    * Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None.
    */
    'compression': CompressionType;
    /**
    * Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp.
    */
    'colorDepth': ColorDepth;
    /**
    * Left image margin.
    */
    'leftMargin': number;
    /**
    * Right image margin.
    */
    'rightMargin': number;
    /**
    * Top image margin.
    */
    'topMargin': number;
    /**
    * Bottom image margin.
    */
    'bottomMargin': number;
    /**
    * Image orientation. Possible values are: None, Landscape, Portait.
    */
    'orientation': ShapeType;
    /**
    * Skip blank pages flag.
    */
    'skipBlankPages': boolean;
    /**
    * Image width.
    */
    'width': number;
    /**
    * Image height.
    */
    'height': number;
    /**
    * Horizontal resolution.
    */
    'xResolution': number;
    /**
    * Vertical resolution.
    */
    'yResolution': number;
    /**
    * Start page to export.
    */
    'pageIndex': number;
    /**
    * Number of pages to export.
    */
    'pageCount': number;
    /**
    * Resulting image file.
    */
    'resultFile': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brightness",
            "baseName": "Brightness",
            "type": "number"
        },
        {
            "name": "compression",
            "baseName": "Compression",
            "type": "CompressionType"
        },
        {
            "name": "colorDepth",
            "baseName": "ColorDepth",
            "type": "ColorDepth"
        },
        {
            "name": "leftMargin",
            "baseName": "LeftMargin",
            "type": "number"
        },
        {
            "name": "rightMargin",
            "baseName": "RightMargin",
            "type": "number"
        },
        {
            "name": "topMargin",
            "baseName": "TopMargin",
            "type": "number"
        },
        {
            "name": "bottomMargin",
            "baseName": "BottomMargin",
            "type": "number"
        },
        {
            "name": "orientation",
            "baseName": "Orientation",
            "type": "ShapeType"
        },
        {
            "name": "skipBlankPages",
            "baseName": "SkipBlankPages",
            "type": "boolean"
        },
        {
            "name": "width",
            "baseName": "Width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "Height",
            "type": "number"
        },
        {
            "name": "xResolution",
            "baseName": "XResolution",
            "type": "number"
        },
        {
            "name": "yResolution",
            "baseName": "YResolution",
            "type": "number"
        },
        {
            "name": "pageIndex",
            "baseName": "PageIndex",
            "type": "number"
        },
        {
            "name": "pageCount",
            "baseName": "PageCount",
            "type": "number"
        },
        {
            "name": "resultFile",
            "baseName": "ResultFile",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TiffExportOptions.attributeTypeMap;
    }
}


