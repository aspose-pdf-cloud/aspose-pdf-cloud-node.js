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

import { SignatureCustomAppearance } from "./signatureCustomAppearance";
import { TimestampSettings } from "./timestampSettings";
import { Rectangle } from "./rectangle";
import { SignatureType } from "./signatureType";

/**
* Represents signature.
*/
export class Signature {
    /**
    * Gets or sets the signature path.
    */
    'signaturePath': string;
    /**
    * Gets or sets the type of the signature.
    */
    'signatureType': SignatureType;
    /**
    * Gets or sets the signature password.
    */
    'password': string;
    /**
    * Sets or gets a graphic appearance for the signature. Property value represents an image file name.
    */
    'appearance': string;
    /**
    * Gets or sets the reason of the signature.
    */
    'reason': string;
    /**
    * Gets or sets the contact of the signature.
    */
    'contact': string;
    /**
    * Gets or sets the location of the signature.
    */
    'location': string;
    /**
    * Gets or sets a value indicating whether this Signature is visible. Supports only when signing particular page.
    */
    'visible': boolean;
    /**
    * Gets or sets the visible rectangle of the signature. Supports only when signing particular page.
    */
    'rectangle': Rectangle;
    /**
    * Gets or sets the name of the signature field. Supports only when signing document with particular form field.
    */
    'formFieldName': string;
    /**
    * Gets or sets the name of the person or authority signing the document..
    */
    'authority': string;
    /**
    * Gets or sets the time of signing.
    */
    'date': string;
    /**
    * Gets or sets the showproperties in signature field
    */
    'showProperties': boolean;
    /**
    * Gets/sets timestamp settings.
    */
    'timestampSettings': TimestampSettings;
    /**
    * Verify the document regarding this signature and return true if document is valid or otherwise false.
    */
    'isValid': boolean;
    /**
    * Gets/sets the custom appearance.
    */
    'customAppearance': SignatureCustomAppearance;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signaturePath",
            "baseName": "SignaturePath",
            "type": "string"
        },
        {
            "name": "signatureType",
            "baseName": "SignatureType",
            "type": "SignatureType"
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "string"
        },
        {
            "name": "appearance",
            "baseName": "Appearance",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "Reason",
            "type": "string"
        },
        {
            "name": "contact",
            "baseName": "Contact",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "Location",
            "type": "string"
        },
        {
            "name": "visible",
            "baseName": "Visible",
            "type": "boolean"
        },
        {
            "name": "rectangle",
            "baseName": "Rectangle",
            "type": "Rectangle"
        },
        {
            "name": "formFieldName",
            "baseName": "FormFieldName",
            "type": "string"
        },
        {
            "name": "authority",
            "baseName": "Authority",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "showProperties",
            "baseName": "ShowProperties",
            "type": "boolean"
        },
        {
            "name": "timestampSettings",
            "baseName": "TimestampSettings",
            "type": "TimestampSettings"
        },
        {
            "name": "isValid",
            "baseName": "IsValid",
            "type": "boolean"
        },
        {
            "name": "customAppearance",
            "baseName": "CustomAppearance",
            "type": "SignatureCustomAppearance"
        }    ];

    static getAttributeTypeMap() {
        return Signature.attributeTypeMap;
    }
}


