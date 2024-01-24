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

import { Bookmarks } from "./bookmarks";
import { Color } from "./color";
import { LinkElement } from "./linkElement";

/**
* Provides link to bookmark.
*/
export class Bookmark extends LinkElement {
    /**
    * Get the Title;
    */
    'title': string;
    /**
    * Is bookmark italic.
    */
    'italic': boolean;
    /**
    * Is bookmark bold.
    */
    'bold': boolean;
    /**
    * Get the color
    */
    'color': Color;
    /**
    * Gets or sets the action bound with the bookmark. If PageNumber is presented the action can not be specified. The action type includes: \"GoTo\", \"GoToR\", \"Launch\", \"Named\".
    */
    'action': string;
    /**
    * Gets or sets bookmark's hierarchy level.
    */
    'level': number;
    /**
    * Gets or sets bookmark's destination page. Required if action is set as string.Empty.
    */
    'destination': string;
    /**
    * Gets or sets the type of display bookmark's destination page.
    */
    'pageDisplay': string;
    /**
    * Gets or sets the bottom coordinate of page display.
    */
    'pageDisplayBottom': number;
    /**
    * Gets or sets the left coordinate of page display.
    */
    'pageDisplayLeft': number;
    /**
    * Gets or sets the right coordinate of page display.
    */
    'pageDisplayRight': number;
    /**
    * Gets or sets the top coordinate of page display.
    */
    'pageDisplayTop': number;
    /**
    * Gets or sets the zoom factor of page display.
    */
    'pageDisplayZoom': number;
    /**
    * Gets or sets the number of bookmark's destination page. 
    */
    'pageNumber': number;
    /**
    * Gets or sets the file (path) which is required for \"GoToR\" action of bookmark.
    */
    'remoteFile': string;
    /**
    * The children bookmarks.
    */
    'bookmarks': Bookmarks;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        },
        {
            "name": "italic",
            "baseName": "Italic",
            "type": "boolean"
        },
        {
            "name": "bold",
            "baseName": "Bold",
            "type": "boolean"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "Color"
        },
        {
            "name": "action",
            "baseName": "Action",
            "type": "string"
        },
        {
            "name": "level",
            "baseName": "Level",
            "type": "number"
        },
        {
            "name": "destination",
            "baseName": "Destination",
            "type": "string"
        },
        {
            "name": "pageDisplay",
            "baseName": "PageDisplay",
            "type": "string"
        },
        {
            "name": "pageDisplayBottom",
            "baseName": "PageDisplay_Bottom",
            "type": "number"
        },
        {
            "name": "pageDisplayLeft",
            "baseName": "PageDisplay_Left",
            "type": "number"
        },
        {
            "name": "pageDisplayRight",
            "baseName": "PageDisplay_Right",
            "type": "number"
        },
        {
            "name": "pageDisplayTop",
            "baseName": "PageDisplay_Top",
            "type": "number"
        },
        {
            "name": "pageDisplayZoom",
            "baseName": "PageDisplay_Zoom",
            "type": "number"
        },
        {
            "name": "pageNumber",
            "baseName": "PageNumber",
            "type": "number"
        },
        {
            "name": "remoteFile",
            "baseName": "RemoteFile",
            "type": "string"
        },
        {
            "name": "bookmarks",
            "baseName": "Bookmarks",
            "type": "Bookmarks"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Bookmark.attributeTypeMap);
    }
}


