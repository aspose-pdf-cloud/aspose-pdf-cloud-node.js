 /**
 *
 * Copyright (c) 2022 Aspose.PDF Cloud
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

import { ColumnAdjustment } from "./columnAdjustment";
import { Color } from "./color";
import { TextRect } from "./textRect";
import { BorderCornerStyle } from "./borderCornerStyle";
import { TableBroken } from "./tableBroken";
import { Row } from "./row";
import { BorderInfo } from "./borderInfo";
import { MarginInfo } from "./marginInfo";
import { TextState } from "./textState";
import { VerticalAlignment } from "./verticalAlignment";
import { HorizontalAlignment } from "./horizontalAlignment";
import { LinkElement } from "./linkElement";

/**
* Represents a table that can be added to the page.
*/
export class Table extends LinkElement {
    /**
    * Gets HorizontalAlignment of the table alignment.
    */
    'alignment': HorizontalAlignment;
    /**
    * Gets HorizontalAlignment of the table alignment.
    */
    'horizontalAlignment': HorizontalAlignment;
    /**
    * Gets VerticalAlignment of the annotation.
    */
    'verticalAlignment': VerticalAlignment;
    /**
    * Gets or sets the table top coordinate.
    */
    'top': number;
    /**
    * Gets or sets the table left coordinate.
    */
    'left': number;
    /**
    * Gets or sets the default cell text state.
    */
    'defaultCellTextState': TextState;
    /**
    * Gets or sets the default cell padding.
    */
    'defaultCellPadding': MarginInfo;
    /**
    * Gets or sets the border.
    */
    'border': BorderInfo;
    /**
    * Gets or sets a outer margin for paragraph (for pdf generation)
    */
    'margin': MarginInfo;
    /**
    * Sets the rows of the table.
    */
    'rows': Array<Row>;
    /**
    * Gets default cell border;
    */
    'defaultColumnWidth': string;
    /**
    * Gets default cell border;
    */
    'defaultCellBorder': BorderInfo;
    /**
    * Gets or sets table vertial broken;
    */
    'broken': TableBroken;
    /**
    * Gets the column widths of the table.
    */
    'columnWidths': string;
    /**
    * Gets the first rows count repeated for several pages
    */
    'repeatingRowsCount': number;
    /**
    * Gets or sets the maximum columns count for table
    */
    'repeatingColumnsCount': number;
    /**
    * Gets the style for repeating rows
    */
    'repeatingRowsStyle': TextState;
    /**
    * Gets or sets the styles of the border corners
    */
    'cornerStyle': BorderCornerStyle;
    /**
    * Gets or sets break text for table
    */
    'breakText': TextRect;
    /**
    * Gets or sets table background color
    */
    'backgroundColor': Color;
    /**
    * Gets or sets border included in column widhts.
    */
    'isBordersIncluded': boolean;
    /**
    * Gets or sets the table column adjustment.
    */
    'columnAdjustment': ColumnAdjustment;
    /**
    * Gets ZIndex of the annotation.
    */
    'zIndex': number;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "horizontalAlignment",
            "baseName": "HorizontalAlignment",
            "type": "HorizontalAlignment"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "VerticalAlignment"
        },
        {
            "name": "top",
            "baseName": "Top",
            "type": "number"
        },
        {
            "name": "left",
            "baseName": "Left",
            "type": "number"
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
            "name": "border",
            "baseName": "Border",
            "type": "BorderInfo"
        },
        {
            "name": "margin",
            "baseName": "Margin",
            "type": "MarginInfo"
        },
        {
            "name": "rows",
            "baseName": "Rows",
            "type": "Array<Row>"
        },
        {
            "name": "defaultColumnWidth",
            "baseName": "DefaultColumnWidth",
            "type": "string"
        },
        {
            "name": "defaultCellBorder",
            "baseName": "DefaultCellBorder",
            "type": "BorderInfo"
        },
        {
            "name": "broken",
            "baseName": "Broken",
            "type": "TableBroken"
        },
        {
            "name": "columnWidths",
            "baseName": "ColumnWidths",
            "type": "string"
        },
        {
            "name": "repeatingRowsCount",
            "baseName": "RepeatingRowsCount",
            "type": "number"
        },
        {
            "name": "repeatingColumnsCount",
            "baseName": "RepeatingColumnsCount",
            "type": "number"
        },
        {
            "name": "repeatingRowsStyle",
            "baseName": "RepeatingRowsStyle",
            "type": "TextState"
        },
        {
            "name": "cornerStyle",
            "baseName": "CornerStyle",
            "type": "BorderCornerStyle"
        },
        {
            "name": "breakText",
            "baseName": "BreakText",
            "type": "TextRect"
        },
        {
            "name": "backgroundColor",
            "baseName": "BackgroundColor",
            "type": "Color"
        },
        {
            "name": "isBordersIncluded",
            "baseName": "IsBordersIncluded",
            "type": "boolean"
        },
        {
            "name": "columnAdjustment",
            "baseName": "ColumnAdjustment",
            "type": "ColumnAdjustment"
        },
        {
            "name": "zIndex",
            "baseName": "ZIndex",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Table.attributeTypeMap);
    }
}


