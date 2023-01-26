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

import { Border } from "./border";
import { VerticalAlignment } from "./verticalAlignment";
import { HorizontalAlignment } from "./horizontalAlignment";
import { LinkHighlightingMode } from "./linkHighlightingMode";
import { MarginInfo } from "./marginInfo";
import { Color } from "./color";
import { AnnotationFlags } from "./annotationFlags";
import { Rectangle } from "./rectangle";
import { LinkElement } from "./linkElement";

/**
* Provides form field.
*/
export class FormField extends LinkElement {
    /**
    * Field name.
    */
    'partialName': string;
    /**
    * Full Field name.
    */
    'fullName': string;
    /**
    * Field rectangle.
    */
    'rect': Rectangle;
    /**
    * Field value.
    */
    'value': string;
    /**
    * Page index.
    */
    'pageIndex': number;
    /**
    * Gets or sets height of the field.
    */
    'height': number;
    /**
    * Gets or sets width of the field.
    */
    'width': number;
    /**
    * Z index.
    */
    'zIndex': number;
    /**
    * Is group.
    */
    'isGroup': boolean;
    /**
    * Gets field parent.
    */
    'parent': FormField;
    /**
    * Property for Generator support. Used when field is added to header or footer. If true, this field will created once and it's appearance will be visible on all pages of the document. If false, separated field will be created for every document page.
    */
    'isSharedField': boolean;
    /**
    * Gets Flags of the field.
    */
    'flags': Array<AnnotationFlags>;
    /**
    * Color of the annotation.
    */
    'color': Color;
    /**
    * Get the field content.
    */
    'contents': string;
    /**
    * Gets or sets a outer margin for paragraph (for pdf generation)
    */
    'margin': MarginInfo;
    /**
    * Field highlighting mode.
    */
    'highlighting': LinkHighlightingMode;
    /**
    * Gets HorizontalAlignment of the field.
    */
    'horizontalAlignment': HorizontalAlignment;
    /**
    * Gets VerticalAlignment of the field.
    */
    'verticalAlignment': VerticalAlignment;
    /**
    * Gets or sets annotation border characteristics.
    */
    'border': Border;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "partialName",
            "baseName": "PartialName",
            "type": "string"
        },
        {
            "name": "fullName",
            "baseName": "FullName",
            "type": "string"
        },
        {
            "name": "rect",
            "baseName": "Rect",
            "type": "Rectangle"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        },
        {
            "name": "pageIndex",
            "baseName": "PageIndex",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "Height",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "Width",
            "type": "number"
        },
        {
            "name": "zIndex",
            "baseName": "ZIndex",
            "type": "number"
        },
        {
            "name": "isGroup",
            "baseName": "IsGroup",
            "type": "boolean"
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "FormField"
        },
        {
            "name": "isSharedField",
            "baseName": "IsSharedField",
            "type": "boolean"
        },
        {
            "name": "flags",
            "baseName": "Flags",
            "type": "Array<AnnotationFlags>"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "contents",
            "baseName": "Contents",
            "type": "string"
        },
        {
            "name": "margin",
            "baseName": "Margin",
            "type": "MarginInfo"
        },
        {
            "name": "highlighting",
            "baseName": "Highlighting",
            "type": "LinkHighlightingMode"
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
            "name": "border",
            "baseName": "Border",
            "type": "Border"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormField.attributeTypeMap);
    }
}


