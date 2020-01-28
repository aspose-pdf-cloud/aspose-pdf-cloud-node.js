# Aspose.PDF Cloud
[Aspose.PDF Cloud](https://products.aspose.cloud/pdf) is a true REST API that enables you to perform a wide range of document processing operations including creation, manipulation, conversion and rendering of Pdf documents in the cloud.

Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to process documents in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights. This repository contains new generation SDKs for Aspose.PDF Cloud and examples.

These SDKs are now fully supported. If you have any questions, see any bugs or have enhancement request, feel free to reach out to us at [Free Support Forums](https://forum.aspose.cloud/c/pdf).

Check Aspose.PDF API quality online with PDF Viewer https://products.aspose.app/pdf/viewer.

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

All URIs are relative to *https://api.aspose.cloud/v3.0/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PdfApi* | [**copyFile**](docs/PdfApi.md#copyFile) | **PUT** /pdf/storage/file/copy/\{srcPath} | Copy file
*PdfApi* | [**copyFolder**](docs/PdfApi.md#copyFolder) | **PUT** /pdf/storage/folder/copy/\{srcPath} | Copy folder
*PdfApi* | [**createFolder**](docs/PdfApi.md#createFolder) | **PUT** /pdf/storage/folder/\{path} | Create the folder
*PdfApi* | [**deleteAnnotation**](docs/PdfApi.md#deleteAnnotation) | **DELETE** /pdf/\{name}/annotations/\{annotationId} | Delete document annotation by ID
*PdfApi* | [**deleteBookmark**](docs/PdfApi.md#deleteBookmark) | **DELETE** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Delete document bookmark by ID.
*PdfApi* | [**deleteDocumentAnnotations**](docs/PdfApi.md#deleteDocumentAnnotations) | **DELETE** /pdf/\{name}/annotations | Delete all annotations from the document
*PdfApi* | [**deleteDocumentBookmarks**](docs/PdfApi.md#deleteDocumentBookmarks) | **DELETE** /pdf/\{name}/bookmarks/tree | Delete all document bookmarks.
*PdfApi* | [**deleteDocumentLinkAnnotations**](docs/PdfApi.md#deleteDocumentLinkAnnotations) | **DELETE** /pdf/\{name}/links | Delete all link annotations from the document
*PdfApi* | [**deleteDocumentStamps**](docs/PdfApi.md#deleteDocumentStamps) | **DELETE** /pdf/\{name}/stamps | Delete all stamps from the document
*PdfApi* | [**deleteDocumentTables**](docs/PdfApi.md#deleteDocumentTables) | **DELETE** /pdf/\{name}/tables | Delete all tables from the document
*PdfApi* | [**deleteField**](docs/PdfApi.md#deleteField) | **DELETE** /pdf/\{name}/fields/\{fieldName} | Delete document field by name.
*PdfApi* | [**deleteFile**](docs/PdfApi.md#deleteFile) | **DELETE** /pdf/storage/file/\{path} | Delete file
*PdfApi* | [**deleteFolder**](docs/PdfApi.md#deleteFolder) | **DELETE** /pdf/storage/folder/\{path} | Delete folder
*PdfApi* | [**deleteImage**](docs/PdfApi.md#deleteImage) | **DELETE** /pdf/\{name}/images/\{imageId} | Delete image from document page.
*PdfApi* | [**deleteLinkAnnotation**](docs/PdfApi.md#deleteLinkAnnotation) | **DELETE** /pdf/\{name}/links/\{linkId} | Delete document page link annotation by ID
*PdfApi* | [**deletePage**](docs/PdfApi.md#deletePage) | **DELETE** /pdf/\{name}/pages/\{pageNumber} | Delete document page by its number.
*PdfApi* | [**deletePageAnnotations**](docs/PdfApi.md#deletePageAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/annotations | Delete all annotations from the page
*PdfApi* | [**deletePageLinkAnnotations**](docs/PdfApi.md#deletePageLinkAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/links | Delete all link annotations from the page
*PdfApi* | [**deletePageStamps**](docs/PdfApi.md#deletePageStamps) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/stamps | Delete all stamps from the page
*PdfApi* | [**deletePageTables**](docs/PdfApi.md#deletePageTables) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/tables | Delete all tables from the page
*PdfApi* | [**deleteProperties**](docs/PdfApi.md#deleteProperties) | **DELETE** /pdf/\{name}/documentproperties | Delete custom document properties.
*PdfApi* | [**deleteProperty**](docs/PdfApi.md#deleteProperty) | **DELETE** /pdf/\{name}/documentproperties/\{propertyName} | Delete document property.
*PdfApi* | [**deleteStamp**](docs/PdfApi.md#deleteStamp) | **DELETE** /pdf/\{name}/stamps/\{stampId} | Delete document stamp by ID
*PdfApi* | [**deleteTable**](docs/PdfApi.md#deleteTable) | **DELETE** /pdf/\{name}/tables/\{tableId} | Delete document table by ID
*PdfApi* | [**downloadFile**](docs/PdfApi.md#downloadFile) | **GET** /pdf/storage/file/\{path} | Download file
*PdfApi* | [**getBookmark**](docs/PdfApi.md#getBookmark) | **GET** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Read document bookmark.
*PdfApi* | [**getBookmarks**](docs/PdfApi.md#getBookmarks) | **GET** /pdf/\{name}/bookmarks/list/\{bookmarkPath} | Read document bookmarks node list.
*PdfApi* | [**getCaretAnnotation**](docs/PdfApi.md#getCaretAnnotation) | **GET** /pdf/\{name}/annotations/caret/\{annotationId} | Read document page caret annotation by ID.
*PdfApi* | [**getCheckBoxField**](docs/PdfApi.md#getCheckBoxField) | **GET** /pdf/\{name}/fields/checkbox/\{fieldName} | Read document checkbox field by name.
*PdfApi* | [**getCircleAnnotation**](docs/PdfApi.md#getCircleAnnotation) | **GET** /pdf/\{name}/annotations/circle/\{annotationId} | Read document page circle annotation by ID.
*PdfApi* | [**getComboBoxField**](docs/PdfApi.md#getComboBoxField) | **GET** /pdf/\{name}/fields/combobox/\{fieldName} | Read document combobox field by name.
*PdfApi* | [**getDiscUsage**](docs/PdfApi.md#getDiscUsage) | **GET** /pdf/storage/disc | Get disc usage
*PdfApi* | [**getDocument**](docs/PdfApi.md#getDocument) | **GET** /pdf/\{name} | Read common document info.
*PdfApi* | [**getDocumentAnnotations**](docs/PdfApi.md#getDocumentAnnotations) | **GET** /pdf/\{name}/annotations | Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**getDocumentAttachmentByIndex**](docs/PdfApi.md#getDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex} | Read document attachment info by its index.
*PdfApi* | [**getDocumentAttachments**](docs/PdfApi.md#getDocumentAttachments) | **GET** /pdf/\{name}/attachments | Read document attachments info.
*PdfApi* | [**getDocumentBookmarks**](docs/PdfApi.md#getDocumentBookmarks) | **GET** /pdf/\{name}/bookmarks/tree | Read document bookmarks tree.
*PdfApi* | [**getDocumentCaretAnnotations**](docs/PdfApi.md#getDocumentCaretAnnotations) | **GET** /pdf/\{name}/annotations/caret | Read document caret annotations.
*PdfApi* | [**getDocumentCheckBoxFields**](docs/PdfApi.md#getDocumentCheckBoxFields) | **GET** /pdf/\{name}/fields/checkbox | Read document checkbox fields.
*PdfApi* | [**getDocumentCircleAnnotations**](docs/PdfApi.md#getDocumentCircleAnnotations) | **GET** /pdf/\{name}/annotations/circle | Read document circle annotations.
*PdfApi* | [**getDocumentComboBoxFields**](docs/PdfApi.md#getDocumentComboBoxFields) | **GET** /pdf/\{name}/fields/combobox | Read document combobox fields.
*PdfApi* | [**getDocumentDisplayProperties**](docs/PdfApi.md#getDocumentDisplayProperties) | **GET** /pdf/\{name}/displayproperties | Read document display properties.
*PdfApi* | [**getDocumentFileAttachmentAnnotations**](docs/PdfApi.md#getDocumentFileAttachmentAnnotations) | **GET** /pdf/\{name}/annotations/fileattachment | Read document FileAttachment annotations.
*PdfApi* | [**getDocumentFreeTextAnnotations**](docs/PdfApi.md#getDocumentFreeTextAnnotations) | **GET** /pdf/\{name}/annotations/freetext | Read document free text annotations.
*PdfApi* | [**getDocumentHighlightAnnotations**](docs/PdfApi.md#getDocumentHighlightAnnotations) | **GET** /pdf/\{name}/annotations/highlight | Read document highlight annotations.
*PdfApi* | [**getDocumentInkAnnotations**](docs/PdfApi.md#getDocumentInkAnnotations) | **GET** /pdf/\{name}/annotations/ink | Read document ink annotations.
*PdfApi* | [**getDocumentLineAnnotations**](docs/PdfApi.md#getDocumentLineAnnotations) | **GET** /pdf/\{name}/annotations/line | Read document line annotations.
*PdfApi* | [**getDocumentListBoxFields**](docs/PdfApi.md#getDocumentListBoxFields) | **GET** /pdf/\{name}/fields/listbox | Read document listbox fields.
*PdfApi* | [**getDocumentMovieAnnotations**](docs/PdfApi.md#getDocumentMovieAnnotations) | **GET** /pdf/\{name}/annotations/movie | Read document movie annotations.
*PdfApi* | [**getDocumentPolygonAnnotations**](docs/PdfApi.md#getDocumentPolygonAnnotations) | **GET** /pdf/\{name}/annotations/polygon | Read document polygon annotations.
*PdfApi* | [**getDocumentPolyLineAnnotations**](docs/PdfApi.md#getDocumentPolyLineAnnotations) | **GET** /pdf/\{name}/annotations/polyline | Read document polyline annotations.
*PdfApi* | [**getDocumentPopupAnnotations**](docs/PdfApi.md#getDocumentPopupAnnotations) | **GET** /pdf/\{name}/annotations/popup | Read document popup annotations.
*PdfApi* | [**getDocumentPopupAnnotationsByParent**](docs/PdfApi.md#getDocumentPopupAnnotationsByParent) | **GET** /pdf/\{name}/annotations/\{annotationId}/popup | Read document popup annotations by parent id.
*PdfApi* | [**getDocumentProperties**](docs/PdfApi.md#getDocumentProperties) | **GET** /pdf/\{name}/documentproperties | Read document properties.
*PdfApi* | [**getDocumentProperty**](docs/PdfApi.md#getDocumentProperty) | **GET** /pdf/\{name}/documentproperties/\{propertyName} | Read document property by name.
*PdfApi* | [**getDocumentRadioButtonFields**](docs/PdfApi.md#getDocumentRadioButtonFields) | **GET** /pdf/\{name}/fields/radiobutton | Read document radiobutton fields.
*PdfApi* | [**getDocumentRedactionAnnotations**](docs/PdfApi.md#getDocumentRedactionAnnotations) | **GET** /pdf/\{name}/annotations/redaction | Read document redaction annotations.
*PdfApi* | [**getDocumentScreenAnnotations**](docs/PdfApi.md#getDocumentScreenAnnotations) | **GET** /pdf/\{name}/annotations/screen | Read document screen annotations.
*PdfApi* | [**getDocumentSignatureFields**](docs/PdfApi.md#getDocumentSignatureFields) | **GET** /pdf/\{name}/fields/signature | Read document signature fields.
*PdfApi* | [**getDocumentSoundAnnotations**](docs/PdfApi.md#getDocumentSoundAnnotations) | **GET** /pdf/\{name}/annotations/sound | Read document sound annotations.
*PdfApi* | [**getDocumentSquareAnnotations**](docs/PdfApi.md#getDocumentSquareAnnotations) | **GET** /pdf/\{name}/annotations/square | Read document square annotations.
*PdfApi* | [**getDocumentSquigglyAnnotations**](docs/PdfApi.md#getDocumentSquigglyAnnotations) | **GET** /pdf/\{name}/annotations/squiggly | Read document squiggly annotations.
*PdfApi* | [**getDocumentStampAnnotations**](docs/PdfApi.md#getDocumentStampAnnotations) | **GET** /pdf/\{name}/annotations/stamp | Read document stamp annotations.
*PdfApi* | [**getDocumentStamps**](docs/PdfApi.md#getDocumentStamps) | **GET** /pdf/\{name}/stamps | Read document stamps.
*PdfApi* | [**getDocumentStrikeOutAnnotations**](docs/PdfApi.md#getDocumentStrikeOutAnnotations) | **GET** /pdf/\{name}/annotations/strikeout | Read document StrikeOut annotations.
*PdfApi* | [**getDocumentTables**](docs/PdfApi.md#getDocumentTables) | **GET** /pdf/\{name}/tables | Read document tables.
*PdfApi* | [**getDocumentTextAnnotations**](docs/PdfApi.md#getDocumentTextAnnotations) | **GET** /pdf/\{name}/annotations/text | Read document text annotations.
*PdfApi* | [**getDocumentTextBoxFields**](docs/PdfApi.md#getDocumentTextBoxFields) | **GET** /pdf/\{name}/fields/textbox | Read document text box fields.
*PdfApi* | [**getDocumentUnderlineAnnotations**](docs/PdfApi.md#getDocumentUnderlineAnnotations) | **GET** /pdf/\{name}/annotations/underline | Read document underline annotations.
*PdfApi* | [**getDownloadDocumentAttachmentByIndex**](docs/PdfApi.md#getDownloadDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex}/download | Download document attachment content by its index.
*PdfApi* | [**getEpubInStorageToPdf**](docs/PdfApi.md#getEpubInStorageToPdf) | **GET** /pdf/create/epub | Convert EPUB file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getExportFieldsFromPdfToFdfInStorage**](docs/PdfApi.md#getExportFieldsFromPdfToFdfInStorage) | **GET** /pdf/\{name}/export/fdf | Export fields from from PDF in storage to FDF file.
*PdfApi* | [**getExportFieldsFromPdfToXfdfInStorage**](docs/PdfApi.md#getExportFieldsFromPdfToXfdfInStorage) | **GET** /pdf/\{name}/export/xfdf | Export fields from from PDF in storage to XFDF file.
*PdfApi* | [**getExportFieldsFromPdfToXmlInStorage**](docs/PdfApi.md#getExportFieldsFromPdfToXmlInStorage) | **GET** /pdf/\{name}/export/xml | Export fields from from PDF in storage to XML file.
*PdfApi* | [**getField**](docs/PdfApi.md#getField) | **GET** /pdf/\{name}/fields/\{fieldName} | Get document field by name.
*PdfApi* | [**getFields**](docs/PdfApi.md#getFields) | **GET** /pdf/\{name}/fields | Get document fields.
*PdfApi* | [**getFileAttachmentAnnotation**](docs/PdfApi.md#getFileAttachmentAnnotation) | **GET** /pdf/\{name}/annotations/fileattachment/\{annotationId} | Read document page FileAttachment annotation by ID.
*PdfApi* | [**getFileAttachmentAnnotationData**](docs/PdfApi.md#getFileAttachmentAnnotationData) | **GET** /pdf/\{name}/annotations/fileattachment/\{annotationId}/data | Read document page FileAttachment annotation by ID.
*PdfApi* | [**getFilesList**](docs/PdfApi.md#getFilesList) | **GET** /pdf/storage/folder/\{path} | Get all files and folders within a folder
*PdfApi* | [**getFileVersions**](docs/PdfApi.md#getFileVersions) | **GET** /pdf/storage/version/\{path} | Get file versions
*PdfApi* | [**getFreeTextAnnotation**](docs/PdfApi.md#getFreeTextAnnotation) | **GET** /pdf/\{name}/annotations/freetext/\{annotationId} | Read document page free text annotation by ID.
*PdfApi* | [**getHighlightAnnotation**](docs/PdfApi.md#getHighlightAnnotation) | **GET** /pdf/\{name}/annotations/highlight/\{annotationId} | Read document page highlight annotation by ID.
*PdfApi* | [**getHtmlInStorageToPdf**](docs/PdfApi.md#getHtmlInStorageToPdf) | **GET** /pdf/create/html | Convert HTML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getImage**](docs/PdfApi.md#getImage) | **GET** /pdf/\{name}/images/\{imageId} | Read document image by ID.
*PdfApi* | [**getImageExtractAsGif**](docs/PdfApi.md#getImageExtractAsGif) | **GET** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format
*PdfApi* | [**getImageExtractAsJpeg**](docs/PdfApi.md#getImageExtractAsJpeg) | **GET** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format
*PdfApi* | [**getImageExtractAsPng**](docs/PdfApi.md#getImageExtractAsPng) | **GET** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format
*PdfApi* | [**getImageExtractAsTiff**](docs/PdfApi.md#getImageExtractAsTiff) | **GET** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format
*PdfApi* | [**getImages**](docs/PdfApi.md#getImages) | **GET** /pdf/\{name}/pages/\{pageNumber}/images | Read document images.
*PdfApi* | [**getImportFieldsFromFdfInStorage**](docs/PdfApi.md#getImportFieldsFromFdfInStorage) | **GET** /pdf/\{name}/import/fdf | Update fields from FDF file in storage.
*PdfApi* | [**getImportFieldsFromXfdfInStorage**](docs/PdfApi.md#getImportFieldsFromXfdfInStorage) | **GET** /pdf/\{name}/import/xfdf | Update fields from XFDF file in storage.
*PdfApi* | [**getImportFieldsFromXmlInStorage**](docs/PdfApi.md#getImportFieldsFromXmlInStorage) | **GET** /pdf/\{name}/import/xml | Import from XML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getInkAnnotation**](docs/PdfApi.md#getInkAnnotation) | **GET** /pdf/\{name}/annotations/ink/\{annotationId} | Read document page ink annotation by ID.
*PdfApi* | [**getLaTeXInStorageToPdf**](docs/PdfApi.md#getLaTeXInStorageToPdf) | **GET** /pdf/create/latex | Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getLineAnnotation**](docs/PdfApi.md#getLineAnnotation) | **GET** /pdf/\{name}/annotations/line/\{annotationId} | Read document page line annotation by ID.
*PdfApi* | [**getLinkAnnotation**](docs/PdfApi.md#getLinkAnnotation) | **GET** /pdf/\{name}/links/\{linkId} | Read document link annotation by ID.
*PdfApi* | [**getListBoxField**](docs/PdfApi.md#getListBoxField) | **GET** /pdf/\{name}/fields/listbox/\{fieldName} | Read document listbox field by name.
*PdfApi* | [**getMarkdownInStorageToPdf**](docs/PdfApi.md#getMarkdownInStorageToPdf) | **GET** /pdf/create/markdown | Convert MD file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getMhtInStorageToPdf**](docs/PdfApi.md#getMhtInStorageToPdf) | **GET** /pdf/create/mht | Convert MHT file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getMovieAnnotation**](docs/PdfApi.md#getMovieAnnotation) | **GET** /pdf/\{name}/annotations/movie/\{annotationId} | Read document page movie annotation by ID.
*PdfApi* | [**getPage**](docs/PdfApi.md#getPage) | **GET** /pdf/\{name}/pages/\{pageNumber} | Read document page info.
*PdfApi* | [**getPageAnnotations**](docs/PdfApi.md#getPageAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations | Read document page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**getPageCaretAnnotations**](docs/PdfApi.md#getPageCaretAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/caret | Read document page caret annotations.
*PdfApi* | [**getPageCheckBoxFields**](docs/PdfApi.md#getPageCheckBoxFields) | **GET** /pdf/\{name}/page/\{pageNumber}/fields/checkbox | Read document page checkbox fields.
*PdfApi* | [**getPageCircleAnnotations**](docs/PdfApi.md#getPageCircleAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Read document page circle annotations.
*PdfApi* | [**getPageComboBoxFields**](docs/PdfApi.md#getPageComboBoxFields) | **GET** /pdf/\{name}/page/\{pageNumber}/fields/combobox | Read document page combobox fields.
*PdfApi* | [**getPageConvertToBmp**](docs/PdfApi.md#getPageConvertToBmp) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to Bmp image and return resulting file in response.
*PdfApi* | [**getPageConvertToEmf**](docs/PdfApi.md#getPageConvertToEmf) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to Emf image and return resulting file in response.
*PdfApi* | [**getPageConvertToGif**](docs/PdfApi.md#getPageConvertToGif) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to Gif image and return resulting file in response.
*PdfApi* | [**getPageConvertToJpeg**](docs/PdfApi.md#getPageConvertToJpeg) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and return resulting file in response.
*PdfApi* | [**getPageConvertToPng**](docs/PdfApi.md#getPageConvertToPng) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to Png image and return resulting file in response.
*PdfApi* | [**getPageConvertToTiff**](docs/PdfApi.md#getPageConvertToTiff) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and return resulting file in response.
*PdfApi* | [**getPageFileAttachmentAnnotations**](docs/PdfApi.md#getPageFileAttachmentAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/fileattachment | Read document page FileAttachment annotations.
*PdfApi* | [**getPageFreeTextAnnotations**](docs/PdfApi.md#getPageFreeTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Read document page free text annotations.
*PdfApi* | [**getPageHighlightAnnotations**](docs/PdfApi.md#getPageHighlightAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/highlight | Read document page highlight annotations.
*PdfApi* | [**getPageInkAnnotations**](docs/PdfApi.md#getPageInkAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/ink | Read document page ink annotations.
*PdfApi* | [**getPageLineAnnotations**](docs/PdfApi.md#getPageLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Read document page line annotations.
*PdfApi* | [**getPageLinkAnnotation**](docs/PdfApi.md#getPageLinkAnnotation) | **GET** /pdf/\{name}/pages/\{pageNumber}/links/\{linkId} | Read document page link annotation by ID.
*PdfApi* | [**getPageLinkAnnotations**](docs/PdfApi.md#getPageLinkAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/links | Read document page link annotations.
*PdfApi* | [**getPageListBoxFields**](docs/PdfApi.md#getPageListBoxFields) | **GET** /pdf/\{name}/page/\{pageNumber}/fields/listbox | Read document page listbox fields.
*PdfApi* | [**getPageMovieAnnotations**](docs/PdfApi.md#getPageMovieAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/movie | Read document page movie annotations.
*PdfApi* | [**getPagePolygonAnnotations**](docs/PdfApi.md#getPagePolygonAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Read document page polygon annotations.
*PdfApi* | [**getPagePolyLineAnnotations**](docs/PdfApi.md#getPagePolyLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Read document page polyline annotations.
*PdfApi* | [**getPagePopupAnnotations**](docs/PdfApi.md#getPagePopupAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/popup | Read document page popup annotations.
*PdfApi* | [**getPageRadioButtonFields**](docs/PdfApi.md#getPageRadioButtonFields) | **GET** /pdf/\{name}/page/\{pageNumber}/fields/radiobutton | Read document page radiobutton fields.
*PdfApi* | [**getPageRedactionAnnotations**](docs/PdfApi.md#getPageRedactionAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/redaction | Read document page redaction annotations.
*PdfApi* | [**getPages**](docs/PdfApi.md#getPages) | **GET** /pdf/\{name}/pages | Read document pages info.
*PdfApi* | [**getPageScreenAnnotations**](docs/PdfApi.md#getPageScreenAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/screen | Read document page screen annotations.
*PdfApi* | [**getPageSignatureFields**](docs/PdfApi.md#getPageSignatureFields) | **GET** /pdf/\{name}/page/\{pageNumber}/fields/signature | Read document page signature fields.
*PdfApi* | [**getPageSoundAnnotations**](docs/PdfApi.md#getPageSoundAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/sound | Read document page sound annotations.
*PdfApi* | [**getPageSquareAnnotations**](docs/PdfApi.md#getPageSquareAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Read document page square annotations.
*PdfApi* | [**getPageSquigglyAnnotations**](docs/PdfApi.md#getPageSquigglyAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/squiggly | Read document page squiggly annotations.
*PdfApi* | [**getPageStampAnnotations**](docs/PdfApi.md#getPageStampAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/stamp | Read document page stamp annotations.
*PdfApi* | [**getPageStamps**](docs/PdfApi.md#getPageStamps) | **GET** /pdf/\{name}/pages/\{pageNumber}/stamps | Read page document stamps.
*PdfApi* | [**getPageStrikeOutAnnotations**](docs/PdfApi.md#getPageStrikeOutAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/strikeout | Read document page StrikeOut annotations.
*PdfApi* | [**getPageTables**](docs/PdfApi.md#getPageTables) | **GET** /pdf/\{name}/pages/\{pageNumber}/tables | Read document page tables.
*PdfApi* | [**getPageText**](docs/PdfApi.md#getPageText) | **GET** /pdf/\{name}/pages/\{pageNumber}/text | Read page text items.
*PdfApi* | [**getPageTextAnnotations**](docs/PdfApi.md#getPageTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Read document page text annotations.
*PdfApi* | [**getPageTextBoxFields**](docs/PdfApi.md#getPageTextBoxFields) | **GET** /pdf/\{name}/page/\{pageNumber}/fields/textbox | Read document page text box fields.
*PdfApi* | [**getPageUnderlineAnnotations**](docs/PdfApi.md#getPageUnderlineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/underline | Read document page underline annotations.
*PdfApi* | [**getPclInStorageToPdf**](docs/PdfApi.md#getPclInStorageToPdf) | **GET** /pdf/create/pcl | Convert PCL file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getPdfInStorageToDoc**](docs/PdfApi.md#getPdfInStorageToDoc) | **GET** /pdf/\{name}/convert/doc | Converts PDF document (located on storage) to DOC format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToEpub**](docs/PdfApi.md#getPdfInStorageToEpub) | **GET** /pdf/\{name}/convert/epub | Converts PDF document (located on storage) to EPUB format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToHtml**](docs/PdfApi.md#getPdfInStorageToHtml) | **GET** /pdf/\{name}/convert/html | Converts PDF document (located on storage) to Html format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToLaTeX**](docs/PdfApi.md#getPdfInStorageToLaTeX) | **GET** /pdf/\{name}/convert/latex | Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToMobiXml**](docs/PdfApi.md#getPdfInStorageToMobiXml) | **GET** /pdf/\{name}/convert/mobixml | Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToPdfA**](docs/PdfApi.md#getPdfInStorageToPdfA) | **GET** /pdf/\{name}/convert/pdfa | Converts PDF document (located on storage) to PdfA format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToPptx**](docs/PdfApi.md#getPdfInStorageToPptx) | **GET** /pdf/\{name}/convert/pptx | Converts PDF document (located on storage) to PPTX format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToSvg**](docs/PdfApi.md#getPdfInStorageToSvg) | **GET** /pdf/\{name}/convert/svg | Converts PDF document (located on storage) to SVG format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToTiff**](docs/PdfApi.md#getPdfInStorageToTiff) | **GET** /pdf/\{name}/convert/tiff | Converts PDF document (located on storage) to TIFF format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXls**](docs/PdfApi.md#getPdfInStorageToXls) | **GET** /pdf/\{name}/convert/xls | Converts PDF document (located on storage) to XLS format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXlsx**](docs/PdfApi.md#getPdfInStorageToXlsx) | **GET** /pdf/\{name}/convert/xlsx | Converts PDF document (located on storage) to XLSX format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXml**](docs/PdfApi.md#getPdfInStorageToXml) | **GET** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXps**](docs/PdfApi.md#getPdfInStorageToXps) | **GET** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and returns resulting file in response content
*PdfApi* | [**getPolygonAnnotation**](docs/PdfApi.md#getPolygonAnnotation) | **GET** /pdf/\{name}/annotations/polygon/\{annotationId} | Read document page polygon annotation by ID.
*PdfApi* | [**getPolyLineAnnotation**](docs/PdfApi.md#getPolyLineAnnotation) | **GET** /pdf/\{name}/annotations/polyline/\{annotationId} | Read document page polyline annotation by ID.
*PdfApi* | [**getPopupAnnotation**](docs/PdfApi.md#getPopupAnnotation) | **GET** /pdf/\{name}/annotations/popup/\{annotationId} | Read document page popup annotation by ID.
*PdfApi* | [**getPsInStorageToPdf**](docs/PdfApi.md#getPsInStorageToPdf) | **GET** /pdf/create/ps | Convert PS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getRadioButtonField**](docs/PdfApi.md#getRadioButtonField) | **GET** /pdf/\{name}/fields/radiobutton/\{fieldName} | Read document RadioButton field by name.
*PdfApi* | [**getRedactionAnnotation**](docs/PdfApi.md#getRedactionAnnotation) | **GET** /pdf/\{name}/annotations/redaction/\{annotationId} | Read document page redaction annotation by ID.
*PdfApi* | [**getScreenAnnotation**](docs/PdfApi.md#getScreenAnnotation) | **GET** /pdf/\{name}/annotations/screen/\{annotationId} | Read document page screen annotation by ID.
*PdfApi* | [**getScreenAnnotationData**](docs/PdfApi.md#getScreenAnnotationData) | **GET** /pdf/\{name}/annotations/screen/\{annotationId}/data | Read document page screen annotation by ID.
*PdfApi* | [**getSignatureField**](docs/PdfApi.md#getSignatureField) | **GET** /pdf/\{name}/fields/signature/\{fieldName} | Read document signature field by name.
*PdfApi* | [**getSoundAnnotation**](docs/PdfApi.md#getSoundAnnotation) | **GET** /pdf/\{name}/annotations/sound/\{annotationId} | Read document page sound annotation by ID.
*PdfApi* | [**getSoundAnnotationData**](docs/PdfApi.md#getSoundAnnotationData) | **GET** /pdf/\{name}/annotations/sound/\{annotationId}/data | Read document page sound annotation by ID.
*PdfApi* | [**getSquareAnnotation**](docs/PdfApi.md#getSquareAnnotation) | **GET** /pdf/\{name}/annotations/square/\{annotationId} | Read document page square annotation by ID.
*PdfApi* | [**getSquigglyAnnotation**](docs/PdfApi.md#getSquigglyAnnotation) | **GET** /pdf/\{name}/annotations/squiggly/\{annotationId} | Read document page squiggly annotation by ID.
*PdfApi* | [**getStampAnnotation**](docs/PdfApi.md#getStampAnnotation) | **GET** /pdf/\{name}/annotations/stamp/\{annotationId} | Read document page stamp annotation by ID.
*PdfApi* | [**getStampAnnotationData**](docs/PdfApi.md#getStampAnnotationData) | **GET** /pdf/\{name}/annotations/stamp/\{annotationId}/data | Read document page stamp annotation by ID.
*PdfApi* | [**getStrikeOutAnnotation**](docs/PdfApi.md#getStrikeOutAnnotation) | **GET** /pdf/\{name}/annotations/strikeout/\{annotationId} | Read document page StrikeOut annotation by ID.
*PdfApi* | [**getSvgInStorageToPdf**](docs/PdfApi.md#getSvgInStorageToPdf) | **GET** /pdf/create/svg | Convert SVG file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getTable**](docs/PdfApi.md#getTable) | **GET** /pdf/\{name}/tables/\{tableId} | Read document page table by ID.
*PdfApi* | [**getText**](docs/PdfApi.md#getText) | **GET** /pdf/\{name}/text | Read document text.
*PdfApi* | [**getTextAnnotation**](docs/PdfApi.md#getTextAnnotation) | **GET** /pdf/\{name}/annotations/text/\{annotationId} | Read document page text annotation by ID.
*PdfApi* | [**getTextBoxField**](docs/PdfApi.md#getTextBoxField) | **GET** /pdf/\{name}/fields/textbox/\{fieldName} | Read document text box field by name.
*PdfApi* | [**getUnderlineAnnotation**](docs/PdfApi.md#getUnderlineAnnotation) | **GET** /pdf/\{name}/annotations/underline/\{annotationId} | Read document page underline annotation by ID.
*PdfApi* | [**getVerifySignature**](docs/PdfApi.md#getVerifySignature) | **GET** /pdf/\{name}/verifySignature | Verify signature document.
*PdfApi* | [**getWebInStorageToPdf**](docs/PdfApi.md#getWebInStorageToPdf) | **GET** /pdf/create/web | Convert web page to PDF format and return resulting file in response. 
*PdfApi* | [**getWordsPerPage**](docs/PdfApi.md#getWordsPerPage) | **GET** /pdf/\{name}/pages/wordCount | Get number of words per document page.
*PdfApi* | [**getXfaPdfInStorageToAcroForm**](docs/PdfApi.md#getXfaPdfInStorageToAcroForm) | **GET** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content
*PdfApi* | [**getXmlInStorageToPdf**](docs/PdfApi.md#getXmlInStorageToPdf) | **GET** /pdf/create/xml | Convert XML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getXpsInStorageToPdf**](docs/PdfApi.md#getXpsInStorageToPdf) | **GET** /pdf/create/xps | Convert XPS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getXslFoInStorageToPdf**](docs/PdfApi.md#getXslFoInStorageToPdf) | **GET** /pdf/create/xslfo | Convert XslFo file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**moveFile**](docs/PdfApi.md#moveFile) | **PUT** /pdf/storage/file/move/\{srcPath} | Move file
*PdfApi* | [**moveFolder**](docs/PdfApi.md#moveFolder) | **PUT** /pdf/storage/folder/move/\{srcPath} | Move folder
*PdfApi* | [**objectExists**](docs/PdfApi.md#objectExists) | **GET** /pdf/storage/exist/\{path} | Check if file or folder exists
*PdfApi* | [**postAppendDocument**](docs/PdfApi.md#postAppendDocument) | **POST** /pdf/\{name}/appendDocument | Append document to existing one.
*PdfApi* | [**postBookmark**](docs/PdfApi.md#postBookmark) | **POST** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Add document bookmarks.
*PdfApi* | [**postChangePasswordDocumentInStorage**](docs/PdfApi.md#postChangePasswordDocumentInStorage) | **POST** /pdf/\{name}/changepassword | Change document password in storage.
*PdfApi* | [**postCheckBoxFields**](docs/PdfApi.md#postCheckBoxFields) | **POST** /pdf/\{name}/fields/checkbox | Add document checkbox fields.
*PdfApi* | [**postComboBoxFields**](docs/PdfApi.md#postComboBoxFields) | **POST** /pdf/\{name}/fields/combobox | Add document combobox fields.
*PdfApi* | [**postCreateDocument**](docs/PdfApi.md#postCreateDocument) | **POST** /pdf/\{name} | Create empty document.
*PdfApi* | [**postCreateField**](docs/PdfApi.md#postCreateField) | **POST** /pdf/\{name}/fields | Create field.
*PdfApi* | [**postDecryptDocumentInStorage**](docs/PdfApi.md#postDecryptDocumentInStorage) | **POST** /pdf/\{name}/decrypt | Decrypt document in storage.
*PdfApi* | [**postDocumentImageFooter**](docs/PdfApi.md#postDocumentImageFooter) | **POST** /pdf/\{name}/footer/image | Add document image footer.
*PdfApi* | [**postDocumentImageHeader**](docs/PdfApi.md#postDocumentImageHeader) | **POST** /pdf/\{name}/header/image | Add document image header.
*PdfApi* | [**postDocumentPageNumberStamps**](docs/PdfApi.md#postDocumentPageNumberStamps) | **POST** /pdf/\{name}/stamps/pagenumber | Add document page number stamps.
*PdfApi* | [**postDocumentTextFooter**](docs/PdfApi.md#postDocumentTextFooter) | **POST** /pdf/\{name}/footer/text | Add document text footer.
*PdfApi* | [**postDocumentTextHeader**](docs/PdfApi.md#postDocumentTextHeader) | **POST** /pdf/\{name}/header/text | Add document text header.
*PdfApi* | [**postDocumentTextReplace**](docs/PdfApi.md#postDocumentTextReplace) | **POST** /pdf/\{name}/text/replace | Document's replace text method.
*PdfApi* | [**postEncryptDocumentInStorage**](docs/PdfApi.md#postEncryptDocumentInStorage) | **POST** /pdf/\{name}/encrypt | Encrypt document in storage.
*PdfApi* | [**postFlattenDocument**](docs/PdfApi.md#postFlattenDocument) | **POST** /pdf/\{name}/flatten | Flatten the document.
*PdfApi* | [**postImportFieldsFromFdf**](docs/PdfApi.md#postImportFieldsFromFdf) | **POST** /pdf/\{name}/import/fdf | Update fields from FDF file in request.
*PdfApi* | [**postImportFieldsFromXfdf**](docs/PdfApi.md#postImportFieldsFromXfdf) | **POST** /pdf/\{name}/import/xfdf | Update fields from XFDF file in request.
*PdfApi* | [**postImportFieldsFromXml**](docs/PdfApi.md#postImportFieldsFromXml) | **POST** /pdf/\{name}/import/xml | Update fields from XML file in request.
*PdfApi* | [**postInsertImage**](docs/PdfApi.md#postInsertImage) | **POST** /pdf/\{name}/pages/\{pageNumber}/images | Insert image to document page.
*PdfApi* | [**postListBoxFields**](docs/PdfApi.md#postListBoxFields) | **POST** /pdf/\{name}/fields/listbox | Add document listbox fields.
*PdfApi* | [**postMovePage**](docs/PdfApi.md#postMovePage) | **POST** /pdf/\{name}/pages/\{pageNumber}/movePage | Move page to new position.
*PdfApi* | [**postOptimizeDocument**](docs/PdfApi.md#postOptimizeDocument) | **POST** /pdf/\{name}/optimize | Optimize document.
*PdfApi* | [**postPageCaretAnnotations**](docs/PdfApi.md#postPageCaretAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/caret | Add document page caret annotations.
*PdfApi* | [**postPageCertify**](docs/PdfApi.md#postPageCertify) | **POST** /pdf/\{name}/pages/\{pageNumber}/certify | Certify document page.
*PdfApi* | [**postPageCircleAnnotations**](docs/PdfApi.md#postPageCircleAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Add document page circle annotations.
*PdfApi* | [**postPageFileAttachmentAnnotations**](docs/PdfApi.md#postPageFileAttachmentAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/fileattachment | Add document page FileAttachment annotations.
*PdfApi* | [**postPageFreeTextAnnotations**](docs/PdfApi.md#postPageFreeTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Add document page free text annotations.
*PdfApi* | [**postPageHighlightAnnotations**](docs/PdfApi.md#postPageHighlightAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/highlight | Add document page highlight annotations.
*PdfApi* | [**postPageImageStamps**](docs/PdfApi.md#postPageImageStamps) | **POST** /pdf/\{name}/pages/\{pageNumber}/stamps/image | Add document page image stamps.
*PdfApi* | [**postPageInkAnnotations**](docs/PdfApi.md#postPageInkAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/ink | Add document page ink annotations.
*PdfApi* | [**postPageLineAnnotations**](docs/PdfApi.md#postPageLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Add document page line annotations.
*PdfApi* | [**postPageLinkAnnotations**](docs/PdfApi.md#postPageLinkAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/links | Add document page link annotations.
*PdfApi* | [**postPageMovieAnnotations**](docs/PdfApi.md#postPageMovieAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/movie | Add document page movie annotations.
*PdfApi* | [**postPagePdfPageStamps**](docs/PdfApi.md#postPagePdfPageStamps) | **POST** /pdf/\{name}/pages/\{pageNumber}/stamps/pdfpage | Add document pdf page stamps.
*PdfApi* | [**postPagePolygonAnnotations**](docs/PdfApi.md#postPagePolygonAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Add document page polygon annotations.
*PdfApi* | [**postPagePolyLineAnnotations**](docs/PdfApi.md#postPagePolyLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Add document page polyline annotations.
*PdfApi* | [**postPageRedactionAnnotations**](docs/PdfApi.md#postPageRedactionAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/redaction | Add document page redaction annotations.
*PdfApi* | [**postPageScreenAnnotations**](docs/PdfApi.md#postPageScreenAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/screen | Add document page screen annotations.
*PdfApi* | [**postPageSoundAnnotations**](docs/PdfApi.md#postPageSoundAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/sound | Add document page sound annotations.
*PdfApi* | [**postPageSquareAnnotations**](docs/PdfApi.md#postPageSquareAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Add document page square annotations.
*PdfApi* | [**postPageSquigglyAnnotations**](docs/PdfApi.md#postPageSquigglyAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/squiggly | Add document page squiggly annotations.
*PdfApi* | [**postPageStampAnnotations**](docs/PdfApi.md#postPageStampAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/stamp | Add document page stamp annotations.
*PdfApi* | [**postPageStrikeOutAnnotations**](docs/PdfApi.md#postPageStrikeOutAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/strikeout | Add document page StrikeOut annotations.
*PdfApi* | [**postPageTables**](docs/PdfApi.md#postPageTables) | **POST** /pdf/\{name}/pages/\{pageNumber}/tables | Add document page tables.
*PdfApi* | [**postPageTextAnnotations**](docs/PdfApi.md#postPageTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Add document page text annotations.
*PdfApi* | [**postPageTextReplace**](docs/PdfApi.md#postPageTextReplace) | **POST** /pdf/\{name}/pages/\{pageNumber}/text/replace | Page's replace text method.
*PdfApi* | [**postPageTextStamps**](docs/PdfApi.md#postPageTextStamps) | **POST** /pdf/\{name}/pages/\{pageNumber}/stamps/text | Add document page text stamps.
*PdfApi* | [**postPageUnderlineAnnotations**](docs/PdfApi.md#postPageUnderlineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/underline | Add document page underline annotations.
*PdfApi* | [**postPopupAnnotation**](docs/PdfApi.md#postPopupAnnotation) | **POST** /pdf/\{name}/annotations/\{annotationId}/popup | Add document popup annotations.
*PdfApi* | [**postRadioButtonFields**](docs/PdfApi.md#postRadioButtonFields) | **POST** /pdf/\{name}/fields/radiobutton | Add document RadioButton fields.
*PdfApi* | [**postSignatureField**](docs/PdfApi.md#postSignatureField) | **POST** /pdf/\{name}/fields/signature | Add document signature field.
*PdfApi* | [**postSignDocument**](docs/PdfApi.md#postSignDocument) | **POST** /pdf/\{name}/sign | Sign document.
*PdfApi* | [**postSignPage**](docs/PdfApi.md#postSignPage) | **POST** /pdf/\{name}/pages/\{pageNumber}/sign | Sign page.
*PdfApi* | [**postSplitDocument**](docs/PdfApi.md#postSplitDocument) | **POST** /pdf/\{name}/split | Split document to parts.
*PdfApi* | [**postTextBoxFields**](docs/PdfApi.md#postTextBoxFields) | **POST** /pdf/\{name}/fields/textbox | Add document text box fields.
*PdfApi* | [**putAddNewPage**](docs/PdfApi.md#putAddNewPage) | **PUT** /pdf/\{name}/pages | Add new page to end of the document.
*PdfApi* | [**putAddText**](docs/PdfApi.md#putAddText) | **PUT** /pdf/\{name}/pages/\{pageNumber}/text | Add text to PDF document page.
*PdfApi* | [**putAnnotationsFlatten**](docs/PdfApi.md#putAnnotationsFlatten) | **PUT** /pdf/\{name}/annotations/flatten | Flattens the annotations of the specified types
*PdfApi* | [**putBookmark**](docs/PdfApi.md#putBookmark) | **PUT** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Update document bookmark.
*PdfApi* | [**putCaretAnnotation**](docs/PdfApi.md#putCaretAnnotation) | **PUT** /pdf/\{name}/annotations/caret/\{annotationId} | Replace document caret annotation
*PdfApi* | [**putChangePasswordDocument**](docs/PdfApi.md#putChangePasswordDocument) | **PUT** /pdf/changepassword | Change document password from content.
*PdfApi* | [**putCheckBoxField**](docs/PdfApi.md#putCheckBoxField) | **PUT** /pdf/\{name}/fields/checkbox/\{fieldName} | Replace document checkbox field
*PdfApi* | [**putCircleAnnotation**](docs/PdfApi.md#putCircleAnnotation) | **PUT** /pdf/\{name}/annotations/circle/\{annotationId} | Replace document circle annotation
*PdfApi* | [**putComboBoxField**](docs/PdfApi.md#putComboBoxField) | **PUT** /pdf/\{name}/fields/combobox/\{fieldName} | Replace document combobox field
*PdfApi* | [**putCreateDocument**](docs/PdfApi.md#putCreateDocument) | **PUT** /pdf/\{name} | Create empty document.
*PdfApi* | [**putDecryptDocument**](docs/PdfApi.md#putDecryptDocument) | **PUT** /pdf/decrypt | Decrypt document from content.
*PdfApi* | [**putDocumentDisplayProperties**](docs/PdfApi.md#putDocumentDisplayProperties) | **PUT** /pdf/\{name}/displayproperties | Update document display properties.
*PdfApi* | [**putEncryptDocument**](docs/PdfApi.md#putEncryptDocument) | **PUT** /pdf/encrypt | Encrypt document from content.
*PdfApi* | [**putEpubInStorageToPdf**](docs/PdfApi.md#putEpubInStorageToPdf) | **PUT** /pdf/\{name}/create/epub | Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putExportFieldsFromPdfToFdfInStorage**](docs/PdfApi.md#putExportFieldsFromPdfToFdfInStorage) | **PUT** /pdf/\{name}/export/fdf | Export fields from from PDF in storage to FDF file in storage.
*PdfApi* | [**putExportFieldsFromPdfToXfdfInStorage**](docs/PdfApi.md#putExportFieldsFromPdfToXfdfInStorage) | **PUT** /pdf/\{name}/export/xfdf | Export fields from from PDF in storage to XFDF file in storage.
*PdfApi* | [**putExportFieldsFromPdfToXmlInStorage**](docs/PdfApi.md#putExportFieldsFromPdfToXmlInStorage) | **PUT** /pdf/\{name}/export/xml | Export fields from from PDF in storage to XML file in storage.
*PdfApi* | [**putFieldsFlatten**](docs/PdfApi.md#putFieldsFlatten) | **PUT** /pdf/\{name}/fields/flatten | Flatten form fields in document.
*PdfApi* | [**putFileAttachmentAnnotation**](docs/PdfApi.md#putFileAttachmentAnnotation) | **PUT** /pdf/\{name}/annotations/fileattachment/\{annotationId} | Replace document FileAttachment annotation
*PdfApi* | [**putFileAttachmentAnnotationDataExtract**](docs/PdfApi.md#putFileAttachmentAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/fileattachment/\{annotationId}/data/extract | Extract document FileAttachment annotation content to storage
*PdfApi* | [**putFreeTextAnnotation**](docs/PdfApi.md#putFreeTextAnnotation) | **PUT** /pdf/\{name}/annotations/freetext/\{annotationId} | Replace document free text annotation
*PdfApi* | [**putHighlightAnnotation**](docs/PdfApi.md#putHighlightAnnotation) | **PUT** /pdf/\{name}/annotations/highlight/\{annotationId} | Replace document highlight annotation
*PdfApi* | [**putHtmlInStorageToPdf**](docs/PdfApi.md#putHtmlInStorageToPdf) | **PUT** /pdf/\{name}/create/html | Convert HTML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putImageExtractAsGif**](docs/PdfApi.md#putImageExtractAsGif) | **PUT** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format to folder
*PdfApi* | [**putImageExtractAsJpeg**](docs/PdfApi.md#putImageExtractAsJpeg) | **PUT** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format to folder
*PdfApi* | [**putImageExtractAsPng**](docs/PdfApi.md#putImageExtractAsPng) | **PUT** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format to folder
*PdfApi* | [**putImageExtractAsTiff**](docs/PdfApi.md#putImageExtractAsTiff) | **PUT** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format to folder
*PdfApi* | [**putImageInStorageToPdf**](docs/PdfApi.md#putImageInStorageToPdf) | **PUT** /pdf/\{name}/create/images | Convert image file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putImagesExtractAsGif**](docs/PdfApi.md#putImagesExtractAsGif) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/gif | Extract document images in GIF format to folder.
*PdfApi* | [**putImagesExtractAsJpeg**](docs/PdfApi.md#putImagesExtractAsJpeg) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/jpeg | Extract document images in JPEG format to folder.
*PdfApi* | [**putImagesExtractAsPng**](docs/PdfApi.md#putImagesExtractAsPng) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/png | Extract document images in PNG format to folder.
*PdfApi* | [**putImagesExtractAsTiff**](docs/PdfApi.md#putImagesExtractAsTiff) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/tiff | Extract document images in TIFF format to folder.
*PdfApi* | [**putImportFieldsFromFdfInStorage**](docs/PdfApi.md#putImportFieldsFromFdfInStorage) | **PUT** /pdf/\{name}/import/fdf | Update fields from FDF file in storage.
*PdfApi* | [**putImportFieldsFromXfdfInStorage**](docs/PdfApi.md#putImportFieldsFromXfdfInStorage) | **PUT** /pdf/\{name}/import/xfdf | Update fields from XFDF file in storage.
*PdfApi* | [**putImportFieldsFromXmlInStorage**](docs/PdfApi.md#putImportFieldsFromXmlInStorage) | **PUT** /pdf/\{name}/import/xml | Update fields from XML file in storage.
*PdfApi* | [**putInkAnnotation**](docs/PdfApi.md#putInkAnnotation) | **PUT** /pdf/\{name}/annotations/ink/\{annotationId} | Replace document ink annotation
*PdfApi* | [**putLaTeXInStorageToPdf**](docs/PdfApi.md#putLaTeXInStorageToPdf) | **PUT** /pdf/\{name}/create/latex | Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putLineAnnotation**](docs/PdfApi.md#putLineAnnotation) | **PUT** /pdf/\{name}/annotations/line/\{annotationId} | Replace document line annotation
*PdfApi* | [**putLinkAnnotation**](docs/PdfApi.md#putLinkAnnotation) | **PUT** /pdf/\{name}/links/\{linkId} | Replace document page link annotations
*PdfApi* | [**putListBoxField**](docs/PdfApi.md#putListBoxField) | **PUT** /pdf/\{name}/fields/listbox/\{fieldName} | Replace document listbox field
*PdfApi* | [**putMarkdownInStorageToPdf**](docs/PdfApi.md#putMarkdownInStorageToPdf) | **PUT** /pdf/\{name}/create/markdown | Convert MD file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putMergeDocuments**](docs/PdfApi.md#putMergeDocuments) | **PUT** /pdf/\{name}/merge | Merge a list of documents.
*PdfApi* | [**putMhtInStorageToPdf**](docs/PdfApi.md#putMhtInStorageToPdf) | **PUT** /pdf/\{name}/create/mht | Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putMovieAnnotation**](docs/PdfApi.md#putMovieAnnotation) | **PUT** /pdf/\{name}/annotations/movie/\{annotationId} | Replace document movie annotation
*PdfApi* | [**putPageAddStamp**](docs/PdfApi.md#putPageAddStamp) | **PUT** /pdf/\{name}/pages/\{pageNumber}/stamp | Add page stamp.
*PdfApi* | [**putPageConvertToBmp**](docs/PdfApi.md#putPageConvertToBmp) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to bmp image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToEmf**](docs/PdfApi.md#putPageConvertToEmf) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to emf image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToGif**](docs/PdfApi.md#putPageConvertToGif) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to gif image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToJpeg**](docs/PdfApi.md#putPageConvertToJpeg) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToPng**](docs/PdfApi.md#putPageConvertToPng) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to png image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToTiff**](docs/PdfApi.md#putPageConvertToTiff) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and upload resulting file to storage.
*PdfApi* | [**putPclInStorageToPdf**](docs/PdfApi.md#putPclInStorageToPdf) | **PUT** /pdf/\{name}/create/pcl | Convert PCL file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putPdfInRequestToDoc**](docs/PdfApi.md#putPdfInRequestToDoc) | **PUT** /pdf/convert/doc | Converts PDF document (in request content) to DOC format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToEpub**](docs/PdfApi.md#putPdfInRequestToEpub) | **PUT** /pdf/convert/epub | Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToHtml**](docs/PdfApi.md#putPdfInRequestToHtml) | **PUT** /pdf/convert/html | Converts PDF document (in request content) to Html format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToLaTeX**](docs/PdfApi.md#putPdfInRequestToLaTeX) | **PUT** /pdf/convert/latex | Converts PDF document (in request content) to LaTeX format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToMobiXml**](docs/PdfApi.md#putPdfInRequestToMobiXml) | **PUT** /pdf/convert/mobixml | Converts PDF document (in request content) to MOBIXML format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToPdfA**](docs/PdfApi.md#putPdfInRequestToPdfA) | **PUT** /pdf/convert/pdfa | Converts PDF document (in request content) to PdfA format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToPptx**](docs/PdfApi.md#putPdfInRequestToPptx) | **PUT** /pdf/convert/pptx | Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToSvg**](docs/PdfApi.md#putPdfInRequestToSvg) | **PUT** /pdf/convert/svg | Converts PDF document (in request content) to SVG format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToTiff**](docs/PdfApi.md#putPdfInRequestToTiff) | **PUT** /pdf/convert/tiff | Converts PDF document (in request content) to TIFF format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXls**](docs/PdfApi.md#putPdfInRequestToXls) | **PUT** /pdf/convert/xls | Converts PDF document (in request content) to XLS format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXlsx**](docs/PdfApi.md#putPdfInRequestToXlsx) | **PUT** /pdf/convert/xlsx | Converts PDF document (in request content) to XLSX format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXml**](docs/PdfApi.md#putPdfInRequestToXml) | **PUT** /pdf/convert/xml | Converts PDF document (in request content) to XML format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXps**](docs/PdfApi.md#putPdfInRequestToXps) | **PUT** /pdf/convert/xps | Converts PDF document (in request content) to XPS format and uploads resulting file to storage.
*PdfApi* | [**putPdfInStorageToDoc**](docs/PdfApi.md#putPdfInStorageToDoc) | **PUT** /pdf/\{name}/convert/doc | Converts PDF document (located on storage) to DOC format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToEpub**](docs/PdfApi.md#putPdfInStorageToEpub) | **PUT** /pdf/\{name}/convert/epub | Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToHtml**](docs/PdfApi.md#putPdfInStorageToHtml) | **PUT** /pdf/\{name}/convert/html | Converts PDF document (located on storage) to Html format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToLaTeX**](docs/PdfApi.md#putPdfInStorageToLaTeX) | **PUT** /pdf/\{name}/convert/latex | Converts PDF document (located on storage) to LaTeX format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToMobiXml**](docs/PdfApi.md#putPdfInStorageToMobiXml) | **PUT** /pdf/\{name}/convert/mobixml | Converts PDF document (located on storage) to MOBIXML format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToPdfA**](docs/PdfApi.md#putPdfInStorageToPdfA) | **PUT** /pdf/\{name}/convert/pdfa | Converts PDF document (located on storage) to PdfA format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToPptx**](docs/PdfApi.md#putPdfInStorageToPptx) | **PUT** /pdf/\{name}/convert/pptx | Converts PDF document (located on storage) to PPTX format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToSvg**](docs/PdfApi.md#putPdfInStorageToSvg) | **PUT** /pdf/\{name}/convert/svg | Converts PDF document (located on storage) to SVG format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToTiff**](docs/PdfApi.md#putPdfInStorageToTiff) | **PUT** /pdf/\{name}/convert/tiff | Converts PDF document (located on storage) to TIFF format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXls**](docs/PdfApi.md#putPdfInStorageToXls) | **PUT** /pdf/\{name}/convert/xls | Converts PDF document (located on storage) to XLS format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXlsx**](docs/PdfApi.md#putPdfInStorageToXlsx) | **PUT** /pdf/\{name}/convert/xlsx | Converts PDF document (located on storage) to XLSX format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXml**](docs/PdfApi.md#putPdfInStorageToXml) | **PUT** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXps**](docs/PdfApi.md#putPdfInStorageToXps) | **PUT** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and uploads resulting file to storage
*PdfApi* | [**putPolygonAnnotation**](docs/PdfApi.md#putPolygonAnnotation) | **PUT** /pdf/\{name}/annotations/polygon/\{annotationId} | Replace document polygon annotation
*PdfApi* | [**putPolyLineAnnotation**](docs/PdfApi.md#putPolyLineAnnotation) | **PUT** /pdf/\{name}/annotations/polyline/\{annotationId} | Replace document polyline annotation
*PdfApi* | [**putPopupAnnotation**](docs/PdfApi.md#putPopupAnnotation) | **PUT** /pdf/\{name}/annotations/popup/\{annotationId} | Replace document popup annotation
*PdfApi* | [**putPrivileges**](docs/PdfApi.md#putPrivileges) | **PUT** /pdf/\{name}/privileges | Update privilege document.
*PdfApi* | [**putPsInStorageToPdf**](docs/PdfApi.md#putPsInStorageToPdf) | **PUT** /pdf/\{name}/create/ps | Convert PS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putRadioButtonField**](docs/PdfApi.md#putRadioButtonField) | **PUT** /pdf/\{name}/fields/radiobutton/\{fieldName} | Replace document RadioButton field
*PdfApi* | [**putRedactionAnnotation**](docs/PdfApi.md#putRedactionAnnotation) | **PUT** /pdf/\{name}/annotations/redaction/\{annotationId} | Replace document redaction annotation
*PdfApi* | [**putReplaceImage**](docs/PdfApi.md#putReplaceImage) | **PUT** /pdf/\{name}/images/\{imageId} | Replace document image.
*PdfApi* | [**putScreenAnnotation**](docs/PdfApi.md#putScreenAnnotation) | **PUT** /pdf/\{name}/annotations/screen/\{annotationId} | Replace document screen annotation
*PdfApi* | [**putScreenAnnotationDataExtract**](docs/PdfApi.md#putScreenAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/screen/\{annotationId}/data/extract | Extract document screen annotation content to storage
*PdfApi* | [**putSearchableDocument**](docs/PdfApi.md#putSearchableDocument) | **PUT** /pdf/\{name}/ocr | Create searchable PDF document. Generate OCR layer for images in input PDF document.
*PdfApi* | [**putSetProperty**](docs/PdfApi.md#putSetProperty) | **PUT** /pdf/\{name}/documentproperties/\{propertyName} | Add/update document property.
*PdfApi* | [**putSignatureField**](docs/PdfApi.md#putSignatureField) | **PUT** /pdf/\{name}/fields/signature/\{fieldName} | Replace document signature field.
*PdfApi* | [**putSoundAnnotation**](docs/PdfApi.md#putSoundAnnotation) | **PUT** /pdf/\{name}/annotations/sound/\{annotationId} | Replace document sound annotation
*PdfApi* | [**putSoundAnnotationDataExtract**](docs/PdfApi.md#putSoundAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/sound/\{annotationId}/data/extract | Extract document sound annotation content to storage
*PdfApi* | [**putSquareAnnotation**](docs/PdfApi.md#putSquareAnnotation) | **PUT** /pdf/\{name}/annotations/square/\{annotationId} | Replace document square annotation
*PdfApi* | [**putSquigglyAnnotation**](docs/PdfApi.md#putSquigglyAnnotation) | **PUT** /pdf/\{name}/annotations/squiggly/\{annotationId} | Replace document squiggly annotation
*PdfApi* | [**putStampAnnotation**](docs/PdfApi.md#putStampAnnotation) | **PUT** /pdf/\{name}/annotations/stamp/\{annotationId} | Replace document stamp annotation
*PdfApi* | [**putStampAnnotationDataExtract**](docs/PdfApi.md#putStampAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/stamp/\{annotationId}/data/extract | Extract document stamp annotation content to storage
*PdfApi* | [**putStrikeOutAnnotation**](docs/PdfApi.md#putStrikeOutAnnotation) | **PUT** /pdf/\{name}/annotations/strikeout/\{annotationId} | Replace document StrikeOut annotation
*PdfApi* | [**putSvgInStorageToPdf**](docs/PdfApi.md#putSvgInStorageToPdf) | **PUT** /pdf/\{name}/create/svg | Convert SVG file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putTable**](docs/PdfApi.md#putTable) | **PUT** /pdf/\{name}/tables/\{tableId} | Replace document page table.
*PdfApi* | [**putTextAnnotation**](docs/PdfApi.md#putTextAnnotation) | **PUT** /pdf/\{name}/annotations/text/\{annotationId} | Replace document text annotation
*PdfApi* | [**putTextBoxField**](docs/PdfApi.md#putTextBoxField) | **PUT** /pdf/\{name}/fields/textbox/\{fieldName} | Replace document text box field
*PdfApi* | [**putUnderlineAnnotation**](docs/PdfApi.md#putUnderlineAnnotation) | **PUT** /pdf/\{name}/annotations/underline/\{annotationId} | Replace document underline annotation
*PdfApi* | [**putUpdateField**](docs/PdfApi.md#putUpdateField) | **PUT** /pdf/\{name}/fields/\{fieldName} | Update field.
*PdfApi* | [**putUpdateFields**](docs/PdfApi.md#putUpdateFields) | **PUT** /pdf/\{name}/fields | Update fields.
*PdfApi* | [**putWebInStorageToPdf**](docs/PdfApi.md#putWebInStorageToPdf) | **PUT** /pdf/\{name}/create/web | Convert web page to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXfaPdfInRequestToAcroForm**](docs/PdfApi.md#putXfaPdfInRequestToAcroForm) | **PUT** /pdf/convert/xfatoacroform | Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.
*PdfApi* | [**putXfaPdfInStorageToAcroForm**](docs/PdfApi.md#putXfaPdfInStorageToAcroForm) | **PUT** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage
*PdfApi* | [**putXmlInStorageToPdf**](docs/PdfApi.md#putXmlInStorageToPdf) | **PUT** /pdf/\{name}/create/xml | Convert XML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXpsInStorageToPdf**](docs/PdfApi.md#putXpsInStorageToPdf) | **PUT** /pdf/\{name}/create/xps | Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXslFoInStorageToPdf**](docs/PdfApi.md#putXslFoInStorageToPdf) | **PUT** /pdf/\{name}/create/xslfo | Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**storageExists**](docs/PdfApi.md#storageExists) | **GET** /pdf/storage/\{storageName}/exist | Check if storage exists
*PdfApi* | [**uploadFile**](docs/PdfApi.md#uploadFile) | **PUT** /pdf/storage/file/\{path} | Upload file

## Documentation for Models

Class | Description
----- | -----
[**Annotation**](docs/Annotation.md) | Provides annotation.
[**AnnotationFlags**](docs/AnnotationFlags.md) | A set of flags specifying various characteristics of the annotation.
[**AnnotationInfo**](docs/AnnotationInfo.md) | Provides annotation.
[**AnnotationsInfo**](docs/AnnotationsInfo.md) | Object representing a list of annotation info objects.
[**AnnotationsInfoResponse**](docs/AnnotationsInfoResponse.md) | Represents multiple annotations info reponse
[**AnnotationState**](docs/AnnotationState.md) | The enumeration of states to which the original annotation can be set.
[**AnnotationType**](docs/AnnotationType.md) | 
[**AntialiasingProcessingType**](docs/AntialiasingProcessingType.md) | This enum describes possible antialiasing measures during conversion
[**AsposeResponse**](docs/AsposeResponse.md) | Base class for all responses.
[**Attachment**](docs/Attachment.md) | Provides link to attachment.
[**AttachmentResponse**](docs/AttachmentResponse.md) | Represents response containing single attachment info
[**Attachments**](docs/Attachments.md) | Represents list of attachment.
[**AttachmentsResponse**](docs/AttachmentsResponse.md) | Represents response containing multiple attachments info
[**Bookmark**](docs/Bookmark.md) | Provides link to bookmark.
[**BookmarkResponse**](docs/BookmarkResponse.md) | Represents response containing single bookmark info
[**Bookmarks**](docs/Bookmarks.md) | Represents list of bookmark.
[**BookmarksResponse**](docs/BookmarksResponse.md) | Represents response containing multiple bookmarks info
[**Border**](docs/Border.md) | Class representing characteristics of annotation border.
[**BorderCornerStyle**](docs/BorderCornerStyle.md) | Enumerates the border corner styles for border.
[**BorderEffect**](docs/BorderEffect.md) | Describes effect which should be applied to the border of the annotations.
[**BorderInfo**](docs/BorderInfo.md) | This class represents border for graphics elements.
[**BorderStyle**](docs/BorderStyle.md) | Describes style of the annotation border.
[**BoxStyle**](docs/BoxStyle.md) | Represents an enumeration of available BoxStyle types.
[**CapStyle**](docs/CapStyle.md) | Style of line ending of Ink annotation line. 
[**CaptionPosition**](docs/CaptionPosition.md) | Enumeration of the annotation’s caption positioning.
[**CaretAnnotation**](docs/CaretAnnotation.md) | Provides CaretAnnotation.
[**CaretAnnotationResponse**](docs/CaretAnnotationResponse.md) | Represents response containing single caret annotation object
[**CaretAnnotations**](docs/CaretAnnotations.md) | Object representing a list of caret annotations.
[**CaretAnnotationsResponse**](docs/CaretAnnotationsResponse.md) | Represents response containing multiple caret annotation objects
[**CaretSymbol**](docs/CaretSymbol.md) | A symbol to be associated with the caret.
[**Cell**](docs/Cell.md) | Represents a cell of the table's row.
[**CellRecognized**](docs/CellRecognized.md) | 
[**CheckBoxField**](docs/CheckBoxField.md) | Provides CheckBoxField.
[**CheckBoxFieldResponse**](docs/CheckBoxFieldResponse.md) | Represents response containing single checkbox field object
[**CheckBoxFields**](docs/CheckBoxFields.md) | Object representing a list of checkbox fields.
[**CheckBoxFieldsResponse**](docs/CheckBoxFieldsResponse.md) | Represents response containing multiple checkbox field objects
[**ChoiceField**](docs/ChoiceField.md) | Provides Choice field.
[**CircleAnnotation**](docs/CircleAnnotation.md) | Provides CircleAnnotation.
[**CircleAnnotationResponse**](docs/CircleAnnotationResponse.md) | Represents response containing single circle annotation object
[**CircleAnnotations**](docs/CircleAnnotations.md) | Object representing a list of circle annotations.
[**CircleAnnotationsResponse**](docs/CircleAnnotationsResponse.md) | Represents response containing multiple circle annotation objects
[**Color**](docs/Color.md) | Represents color DTO.
[**ColorDepth**](docs/ColorDepth.md) | Used to specify the parameter value passed to a Tiff image device.
[**ColumnAdjustment**](docs/ColumnAdjustment.md) | Enumerates column adjustment types.
[**ComboBoxField**](docs/ComboBoxField.md) | Provides ComboBoxField.
[**ComboBoxFieldResponse**](docs/ComboBoxFieldResponse.md) | Represents response containing single combobox field object
[**ComboBoxFields**](docs/ComboBoxFields.md) | Object representing a list of combobox fields.
[**ComboBoxFieldsResponse**](docs/ComboBoxFieldsResponse.md) | Represents response containing multiple combobox field objects
[**CommonFigureAnnotation**](docs/CommonFigureAnnotation.md) | Provides CommonFigureAnnotation.
[**CompressionType**](docs/CompressionType.md) | Used to specify the parameter value passed to a Tiff image device.
[**CryptoAlgorithm**](docs/CryptoAlgorithm.md) | Represent type of cryptographic algorithm that used in encryption/decryption routines.
[**Dash**](docs/Dash.md) | Class representing line dash pattern.
[**DefaultPageConfig**](docs/DefaultPageConfig.md) | Provides link to DefaultPageConfig.
[**Direction**](docs/Direction.md) | Text direction.
[**DiscUsage**](docs/DiscUsage.md) | Class for disc space information.
[**DisplayProperties**](docs/DisplayProperties.md) | Provides link to DisplayProperties.
[**DisplayPropertiesResponse**](docs/DisplayPropertiesResponse.md) | Represents response containing DisplayProperties
[**DocFormat**](docs/DocFormat.md) | Allows to specify .doc or .docx file format.
[**DocMDPAccessPermissionType**](docs/DocMDPAccessPermissionType.md) | The access permissions granted for this document. Valid values are: 1 - No changes to the document are permitted; any change to the document invalidates the signature. 2 - Permitted changes are filling in forms, instantiating page templates, and signing; other changes invalidate the signature. 3 - Permitted changes are the same as for 2, as well as annotation creation, deletion, and modification; other changes invalidate the signature.
[**DocRecognitionMode**](docs/DocRecognitionMode.md) | Allows to control how a PDF document is converted into a word processing document.
[**Document**](docs/Document.md) | Represents document DTO.
[**DocumentConfig**](docs/DocumentConfig.md) | Provides link to DocumentConfig.
[**DocumentPageResponse**](docs/DocumentPageResponse.md) | Represents response containing single page info
[**DocumentPagesResponse**](docs/DocumentPagesResponse.md) | Represents response containing multiple pages info
[**DocumentPrivilege**](docs/DocumentPrivilege.md) | Represents the privileges for accessing Pdf file.
[**DocumentProperties**](docs/DocumentProperties.md) | Represents list of PDF document properties.
[**DocumentPropertiesResponse**](docs/DocumentPropertiesResponse.md) | Represents response containing multiple document properties info
[**DocumentProperty**](docs/DocumentProperty.md) | Pdf document property.
[**DocumentPropertyResponse**](docs/DocumentPropertyResponse.md) | Represents response containing single document property info
[**DocumentResponse**](docs/DocumentResponse.md) | Represents response containing document info
[**EpubRecognitionMode**](docs/EpubRecognitionMode.md) | When PDF file (that usually has fixed layout) is being converted, the conversion engine tries to perform grouping and multi-level analysis to restore the original document author's intent and produce result in flow layout. This property tunes that conversion for this or that desirable method of recognition of content. 
[**Error**](docs/Error.md) | Error
[**ErrorDetails**](docs/ErrorDetails.md) | The error details
[**Field**](docs/Field.md) | Represents form field.
[**FieldResponse**](docs/FieldResponse.md) | Represents response containing single field info
[**Fields**](docs/Fields.md) | Represents list of form fields.
[**FieldsResponse**](docs/FieldsResponse.md) | Represents response containing multiple fields info
[**FieldType**](docs/FieldType.md) | Represents an enumeration of available field types.
[**FileAttachmentAnnotation**](docs/FileAttachmentAnnotation.md) | Provides FileAttachmentAnnotation.
[**FileAttachmentAnnotationResponse**](docs/FileAttachmentAnnotationResponse.md) | Represents response containing single FileAttachment annotation object
[**FileAttachmentAnnotations**](docs/FileAttachmentAnnotations.md) | Object representing a list of FileAttachment annotations.
[**FileAttachmentAnnotationsResponse**](docs/FileAttachmentAnnotationsResponse.md) | Represents response containing multiple FileAttachment annotation objects
[**FileIcon**](docs/FileIcon.md) | An icon to be used in displaying the annotation.
[**FilesList**](docs/FilesList.md) | Files list
[**FilesUploadResult**](docs/FilesUploadResult.md) | File upload result
[**FileVersion**](docs/FileVersion.md) | File Version
[**FileVersions**](docs/FileVersions.md) | File versions FileVersion.
[**FontEncodingRules**](docs/FontEncodingRules.md) | This enumeration defines rules which tune encoding logic
[**FontSavingModes**](docs/FontSavingModes.md) | Enumerates modes that can be used for saving of fonts referenced in saved PDF 
[**FontStyles**](docs/FontStyles.md) | Specifies style information applied to text.
[**FormField**](docs/FormField.md) | Provides form field.
[**FreeTextAnnotation**](docs/FreeTextAnnotation.md) | Provides FreeTextAnnotation.
[**FreeTextAnnotationResponse**](docs/FreeTextAnnotationResponse.md) | Represents response containing single free text annotation object
[**FreeTextAnnotations**](docs/FreeTextAnnotations.md) | Object representing a list of free text annotations.
[**FreeTextAnnotationsResponse**](docs/FreeTextAnnotationsResponse.md) | Represents response containing multiple free text annotation objects
[**FreeTextIntent**](docs/FreeTextIntent.md) | Enumerates the intents of the free text annotation.
[**GraphInfo**](docs/GraphInfo.md) | Represents graphics info.
[**HighlightAnnotation**](docs/HighlightAnnotation.md) | Provides HighlightAnnotation.
[**HighlightAnnotationResponse**](docs/HighlightAnnotationResponse.md) | Represents response containing single highlight annotation object
[**HighlightAnnotations**](docs/HighlightAnnotations.md) | Object representing a list of highlight annotations.
[**HighlightAnnotationsResponse**](docs/HighlightAnnotationsResponse.md) | Represents response containing multiple highlight annotation objects
[**HorizontalAlignment**](docs/HorizontalAlignment.md) | Describes horizontal alignment.
[**HtmlDocumentType**](docs/HtmlDocumentType.md) | Represents enumeration of the Html document types.
[**HtmlMarkupGenerationModes**](docs/HtmlMarkupGenerationModes.md) | Sometimes specific reqirments to created HTML are present. This enum defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments. 
[**Image**](docs/Image.md) | Represents image DTO.
[**ImageFooter**](docs/ImageFooter.md) | Represents Pdf image footer.
[**ImageHeader**](docs/ImageHeader.md) | Represents Pdf image header.
[**ImageResponse**](docs/ImageResponse.md) | Represents response containing single image info
[**Images**](docs/Images.md) | Represents list of images.
[**ImageSrcType**](docs/ImageSrcType.md) | Allows to specify image file format.
[**ImagesResponse**](docs/ImagesResponse.md) | Represents response containing multiple images info
[**ImageStamp**](docs/ImageStamp.md) | Represents Pdf stamps.
[**ImageTemplate**](docs/ImageTemplate.md) | Template of image.
[**ImageTemplatesRequest**](docs/ImageTemplatesRequest.md) | Create document from images request.
[**InkAnnotation**](docs/InkAnnotation.md) | Provides InkAnnotation.
[**InkAnnotationResponse**](docs/InkAnnotationResponse.md) | Represents response containing single ink annotation object
[**InkAnnotations**](docs/InkAnnotations.md) | Object representing a list of ink annotations.
[**InkAnnotationsResponse**](docs/InkAnnotationsResponse.md) | Represents response containing multiple ink annotation objects
[**Justification**](docs/Justification.md) | Enumerates the forms of quadding (justification) to be used in displaying the annotation’s text.
[**LettersPositioningMethods**](docs/LettersPositioningMethods.md) | It enumerates possible modes of positioning of letters in words in result HTML 
[**LineAnnotation**](docs/LineAnnotation.md) | Provides LineAnnotation.
[**LineAnnotationResponse**](docs/LineAnnotationResponse.md) | Represents response containing single line annotation object
[**LineAnnotations**](docs/LineAnnotations.md) | Object representing a list of line annotations.
[**LineAnnotationsResponse**](docs/LineAnnotationsResponse.md) | Represents response containing multiple line annotation objects
[**LineEnding**](docs/LineEnding.md) | Enumerates the line ending styles to be used in drawing the line.
[**LineIntent**](docs/LineIntent.md) | Enumerates the intents of the line annotation.
[**LineSpacing**](docs/LineSpacing.md) | Defines line spacing specifics
[**Link**](docs/Link.md) | Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7
[**LinkActionType**](docs/LinkActionType.md) | Represents list of link action types.
[**LinkAnnotation**](docs/LinkAnnotation.md) | Provides link to linkAnnotation.
[**LinkAnnotationResponse**](docs/LinkAnnotationResponse.md) | Represents response containing single link info
[**LinkAnnotations**](docs/LinkAnnotations.md) | Object representing a list of link annotations.
[**LinkAnnotationsResponse**](docs/LinkAnnotationsResponse.md) | Represents response containing multiple links info
[**LinkElement**](docs/LinkElement.md) | Represents base DTO object.
[**LinkHighlightingMode**](docs/LinkHighlightingMode.md) | Enumerates the annotation’s highlighting mode, the visual effect to be used when the mouse button is pressed or held down inside its active area.
[**ListBoxField**](docs/ListBoxField.md) | Provides ListBoxField.
[**ListBoxFieldResponse**](docs/ListBoxFieldResponse.md) | Represents response containing single listbox field object
[**ListBoxFields**](docs/ListBoxFields.md) | Object representing a list of listbox fields.
[**ListBoxFieldsResponse**](docs/ListBoxFieldsResponse.md) | Represents response containing multiple listbox field objects
[**MarginInfo**](docs/MarginInfo.md) | This class represents a margin for different objects.
[**MarkupAnnotation**](docs/MarkupAnnotation.md) | Provides MarkupAnnotation.
[**MergeDocuments**](docs/MergeDocuments.md) | Documents for merging.
[**MovieAnnotation**](docs/MovieAnnotation.md) | Provides MovieAnnotation.
[**MovieAnnotationResponse**](docs/MovieAnnotationResponse.md) | Represents response containing single movie annotation object
[**MovieAnnotations**](docs/MovieAnnotations.md) | Object representing a list of movie annotations.
[**MovieAnnotationsResponse**](docs/MovieAnnotationsResponse.md) | Represents response containing multiple movie annotation objects
[**ObjectExist**](docs/ObjectExist.md) | Object exists
[**OptimizeOptions**](docs/OptimizeOptions.md) | Represents Pdf optimize options.
[**Option**](docs/Option.md) | Provides form option.
[**Page**](docs/Page.md) | Provides link to page.
[**PageLayout**](docs/PageLayout.md) | Descibes page layout.
[**PageMode**](docs/PageMode.md) | Class descibes used components of the document page.
[**PageNumberStamp**](docs/PageNumberStamp.md) | Represents Pdf stamps.
[**Pages**](docs/Pages.md) | Represents list of pages.
[**PageWordCount**](docs/PageWordCount.md) | Page words count.
[**Paragraph**](docs/Paragraph.md) | Represents text paragraphs as multiline text object.
[**PartsEmbeddingModes**](docs/PartsEmbeddingModes.md) | This enum enumerates possible modes of embedding of files referenced in HTML It allows to control whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities 
[**PdfAType**](docs/PdfAType.md) | Allows to specify PdfA file format.
[**PdfPageStamp**](docs/PdfPageStamp.md) | Represents Pdf stamps.
[**PermissionsFlags**](docs/PermissionsFlags.md) | This enum represents user's permissions for a pdf.
[**Point**](docs/Point.md) | Represent point with fractional coordinates.
[**PolyAnnotation**](docs/PolyAnnotation.md) | Provides PolyAnnotation.
[**PolygonAnnotation**](docs/PolygonAnnotation.md) | Provides PolygonAnnotation.
[**PolygonAnnotationResponse**](docs/PolygonAnnotationResponse.md) | Represents response containing single polygon annotation object
[**PolygonAnnotations**](docs/PolygonAnnotations.md) | Object representing a list of polygon annotations.
[**PolygonAnnotationsResponse**](docs/PolygonAnnotationsResponse.md) | Represents response containing multiple polygon annotation objects
[**PolyIntent**](docs/PolyIntent.md) | Enumerates the intents of the polygon or polyline annotation.
[**PolyLineAnnotation**](docs/PolyLineAnnotation.md) | Provides PolyLineAnnotation.
[**PolyLineAnnotationResponse**](docs/PolyLineAnnotationResponse.md) | Represents response containing single polyline annotation object
[**PolyLineAnnotations**](docs/PolyLineAnnotations.md) | Object representing a list of polyline annotations.
[**PolyLineAnnotationsResponse**](docs/PolyLineAnnotationsResponse.md) | Represents response containing multiple polyline annotation objects
[**PopupAnnotation**](docs/PopupAnnotation.md) | Provides PopupAnnotation.
[**PopupAnnotationResponse**](docs/PopupAnnotationResponse.md) | Represents response containing single popup annotation object
[**PopupAnnotations**](docs/PopupAnnotations.md) | Object representing a list of popup annotations.
[**PopupAnnotationsResponse**](docs/PopupAnnotationsResponse.md) | Represents response containing multiple popup annotation objects
[**PopupAnnotationWithParent**](docs/PopupAnnotationWithParent.md) | Provides PopupAnnotation.
[**Position**](docs/Position.md) | Represents a position object
[**RadioButtonField**](docs/RadioButtonField.md) | Provides RadioButtonField.
[**RadioButtonFieldResponse**](docs/RadioButtonFieldResponse.md) | Represents response containing single RadioButton field object
[**RadioButtonFields**](docs/RadioButtonFields.md) | Object representing a list of radiobox fields.
[**RadioButtonFieldsResponse**](docs/RadioButtonFieldsResponse.md) | Represents response containing multiple RadioButton field objects
[**RadioButtonOptionField**](docs/RadioButtonOptionField.md) | Provides RadioButtonField.
[**RasterImagesSavingModes**](docs/RasterImagesSavingModes.md) | Converted PDF can contain raster images(.png, *.jpeg etc.) This enum defines methods of how raster images can be handled during conversion of PDF to HTML 
[**Rectangle**](docs/Rectangle.md) | Represents rectangle DTO.
[**RedactionAnnotation**](docs/RedactionAnnotation.md) | Provides RedactionAnnotation.
[**RedactionAnnotationResponse**](docs/RedactionAnnotationResponse.md) | Represents response containing single redaction annotation object
[**RedactionAnnotations**](docs/RedactionAnnotations.md) | Object representing a list of redaction annotations.
[**RedactionAnnotationsResponse**](docs/RedactionAnnotationsResponse.md) | Represents response containing multiple redaction annotation objects
[**Rotation**](docs/Rotation.md) | Enumeration of possible rotation values.
[**Row**](docs/Row.md) | Represents a row of the table.
[**RowRecognized**](docs/RowRecognized.md) | 
[**ScreenAnnotation**](docs/ScreenAnnotation.md) | Provides ScreenAnnotation.
[**ScreenAnnotationResponse**](docs/ScreenAnnotationResponse.md) | Represents response containing single screen annotation object
[**ScreenAnnotations**](docs/ScreenAnnotations.md) | Object representing a list of screen annotations.
[**ScreenAnnotationsResponse**](docs/ScreenAnnotationsResponse.md) | Represents response containing multiple screen annotation objects
[**Segment**](docs/Segment.md) | Represents segment of Pdf text.
[**ShapeType**](docs/ShapeType.md) | This enum represents shape type for the extracted images.
[**Signature**](docs/Signature.md) | Represents signature.
[**SignatureCustomAppearance**](docs/SignatureCustomAppearance.md) | An abstract class which represents signature custon appearance object.
[**SignatureField**](docs/SignatureField.md) | Provides SignatureField.
[**SignatureFieldResponse**](docs/SignatureFieldResponse.md) | Represents response containing single signature field object
[**SignatureFields**](docs/SignatureFields.md) | Object representing a list of signature fields.
[**SignatureFieldsResponse**](docs/SignatureFieldsResponse.md) | Represents response containing multiple signature field objects
[**SignatureType**](docs/SignatureType.md) | The type of signature.
[**SignatureVerifyResponse**](docs/SignatureVerifyResponse.md) | Represent responce containing signature verification result
[**SoundAnnotation**](docs/SoundAnnotation.md) | Provides SoundAnnotation.
[**SoundAnnotationResponse**](docs/SoundAnnotationResponse.md) | Represents response containing single Sound annotation object
[**SoundAnnotations**](docs/SoundAnnotations.md) | Object representing a list of Sound annotations.
[**SoundAnnotationsResponse**](docs/SoundAnnotationsResponse.md) | Represents response containing multiple sound annotation objects
[**SoundEncoding**](docs/SoundEncoding.md) | The encoding format for the sample data. 
[**SoundIcon**](docs/SoundIcon.md) | An icon to be used in displaying the annotation.
[**SplitResult**](docs/SplitResult.md) | Represents split result object.
[**SplitResultDocument**](docs/SplitResultDocument.md) | Represents split result document,
[**SplitResultResponse**](docs/SplitResultResponse.md) | Represents responce containing split result.
[**SquareAnnotation**](docs/SquareAnnotation.md) | Provides SquareAnnotation.
[**SquareAnnotationResponse**](docs/SquareAnnotationResponse.md) | Represents response containing single square annotation object
[**SquareAnnotations**](docs/SquareAnnotations.md) | Object representing a list of square annotations.
[**SquareAnnotationsResponse**](docs/SquareAnnotationsResponse.md) | Represents response containing multiple square annotation objects
[**SquigglyAnnotation**](docs/SquigglyAnnotation.md) | Provides SquigglyAnnotation.
[**SquigglyAnnotationResponse**](docs/SquigglyAnnotationResponse.md) | Represents response containing single squiggly-underline annotation object
[**SquigglyAnnotations**](docs/SquigglyAnnotations.md) | Object representing a list of squiggly-underline annotations.
[**SquigglyAnnotationsResponse**](docs/SquigglyAnnotationsResponse.md) | Represents response containing multiple squiggly-underline annotation objects
[**Stamp**](docs/Stamp.md) | Represents Pdf stamps.
[**StampAnnotation**](docs/StampAnnotation.md) | Provides StampAnnotation.
[**StampAnnotationResponse**](docs/StampAnnotationResponse.md) | Represents response containing single stamp annotation object
[**StampAnnotations**](docs/StampAnnotations.md) | Object representing a list of stamp annotations.
[**StampAnnotationsResponse**](docs/StampAnnotationsResponse.md) | Represents response containing multiple stamp annotation objects
[**StampBase**](docs/StampBase.md) | Represents Pdf stamps.
[**StampIcon**](docs/StampIcon.md) | Enumerates the icons to be used in displaying the annotation.
[**StampInfo**](docs/StampInfo.md) | Provides stamp info.
[**StampsInfo**](docs/StampsInfo.md) | Object representing a list of stamps.
[**StampsInfoResponse**](docs/StampsInfoResponse.md) | Represents multiple stamps info reponse
[**StampType**](docs/StampType.md) | Represents enumeration of the stamp types.
[**StorageExist**](docs/StorageExist.md) | Storage exists
[**StorageFile**](docs/StorageFile.md) | File or folder information
[**StrikeOutAnnotation**](docs/StrikeOutAnnotation.md) | Provides StrikeOutAnnotation.
[**StrikeOutAnnotationResponse**](docs/StrikeOutAnnotationResponse.md) | Represents response containing single strikeout annotation object
[**StrikeOutAnnotations**](docs/StrikeOutAnnotations.md) | Object representing a list of strikeout annotations.
[**StrikeOutAnnotationsResponse**](docs/StrikeOutAnnotationsResponse.md) | Represents response containing multiple strikeout annotation objects
[**Table**](docs/Table.md) | Represents a table that can be added to the page.
[**TableBroken**](docs/TableBroken.md) | Enumerates the table broken.
[**TableRecognized**](docs/TableRecognized.md) | 
[**TableRecognizedResponse**](docs/TableRecognizedResponse.md) | Represents response containing single recognized table
[**TablesRecognized**](docs/TablesRecognized.md) | Represents list of recognized tables.
[**TablesRecognizedResponse**](docs/TablesRecognizedResponse.md) | Represents response containing multiple tables info
[**TextAnnotation**](docs/TextAnnotation.md) | Provides TextAnnotation.
[**TextAnnotationResponse**](docs/TextAnnotationResponse.md) | Represents response containing single text annotation object
[**TextAnnotations**](docs/TextAnnotations.md) | Object representing a list of text annotations.
[**TextAnnotationsResponse**](docs/TextAnnotationsResponse.md) | Represents response containing multiple text annotation objects
[**TextBoxField**](docs/TextBoxField.md) | Provides TextBoxField.
[**TextBoxFieldResponse**](docs/TextBoxFieldResponse.md) | Represents response containing single text box field object
[**TextBoxFields**](docs/TextBoxFields.md) | Object representing a list of text box fields.
[**TextBoxFieldsResponse**](docs/TextBoxFieldsResponse.md) | Represents response containing multiple text box field objects
[**TextFooter**](docs/TextFooter.md) | Represents Pdf text header.
[**TextHeader**](docs/TextHeader.md) | Represents Pdf text header.
[**TextHorizontalAlignment**](docs/TextHorizontalAlignment.md) | Describes text horizontal alignment.
[**TextIcon**](docs/TextIcon.md) | Enumerates the icons to be used in displaying the annotation.
[**TextLine**](docs/TextLine.md) | A line of text to be inserted into paragraph.
[**TextRect**](docs/TextRect.md) | Represents text occurrence.
[**TextRects**](docs/TextRects.md) | Represents multiple text occurrences DTO.
[**TextRectsResponse**](docs/TextRectsResponse.md) | Represents response containing multiple text occurrences info
[**TextReplace**](docs/TextReplace.md) | Single text replacement setting.
[**TextReplaceListRequest**](docs/TextReplaceListRequest.md) | Multiple text replacements request.
[**TextReplaceResponse**](docs/TextReplaceResponse.md) | Represents response containing the result of text replacement
[**TextStamp**](docs/TextStamp.md) | Represents Pdf stamps.
[**TextState**](docs/TextState.md) | Represents a text state of a text
[**TextStyle**](docs/TextStyle.md) | Represents a text style of a text
[**TimestampSettings**](docs/TimestampSettings.md) | Represents the ocsp settings using during signing process.
[**UnderlineAnnotation**](docs/UnderlineAnnotation.md) | Provides UnderlineAnnotation.
[**UnderlineAnnotationResponse**](docs/UnderlineAnnotationResponse.md) | Represents response containing single underline annotation object
[**UnderlineAnnotations**](docs/UnderlineAnnotations.md) | Object representing a list of underline annotations.
[**UnderlineAnnotationsResponse**](docs/UnderlineAnnotationsResponse.md) | Represents response containing multiple underline annotation objects
[**VerticalAlignment**](docs/VerticalAlignment.md) | Enumeration of possible vertical alignment values.
[**WordCount**](docs/WordCount.md) | Number of words per document pages.
[**WordCountResponse**](docs/WordCountResponse.md) | Number of words per document pages.
[**WrapMode**](docs/WrapMode.md) | Defines word wrapping strategies
