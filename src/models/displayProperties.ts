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

import { PageLayout } from "./pageLayout";
import { PageMode } from "./pageMode";
import { Direction } from "./direction";
import { LinkElement } from "./linkElement";

/**
* Provides link to DisplayProperties.
*/
export class DisplayProperties extends LinkElement {
    /**
    * Gets or sets flag specifying whether position of the document's window will be centerd on the screen.
    */
    'centerWindow': boolean;
    /**
    * Gets or sets reading order of text: L2R (left to right) or R2L (right to left).
    */
    'direction': Direction;
    /**
    * Gets or sets flag specifying whether document's window title bar should display document title.
    */
    'displayDocTitle': boolean;
    /**
    * Gets or sets flag specifying whether menu bar should be hidden when document is active.
    */
    'hideMenuBar': boolean;
    /**
    * Gets or sets flag specifying whether toolbar should be hidden when document is active.
    */
    'hideToolBar': boolean;
    /**
    * Gets or sets flag specifying whether user interface elements should be hidden when document is active.
    */
    'hideWindowUI': boolean;
    /**
    * Gets or sets page mode, specifying how to display the document on exiting full-screen mode.
    */
    'nonFullScreenPageMode': PageMode;
    /**
    * Gets or sets page layout which shall be used when the document is opened.
    */
    'pageLayout': PageLayout;
    /**
    * Gets or sets page mode, specifying how document should be displayed when opened.
    */
    'pageMode': PageMode;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "centerWindow",
            "baseName": "CenterWindow",
            "type": "boolean"
        },
        {
            "name": "direction",
            "baseName": "Direction",
            "type": "Direction"
        },
        {
            "name": "displayDocTitle",
            "baseName": "DisplayDocTitle",
            "type": "boolean"
        },
        {
            "name": "hideMenuBar",
            "baseName": "HideMenuBar",
            "type": "boolean"
        },
        {
            "name": "hideToolBar",
            "baseName": "HideToolBar",
            "type": "boolean"
        },
        {
            "name": "hideWindowUI",
            "baseName": "HideWindowUI",
            "type": "boolean"
        },
        {
            "name": "nonFullScreenPageMode",
            "baseName": "NonFullScreenPageMode",
            "type": "PageMode"
        },
        {
            "name": "pageLayout",
            "baseName": "PageLayout",
            "type": "PageLayout"
        },
        {
            "name": "pageMode",
            "baseName": "PageMode",
            "type": "PageMode"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DisplayProperties.attributeTypeMap);
    }
}


