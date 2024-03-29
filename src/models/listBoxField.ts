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

import { Option } from "./option";
import { ChoiceField } from "./choiceField";

/**
* Provides ListBoxField.
*/
export class ListBoxField extends ChoiceField {
    /**
    * Gets collection of options of the listbox.
    */
    'options': Array<Option>;
    /**
    * Gets or sets current annotation appearance state.
    */
    'activeState': string;
    /**
    * Gets or sets index of the top visible element of the list.
    */
    'topIndex': number;
    /**
    * Gets or sets array of the selected items in the multiselect list. For single-select list returns array with single item.
    */
    'selectedItems': Array<number>;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "options",
            "baseName": "Options",
            "type": "Array<Option>"
        },
        {
            "name": "activeState",
            "baseName": "ActiveState",
            "type": "string"
        },
        {
            "name": "topIndex",
            "baseName": "TopIndex",
            "type": "number"
        },
        {
            "name": "selectedItems",
            "baseName": "SelectedItems",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListBoxField.attributeTypeMap);
    }
}


