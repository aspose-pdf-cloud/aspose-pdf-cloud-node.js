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

import { AnnotationFlags } from "./models/annotationFlags";
import { AnnotationState } from "./models/annotationState";
import { AnnotationType } from "./models/annotationType";
import { AntialiasingProcessingType } from "./models/antialiasingProcessingType";
import { AppendDocument } from "./models/appendDocument";
import { AsposeResponse } from "./models/asposeResponse";
import { CaptionPosition } from "./models/captionPosition";
import { Color } from "./models/color";
import { ColorDepth } from "./models/colorDepth";
import { CompressionType } from "./models/compressionType";
import { DocFormat } from "./models/docFormat";
import { DocRecognitionMode } from "./models/docRecognitionMode";
import { DocumentPrivilege } from "./models/documentPrivilege";
import { EpubRecognitionMode } from "./models/epubRecognitionMode";
import { FieldType } from "./models/fieldType";
import { File } from "./models/file";
import { FontEncodingRules } from "./models/fontEncodingRules";
import { FontSavingModes } from "./models/fontSavingModes";
import { FontStyles } from "./models/fontStyles";
import { FreeTextIntent } from "./models/freeTextIntent";
import { HorizontalAlignment } from "./models/horizontalAlignment";
import { HtmlDocumentType } from "./models/htmlDocumentType";
import { HtmlMarkupGenerationModes } from "./models/htmlMarkupGenerationModes";
import { ImageSrcType } from "./models/imageSrcType";
import { ImageTemplate } from "./models/imageTemplate";
import { ImageTemplatesRequest } from "./models/imageTemplatesRequest";
import { Justification } from "./models/justification";
import { LettersPositioningMethods } from "./models/lettersPositioningMethods";
import { LineEnding } from "./models/lineEnding";
import { LineIntent } from "./models/lineIntent";
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
import { Point } from "./models/point";
import { PolyIntent } from "./models/polyIntent";
import { RasterImagesSavingModes } from "./models/rasterImagesSavingModes";
import { RectanglePdf } from "./models/rectanglePdf";
import { Rotation } from "./models/rotation";
import { Segment } from "./models/segment";
import { ShapeType } from "./models/shapeType";
import { Signature } from "./models/signature";
import { SignatureType } from "./models/signatureType";
import { SplitResult } from "./models/splitResult";
import { Stamp } from "./models/stamp";
import { StampType } from "./models/stampType";
import { TextHorizontalAlignment } from "./models/textHorizontalAlignment";
import { TextIcon } from "./models/textIcon";
import { TextLine } from "./models/textLine";
import { TextRect } from "./models/textRect";
import { TextRects } from "./models/textRects";
import { TextReplace } from "./models/textReplace";
import { TextReplaceListRequest } from "./models/textReplaceListRequest";
import { TextState } from "./models/textState";
import { TextStyle } from "./models/textStyle";
import { VerticalAlignment } from "./models/verticalAlignment";
import { WordCount } from "./models/wordCount";
import { WrapMode } from "./models/wrapMode";
import { Annotation } from "./models/annotation";
import { AnnotationsInfo } from "./models/annotationsInfo";
import { AnnotationsInfoResponse } from "./models/annotationsInfoResponse";
import { Attachment } from "./models/attachment";
import { AttachmentResponse } from "./models/attachmentResponse";
import { Attachments } from "./models/attachments";
import { AttachmentsResponse } from "./models/attachmentsResponse";
import { CircleAnnotationResponse } from "./models/circleAnnotationResponse";
import { CircleAnnotations } from "./models/circleAnnotations";
import { CircleAnnotationsResponse } from "./models/circleAnnotationsResponse";
import { Document } from "./models/document";
import { DocumentPageResponse } from "./models/documentPageResponse";
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
import { FilesResponse } from "./models/filesResponse";
import { FreeTextAnnotationResponse } from "./models/freeTextAnnotationResponse";
import { FreeTextAnnotations } from "./models/freeTextAnnotations";
import { FreeTextAnnotationsResponse } from "./models/freeTextAnnotationsResponse";
import { Image } from "./models/image";
import { ImageResponse } from "./models/imageResponse";
import { Images } from "./models/images";
import { ImagesResponse } from "./models/imagesResponse";
import { LineAnnotationResponse } from "./models/lineAnnotationResponse";
import { LineAnnotations } from "./models/lineAnnotations";
import { LineAnnotationsResponse } from "./models/lineAnnotationsResponse";
import { LinkAnnotation } from "./models/linkAnnotation";
import { LinkAnnotationResponse } from "./models/linkAnnotationResponse";
import { LinkAnnotations } from "./models/linkAnnotations";
import { LinkAnnotationsResponse } from "./models/linkAnnotationsResponse";
import { Page } from "./models/page";
import { Pages } from "./models/pages";
import { PolyLineAnnotationResponse } from "./models/polyLineAnnotationResponse";
import { PolyLineAnnotations } from "./models/polyLineAnnotations";
import { PolyLineAnnotationsResponse } from "./models/polyLineAnnotationsResponse";
import { PolygonAnnotationResponse } from "./models/polygonAnnotationResponse";
import { PolygonAnnotations } from "./models/polygonAnnotations";
import { PolygonAnnotationsResponse } from "./models/polygonAnnotationsResponse";
import { SignatureVerifyResponse } from "./models/signatureVerifyResponse";
import { SplitResultDocument } from "./models/splitResultDocument";
import { SplitResultResponse } from "./models/splitResultResponse";
import { SquareAnnotationResponse } from "./models/squareAnnotationResponse";
import { SquareAnnotations } from "./models/squareAnnotations";
import { SquareAnnotationsResponse } from "./models/squareAnnotationsResponse";
import { TextAnnotationResponse } from "./models/textAnnotationResponse";
import { TextAnnotations } from "./models/textAnnotations";
import { TextAnnotationsResponse } from "./models/textAnnotationsResponse";
import { TextRectsResponse } from "./models/textRectsResponse";
import { TextReplaceResponse } from "./models/textReplaceResponse";
import { WordCountResponse } from "./models/wordCountResponse";
import { AnnotationInfo } from "./models/annotationInfo";
import { MarkupAnnotation } from "./models/markupAnnotation";
import { CommonFigureAnnotation } from "./models/commonFigureAnnotation";
import { FreeTextAnnotation } from "./models/freeTextAnnotation";
import { LineAnnotation } from "./models/lineAnnotation";
import { PolyAnnotation } from "./models/polyAnnotation";
import { TextAnnotation } from "./models/textAnnotation";
import { CircleAnnotation } from "./models/circleAnnotation";
import { PolyLineAnnotation } from "./models/polyLineAnnotation";
import { PolygonAnnotation } from "./models/polygonAnnotation";
import { SquareAnnotation } from "./models/squareAnnotation";

