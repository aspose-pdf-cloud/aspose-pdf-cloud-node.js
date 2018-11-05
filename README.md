# Aspose.PDF Cloud
[Aspose.PDF Cloud](https://products.aspose.cloud/pdf/cloud) is a true REST API that enables you to perform a wide range of document processing operations including creation, manipulation, conversion and rendering of Pdf documents in the cloud.

Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to process documents in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights. This repository contains new generation SDKs for Aspose.PDF Cloud and examples.

These SDKs are now fully supported. If you have any questions, see any bugs or have enhancement request, feel free to reach out to us at [Free Support Forums](https://forum.aspose.cloud/c/pdf).

## Installation

### NPM

From the command line:

```bash
$ npm install asposepdfcloud --save
```

## Usage

APIs of this SDK can be called as follows:
```javascript

const { PdfApi } = require("asposepdfcloud");

let pdfApi = new PdfApi(AppSid, AppKey);

let pageNumber = 1;
let pdfDocName = "example.pdf";
let remoteFolder = "folderName"; 

pdfApi.getPageAnnotations(pdfDocName, pageNumber, null, remoteFolder)
.then((result) => {
console.log(result.response);
console.log(result.body);
});

```

## Unit Tests
Aspose PDF SDK includes a suite of unit tests within the "test" subdirectory. These Unit Tests also serves as examples of how to use the Aspose PDF SDK.

## Licensing
All Aspose.PDF Cloud SDKs are licensed under [MIT License](LICENSE).

## Resources
+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/pdf/cloud)
+ [**Documentation**](https://docs.aspose.cloud/display/pdfcloud/Home)
+ [**Free Support Forum**](https://forum.aspose.cloud/c/pdf)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)
+ [**Blog**](https://blog.aspose.cloud/category/aspose-products/aspose-pdf-product-family/)

## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v2.0/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PdfApi* | [**postAppendDocument**](docs/PdfApi.md#postAppendDocument) | **POST** /pdf/\{name}/appendDocument | Append document to existing one.
*PdfApi* | [**getDocumentAnnotations**](docs/PdfApi.md#getDocumentAnnotations) | **GET** /pdf/\{name}/annotations | Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**deleteDocumentAnnotations**](docs/PdfApi.md#deleteDocumentAnnotations) | **DELETE** /pdf/\{name}/annotations | Delete all annotations from the document
*PdfApi* | [**getPageAnnotations**](docs/PdfApi.md#getPageAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations | Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**deletePageAnnotations**](docs/PdfApi.md#deletePageAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/annotations | Delete all annotations from the page
*PdfApi* | [**getDocumentFreeTextAnnotations**](docs/PdfApi.md#getDocumentFreeTextAnnotations) | **GET** /pdf/\{name}/annotations/freetext | Read document free text annotations.
*PdfApi* | [**getPageFreeTextAnnotations**](docs/PdfApi.md#getPageFreeTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Read document page free text annotations.
*PdfApi* | [**postPageFreeTextAnnotations**](docs/PdfApi.md#postPageFreeTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Add document page free text annotations.
*PdfApi* | [**getFreeTextAnnotation**](docs/PdfApi.md#getFreeTextAnnotation) | **GET** /pdf/\{name}/annotations/freetext/\{annotationId} | Read document page free text annotation by ID.
*PdfApi* | [**putFreeTextAnnotation**](docs/PdfApi.md#putFreeTextAnnotation) | **PUT** /pdf/\{name}/annotations/freetext/\{annotationId} | Replace document free text annotation
*PdfApi* | [**getDocumentTextAnnotations**](docs/PdfApi.md#getDocumentTextAnnotations) | **GET** /pdf/\{name}/annotations/text | Read document text annotations.
*PdfApi* | [**getPageTextAnnotations**](docs/PdfApi.md#getPageTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Read document page text annotations.
*PdfApi* | [**postPageTextAnnotations**](docs/PdfApi.md#postPageTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Add document page text annotations.
*PdfApi* | [**getTextAnnotation**](docs/PdfApi.md#getTextAnnotation) | **GET** /pdf/\{name}/annotations/text/\{annotationId} | Read document page text annotation by ID.
*PdfApi* | [**putTextAnnotation**](docs/PdfApi.md#putTextAnnotation) | **PUT** /pdf/\{name}/annotations/text/\{annotationId} | Replace document text annotation
*PdfApi* | [**getDocumentLineAnnotations**](docs/PdfApi.md#getDocumentLineAnnotations) | **GET** /pdf/\{name}/annotations/line | Read document line annotations.
*PdfApi* | [**getPageLineAnnotations**](docs/PdfApi.md#getPageLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Read document page line annotations.
*PdfApi* | [**postPageLineAnnotations**](docs/PdfApi.md#postPageLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Add document page line annotations.
*PdfApi* | [**getLineAnnotation**](docs/PdfApi.md#getLineAnnotation) | **GET** /pdf/\{name}/annotations/line/\{annotationId} | Read document page line annotation by ID.
*PdfApi* | [**putLineAnnotation**](docs/PdfApi.md#putLineAnnotation) | **PUT** /pdf/\{name}/annotations/line/\{annotationId} | Replace document line annotation
*PdfApi* | [**getDocumentSquareAnnotations**](docs/PdfApi.md#getDocumentSquareAnnotations) | **GET** /pdf/\{name}/annotations/square | Read document square annotations.
*PdfApi* | [**getPageSquareAnnotations**](docs/PdfApi.md#getPageSquareAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Read document page square annotations.
*PdfApi* | [**postPageSquareAnnotations**](docs/PdfApi.md#postPageSquareAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Add document page square annotations.
*PdfApi* | [**getSquareAnnotation**](docs/PdfApi.md#getSquareAnnotation) | **GET** /pdf/\{name}/annotations/square/\{annotationId} | Read document page square annotation by ID.
*PdfApi* | [**putSquareAnnotation**](docs/PdfApi.md#putSquareAnnotation) | **PUT** /pdf/\{name}/annotations/square/\{annotationId} | Replace document square annotation
*PdfApi* | [**getDocumentCircleAnnotations**](docs/PdfApi.md#getDocumentCircleAnnotations) | **GET** /pdf/\{name}/annotations/circle | Read document circle annotations.
*PdfApi* | [**getPageCircleAnnotations**](docs/PdfApi.md#getPageCircleAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Read document page circle annotations.
*PdfApi* | [**postPageCircleAnnotations**](docs/PdfApi.md#postPageCircleAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Add document page circle annotations.
*PdfApi* | [**getCircleAnnotation**](docs/PdfApi.md#getCircleAnnotation) | **GET** /pdf/\{name}/annotations/circle/\{annotationId} | Read document page circle annotation by ID.
*PdfApi* | [**putCircleAnnotation**](docs/PdfApi.md#putCircleAnnotation) | **PUT** /pdf/\{name}/annotations/circle/\{annotationId} | Replace document circle annotation
*PdfApi* | [**getDocumentPolygonAnnotations**](docs/PdfApi.md#getDocumentPolygonAnnotations) | **GET** /pdf/\{name}/annotations/polygon | Read document polygon annotations.
*PdfApi* | [**getPagePolygonAnnotations**](docs/PdfApi.md#getPagePolygonAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Read document page polygon annotations.
*PdfApi* | [**postPagePolygonAnnotations**](docs/PdfApi.md#postPagePolygonAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Add document page polygon annotations.
*PdfApi* | [**getPolygonAnnotation**](docs/PdfApi.md#getPolygonAnnotation) | **GET** /pdf/\{name}/annotations/polygon/\{annotationId} | Read document page polygon annotation by ID.
*PdfApi* | [**putPolygonAnnotation**](docs/PdfApi.md#putPolygonAnnotation) | **PUT** /pdf/\{name}/annotations/polygon/\{annotationId} | Replace document polygon annotation
*PdfApi* | [**getDocumentPolyLineAnnotations**](docs/PdfApi.md#getDocumentPolyLineAnnotations) | **GET** /pdf/\{name}/annotations/polyline | Read document polyline annotations.
*PdfApi* | [**getPagePolyLineAnnotations**](docs/PdfApi.md#getPagePolyLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Read document page polyline annotations.
*PdfApi* | [**postPagePolyLineAnnotations**](docs/PdfApi.md#postPagePolyLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Add document page polyline annotations.
*PdfApi* | [**getPolyLineAnnotation**](docs/PdfApi.md#getPolyLineAnnotation) | **GET** /pdf/\{name}/annotations/polyline/\{annotationId} | Read document page polyline annotation by ID.
*PdfApi* | [**putPolyLineAnnotation**](docs/PdfApi.md#putPolyLineAnnotation) | **PUT** /pdf/\{name}/annotations/polyline/\{annotationId} | Replace document polyline annotation
*PdfApi* | [**deleteAnnotation**](docs/PdfApi.md#deleteAnnotation) | **DELETE** /pdf/\{name}/annotations/\{annotationId} | Delete document annotation by ID
*PdfApi* | [**putSearchableDocument**](docs/PdfApi.md#putSearchableDocument) | **PUT** /pdf/\{name}/ocr | Create searchable PDF document. Generate OCR layer for images in input PDF document.
*PdfApi* | [**getDocumentAttachments**](docs/PdfApi.md#getDocumentAttachments) | **GET** /pdf/\{name}/attachments | Read document attachments info.
*PdfApi* | [**getDocumentAttachmentByIndex**](docs/PdfApi.md#getDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex} | Read document attachment info by its index.
*PdfApi* | [**getDownloadDocumentAttachmentByIndex**](docs/PdfApi.md#getDownloadDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex}/download | Download document attachment content by its index.
*PdfApi* | [**getDocumentBookmarks**](docs/PdfApi.md#getDocumentBookmarks) | **GET** /pdf/\{name}/bookmarks | Read document bookmark/bookmarks (including children).
*PdfApi* | [**putMergeDocuments**](docs/PdfApi.md#putMergeDocuments) | **PUT** /pdf/\{name}/merge | Merge a list of documents.
*PdfApi* | [**getDocument**](docs/PdfApi.md#getDocument) | **GET** /pdf/\{name} | Read common document info.
*PdfApi* | [**putCreateDocument**](docs/PdfApi.md#putCreateDocument) | **PUT** /pdf/\{name} | Create empty document.
*PdfApi* | [**postSignDocument**](docs/PdfApi.md#postSignDocument) | **POST** /pdf/\{name}/sign | Sign document.
*PdfApi* | [**getVerifySignature**](docs/PdfApi.md#getVerifySignature) | **GET** /pdf/\{name}/verifySignature | Verify signature document.
*PdfApi* | [**putPrivileges**](docs/PdfApi.md#putPrivileges) | **PUT** /pdf/\{name}/privileges | Update privilege document.
*PdfApi* | [**postOptimizeDocument**](docs/PdfApi.md#postOptimizeDocument) | **POST** /pdf/\{name}/optimize | Optimize document.
*PdfApi* | [**postSplitDocument**](docs/PdfApi.md#postSplitDocument) | **POST** /pdf/\{name}/split | Split document to parts.
*PdfApi* | [**putUpdateField**](docs/PdfApi.md#putUpdateField) | **PUT** /pdf/\{name}/fields/\{fieldName} | Update field.
*PdfApi* | [**getField**](docs/PdfApi.md#getField) | **GET** /pdf/\{name}/fields/\{fieldName} | Get document field by name.
*PdfApi* | [**deleteField**](docs/PdfApi.md#deleteField) | **DELETE** /pdf/\{name}/fields/\{fieldName} | Delete document field by name.
*PdfApi* | [**putUpdateFields**](docs/PdfApi.md#putUpdateFields) | **PUT** /pdf/\{name}/fields | Update fields.
*PdfApi* | [**postCreateField**](docs/PdfApi.md#postCreateField) | **POST** /pdf/\{name}/fields | Create field.
*PdfApi* | [**getFields**](docs/PdfApi.md#getFields) | **GET** /pdf/\{name}/fields | Get document fields.
*PdfApi* | [**putFieldsFlatten**](docs/PdfApi.md#putFieldsFlatten) | **PUT** /pdf/\{name}/fields/flatten | Flatten form fields in document.
*PdfApi* | [**getImages**](docs/PdfApi.md#getImages) | **GET** /pdf/\{name}/pages/\{pageNumber}/images | Read document images.
*PdfApi* | [**postInsertImage**](docs/PdfApi.md#postInsertImage) | **POST** /pdf/\{name}/pages/\{pageNumber}/images | Insert image to document page.
*PdfApi* | [**getImage**](docs/PdfApi.md#getImage) | **GET** /pdf/\{name}/images/\{imageId} | Read document image by ID.
*PdfApi* | [**deleteImage**](docs/PdfApi.md#deleteImage) | **DELETE** /pdf/\{name}/images/\{imageId} | Delete image from document page.
*PdfApi* | [**putReplaceImage**](docs/PdfApi.md#putReplaceImage) | **PUT** /pdf/\{name}/images/\{imageId} | Replace document image.
*PdfApi* | [**getImageExtractAsJpeg**](docs/PdfApi.md#getImageExtractAsJpeg) | **GET** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format
*PdfApi* | [**putImageExtractAsJpeg**](docs/PdfApi.md#putImageExtractAsJpeg) | **PUT** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format to folder
*PdfApi* | [**getImageExtractAsTiff**](docs/PdfApi.md#getImageExtractAsTiff) | **GET** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format
*PdfApi* | [**putImageExtractAsTiff**](docs/PdfApi.md#putImageExtractAsTiff) | **PUT** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format to folder
*PdfApi* | [**getImageExtractAsGif**](docs/PdfApi.md#getImageExtractAsGif) | **GET** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format
*PdfApi* | [**putImageExtractAsGif**](docs/PdfApi.md#putImageExtractAsGif) | **PUT** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format to folder
*PdfApi* | [**getImageExtractAsPng**](docs/PdfApi.md#getImageExtractAsPng) | **GET** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format
*PdfApi* | [**putImageExtractAsPng**](docs/PdfApi.md#putImageExtractAsPng) | **PUT** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format to folder
*PdfApi* | [**putImagesExtractAsJpeg**](docs/PdfApi.md#putImagesExtractAsJpeg) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/jpeg | Extract document images in JPEG format to folder.
*PdfApi* | [**putImagesExtractAsTiff**](docs/PdfApi.md#putImagesExtractAsTiff) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/tiff | Extract document images in TIFF format to folder.
*PdfApi* | [**putImagesExtractAsGif**](docs/PdfApi.md#putImagesExtractAsGif) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/gif | Extract document images in GIF format to folder.
*PdfApi* | [**putImagesExtractAsPng**](docs/PdfApi.md#putImagesExtractAsPng) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/png | Extract document images in PNG format to folder.
*PdfApi* | [**getPageLinkAnnotations**](docs/PdfApi.md#getPageLinkAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/links | Read document page link annotations.
*PdfApi* | [**postPageLinkAnnotations**](docs/PdfApi.md#postPageLinkAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/links | Add document page link annotations.
*PdfApi* | [**deletePageLinkAnnotations**](docs/PdfApi.md#deletePageLinkAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/links | Delete all link annotations from the page
*PdfApi* | [**getPageLinkAnnotation**](docs/PdfApi.md#getPageLinkAnnotation) | **GET** /pdf/\{name}/pages/\{pageNumber}/links/\{linkId} | Read document page link annotation by ID.
*PdfApi* | [**getLinkAnnotation**](docs/PdfApi.md#getLinkAnnotation) | **GET** /pdf/\{name}/links/\{linkId} | Read document link annotation by ID.
*PdfApi* | [**deleteLinkAnnotation**](docs/PdfApi.md#deleteLinkAnnotation) | **DELETE** /pdf/\{name}/links/\{linkId} | Delete document page link annotation by ID
*PdfApi* | [**putLinkAnnotation**](docs/PdfApi.md#putLinkAnnotation) | **PUT** /pdf/\{name}/links/\{linkId} | Replace document page link annotations
*PdfApi* | [**deleteDocumentLinkAnnotations**](docs/PdfApi.md#deleteDocumentLinkAnnotations) | **DELETE** /pdf/\{name}/links | Delete all link annotations from the document
*PdfApi* | [**getPages**](docs/PdfApi.md#getPages) | **GET** /pdf/\{name}/pages | Read document pages info.
*PdfApi* | [**putAddNewPage**](docs/PdfApi.md#putAddNewPage) | **PUT** /pdf/\{name}/pages | Add new page to end of the document.
*PdfApi* | [**getPage**](docs/PdfApi.md#getPage) | **GET** /pdf/\{name}/pages/\{pageNumber} | Read document page info.
*PdfApi* | [**deletePage**](docs/PdfApi.md#deletePage) | **DELETE** /pdf/\{name}/pages/\{pageNumber} | Delete document page by its number.
*PdfApi* | [**postSignPage**](docs/PdfApi.md#postSignPage) | **POST** /pdf/\{name}/pages/\{pageNumber}/sign | Sign page.
*PdfApi* | [**getPageConvertToTiff**](docs/PdfApi.md#getPageConvertToTiff) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and return resulting file in response.
*PdfApi* | [**putPageConvertToTiff**](docs/PdfApi.md#putPageConvertToTiff) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and upload resulting file to storage.
*PdfApi* | [**getPageConvertToJpeg**](docs/PdfApi.md#getPageConvertToJpeg) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and return resulting file in response.
*PdfApi* | [**putPageConvertToJpeg**](docs/PdfApi.md#putPageConvertToJpeg) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and upload resulting file to storage.
*PdfApi* | [**getPageConvertToPng**](docs/PdfApi.md#getPageConvertToPng) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to Png image and return resulting file in response.
*PdfApi* | [**putPageConvertToPng**](docs/PdfApi.md#putPageConvertToPng) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to png image and upload resulting file to storage.
*PdfApi* | [**getPageConvertToEmf**](docs/PdfApi.md#getPageConvertToEmf) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to Emf image and return resulting file in response.
*PdfApi* | [**putPageConvertToEmf**](docs/PdfApi.md#putPageConvertToEmf) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to emf image and upload resulting file to storage.
*PdfApi* | [**getPageConvertToBmp**](docs/PdfApi.md#getPageConvertToBmp) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to Bmp image and return resulting file in response.
*PdfApi* | [**putPageConvertToBmp**](docs/PdfApi.md#putPageConvertToBmp) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to bmp image and upload resulting file to storage.
*PdfApi* | [**getPageConvertToGif**](docs/PdfApi.md#getPageConvertToGif) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to Gif image and return resulting file in response.
*PdfApi* | [**putPageConvertToGif**](docs/PdfApi.md#putPageConvertToGif) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to gif image and upload resulting file to storage.
*PdfApi* | [**getWordsPerPage**](docs/PdfApi.md#getWordsPerPage) | **GET** /pdf/\{name}/pages/wordCount | Get number of words per document page.
*PdfApi* | [**postMovePage**](docs/PdfApi.md#postMovePage) | **POST** /pdf/\{name}/pages/\{pageNumber}/movePage | Move page to new position.
*PdfApi* | [**putPageAddStamp**](docs/PdfApi.md#putPageAddStamp) | **PUT** /pdf/\{name}/pages/\{pageNumber}/stamp | Add page stamp.
*PdfApi* | [**getDocumentProperties**](docs/PdfApi.md#getDocumentProperties) | **GET** /pdf/\{name}/documentproperties | Read document properties.
*PdfApi* | [**deleteProperties**](docs/PdfApi.md#deleteProperties) | **DELETE** /pdf/\{name}/documentproperties | Delete custom document properties.
*PdfApi* | [**getDocumentProperty**](docs/PdfApi.md#getDocumentProperty) | **GET** /pdf/\{name}/documentproperties/\{propertyName} | Read document property by name.
*PdfApi* | [**putSetProperty**](docs/PdfApi.md#putSetProperty) | **PUT** /pdf/\{name}/documentproperties/\{propertyName} | Add/update document property.
*PdfApi* | [**deleteProperty**](docs/PdfApi.md#deleteProperty) | **DELETE** /pdf/\{name}/documentproperties/\{propertyName} | Delete document property.
*PdfApi* | [**getText**](docs/PdfApi.md#getText) | **GET** /pdf/\{name}/text | Read document text.
*PdfApi* | [**getPageText**](docs/PdfApi.md#getPageText) | **GET** /pdf/\{name}/pages/\{pageNumber}/text | Read page text items.
*PdfApi* | [**putAddText**](docs/PdfApi.md#putAddText) | **PUT** /pdf/\{name}/pages/\{pageNumber}/text | Add text to PDF document page.
*PdfApi* | [**postDocumentTextReplace**](docs/PdfApi.md#postDocumentTextReplace) | **POST** /pdf/\{name}/text/replace | Document's replace text method.
*PdfApi* | [**postPageTextReplace**](docs/PdfApi.md#postPageTextReplace) | **POST** /pdf/\{name}/pages/\{pageNumber}/text/replace | Page's replace text method.
*PdfApi* | [**getEpubInStorageToPdf**](docs/PdfApi.md#getEpubInStorageToPdf) | **GET** /pdf/create/epub | Convert EPUB file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putEpubInStorageToPdf**](docs/PdfApi.md#putEpubInStorageToPdf) | **PUT** /pdf/\{name}/create/epub | Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putImageInStorageToPdf**](docs/PdfApi.md#putImageInStorageToPdf) | **PUT** /pdf/\{name}/create/images | Convert image file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getWebInStorageToPdf**](docs/PdfApi.md#getWebInStorageToPdf) | **GET** /pdf/create/web | Convert web page to PDF format and return resulting file in response. 
*PdfApi* | [**putWebInStorageToPdf**](docs/PdfApi.md#putWebInStorageToPdf) | **PUT** /pdf/\{name}/create/web | Convert web page to PDF format and upload resulting file to storage. 
*PdfApi* | [**getLaTeXInStorageToPdf**](docs/PdfApi.md#getLaTeXInStorageToPdf) | **GET** /pdf/create/latex | Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putLaTeXInStorageToPdf**](docs/PdfApi.md#putLaTeXInStorageToPdf) | **PUT** /pdf/\{name}/create/latex | Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getMhtInStorageToPdf**](docs/PdfApi.md#getMhtInStorageToPdf) | **GET** /pdf/create/mht | Convert MHT file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putMhtInStorageToPdf**](docs/PdfApi.md#putMhtInStorageToPdf) | **PUT** /pdf/\{name}/create/mht | Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getHtmlInStorageToPdf**](docs/PdfApi.md#getHtmlInStorageToPdf) | **GET** /pdf/create/html | Convert HTML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putHtmlInStorageToPdf**](docs/PdfApi.md#putHtmlInStorageToPdf) | **PUT** /pdf/\{name}/create/html | Convert HTML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getPsInStorageToPdf**](docs/PdfApi.md#getPsInStorageToPdf) | **GET** /pdf/create/ps | Convert PS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putPsInStorageToPdf**](docs/PdfApi.md#putPsInStorageToPdf) | **PUT** /pdf/\{name}/create/ps | Convert PS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getXslFoInStorageToPdf**](docs/PdfApi.md#getXslFoInStorageToPdf) | **GET** /pdf/create/xslfo | Convert XslFo file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putXslFoInStorageToPdf**](docs/PdfApi.md#putXslFoInStorageToPdf) | **PUT** /pdf/\{name}/create/xslfo | Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getXpsInStorageToPdf**](docs/PdfApi.md#getXpsInStorageToPdf) | **GET** /pdf/create/xps | Convert XPS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putXpsInStorageToPdf**](docs/PdfApi.md#putXpsInStorageToPdf) | **PUT** /pdf/\{name}/create/xps | Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getSvgInStorageToPdf**](docs/PdfApi.md#getSvgInStorageToPdf) | **GET** /pdf/create/svg | Convert SVG file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putSvgInStorageToPdf**](docs/PdfApi.md#putSvgInStorageToPdf) | **PUT** /pdf/\{name}/create/svg | Convert SVG file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getPdfInStorageToDoc**](docs/PdfApi.md#getPdfInStorageToDoc) | **GET** /pdf/\{name}/convert/doc | Converts PDF document (located on storage) to DOC format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToDoc**](docs/PdfApi.md#putPdfInStorageToDoc) | **PUT** /pdf/\{name}/convert/doc | Converts PDF document (located on storage) to DOC format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToDoc**](docs/PdfApi.md#putPdfInRequestToDoc) | **PUT** /pdf/convert/doc | Converts PDF document (in request content) to DOC format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToHtml**](docs/PdfApi.md#getPdfInStorageToHtml) | **GET** /pdf/\{name}/convert/html | Converts PDF document (located on storage) to Html format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToHtml**](docs/PdfApi.md#putPdfInStorageToHtml) | **PUT** /pdf/\{name}/convert/html | Converts PDF document (located on storage) to Html format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToHtml**](docs/PdfApi.md#putPdfInRequestToHtml) | **PUT** /pdf/convert/html | Converts PDF document (in request content) to Html format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToPdfA**](docs/PdfApi.md#getPdfInStorageToPdfA) | **GET** /pdf/\{name}/convert/pdfa | Converts PDF document (located on storage) to PdfA format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToPdfA**](docs/PdfApi.md#putPdfInStorageToPdfA) | **PUT** /pdf/\{name}/convert/pdfa | Converts PDF document (located on storage) to PdfA format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToPdfA**](docs/PdfApi.md#putPdfInRequestToPdfA) | **PUT** /pdf/convert/pdfa | Converts PDF document (in request content) to PdfA format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToTiff**](docs/PdfApi.md#getPdfInStorageToTiff) | **GET** /pdf/\{name}/convert/tiff | Converts PDF document (located on storage) to TIFF format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToTiff**](docs/PdfApi.md#putPdfInStorageToTiff) | **PUT** /pdf/\{name}/convert/tiff | Converts PDF document (located on storage) to TIFF format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToTiff**](docs/PdfApi.md#putPdfInRequestToTiff) | **PUT** /pdf/convert/tiff | Converts PDF document (in request content) to TIFF format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToSvg**](docs/PdfApi.md#getPdfInStorageToSvg) | **GET** /pdf/\{name}/convert/svg | Converts PDF document (located on storage) to SVG format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToSvg**](docs/PdfApi.md#putPdfInStorageToSvg) | **PUT** /pdf/\{name}/convert/svg | Converts PDF document (located on storage) to SVG format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToSvg**](docs/PdfApi.md#putPdfInRequestToSvg) | **PUT** /pdf/convert/svg | Converts PDF document (in request content) to SVG format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToEpub**](docs/PdfApi.md#getPdfInStorageToEpub) | **GET** /pdf/\{name}/convert/epub | Converts PDF document (located on storage) to EPUB format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToEpub**](docs/PdfApi.md#putPdfInStorageToEpub) | **PUT** /pdf/\{name}/convert/epub | Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToEpub**](docs/PdfApi.md#putPdfInRequestToEpub) | **PUT** /pdf/convert/epub | Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToPptx**](docs/PdfApi.md#getPdfInStorageToPptx) | **GET** /pdf/\{name}/convert/pptx | Converts PDF document (located on storage) to PPTX format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToPptx**](docs/PdfApi.md#putPdfInStorageToPptx) | **PUT** /pdf/\{name}/convert/pptx | Converts PDF document (located on storage) to PPTX format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToPptx**](docs/PdfApi.md#putPdfInRequestToPptx) | **PUT** /pdf/convert/pptx | Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToLaTeX**](docs/PdfApi.md#getPdfInStorageToLaTeX) | **GET** /pdf/\{name}/convert/latex | Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToLaTeX**](docs/PdfApi.md#putPdfInStorageToLaTeX) | **PUT** /pdf/\{name}/convert/latex | Converts PDF document (located on storage) to LaTeX format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToLaTeX**](docs/PdfApi.md#putPdfInRequestToLaTeX) | **PUT** /pdf/convert/latex | Converts PDF document (in request content) to LaTeX format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToMobiXml**](docs/PdfApi.md#getPdfInStorageToMobiXml) | **GET** /pdf/\{name}/convert/mobixml | Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToMobiXml**](docs/PdfApi.md#putPdfInStorageToMobiXml) | **PUT** /pdf/\{name}/convert/mobixml | Converts PDF document (located on storage) to MOBIXML format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToMobiXml**](docs/PdfApi.md#putPdfInRequestToMobiXml) | **PUT** /pdf/convert/mobixml | Converts PDF document (in request content) to MOBIXML format and uploads resulting file to storage.
*PdfApi* | [**getPclInStorageToPdf**](docs/PdfApi.md#getPclInStorageToPdf) | **GET** /pdf/create/pcl | Convert PCL file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putPclInStorageToPdf**](docs/PdfApi.md#putPclInStorageToPdf) | **PUT** /pdf/\{name}/create/pcl | Convert PCL file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getXmlInStorageToPdf**](docs/PdfApi.md#getXmlInStorageToPdf) | **GET** /pdf/create/xml | Convert XML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**putXmlInStorageToPdf**](docs/PdfApi.md#putXmlInStorageToPdf) | **PUT** /pdf/\{name}/create/xml | Convert XML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**getXfaPdfInStorageToAcroForm**](docs/PdfApi.md#getXfaPdfInStorageToAcroForm) | **GET** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content
*PdfApi* | [**putXfaPdfInStorageToAcroForm**](docs/PdfApi.md#putXfaPdfInStorageToAcroForm) | **PUT** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage
*PdfApi* | [**putXfaPdfInRequestToAcroForm**](docs/PdfApi.md#putXfaPdfInRequestToAcroForm) | **PUT** /pdf/convert/xfatoacroform | Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToXml**](docs/PdfApi.md#getPdfInStorageToXml) | **GET** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToXml**](docs/PdfApi.md#putPdfInStorageToXml) | **PUT** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToXml**](docs/PdfApi.md#putPdfInRequestToXml) | **PUT** /pdf/convert/xml | Converts PDF document (in request content) to XML format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToXps**](docs/PdfApi.md#getPdfInStorageToXps) | **GET** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToXps**](docs/PdfApi.md#putPdfInStorageToXps) | **PUT** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToXps**](docs/PdfApi.md#putPdfInRequestToXps) | **PUT** /pdf/convert/xps | Converts PDF document (in request content) to XPS format and uploads resulting file to storage.
*PdfApi* | [**getPdfInStorageToXls**](docs/PdfApi.md#getPdfInStorageToXls) | **GET** /pdf/\{name}/convert/xls | Converts PDF document (located on storage) to XLS format and returns resulting file in response content
*PdfApi* | [**putPdfInStorageToXls**](docs/PdfApi.md#putPdfInStorageToXls) | **PUT** /pdf/\{name}/convert/xls | Converts PDF document (located on storage) to XLS format and uploads resulting file to storage
*PdfApi* | [**putPdfInRequestToXls**](docs/PdfApi.md#putPdfInRequestToXls) | **PUT** /pdf/convert/xls | Converts PDF document (in request content) to XLS format and uploads resulting file to storage.
*PdfApi* | [**putCreate**](docs/PdfApi.md#putCreate) | **PUT** /storage/file | Upload a specific file 
*PdfApi* | [**getDownload**](docs/PdfApi.md#getDownload) | **GET** /storage/file | Download a specific file 
*PdfApi* | [**getListFiles**](docs/PdfApi.md#getListFiles) | **GET** /storage/folder | Get the file listing of a specific folder 

## Documentation for Models

Class | Notes | Description
----- | ----- | -----
[**AppendDocument**](docs/AppendDocument.md) |  | Class for appendDocument service request building.
[**DocumentResponse**](docs/DocumentResponse.md) |  | 
[**Document**](docs/Document.md) |  | Represents document DTO.
[**DocumentProperties**](docs/DocumentProperties.md) |  | Pdf document properties.
[**DocumentProperty**](docs/DocumentProperty.md) |  | Pdf document property.
[**LinkElement**](docs/LinkElement.md) |  | Represents base DTO object.
[**Link**](docs/Link.md) |  | Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7
[**Pages**](docs/Pages.md) |  | List of pages.
[**Page**](docs/Page.md) |  | Provides link to page.
[**Images**](docs/Images.md) |  | List of page images.
[**Image**](docs/Image.md) |  | Represents image DTO.
[**RectanglePdf**](docs/RectanglePdf.md) |  | Represents rectangle DTO.
[**AsposeResponse**](docs/AsposeResponse.md) |  | Base class for all responses.
[**AnnotationsInfoResponse**](docs/AnnotationsInfoResponse.md) |  | 
[**AnnotationsInfo**](docs/AnnotationsInfo.md) |  | List of annotations.
[**AnnotationInfo**](docs/AnnotationInfo.md) |  | Provides annotation.
[**AnnotationType**](docs/AnnotationType.md) | Enum | 
[**Annotation**](docs/Annotation.md) |  | Provides annotation.
[**AnnotationFlags**](docs/AnnotationFlags.md) | Enum | A set of flags specifying various characteristics of the annotation.
[**HorizontalAlignment**](docs/HorizontalAlignment.md) | Enum | 
[**VerticalAlignment**](docs/VerticalAlignment.md) | Enum | Enumeration of possible vertical alignment values.
[**FreeTextAnnotationsResponse**](docs/FreeTextAnnotationsResponse.md) |  | 
[**FreeTextAnnotations**](docs/FreeTextAnnotations.md) |  | List of annotations.
[**FreeTextAnnotation**](docs/FreeTextAnnotation.md) |  | Provides FreeTextAnnotation.
[**Justification**](docs/Justification.md) | Enum | Enumerates the forms of quadding (justification) to be used in displaying the annotation?s text.
[**FreeTextIntent**](docs/FreeTextIntent.md) | Enum | Enumerates the intents of the free text annotation.
[**Rotation**](docs/Rotation.md) | Enum | Enumeration of possible rotation values.
[**TextStyle**](docs/TextStyle.md) |  | Represents a text style of a text
[**Color**](docs/Color.md) |  | Represents color DTO.
[**MarkupAnnotation**](docs/MarkupAnnotation.md) |  | Provides MarkupAnnotation.
[**FreeTextAnnotationResponse**](docs/FreeTextAnnotationResponse.md) |  | 
[**TextAnnotationsResponse**](docs/TextAnnotationsResponse.md) |  | 
[**TextAnnotations**](docs/TextAnnotations.md) |  | List of annotations.
[**TextAnnotation**](docs/TextAnnotation.md) |  | Provides TextAnnotation.
[**AnnotationState**](docs/AnnotationState.md) | Enum | The enumeration of states to which the original annotation can be set.
[**TextIcon**](docs/TextIcon.md) | Enum | Enumerates the icons to be used in displaying the annotation.
[**TextAnnotationResponse**](docs/TextAnnotationResponse.md) |  | 
[**LineAnnotationsResponse**](docs/LineAnnotationsResponse.md) |  | 
[**LineAnnotations**](docs/LineAnnotations.md) |  | List of annotations.
[**LineAnnotation**](docs/LineAnnotation.md) |  | Provides LineAnnotation.
[**Point**](docs/Point.md) |  | Represent point with fractional coordinates.
[**LineEnding**](docs/LineEnding.md) | Enum | Enumerates the line ending styles to be used in drawing the line.
[**CaptionPosition**](docs/CaptionPosition.md) | Enum | Enumeration of the annotation?s caption positioning.
[**LineIntent**](docs/LineIntent.md) | Enum | Enumerates the intents of the line annotation.
[**LineAnnotationResponse**](docs/LineAnnotationResponse.md) |  | 
[**SquareAnnotationsResponse**](docs/SquareAnnotationsResponse.md) |  | 
[**SquareAnnotations**](docs/SquareAnnotations.md) |  | List of annotations.
[**SquareAnnotation**](docs/SquareAnnotation.md) |  | Provides SquareAnnotation.
[**CommonFigureAnnotation**](docs/CommonFigureAnnotation.md) |  | Provides CommonFigureAnnotation.
[**SquareAnnotationResponse**](docs/SquareAnnotationResponse.md) |  | 
[**CircleAnnotationsResponse**](docs/CircleAnnotationsResponse.md) |  | 
[**CircleAnnotations**](docs/CircleAnnotations.md) |  | List of annotations.
[**CircleAnnotation**](docs/CircleAnnotation.md) |  | Provides CircleAnnotation.
[**CircleAnnotationResponse**](docs/CircleAnnotationResponse.md) |  | 
[**PolygonAnnotationsResponse**](docs/PolygonAnnotationsResponse.md) |  | 
[**PolygonAnnotations**](docs/PolygonAnnotations.md) |  | List of annotations.
[**PolygonAnnotation**](docs/PolygonAnnotation.md) |  | Provides PolygonAnnotation.
[**PolyAnnotation**](docs/PolyAnnotation.md) |  | Provides PolyAnnotation.
[**PolyIntent**](docs/PolyIntent.md) | Enum | Enumerates the intents of the polygon or polyline annotation.
[**PolygonAnnotationResponse**](docs/PolygonAnnotationResponse.md) |  | 
[**PolyLineAnnotationsResponse**](docs/PolyLineAnnotationsResponse.md) |  | 
[**PolyLineAnnotations**](docs/PolyLineAnnotations.md) |  | List of annotations.
[**PolyLineAnnotation**](docs/PolyLineAnnotation.md) |  | Provides PolyLineAnnotation.
[**PolyLineAnnotationResponse**](docs/PolyLineAnnotationResponse.md) |  | 
[**AttachmentsResponse**](docs/AttachmentsResponse.md) |  | 
[**Attachments**](docs/Attachments.md) |  | List of attachment.
[**AttachmentResponse**](docs/AttachmentResponse.md) |  | 
[**Attachment**](docs/Attachment.md) |  | Provides link to attachment.
[**MergeDocuments**](docs/MergeDocuments.md) |  | Documents for merging.
[**Signature**](docs/Signature.md) |  | 
[**SignatureType**](docs/SignatureType.md) | Enum | 
[**SignatureVerifyResponse**](docs/SignatureVerifyResponse.md) |  | Returns also a message.
[**DocumentPrivilege**](docs/DocumentPrivilege.md) |  | Represents the privileges for accessing Pdf file./>.
[**OptimizeOptions**](docs/OptimizeOptions.md) |  | Represents Pdf optimize options.
[**SplitResultResponse**](docs/SplitResultResponse.md) |  | Represents split result object.
[**SplitResult**](docs/SplitResult.md) |  | Represents split result object.
[**SplitResultDocument**](docs/SplitResultDocument.md) |  | Represents split result document,
[**Field**](docs/Field.md) |  | Represents form field.
[**FieldType**](docs/FieldType.md) | Enum | Represents an enumeration of available field types.
[**FieldResponse**](docs/FieldResponse.md) |  | 
[**Fields**](docs/Fields.md) |  | List of form fields.
[**FieldsResponse**](docs/FieldsResponse.md) |  | 
[**ImagesResponse**](docs/ImagesResponse.md) |  | 
[**ImageResponse**](docs/ImageResponse.md) |  | 
[**LinkAnnotationsResponse**](docs/LinkAnnotationsResponse.md) |  | 
[**LinkAnnotations**](docs/LinkAnnotations.md) |  | List of LinkAnnotations.
[**LinkAnnotation**](docs/LinkAnnotation.md) |  | Provides link to linkAnnotation.
[**LinkActionType**](docs/LinkActionType.md) | Enum | Represents list of link action types.
[**LinkHighlightingMode**](docs/LinkHighlightingMode.md) | Enum | Enumerates the annotation?s highlighting mode, the visual effect to be used when the mouse button is pressed or held down inside its active area.
[**LinkAnnotationResponse**](docs/LinkAnnotationResponse.md) |  | 
[**DocumentPagesResponse**](docs/DocumentPagesResponse.md) |  | 
[**DocumentPageResponse**](docs/DocumentPageResponse.md) |  | 
[**WordCountResponse**](docs/WordCountResponse.md) |  | Number of words per document pages.
[**WordCount**](docs/WordCount.md) |  | Number of words per document pages.
[**PageWordCount**](docs/PageWordCount.md) |  | Page words count.
[**Stamp**](docs/Stamp.md) |  | Represents Pdf stamps.
[**StampType**](docs/StampType.md) | Enum | Represents enumeration of the stamp types.
[**TextState**](docs/TextState.md) |  | Represents a text state of a text
[**FontStyles**](docs/FontStyles.md) | Enum | Specifies style information applied to text.
[**DocumentPropertiesResponse**](docs/DocumentPropertiesResponse.md) |  | 
[**DocumentPropertyResponse**](docs/DocumentPropertyResponse.md) |  | 
[**TextRectsResponse**](docs/TextRectsResponse.md) |  | 
[**TextRects**](docs/TextRects.md) |  | Represents text items DTO.
[**TextRect**](docs/TextRect.md) |  | Represents text DTO.
[**Paragraph**](docs/Paragraph.md) |  | Paragraph DTO for add text functionality.
[**LineSpacing**](docs/LineSpacing.md) | Enum | 
[**WrapMode**](docs/WrapMode.md) | Enum | 
[**TextHorizontalAlignment**](docs/TextHorizontalAlignment.md) | Enum | 
[**TextLine**](docs/TextLine.md) |  | A line of text to be inserted into .
[**Segment**](docs/Segment.md) |  | 
[**TextReplaceListRequest**](docs/TextReplaceListRequest.md) |  | Multiple text replacements request.
[**TextReplace**](docs/TextReplace.md) |  | Single text replacement setting.
[**TextReplaceResponse**](docs/TextReplaceResponse.md) |  | 
[**ImageTemplatesRequest**](docs/ImageTemplatesRequest.md) |  | Create document from images request.
[**ImageTemplate**](docs/ImageTemplate.md) |  | Template of image.
[**ImageSrcType**](docs/ImageSrcType.md) | Enum | Allows to specify image file format.
[**MarginInfo**](docs/MarginInfo.md) |  | 
[**DocFormat**](docs/DocFormat.md) | Enum | Allows to specify .doc or .docx file format.
[**DocRecognitionMode**](docs/DocRecognitionMode.md) | Enum | Allows to control how a PDF document is converted into a word processing document.
[**HtmlDocumentType**](docs/HtmlDocumentType.md) | Enum | Represents enumeration of the Html document types.
[**AntialiasingProcessingType**](docs/AntialiasingProcessingType.md) | Enum | This enum describes possible antialiasing measures during conversion
[**FontEncodingRules**](docs/FontEncodingRules.md) | Enum | This enumeration defines rules which tune encoding logic
[**FontSavingModes**](docs/FontSavingModes.md) | Enum | Enumerates modes that can be used for saving of fonts referenced in saved PDF 
[**HtmlMarkupGenerationModes**](docs/HtmlMarkupGenerationModes.md) | Enum | Sometimes specific reqirments to created HTML are present. This enum defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments. 
[**LettersPositioningMethods**](docs/LettersPositioningMethods.md) | Enum | It enumerates possible modes of positioning of letters in words in result HTML 
[**PartsEmbeddingModes**](docs/PartsEmbeddingModes.md) | Enum | This enum enumerates possible modes of embedding of files referenced in HTML It allows to control whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities 
[**RasterImagesSavingModes**](docs/RasterImagesSavingModes.md) | Enum | Converted PDF can contain raster images(.png, *.jpeg etc.) This enum defines methods of how raster images can be handled during conversion of PDF to HTML 
[**PdfAType**](docs/PdfAType.md) | Enum | Allows to specify PdfA file format.
[**CompressionType**](docs/CompressionType.md) | Enum | Used to specify the parameter value passed to a Tiff image device.
[**ColorDepth**](docs/ColorDepth.md) | Enum | Used to specify the parameter value passed to a Tiff image device.
[**ShapeType**](docs/ShapeType.md) | Enum | This enum represents shape type for the extracted images.
[**EpubRecognitionMode**](docs/EpubRecognitionMode.md) | Enum | When PDF file (that usually has fixed layout) is being converted, the conversion engine tries to perform grouping and multi-level analysis to restore the original document author's intent and produce result in flow layout. This property tunes that conversion for this or that desirable method of recognition of content. 
[**File**](docs/File.md) |  | Represents file DTO.
[**FilesResponse**](docs/FilesResponse.md) |  | 

