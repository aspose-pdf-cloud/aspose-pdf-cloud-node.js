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

import { AnnotationFlags } from "./models/annotationFlags";
import { AnnotationState } from "./models/annotationState";
import { AnnotationType } from "./models/annotationType";
import { AntialiasingProcessingType } from "./models/antialiasingProcessingType";
import { AsposeResponse } from "./models/asposeResponse";
import { AttachmentInfo } from "./models/attachmentInfo";
import { Border } from "./models/border";
import { BorderCornerStyle } from "./models/borderCornerStyle";
import { BorderEffect } from "./models/borderEffect";
import { BorderInfo } from "./models/borderInfo";
import { BorderStyle } from "./models/borderStyle";
import { BoxStyle } from "./models/boxStyle";
import { CapStyle } from "./models/capStyle";
import { CaptionPosition } from "./models/captionPosition";
import { CaretSymbol } from "./models/caretSymbol";
import { Cell } from "./models/cell";
import { CellRecognized } from "./models/cellRecognized";
import { Color } from "./models/color";
import { ColorDepth } from "./models/colorDepth";
import { ColumnAdjustment } from "./models/columnAdjustment";
import { CompressionType } from "./models/compressionType";
import { CryptoAlgorithm } from "./models/cryptoAlgorithm";
import { Dash } from "./models/dash";
import { DefaultPageConfig } from "./models/defaultPageConfig";
import { Direction } from "./models/direction";
import { DiscUsage } from "./models/discUsage";
import { DocFormat } from "./models/docFormat";
import { DocMDPAccessPermissionType } from "./models/docMDPAccessPermissionType";
import { DocRecognitionMode } from "./models/docRecognitionMode";
import { DocumentConfig } from "./models/documentConfig";
import { DocumentLayers } from "./models/documentLayers";
import { DocumentPrivilege } from "./models/documentPrivilege";
import { EpubRecognitionMode } from "./models/epubRecognitionMode";
import { ErrorDetails } from "./models/errorDetails";
import { FieldType } from "./models/fieldType";
import { FileIcon } from "./models/fileIcon";
import { FileVersions } from "./models/fileVersions";
import { FilesList } from "./models/filesList";
import { FilesUploadResult } from "./models/filesUploadResult";
import { FontEncodingRules } from "./models/fontEncodingRules";
import { FontSavingModes } from "./models/fontSavingModes";
import { FontStyles } from "./models/fontStyles";
import { FreeTextIntent } from "./models/freeTextIntent";
import { GraphInfo } from "./models/graphInfo";
import { HorizontalAlignment } from "./models/horizontalAlignment";
import { HtmlDocumentType } from "./models/htmlDocumentType";
import { HtmlMarkupGenerationModes } from "./models/htmlMarkupGenerationModes";
import { ImageCompressionVersion } from "./models/imageCompressionVersion";
import { ImageEncoding } from "./models/imageEncoding";
import { ImageFragment } from "./models/imageFragment";
import { ImageSrcType } from "./models/imageSrcType";
import { ImageTemplate } from "./models/imageTemplate";
import { ImageTemplatesRequest } from "./models/imageTemplatesRequest";
import { Justification } from "./models/justification";
import { LayerInfo } from "./models/layerInfo";
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
import { ModelError } from "./models/modelError";
import { ObjectExist } from "./models/objectExist";
import { OptimizeOptions } from "./models/optimizeOptions";
import { Option } from "./models/option";
import { OrganizeDocumentData } from "./models/organizeDocumentData";
import { OrganizeDocumentRequest } from "./models/organizeDocumentRequest";
import { OutputFormat } from "./models/outputFormat";
import { PageLayout } from "./models/pageLayout";
import { PageMode } from "./models/pageMode";
import { PageRange } from "./models/pageRange";
import { PageWordCount } from "./models/pageWordCount";
import { Paragraph } from "./models/paragraph";
import { PartsEmbeddingModes } from "./models/partsEmbeddingModes";
import { PdfAType } from "./models/pdfAType";
import { PermissionsFlags } from "./models/permissionsFlags";
import { Point } from "./models/point";
import { PolyIntent } from "./models/polyIntent";
import { Position } from "./models/position";
import { RasterImagesSavingModes } from "./models/rasterImagesSavingModes";
import { Rectangle } from "./models/rectangle";
import { Rotation } from "./models/rotation";
import { Row } from "./models/row";
import { RowRecognized } from "./models/rowRecognized";
import { Segment } from "./models/segment";
import { ShapeType } from "./models/shapeType";
import { Signature } from "./models/signature";
import { SignatureCustomAppearance } from "./models/signatureCustomAppearance";
import { SignatureType } from "./models/signatureType";
import { SoundEncoding } from "./models/soundEncoding";
import { SoundIcon } from "./models/soundIcon";
import { SplitRangePdfOptions } from "./models/splitRangePdfOptions";
import { SplitResult } from "./models/splitResult";
import { Stamp } from "./models/stamp";
import { StampIcon } from "./models/stampIcon";
import { StampType } from "./models/stampType";
import { StorageExist } from "./models/storageExist";
import { StorageFile } from "./models/storageFile";
import { TableBroken } from "./models/tableBroken";
import { TextHorizontalAlignment } from "./models/textHorizontalAlignment";
import { TextIcon } from "./models/textIcon";
import { TextLine } from "./models/textLine";
import { TextRect } from "./models/textRect";
import { TextRects } from "./models/textRects";
import { TextReplace } from "./models/textReplace";
import { TextReplaceListRequest } from "./models/textReplaceListRequest";
import { TextState } from "./models/textState";
import { TextStyle } from "./models/textStyle";
import { TimestampSettings } from "./models/timestampSettings";
import { VerticalAlignment } from "./models/verticalAlignment";
import { WordCount } from "./models/wordCount";
import { WrapMode } from "./models/wrapMode";
import { XmpMetadata } from "./models/xmpMetadata";
import { XmpMetadataProperty } from "./models/xmpMetadataProperty";
import { Annotation } from "./models/annotation";
import { AnnotationsInfo } from "./models/annotationsInfo";
import { AnnotationsInfoResponse } from "./models/annotationsInfoResponse";
import { Attachment } from "./models/attachment";
import { AttachmentResponse } from "./models/attachmentResponse";
import { Attachments } from "./models/attachments";
import { AttachmentsResponse } from "./models/attachmentsResponse";
import { Bookmark } from "./models/bookmark";
import { BookmarkResponse } from "./models/bookmarkResponse";
import { Bookmarks } from "./models/bookmarks";
import { BookmarksResponse } from "./models/bookmarksResponse";
import { CaretAnnotationResponse } from "./models/caretAnnotationResponse";
import { CaretAnnotations } from "./models/caretAnnotations";
import { CaretAnnotationsResponse } from "./models/caretAnnotationsResponse";
import { CheckBoxFieldResponse } from "./models/checkBoxFieldResponse";
import { CheckBoxFields } from "./models/checkBoxFields";
import { CheckBoxFieldsResponse } from "./models/checkBoxFieldsResponse";
import { CircleAnnotationResponse } from "./models/circleAnnotationResponse";
import { CircleAnnotations } from "./models/circleAnnotations";
import { CircleAnnotationsResponse } from "./models/circleAnnotationsResponse";
import { ComboBoxFieldResponse } from "./models/comboBoxFieldResponse";
import { ComboBoxFields } from "./models/comboBoxFields";
import { ComboBoxFieldsResponse } from "./models/comboBoxFieldsResponse";
import { DisplayProperties } from "./models/displayProperties";
import { DisplayPropertiesResponse } from "./models/displayPropertiesResponse";
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
import { FileAttachmentAnnotationResponse } from "./models/fileAttachmentAnnotationResponse";
import { FileAttachmentAnnotations } from "./models/fileAttachmentAnnotations";
import { FileAttachmentAnnotationsResponse } from "./models/fileAttachmentAnnotationsResponse";
import { FileVersion } from "./models/fileVersion";
import { FormField } from "./models/formField";
import { FreeTextAnnotationResponse } from "./models/freeTextAnnotationResponse";
import { FreeTextAnnotations } from "./models/freeTextAnnotations";
import { FreeTextAnnotationsResponse } from "./models/freeTextAnnotationsResponse";
import { HighlightAnnotationResponse } from "./models/highlightAnnotationResponse";
import { HighlightAnnotations } from "./models/highlightAnnotations";
import { HighlightAnnotationsResponse } from "./models/highlightAnnotationsResponse";
import { Image } from "./models/image";
import { ImageResponse } from "./models/imageResponse";
import { Images } from "./models/images";
import { ImagesResponse } from "./models/imagesResponse";
import { InkAnnotationResponse } from "./models/inkAnnotationResponse";
import { InkAnnotations } from "./models/inkAnnotations";
import { InkAnnotationsResponse } from "./models/inkAnnotationsResponse";
import { LineAnnotationResponse } from "./models/lineAnnotationResponse";
import { LineAnnotations } from "./models/lineAnnotations";
import { LineAnnotationsResponse } from "./models/lineAnnotationsResponse";
import { LinkAnnotation } from "./models/linkAnnotation";
import { LinkAnnotationResponse } from "./models/linkAnnotationResponse";
import { LinkAnnotations } from "./models/linkAnnotations";
import { LinkAnnotationsResponse } from "./models/linkAnnotationsResponse";
import { ListBoxFieldResponse } from "./models/listBoxFieldResponse";
import { ListBoxFields } from "./models/listBoxFields";
import { ListBoxFieldsResponse } from "./models/listBoxFieldsResponse";
import { MovieAnnotationResponse } from "./models/movieAnnotationResponse";
import { MovieAnnotations } from "./models/movieAnnotations";
import { MovieAnnotationsResponse } from "./models/movieAnnotationsResponse";
import { Page } from "./models/page";
import { Pages } from "./models/pages";
import { PolyLineAnnotationResponse } from "./models/polyLineAnnotationResponse";
import { PolyLineAnnotations } from "./models/polyLineAnnotations";
import { PolyLineAnnotationsResponse } from "./models/polyLineAnnotationsResponse";
import { PolygonAnnotationResponse } from "./models/polygonAnnotationResponse";
import { PolygonAnnotations } from "./models/polygonAnnotations";
import { PolygonAnnotationsResponse } from "./models/polygonAnnotationsResponse";
import { PopupAnnotationResponse } from "./models/popupAnnotationResponse";
import { PopupAnnotations } from "./models/popupAnnotations";
import { PopupAnnotationsResponse } from "./models/popupAnnotationsResponse";
import { RadioButtonFieldResponse } from "./models/radioButtonFieldResponse";
import { RadioButtonFields } from "./models/radioButtonFields";
import { RadioButtonFieldsResponse } from "./models/radioButtonFieldsResponse";
import { RedactionAnnotationResponse } from "./models/redactionAnnotationResponse";
import { RedactionAnnotations } from "./models/redactionAnnotations";
import { RedactionAnnotationsResponse } from "./models/redactionAnnotationsResponse";
import { ScreenAnnotationResponse } from "./models/screenAnnotationResponse";
import { ScreenAnnotations } from "./models/screenAnnotations";
import { ScreenAnnotationsResponse } from "./models/screenAnnotationsResponse";
import { SignatureFieldResponse } from "./models/signatureFieldResponse";
import { SignatureFields } from "./models/signatureFields";
import { SignatureFieldsResponse } from "./models/signatureFieldsResponse";
import { SignatureVerifyResponse } from "./models/signatureVerifyResponse";
import { SoundAnnotationResponse } from "./models/soundAnnotationResponse";
import { SoundAnnotations } from "./models/soundAnnotations";
import { SoundAnnotationsResponse } from "./models/soundAnnotationsResponse";
import { SplitResultDocument } from "./models/splitResultDocument";
import { SplitResultResponse } from "./models/splitResultResponse";
import { SquareAnnotationResponse } from "./models/squareAnnotationResponse";
import { SquareAnnotations } from "./models/squareAnnotations";
import { SquareAnnotationsResponse } from "./models/squareAnnotationsResponse";
import { SquigglyAnnotationResponse } from "./models/squigglyAnnotationResponse";
import { SquigglyAnnotations } from "./models/squigglyAnnotations";
import { SquigglyAnnotationsResponse } from "./models/squigglyAnnotationsResponse";
import { StampAnnotationResponse } from "./models/stampAnnotationResponse";
import { StampAnnotations } from "./models/stampAnnotations";
import { StampAnnotationsResponse } from "./models/stampAnnotationsResponse";
import { StampBase } from "./models/stampBase";
import { StampInfo } from "./models/stampInfo";
import { StampsInfo } from "./models/stampsInfo";
import { StampsInfoResponse } from "./models/stampsInfoResponse";
import { StrikeOutAnnotationResponse } from "./models/strikeOutAnnotationResponse";
import { StrikeOutAnnotations } from "./models/strikeOutAnnotations";
import { StrikeOutAnnotationsResponse } from "./models/strikeOutAnnotationsResponse";
import { SvgImages } from "./models/svgImages";
import { Table } from "./models/table";
import { TableRecognized } from "./models/tableRecognized";
import { TableRecognizedResponse } from "./models/tableRecognizedResponse";
import { TablesRecognized } from "./models/tablesRecognized";
import { TablesRecognizedResponse } from "./models/tablesRecognizedResponse";
import { TextAnnotationResponse } from "./models/textAnnotationResponse";
import { TextAnnotations } from "./models/textAnnotations";
import { TextAnnotationsResponse } from "./models/textAnnotationsResponse";
import { TextBoxFieldResponse } from "./models/textBoxFieldResponse";
import { TextBoxFields } from "./models/textBoxFields";
import { TextBoxFieldsResponse } from "./models/textBoxFieldsResponse";
import { TextRectsResponse } from "./models/textRectsResponse";
import { TextReplaceResponse } from "./models/textReplaceResponse";
import { UnderlineAnnotationResponse } from "./models/underlineAnnotationResponse";
import { UnderlineAnnotations } from "./models/underlineAnnotations";
import { UnderlineAnnotationsResponse } from "./models/underlineAnnotationsResponse";
import { WordCountResponse } from "./models/wordCountResponse";
import { AnnotationInfo } from "./models/annotationInfo";
import { CheckBoxField } from "./models/checkBoxField";
import { ChoiceField } from "./models/choiceField";
import { ImageFooter } from "./models/imageFooter";
import { ImageHeader } from "./models/imageHeader";
import { ImageStamp } from "./models/imageStamp";
import { MarkupAnnotation } from "./models/markupAnnotation";
import { MovieAnnotation } from "./models/movieAnnotation";
import { PageNumberStamp } from "./models/pageNumberStamp";
import { PdfPageStamp } from "./models/pdfPageStamp";
import { PopupAnnotation } from "./models/popupAnnotation";
import { RadioButtonOptionField } from "./models/radioButtonOptionField";
import { RedactionAnnotation } from "./models/redactionAnnotation";
import { ScreenAnnotation } from "./models/screenAnnotation";
import { SignatureField } from "./models/signatureField";
import { TextBoxField } from "./models/textBoxField";
import { TextFooter } from "./models/textFooter";
import { TextHeader } from "./models/textHeader";
import { TextStamp } from "./models/textStamp";
import { CaretAnnotation } from "./models/caretAnnotation";
import { ComboBoxField } from "./models/comboBoxField";
import { CommonFigureAnnotation } from "./models/commonFigureAnnotation";
import { FileAttachmentAnnotation } from "./models/fileAttachmentAnnotation";
import { FreeTextAnnotation } from "./models/freeTextAnnotation";
import { HighlightAnnotation } from "./models/highlightAnnotation";
import { InkAnnotation } from "./models/inkAnnotation";
import { LineAnnotation } from "./models/lineAnnotation";
import { ListBoxField } from "./models/listBoxField";
import { PolyAnnotation } from "./models/polyAnnotation";
import { PopupAnnotationWithParent } from "./models/popupAnnotationWithParent";
import { RadioButtonField } from "./models/radioButtonField";
import { SoundAnnotation } from "./models/soundAnnotation";
import { SquigglyAnnotation } from "./models/squigglyAnnotation";
import { StampAnnotation } from "./models/stampAnnotation";
import { StrikeOutAnnotation } from "./models/strikeOutAnnotation";
import { TextAnnotation } from "./models/textAnnotation";
import { UnderlineAnnotation } from "./models/underlineAnnotation";
import { CircleAnnotation } from "./models/circleAnnotation";
import { PolyLineAnnotation } from "./models/polyLineAnnotation";
import { PolygonAnnotation } from "./models/polygonAnnotation";
import { SquareAnnotation } from "./models/squareAnnotation";

