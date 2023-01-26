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

import { VerticalAlignment } from "./verticalAlignment";
import { MarginInfo } from "./marginInfo";
import { TextState } from "./textState";
import { Cell } from "./cell";
import { BorderInfo } from "./borderInfo";
import { Color } from "./color";

/**
* Represents a row of the table.
*/
export class Row {
    /**
    * Gets or sets the background color.
    */
    'backgroundColor': Color;
    /**
    * Gets or sets the border.
    */
    'border': BorderInfo;
    /**
    * Sets the cells of the row.
    */
    'cells': Array<Cell>;
    /**
    * Gets default cell border;
    */
    'defaultCellBorder': BorderInfo;
    /**
    * Gets height for row;
    */
    'minRowHeight': number;
    /**
    * Gets fixed row height - row may have fixed height;
    */
    'fixedRowHeight': number;
    /**
    * Gets fixed row is in new page - page with this property should be printed to next page Default false;
    */
    'isInNewPage': boolean;
    /**
    * Gets is row can be broken between two pages
    */
    'isRowBroken': boolean;
    /**
    * Gets or sets default text state for row cells
    */
    'defaultCellTextState': TextState;
    /**
    * Gets or sets default margin for row cells
    */
    'defaultCellPadding': MarginInfo;
    /**
    * Gets or sets the vertical alignment.
    */
    'verticalAlignment': VerticalAlignment;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backgroundColor",
            "baseName": "BackgroundColor",
            "type": "Color"
        },
        {
            "name": "border",
            "baseName": "Border",
            "type": "BorderInfo"
        },
        {
            "name": "cells",
            "baseName": "Cells",
            "type": "Array<Cell>"
        },
        {
            "name": "defaultCellBorder",
            "baseName": "DefaultCellBorder",
            "type": "BorderInfo"
        },
        {
            "name": "minRowHeight",
            "baseName": "MinRowHeight",
            "type": "number"
        },
        {
            "name": "fixedRowHeight",
            "baseName": "FixedRowHeight",
            "type": "number"
        },
        {
            "name": "isInNewPage",
            "baseName": "IsInNewPage",
            "type": "boolean"
        },
        {
            "name": "isRowBroken",
            "baseName": "IsRowBroken",
            "type": "boolean"
        },
        {
            "name": "defaultCellTextState",
            "baseName": "DefaultCellTextState",
            "type": "TextState"
        },
        {
            "name": "defaultCellPadding",
            "baseName": "DefaultCellPadding",
            "type": "MarginInfo"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        }    ];

    static getAttributeTypeMap() {
        return Row.attributeTypeMap;
    }
}


