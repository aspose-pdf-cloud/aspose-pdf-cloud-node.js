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

import { ImageFragment } from "./imageFragment";
import { VerticalAlignment } from "./verticalAlignment";
import { TextRect } from "./textRect";
import { TextState } from "./textState";
import { HorizontalAlignment } from "./horizontalAlignment";
import { Color } from "./color";
import { BorderInfo } from "./borderInfo";
import { MarginInfo } from "./marginInfo";

/**
* Represents a cell of the table's row.
*/
export class Cell {
    /**
    * Gets or sets the cell have border.
    */
    'isNoBorder': boolean;
    /**
    * Gets or sets the padding.
    */
    'margin': MarginInfo;
    /**
    * Gets or sets the border.
    */
    'border': BorderInfo;
    /**
    * Gets or sets the background color.
    */
    'backgroundColor': Color;
    /**
    * Gets or sets the background image file.
    */
    'backgroundImageFile': string;
    /**
    * Gets or sets path of the background image file from storage.
    */
    'backgroundImageStorageFile': string;
    /**
    * Gets or sets the alignment.
    */
    'alignment': HorizontalAlignment;
    /**
    * Gets or sets the default cell text state.
    */
    'defaultCellTextState': TextState;
    /**
    * Gets or sets the cell's formatted text.
    */
    'paragraphs': Array<TextRect>;
    /**
    * Gets or sets the cell's text word wrapped.
    */
    'isWordWrapped': boolean;
    /**
    * Gets or sets the vertical alignment.
    */
    'verticalAlignment': VerticalAlignment;
    /**
    * Gets or sets the column span.
    */
    'colSpan': number;
    /**
    * Gets or sets the row span.
    */
    'rowSpan': number;
    /**
    * Gets or sets the column width.
    */
    'width': number;
    /**
    * Gets or sets Html fragment.
    */
    'htmlFragment': string;
    /**
    * Gets or sets ImageFragment list.
    */
    'images': Array<ImageFragment>;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isNoBorder",
            "baseName": "IsNoBorder",
            "type": "boolean"
        },
        {
            "name": "margin",
            "baseName": "Margin",
            "type": "MarginInfo"
        },
        {
            "name": "border",
            "baseName": "Border",
            "type": "BorderInfo"
        },
        {
            "name": "backgroundColor",
            "baseName": "BackgroundColor",
            "type": "Color"
        },
        {
            "name": "backgroundImageFile",
            "baseName": "BackgroundImageFile",
            "type": "string"
        },
        {
            "name": "backgroundImageStorageFile",
            "baseName": "BackgroundImageStorageFile",
            "type": "string"
        },
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "defaultCellTextState",
            "baseName": "DefaultCellTextState",
            "type": "TextState"
        },
        {
            "name": "paragraphs",
            "baseName": "Paragraphs",
            "type": "Array<TextRect>"
        },
        {
            "name": "isWordWrapped",
            "baseName": "IsWordWrapped",
            "type": "boolean"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        },
        {
            "name": "colSpan",
            "baseName": "ColSpan",
            "type": "number"
        },
        {
            "name": "rowSpan",
            "baseName": "RowSpan",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "Width",
            "type": "number"
        },
        {
            "name": "htmlFragment",
            "baseName": "HtmlFragment",
            "type": "string"
        },
        {
            "name": "images",
            "baseName": "Images",
            "type": "Array<ImageFragment>"
        }    ];

    static getAttributeTypeMap() {
        return Cell.attributeTypeMap;
    }
}