let enumsMap: {[index: string]: any} = {
    "AnnotationFlags": AnnotationFlags,
    "AnnotationState": AnnotationState,
    "AnnotationType": AnnotationType,
    "AntialiasingProcessingType": AntialiasingProcessingType,
    "BorderCornerStyle": BorderCornerStyle,
    "BorderEffect": BorderEffect,
    "BorderStyle": BorderStyle,
    "BoxStyle": BoxStyle,
    "CapStyle": CapStyle,
    "CaptionPosition": CaptionPosition,
    "CaretSymbol": CaretSymbol,
    "ColorDepth": ColorDepth,
    "ColumnAdjustment": ColumnAdjustment,
    "CompressionType": CompressionType,
    "CryptoAlgorithm": CryptoAlgorithm,
    "Direction": Direction,
    "DocFormat": DocFormat,
    "DocMDPAccessPermissionType": DocMDPAccessPermissionType,
    "DocRecognitionMode": DocRecognitionMode,
    "EpubRecognitionMode": EpubRecognitionMode,
    "FieldType": FieldType,
    "FileIcon": FileIcon,
    "FontEncodingRules": FontEncodingRules,
    "FontSavingModes": FontSavingModes,
    "FontStyles": FontStyles,
    "FreeTextIntent": FreeTextIntent,
    "HorizontalAlignment": HorizontalAlignment,
    "HtmlDocumentType": HtmlDocumentType,
    "HtmlMarkupGenerationModes": HtmlMarkupGenerationModes,
    "ImageCompressionVersion": ImageCompressionVersion,
    "ImageEncoding": ImageEncoding,
    "ImageSrcType": ImageSrcType,
    "Justification": Justification,
    "LettersPositioningMethods": LettersPositioningMethods,
    "LineEnding": LineEnding,
    "LineIntent": LineIntent,
    "LineSpacing": LineSpacing,
    "LinkActionType": LinkActionType,
    "LinkHighlightingMode": LinkHighlightingMode,
    "OutputFormat": OutputFormat,
    "PageLayout": PageLayout,
    "PageMode": PageMode,
    "PartsEmbeddingModes": PartsEmbeddingModes,
    "PdfAType": PdfAType,
    "PermissionsFlags": PermissionsFlags,
    "PolyIntent": PolyIntent,
    "RasterImagesSavingModes": RasterImagesSavingModes,
    "Rotation": Rotation,
    "ShapeType": ShapeType,
    "SignatureType": SignatureType,
    "SoundEncoding": SoundEncoding,
    "SoundIcon": SoundIcon,
    "StampIcon": StampIcon,
    "StampType": StampType,
    "TableBroken": TableBroken,
    "TextHorizontalAlignment": TextHorizontalAlignment,
    "TextIcon": TextIcon,
    "VerticalAlignment": VerticalAlignment,
    "WrapMode": WrapMode,
}

