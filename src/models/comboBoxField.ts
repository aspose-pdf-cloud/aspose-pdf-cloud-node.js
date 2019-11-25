﻿ /**
 *
 *   Copyright (c) 2019 Aspose.PDF Cloud
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
* Provides ComboBoxField.
*/
export class ComboBoxField extends ChoiceField {
    /**
    * Gets collection of options of the combobox.
    */
    'options': Array<Option>;
    /**
    * Gets or sets current annotation appearance state.
    */
    'activeState': string;
    /**
    * Gets or sets editable status of the field.
    */
    'editable': boolean;
    /**
    * Gets or sets spellchaeck activiity status.
    */
    'spellCheck': boolean;
    /**
    * Gets or sets index of selected item. Numbering of items is started from 1.
    */
    'selected': number;

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
            "name": "editable",
            "baseName": "Editable",
            "type": "boolean"
        },
        {
            "name": "spellCheck",
            "baseName": "SpellCheck",
            "type": "boolean"
        },
        {
            "name": "selected",
            "baseName": "Selected",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ComboBoxField.attributeTypeMap);
    }
}

