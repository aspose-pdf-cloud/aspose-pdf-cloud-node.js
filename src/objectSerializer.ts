 /**
 *
 *   Copyright (c) 2018 Aspose.PDF Cloud
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

import { AntialiasingProcessingType } from "./models/antialiasingProcessingType";
import { AppendDocument } from "./models/appendDocument";
import { Color } from "./models/color";
import { ColorDepth } from "./models/colorDepth";
import { CompressionType } from "./models/compressionType";
import { DocFormat } from "./models/docFormat";
import { DocRecognitionMode } from "./models/docRecognitionMode";
import { DocumentPrivilege } from "./models/documentPrivilege";
import { EpubRecognitionMode } from "./models/epubRecognitionMode";
import { FieldType } from "./models/fieldType";
import { FontEncodingRules } from "./models/fontEncodingRules";
import { FontSavingModes } from "./models/fontSavingModes";
import { FontStyles } from "./models/fontStyles";
import { HorizontalAlignment } from "./models/horizontalAlignment";
import { HtmlDocumentType } from "./models/htmlDocumentType";
import { HtmlMarkupGenerationModes } from "./models/htmlMarkupGenerationModes";
import { HttpStatusCode } from "./models/httpStatusCode";
import { ImageSrcType } from "./models/imageSrcType";
import { ImageTemplate } from "./models/imageTemplate";
import { ImageTemplatesRequest } from "./models/imageTemplatesRequest";
import { ImagesListRequest } from "./models/imagesListRequest";
import { LettersPositioningMethods } from "./models/lettersPositioningMethods";
import { LineSpacing } from "./models/lineSpacing";
import { Link } from "./models/link";
import { LinkActionType } from "./models/linkActionType";
import { LinkElement } from "./models/linkElement";
import { LinkHighlightingMode } from "./models/linkHighlightingMode";
import { MarginInfo } from "./models/marginInfo";
import { MergeDocuments } from "./models/mergeDocuments";
import { OptimizeOptions } from "./models/optimizeOptions";
import { PageWordCount } from "./models/pageWordCount";
import { Paragraph } from "./models/paragraph";
import { PartsEmbeddingModes } from "./models/partsEmbeddingModes";
import { PdfAType } from "./models/pdfAType";
import { RasterImagesSavingModes } from "./models/rasterImagesSavingModes";
import { Rectangle } from "./models/rectangle";
import { Rotation } from "./models/rotation";
import { SaaSposeResponse } from "./models/saaSposeResponse";
import { Segment } from "./models/segment";
import { ShapeType } from "./models/shapeType";
import { Signature } from "./models/signature";
import { SignatureType } from "./models/signatureType";
import { SplitResult } from "./models/splitResult";
import { Stamp } from "./models/stamp";
import { StampType } from "./models/stampType";
import { TextHorizontalAlignment } from "./models/textHorizontalAlignment";
import { TextLine } from "./models/textLine";
import { TextRect } from "./models/textRect";
import { TextRects } from "./models/textRects";
import { TextReplace } from "./models/textReplace";
import { TextReplaceListRequest } from "./models/textReplaceListRequest";
import { TextState } from "./models/textState";
import { TiffExportOptions } from "./models/tiffExportOptions";
import { VerticalAlignment } from "./models/verticalAlignment";
import { WordCount } from "./models/wordCount";
import { WrapMode } from "./models/wrapMode";
import { Annotation } from "./models/annotation";
import { AnnotationResponse } from "./models/annotationResponse";
import { Annotations } from "./models/annotations";
import { AnnotationsResponse } from "./models/annotationsResponse";
import { Attachment } from "./models/attachment";
import { AttachmentResponse } from "./models/attachmentResponse";
import { Attachments } from "./models/attachments";
import { AttachmentsResponse } from "./models/attachmentsResponse";
import { Document } from "./models/document";
import { DocumentPagesResponse } from "./models/documentPagesResponse";
import { DocumentProperties } from "./models/documentProperties";
import { DocumentPropertiesResponse } from "./models/documentPropertiesResponse";
import { DocumentProperty } from "./models/documentProperty";
import { DocumentPropertyResponse } from "./models/documentPropertyResponse";
import { DocumentResponse } from "./models/documentResponse";
import { Field } from "./models/field";
import { FieldResponse } from "./models/fieldResponse";
import { Fields } from "./models/fields";
import { FieldsResponse } from "./models/fieldsResponse";
import { Image } from "./models/image";
import { ImageResponse } from "./models/imageResponse";
import { Images } from "./models/images";
import { ImagesResponse } from "./models/imagesResponse";
import { LinkAnnotation } from "./models/linkAnnotation";
import { LinkAnnotationResponse } from "./models/linkAnnotationResponse";
import { LinkAnnotations } from "./models/linkAnnotations";
import { LinkAnnotationsResponse } from "./models/linkAnnotationsResponse";
import { Page } from "./models/page";
import { Pages } from "./models/pages";
import { SignatureVerifyResponse } from "./models/signatureVerifyResponse";
import { SplitResultDocument } from "./models/splitResultDocument";
import { SplitResultResponse } from "./models/splitResultResponse";
import { TextFormat } from "./models/textFormat";
import { TextFormatResponse } from "./models/textFormatResponse";
import { TextItem } from "./models/textItem";
import { TextItemResponse } from "./models/textItemResponse";
import { TextItems } from "./models/textItems";
import { TextItemsResponse } from "./models/textItemsResponse";
import { TextRectsResponse } from "./models/textRectsResponse";
import { TextReplaceRequest } from "./models/textReplaceRequest";
import { TextReplaceResponse } from "./models/textReplaceResponse";
import { WordCountResponse } from "./models/wordCountResponse";
import { DocumentTextReplaceResponse } from "./models/documentTextReplaceResponse";
import { PageTextReplaceResponse } from "./models/pageTextReplaceResponse";

let enumsMap: {[index: string]: any} = {
    "AntialiasingProcessingType": AntialiasingProcessingType,
    "ColorDepth": ColorDepth,
    "CompressionType": CompressionType,
    "DocFormat": DocFormat,
    "DocRecognitionMode": DocRecognitionMode,
    "EpubRecognitionMode": EpubRecognitionMode,
    "FieldType": FieldType,
    "FontEncodingRules": FontEncodingRules,
    "FontSavingModes": FontSavingModes,
    "FontStyles": FontStyles,
    "HorizontalAlignment": HorizontalAlignment,
    "HtmlDocumentType": HtmlDocumentType,
    "HtmlMarkupGenerationModes": HtmlMarkupGenerationModes,
    "HttpStatusCode": HttpStatusCode,
    "ImageSrcType": ImageSrcType,
    "LettersPositioningMethods": LettersPositioningMethods,
    "LineSpacing": LineSpacing,
    "LinkActionType": LinkActionType,
    "LinkHighlightingMode": LinkHighlightingMode,
    "PartsEmbeddingModes": PartsEmbeddingModes,
    "PdfAType": PdfAType,
    "RasterImagesSavingModes": RasterImagesSavingModes,
    "Rotation": Rotation,
    "ShapeType": ShapeType,
    "SignatureType": SignatureType,
    "StampType": StampType,
    "TextHorizontalAlignment": TextHorizontalAlignment,
    "VerticalAlignment": VerticalAlignment,
    "WrapMode": WrapMode,
}

let typeMap: {[index: string]: any} = {
    "AppendDocument": AppendDocument,
    "Color": Color,
    "DocumentPrivilege": DocumentPrivilege,
    "ImageTemplate": ImageTemplate,
    "ImageTemplatesRequest": ImageTemplatesRequest,
    "ImagesListRequest": ImagesListRequest,
    "Link": Link,
    "LinkElement": LinkElement,
    "MarginInfo": MarginInfo,
    "MergeDocuments": MergeDocuments,
    "OptimizeOptions": OptimizeOptions,
    "PageWordCount": PageWordCount,
    "Paragraph": Paragraph,
    "Rectangle": Rectangle,
    "SaaSposeResponse": SaaSposeResponse,
    "Segment": Segment,
    "Signature": Signature,
    "SplitResult": SplitResult,
    "Stamp": Stamp,
    "TextLine": TextLine,
    "TextRect": TextRect,
    "TextRects": TextRects,
    "TextReplace": TextReplace,
    "TextReplaceListRequest": TextReplaceListRequest,
    "TextState": TextState,
    "TiffExportOptions": TiffExportOptions,
    "WordCount": WordCount,
    "Annotation": Annotation,
    "AnnotationResponse": AnnotationResponse,
    "Annotations": Annotations,
    "AnnotationsResponse": AnnotationsResponse,
    "Attachment": Attachment,
    "AttachmentResponse": AttachmentResponse,
    "Attachments": Attachments,
    "AttachmentsResponse": AttachmentsResponse,
    "Document": Document,
    "DocumentPagesResponse": DocumentPagesResponse,
    "DocumentProperties": DocumentProperties,
    "DocumentPropertiesResponse": DocumentPropertiesResponse,
    "DocumentProperty": DocumentProperty,
    "DocumentPropertyResponse": DocumentPropertyResponse,
    "DocumentResponse": DocumentResponse,
    "Field": Field,
    "FieldResponse": FieldResponse,
    "Fields": Fields,
    "FieldsResponse": FieldsResponse,
    "Image": Image,
    "ImageResponse": ImageResponse,
    "Images": Images,
    "ImagesResponse": ImagesResponse,
    "LinkAnnotation": LinkAnnotation,
    "LinkAnnotationResponse": LinkAnnotationResponse,
    "LinkAnnotations": LinkAnnotations,
    "LinkAnnotationsResponse": LinkAnnotationsResponse,
    "Page": Page,
    "Pages": Pages,
    "SignatureVerifyResponse": SignatureVerifyResponse,
    "SplitResultDocument": SplitResultDocument,
    "SplitResultResponse": SplitResultResponse,
    "TextFormat": TextFormat,
    "TextFormatResponse": TextFormatResponse,
    "TextItem": TextItem,
    "TextItemResponse": TextItemResponse,
    "TextItems": TextItems,
    "TextItemsResponse": TextItemsResponse,
    "TextRectsResponse": TextRectsResponse,
    "TextReplaceRequest": TextReplaceRequest,
    "TextReplaceResponse": TextReplaceResponse,
    "WordCountResponse": WordCountResponse,
    "DocumentTextReplaceResponse": DocumentTextReplaceResponse,
    "PageTextReplaceResponse": PageTextReplaceResponse,
}

let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

export class ObjectSerializer {

    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty]; // use the type given in the discriminator
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