let enumsMap: {[index: string]: any} = {
    "AnnotationFlags": AnnotationFlags,
    "AnnotationState": AnnotationState,
    "AnnotationType": AnnotationType,
    "AntialiasingProcessingType": AntialiasingProcessingType,
    "CaptionPosition": CaptionPosition,
    "ColorDepth": ColorDepth,
    "CompressionType": CompressionType,
    "DocFormat": DocFormat,
    "DocRecognitionMode": DocRecognitionMode,
    "EpubRecognitionMode": EpubRecognitionMode,
    "FieldType": FieldType,
    "FontEncodingRules": FontEncodingRules,
    "FontSavingModes": FontSavingModes,
    "FontStyles": FontStyles,
    "FreeTextIntent": FreeTextIntent,
    "HorizontalAlignment": HorizontalAlignment,
    "HtmlDocumentType": HtmlDocumentType,
    "HtmlMarkupGenerationModes": HtmlMarkupGenerationModes,
    "ImageSrcType": ImageSrcType,
    "Justification": Justification,
    "LettersPositioningMethods": LettersPositioningMethods,
    "LineEnding": LineEnding,
    "LineIntent": LineIntent,
    "LineSpacing": LineSpacing,
    "LinkActionType": LinkActionType,
    "LinkHighlightingMode": LinkHighlightingMode,
    "PartsEmbeddingModes": PartsEmbeddingModes,
    "PdfAType": PdfAType,
    "PolyIntent": PolyIntent,
    "RasterImagesSavingModes": RasterImagesSavingModes,
    "Rotation": Rotation,
    "ShapeType": ShapeType,
    "SignatureType": SignatureType,
    "StampType": StampType,
    "TextHorizontalAlignment": TextHorizontalAlignment,
    "TextIcon": TextIcon,
    "VerticalAlignment": VerticalAlignment,
    "WrapMode": WrapMode,
}