let typeMap: {[index: string]: any} = {
    "AsposeResponse": AsposeResponse,
    "AttachmentInfo": AttachmentInfo,
    "Border": Border,
    "BorderInfo": BorderInfo,
    "Cell": Cell,
    "CellRecognized": CellRecognized,
    "Color": Color,
    "Dash": Dash,
    "DefaultPageConfig": DefaultPageConfig,
    "DiscUsage": DiscUsage,
    "DocumentConfig": DocumentConfig,
    "DocumentLayers": DocumentLayers,
    "DocumentPrivilege": DocumentPrivilege,
    "ErrorDetails": ErrorDetails,
    "FileVersions": FileVersions,
    "FilesList": FilesList,
    "FilesUploadResult": FilesUploadResult,
    "GraphInfo": GraphInfo,
    "ImageFragment": ImageFragment,
    "ImageTemplate": ImageTemplate,
    "ImageTemplatesRequest": ImageTemplatesRequest,
    "LayerInfo": LayerInfo,
    "Link": Link,
    "LinkElement": LinkElement,
    "MarginInfo": MarginInfo,
    "MergeDocuments": MergeDocuments,
    "ModelError": ModelError,
    "ObjectExist": ObjectExist,
    "OptimizeOptions": OptimizeOptions,
    "Option": Option,
    "OrganizeDocumentData": OrganizeDocumentData,
    "OrganizeDocumentRequest": OrganizeDocumentRequest,
    "PageRange": PageRange,
    "PageWordCount": PageWordCount,
    "Paragraph": Paragraph,
    "Point": Point,
    "Position": Position,
    "Rectangle": Rectangle,
    "Row": Row,
    "RowRecognized": RowRecognized,
    "Segment": Segment,
    "Signature": Signature,
    "SignatureCustomAppearance": SignatureCustomAppearance,
    "SplitRangePdfOptions": SplitRangePdfOptions,
    "SplitResult": SplitResult,
    "Stamp": Stamp,
    "StorageExist": StorageExist,
    "StorageFile": StorageFile,
    "TextLine": TextLine,
    "TextRect": TextRect,
    "TextRects": TextRects,
    "TextReplace": TextReplace,
    "TextReplaceListRequest": TextReplaceListRequest,
    "TextState": TextState,
    "TextStyle": TextStyle,
    "TimestampSettings": TimestampSettings,
    "WordCount": WordCount,
    "XmpMetadata": XmpMetadata,
    "XmpMetadataProperty": XmpMetadataProperty,
    "Annotation": Annotation,
    "AnnotationsInfo": AnnotationsInfo,
    "AnnotationsInfoResponse": AnnotationsInfoResponse,
    "Attachment": Attachment,
    "AttachmentResponse": AttachmentResponse,
    "Attachments": Attachments,
    "AttachmentsResponse": AttachmentsResponse,
    "Bookmark": Bookmark,
    "BookmarkResponse": BookmarkResponse,
    "Bookmarks": Bookmarks,
    "BookmarksResponse": BookmarksResponse,
    "CaretAnnotationResponse": CaretAnnotationResponse,
    "CaretAnnotations": CaretAnnotations,
    "CaretAnnotationsResponse": CaretAnnotationsResponse,
    "CheckBoxFieldResponse": CheckBoxFieldResponse,
    "CheckBoxFields": CheckBoxFields,
    "CheckBoxFieldsResponse": CheckBoxFieldsResponse,
    "CircleAnnotationResponse": CircleAnnotationResponse,
    "CircleAnnotations": CircleAnnotations,
    "CircleAnnotationsResponse": CircleAnnotationsResponse,
    "ComboBoxFieldResponse": ComboBoxFieldResponse,
    "ComboBoxFields": ComboBoxFields,
    "ComboBoxFieldsResponse": ComboBoxFieldsResponse,
    "DisplayProperties": DisplayProperties,
    "DisplayPropertiesResponse": DisplayPropertiesResponse,
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
    "FileAttachmentAnnotationResponse": FileAttachmentAnnotationResponse,
    "FileAttachmentAnnotations": FileAttachmentAnnotations,
    "FileAttachmentAnnotationsResponse": FileAttachmentAnnotationsResponse,
    "FileVersion": FileVersion,
    "FormField": FormField,
    "FreeTextAnnotationResponse": FreeTextAnnotationResponse,
    "FreeTextAnnotations": FreeTextAnnotations,
    "FreeTextAnnotationsResponse": FreeTextAnnotationsResponse,
    "HighlightAnnotationResponse": HighlightAnnotationResponse,
    "HighlightAnnotations": HighlightAnnotations,
    "HighlightAnnotationsResponse": HighlightAnnotationsResponse,
    "Image": Image,
    "ImageResponse": ImageResponse,
    "Images": Images,
    "ImagesResponse": ImagesResponse,
    "InkAnnotationResponse": InkAnnotationResponse,
    "InkAnnotations": InkAnnotations,
    "InkAnnotationsResponse": InkAnnotationsResponse,
    "LineAnnotationResponse": LineAnnotationResponse,
    "LineAnnotations": LineAnnotations,
    "LineAnnotationsResponse": LineAnnotationsResponse,
    "LinkAnnotation": LinkAnnotation,
    "LinkAnnotationResponse": LinkAnnotationResponse,
    "LinkAnnotations": LinkAnnotations,
    "LinkAnnotationsResponse": LinkAnnotationsResponse,
    "ListBoxFieldResponse": ListBoxFieldResponse,
    "ListBoxFields": ListBoxFields,
    "ListBoxFieldsResponse": ListBoxFieldsResponse,
    "MovieAnnotationResponse": MovieAnnotationResponse,
    "MovieAnnotations": MovieAnnotations,
    "MovieAnnotationsResponse": MovieAnnotationsResponse,
    "Page": Page,
    "Pages": Pages,
    "PolyLineAnnotationResponse": PolyLineAnnotationResponse,
    "PolyLineAnnotations": PolyLineAnnotations,
    "PolyLineAnnotationsResponse": PolyLineAnnotationsResponse,
    "PolygonAnnotationResponse": PolygonAnnotationResponse,
    "PolygonAnnotations": PolygonAnnotations,
    "PolygonAnnotationsResponse": PolygonAnnotationsResponse,
    "PopupAnnotationResponse": PopupAnnotationResponse,
    "PopupAnnotations": PopupAnnotations,
    "PopupAnnotationsResponse": PopupAnnotationsResponse,
    "RadioButtonFieldResponse": RadioButtonFieldResponse,
    "RadioButtonFields": RadioButtonFields,
    "RadioButtonFieldsResponse": RadioButtonFieldsResponse,
    "RedactionAnnotationResponse": RedactionAnnotationResponse,
    "RedactionAnnotations": RedactionAnnotations,
    "RedactionAnnotationsResponse": RedactionAnnotationsResponse,
    "ScreenAnnotationResponse": ScreenAnnotationResponse,
    "ScreenAnnotations": ScreenAnnotations,
    "ScreenAnnotationsResponse": ScreenAnnotationsResponse,
    "SignatureFieldResponse": SignatureFieldResponse,
    "SignatureFields": SignatureFields,
    "SignatureFieldsResponse": SignatureFieldsResponse,
    "SignatureVerifyResponse": SignatureVerifyResponse,
    "SoundAnnotationResponse": SoundAnnotationResponse,
    "SoundAnnotations": SoundAnnotations,
    "SoundAnnotationsResponse": SoundAnnotationsResponse,
    "SplitResultDocument": SplitResultDocument,
    "SplitResultResponse": SplitResultResponse,
    "SquareAnnotationResponse": SquareAnnotationResponse,
    "SquareAnnotations": SquareAnnotations,
    "SquareAnnotationsResponse": SquareAnnotationsResponse,
    "SquigglyAnnotationResponse": SquigglyAnnotationResponse,
    "SquigglyAnnotations": SquigglyAnnotations,
    "SquigglyAnnotationsResponse": SquigglyAnnotationsResponse,
    "StampAnnotationResponse": StampAnnotationResponse,
    "StampAnnotations": StampAnnotations,
    "StampAnnotationsResponse": StampAnnotationsResponse,
    "StampBase": StampBase,
    "StampInfo": StampInfo,
    "StampsInfo": StampsInfo,
    "StampsInfoResponse": StampsInfoResponse,
    "StrikeOutAnnotationResponse": StrikeOutAnnotationResponse,
    "StrikeOutAnnotations": StrikeOutAnnotations,
    "StrikeOutAnnotationsResponse": StrikeOutAnnotationsResponse,
    "SvgImages": SvgImages,
    "Table": Table,
    "TableRecognized": TableRecognized,
    "TableRecognizedResponse": TableRecognizedResponse,
    "TablesRecognized": TablesRecognized,
    "TablesRecognizedResponse": TablesRecognizedResponse,
    "TextAnnotationResponse": TextAnnotationResponse,
    "TextAnnotations": TextAnnotations,
    "TextAnnotationsResponse": TextAnnotationsResponse,
    "TextBoxFieldResponse": TextBoxFieldResponse,
    "TextBoxFields": TextBoxFields,
    "TextBoxFieldsResponse": TextBoxFieldsResponse,
    "TextRectsResponse": TextRectsResponse,
    "TextReplaceResponse": TextReplaceResponse,
    "UnderlineAnnotationResponse": UnderlineAnnotationResponse,
    "UnderlineAnnotations": UnderlineAnnotations,
    "UnderlineAnnotationsResponse": UnderlineAnnotationsResponse,
    "WordCountResponse": WordCountResponse,
    "AnnotationInfo": AnnotationInfo,
    "CheckBoxField": CheckBoxField,
    "ChoiceField": ChoiceField,
    "ImageFooter": ImageFooter,
    "ImageHeader": ImageHeader,
    "ImageStamp": ImageStamp,
    "MarkupAnnotation": MarkupAnnotation,
    "MovieAnnotation": MovieAnnotation,
    "PageNumberStamp": PageNumberStamp,
    "PdfPageStamp": PdfPageStamp,
    "PopupAnnotation": PopupAnnotation,
    "RadioButtonOptionField": RadioButtonOptionField,
    "RedactionAnnotation": RedactionAnnotation,
    "ScreenAnnotation": ScreenAnnotation,
    "SignatureField": SignatureField,
    "TextBoxField": TextBoxField,
    "TextFooter": TextFooter,
    "TextHeader": TextHeader,
    "TextStamp": TextStamp,
    "CaretAnnotation": CaretAnnotation,
    "ComboBoxField": ComboBoxField,
    "CommonFigureAnnotation": CommonFigureAnnotation,
    "FileAttachmentAnnotation": FileAttachmentAnnotation,
    "FreeTextAnnotation": FreeTextAnnotation,
    "HighlightAnnotation": HighlightAnnotation,
    "InkAnnotation": InkAnnotation,
    "LineAnnotation": LineAnnotation,
    "ListBoxField": ListBoxField,
    "PolyAnnotation": PolyAnnotation,
    "PopupAnnotationWithParent": PopupAnnotationWithParent,
    "RadioButtonField": RadioButtonField,
    "SoundAnnotation": SoundAnnotation,
    "SquigglyAnnotation": SquigglyAnnotation,
    "StampAnnotation": StampAnnotation,
    "StrikeOutAnnotation": StrikeOutAnnotation,
    "TextAnnotation": TextAnnotation,
    "UnderlineAnnotation": UnderlineAnnotation,
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

