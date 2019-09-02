 /**
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


/**
* An abstract class which represents signature custon appearance object.
*/
export class SignatureCustomAppearance {
    /**
    * Gets/sets font family name. It should be existed in the document. Default value: Arial.
    */
    'fontFamilyName': string;
    /**
    * Gets/sets font size. Default value: 10.
    */
    'fontSize': number;
    /**
    * Gets/sets contact info visibility. Default value: true.
    */
    'showContactInfo': boolean;
    /**
    * Gets/sets reason visibility. Default value: true.
    */
    'showReason': boolean;
    /**
    * Gets/sets location visibility. Default value: true.
    */
    'showLocation': boolean;
    /**
    * Gets/sets contact info label. Default value: \"Contact\".
    */
    'contactInfoLabel': string;
    /**
    * Gets/sets reason label. Default value: \"Reason\".
    */
    'reasonLabel': string;
    /**
    * Gets/sets location label. Default value: \"Location\".
    */
    'locationLabel': string;
    /**
    * Gets/sets digital signed label. Default value: \"Digitally signed by\".
    */
    'digitalSignedLabel': string;
    /**
    * Gets/sets date signed label. Default value: \"Date\".
    */
    'dateSignedAtLabel': string;
    /**
    * Gets/sets datetime local format. Default value: \"yyyy.MM.dd HH:mm:ss zzz\".
    */
    'dateTimeLocalFormat': string;
    /**
    * Gets/sets datetime format. Default value: \"yyyy.MM.dd HH:mm:ss\".
    */
    'dateTimeFormat': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fontFamilyName",
            "baseName": "FontFamilyName",
            "type": "string"
        },
        {
            "name": "fontSize",
            "baseName": "FontSize",
            "type": "number"
        },
        {
            "name": "showContactInfo",
            "baseName": "ShowContactInfo",
            "type": "boolean"
        },
        {
            "name": "showReason",
            "baseName": "ShowReason",
            "type": "boolean"
        },
        {
            "name": "showLocation",
            "baseName": "ShowLocation",
            "type": "boolean"
        },
        {
            "name": "contactInfoLabel",
            "baseName": "ContactInfoLabel",
            "type": "string"
        },
        {
            "name": "reasonLabel",
            "baseName": "ReasonLabel",
            "type": "string"
        },
        {
            "name": "locationLabel",
            "baseName": "LocationLabel",
            "type": "string"
        },
        {
            "name": "digitalSignedLabel",
            "baseName": "DigitalSignedLabel",
            "type": "string"
        },
        {
            "name": "dateSignedAtLabel",
            "baseName": "DateSignedAtLabel",
            "type": "string"
        },
        {
            "name": "dateTimeLocalFormat",
            "baseName": "DateTimeLocalFormat",
            "type": "string"
        },
        {
            "name": "dateTimeFormat",
            "baseName": "DateTimeFormat",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SignatureCustomAppearance.attributeTypeMap;
    }
}