let typeMap: {[index: string]: any} = {
    "AppendDocument": AppendDocument,
    "AsposeResponse": AsposeResponse,
    "Color": Color,
    "DocumentPrivilege": DocumentPrivilege,
    "File": File,
    "ImageTemplate": ImageTemplate,
    "ImageTemplatesRequest": ImageTemplatesRequest,
    "Link": Link,
    "LinkElement": LinkElement,
    "MarginInfo": MarginInfo,
    "MergeDocuments": MergeDocuments,
    "OptimizeOptions": OptimizeOptions,
    "PageWordCount": PageWordCount,
    "Paragraph": Paragraph,
    "Point": Point,
    "RectanglePdf": RectanglePdf,
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
    "TextStyle": TextStyle,
    "WordCount": WordCount,
    "Annotation": Annotation,
    "AnnotationsInfo": AnnotationsInfo,
    "AnnotationsInfoResponse": AnnotationsInfoResponse,
    "Attachment": Attachment,
    "AttachmentResponse": AttachmentResponse,
    "Attachments": Attachments,
    "AttachmentsResponse": AttachmentsResponse,
    "CircleAnnotationResponse": CircleAnnotationResponse,
    "CircleAnnotations": CircleAnnotations,
    "CircleAnnotationsResponse": CircleAnnotationsResponse,
    "Document": Document,
    "DocumentPageResponse": DocumentPageResponse,
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
    "FilesResponse": FilesResponse,
    "FreeTextAnnotationResponse": FreeTextAnnotationResponse,
    "FreeTextAnnotations": FreeTextAnnotations,
    "FreeTextAnnotationsResponse": FreeTextAnnotationsResponse,
    "Image": Image,
    "ImageResponse": ImageResponse,
    "Images": Images,
    "ImagesResponse": ImagesResponse,
    "LineAnnotationResponse": LineAnnotationResponse,
    "LineAnnotations": LineAnnotations,
    "LineAnnotationsResponse": LineAnnotationsResponse,
    "LinkAnnotation": LinkAnnotation,
    "LinkAnnotationResponse": LinkAnnotationResponse,
    "LinkAnnotations": LinkAnnotations,
    "LinkAnnotationsResponse": LinkAnnotationsResponse,
    "Page": Page,
    "Pages": Pages,
    "PolyLineAnnotationResponse": PolyLineAnnotationResponse,
    "PolyLineAnnotations": PolyLineAnnotations,
    "PolyLineAnnotationsResponse": PolyLineAnnotationsResponse,
    "PolygonAnnotationResponse": PolygonAnnotationResponse,
    "PolygonAnnotations": PolygonAnnotations,
    "PolygonAnnotationsResponse": PolygonAnnotationsResponse,
    "SignatureVerifyResponse": SignatureVerifyResponse,
    "SplitResultDocument": SplitResultDocument,
    "SplitResultResponse": SplitResultResponse,
    "SquareAnnotationResponse": SquareAnnotationResponse,
    "SquareAnnotations": SquareAnnotations,
    "SquareAnnotationsResponse": SquareAnnotationsResponse,
    "TextAnnotationResponse": TextAnnotationResponse,
    "TextAnnotations": TextAnnotations,
    "TextAnnotationsResponse": TextAnnotationsResponse,
    "TextRectsResponse": TextRectsResponse,
    "TextReplaceResponse": TextReplaceResponse,
    "WordCountResponse": WordCountResponse,
    "AnnotationInfo": AnnotationInfo,
    "MarkupAnnotation": MarkupAnnotation,
    "CommonFigureAnnotation": CommonFigureAnnotation,
    "FreeTextAnnotation": FreeTextAnnotation,
    "LineAnnotation": LineAnnotation,
    "PolyAnnotation": PolyAnnotation,
    "TextAnnotation": TextAnnotation,
    "CircleAnnotation": CircleAnnotation,
    "PolyLineAnnotation": PolyLineAnnotation,
    "PolygonAnnotation": PolygonAnnotation,
    "SquareAnnotation": SquareAnnotation,
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
            let regEx = /\/Date\((\d+)\+0000\)\//;
            var result = regEx.exec(data);
            if (result) {
                return new Date(parseInt(result[1]));
            } else {
                return null;
            }
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

