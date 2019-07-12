# PdfApi

All URIs are relative to *https://api.aspose.cloud/v2.0/*

Method | HTTP request | Description
------------- | ------------- | -------------
*PdfApi* | [**copyFile**](PdfApi.md#copyFile) | **PUT** /pdf/storage/file/copy/\{srcPath} | Copy file
*PdfApi* | [**copyFolder**](PdfApi.md#copyFolder) | **PUT** /pdf/storage/folder/copy/\{srcPath} | Copy folder
*PdfApi* | [**createFolder**](PdfApi.md#createFolder) | **PUT** /pdf/storage/folder/\{path} | Create the folder
*PdfApi* | [**deleteAnnotation**](PdfApi.md#deleteAnnotation) | **DELETE** /pdf/\{name}/annotations/\{annotationId} | Delete document annotation by ID
*PdfApi* | [**deleteBookmark**](PdfApi.md#deleteBookmark) | **DELETE** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Delete document bookmark by ID.
*PdfApi* | [**deleteDocumentAnnotations**](PdfApi.md#deleteDocumentAnnotations) | **DELETE** /pdf/\{name}/annotations | Delete all annotations from the document
*PdfApi* | [**deleteDocumentBookmarks**](PdfApi.md#deleteDocumentBookmarks) | **DELETE** /pdf/\{name}/bookmarks/tree | Delete all document bookmarks.
*PdfApi* | [**deleteDocumentLinkAnnotations**](PdfApi.md#deleteDocumentLinkAnnotations) | **DELETE** /pdf/\{name}/links | Delete all link annotations from the document
*PdfApi* | [**deleteDocumentStamps**](PdfApi.md#deleteDocumentStamps) | **DELETE** /pdf/\{name}/stamps | Delete all stamps from the document
*PdfApi* | [**deleteDocumentTables**](PdfApi.md#deleteDocumentTables) | **DELETE** /pdf/\{name}/tables | Delete all tables from the document
*PdfApi* | [**deleteField**](PdfApi.md#deleteField) | **DELETE** /pdf/\{name}/fields/\{fieldName} | Delete document field by name.
*PdfApi* | [**deleteFile**](PdfApi.md#deleteFile) | **DELETE** /pdf/storage/file/\{path} | Delete file
*PdfApi* | [**deleteFolder**](PdfApi.md#deleteFolder) | **DELETE** /pdf/storage/folder/\{path} | Delete folder
*PdfApi* | [**deleteImage**](PdfApi.md#deleteImage) | **DELETE** /pdf/\{name}/images/\{imageId} | Delete image from document page.
*PdfApi* | [**deleteLinkAnnotation**](PdfApi.md#deleteLinkAnnotation) | **DELETE** /pdf/\{name}/links/\{linkId} | Delete document page link annotation by ID
*PdfApi* | [**deletePage**](PdfApi.md#deletePage) | **DELETE** /pdf/\{name}/pages/\{pageNumber} | Delete document page by its number.
*PdfApi* | [**deletePageAnnotations**](PdfApi.md#deletePageAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/annotations | Delete all annotations from the page
*PdfApi* | [**deletePageLinkAnnotations**](PdfApi.md#deletePageLinkAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/links | Delete all link annotations from the page
*PdfApi* | [**deletePageStamps**](PdfApi.md#deletePageStamps) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/stamps | Delete all stamps from the page
*PdfApi* | [**deletePageTables**](PdfApi.md#deletePageTables) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/tables | Delete all tables from the page
*PdfApi* | [**deleteProperties**](PdfApi.md#deleteProperties) | **DELETE** /pdf/\{name}/documentproperties | Delete custom document properties.
*PdfApi* | [**deleteProperty**](PdfApi.md#deleteProperty) | **DELETE** /pdf/\{name}/documentproperties/\{propertyName} | Delete document property.
*PdfApi* | [**deleteStamp**](PdfApi.md#deleteStamp) | **DELETE** /pdf/\{name}/stamps/\{stampId} | Delete document stamp by ID
*PdfApi* | [**deleteTable**](PdfApi.md#deleteTable) | **DELETE** /pdf/\{name}/tables/\{tableId} | Delete document table by ID
*PdfApi* | [**downloadFile**](PdfApi.md#downloadFile) | **GET** /pdf/storage/file/\{path} | Download file
*PdfApi* | [**getBookmark**](PdfApi.md#getBookmark) | **GET** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Read document bookmark.
*PdfApi* | [**getBookmarks**](PdfApi.md#getBookmarks) | **GET** /pdf/\{name}/bookmarks/list/\{bookmarkPath} | Read document bookmarks node list.
*PdfApi* | [**getCaretAnnotation**](PdfApi.md#getCaretAnnotation) | **GET** /pdf/\{name}/annotations/caret/\{annotationId} | Read document page caret annotation by ID.
*PdfApi* | [**getCircleAnnotation**](PdfApi.md#getCircleAnnotation) | **GET** /pdf/\{name}/annotations/circle/\{annotationId} | Read document page circle annotation by ID.
*PdfApi* | [**getDiscUsage**](PdfApi.md#getDiscUsage) | **GET** /pdf/storage/disc | Get disc usage
*PdfApi* | [**getDocument**](PdfApi.md#getDocument) | **GET** /pdf/\{name} | Read common document info.
*PdfApi* | [**getDocumentAnnotations**](PdfApi.md#getDocumentAnnotations) | **GET** /pdf/\{name}/annotations | Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**getDocumentAttachmentByIndex**](PdfApi.md#getDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex} | Read document attachment info by its index.
*PdfApi* | [**getDocumentAttachments**](PdfApi.md#getDocumentAttachments) | **GET** /pdf/\{name}/attachments | Read document attachments info.
*PdfApi* | [**getDocumentBookmarks**](PdfApi.md#getDocumentBookmarks) | **GET** /pdf/\{name}/bookmarks/tree | Read document bookmarks tree.
*PdfApi* | [**getDocumentCaretAnnotations**](PdfApi.md#getDocumentCaretAnnotations) | **GET** /pdf/\{name}/annotations/caret | Read document caret annotations.
*PdfApi* | [**getDocumentCircleAnnotations**](PdfApi.md#getDocumentCircleAnnotations) | **GET** /pdf/\{name}/annotations/circle | Read document circle annotations.
*PdfApi* | [**getDocumentFileAttachmentAnnotations**](PdfApi.md#getDocumentFileAttachmentAnnotations) | **GET** /pdf/\{name}/annotations/fileattachment | Read document FileAttachment annotations.
*PdfApi* | [**getDocumentFreeTextAnnotations**](PdfApi.md#getDocumentFreeTextAnnotations) | **GET** /pdf/\{name}/annotations/freetext | Read document free text annotations.
*PdfApi* | [**getDocumentHighlightAnnotations**](PdfApi.md#getDocumentHighlightAnnotations) | **GET** /pdf/\{name}/annotations/highlight | Read document highlight annotations.
*PdfApi* | [**getDocumentInkAnnotations**](PdfApi.md#getDocumentInkAnnotations) | **GET** /pdf/\{name}/annotations/ink | Read document ink annotations.
*PdfApi* | [**getDocumentLineAnnotations**](PdfApi.md#getDocumentLineAnnotations) | **GET** /pdf/\{name}/annotations/line | Read document line annotations.
*PdfApi* | [**getDocumentMovieAnnotations**](PdfApi.md#getDocumentMovieAnnotations) | **GET** /pdf/\{name}/annotations/movie | Read document movie annotations.
*PdfApi* | [**getDocumentPolygonAnnotations**](PdfApi.md#getDocumentPolygonAnnotations) | **GET** /pdf/\{name}/annotations/polygon | Read document polygon annotations.
*PdfApi* | [**getDocumentPolyLineAnnotations**](PdfApi.md#getDocumentPolyLineAnnotations) | **GET** /pdf/\{name}/annotations/polyline | Read document polyline annotations.
*PdfApi* | [**getDocumentPopupAnnotations**](PdfApi.md#getDocumentPopupAnnotations) | **GET** /pdf/\{name}/annotations/popup | Read document popup annotations.
*PdfApi* | [**getDocumentPopupAnnotationsByParent**](PdfApi.md#getDocumentPopupAnnotationsByParent) | **GET** /pdf/\{name}/annotations/\{annotationId}/popup | Read document popup annotations by parent id.
*PdfApi* | [**getDocumentProperties**](PdfApi.md#getDocumentProperties) | **GET** /pdf/\{name}/documentproperties | Read document properties.
*PdfApi* | [**getDocumentProperty**](PdfApi.md#getDocumentProperty) | **GET** /pdf/\{name}/documentproperties/\{propertyName} | Read document property by name.
*PdfApi* | [**getDocumentRedactionAnnotations**](PdfApi.md#getDocumentRedactionAnnotations) | **GET** /pdf/\{name}/annotations/redaction | Read document redaction annotations.
*PdfApi* | [**getDocumentScreenAnnotations**](PdfApi.md#getDocumentScreenAnnotations) | **GET** /pdf/\{name}/annotations/screen | Read document screen annotations.
*PdfApi* | [**getDocumentSoundAnnotations**](PdfApi.md#getDocumentSoundAnnotations) | **GET** /pdf/\{name}/annotations/sound | Read document sound annotations.
*PdfApi* | [**getDocumentSquareAnnotations**](PdfApi.md#getDocumentSquareAnnotations) | **GET** /pdf/\{name}/annotations/square | Read document square annotations.
*PdfApi* | [**getDocumentSquigglyAnnotations**](PdfApi.md#getDocumentSquigglyAnnotations) | **GET** /pdf/\{name}/annotations/squiggly | Read document squiggly annotations.
*PdfApi* | [**getDocumentStampAnnotations**](PdfApi.md#getDocumentStampAnnotations) | **GET** /pdf/\{name}/annotations/stamp | Read document stamp annotations.
*PdfApi* | [**getDocumentStamps**](PdfApi.md#getDocumentStamps) | **GET** /pdf/\{name}/stamps | Read document stamps.
*PdfApi* | [**getDocumentStrikeOutAnnotations**](PdfApi.md#getDocumentStrikeOutAnnotations) | **GET** /pdf/\{name}/annotations/strikeout | Read document StrikeOut annotations.
*PdfApi* | [**getDocumentTables**](PdfApi.md#getDocumentTables) | **GET** /pdf/\{name}/tables | Read document tables.
*PdfApi* | [**getDocumentTextAnnotations**](PdfApi.md#getDocumentTextAnnotations) | **GET** /pdf/\{name}/annotations/text | Read document text annotations.
*PdfApi* | [**getDocumentUnderlineAnnotations**](PdfApi.md#getDocumentUnderlineAnnotations) | **GET** /pdf/\{name}/annotations/underline | Read document underline annotations.
*PdfApi* | [**getDownloadDocumentAttachmentByIndex**](PdfApi.md#getDownloadDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex}/download | Download document attachment content by its index.
*PdfApi* | [**getEpubInStorageToPdf**](PdfApi.md#getEpubInStorageToPdf) | **GET** /pdf/create/epub | Convert EPUB file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getField**](PdfApi.md#getField) | **GET** /pdf/\{name}/fields/\{fieldName} | Get document field by name.
*PdfApi* | [**getFields**](PdfApi.md#getFields) | **GET** /pdf/\{name}/fields | Get document fields.
*PdfApi* | [**getFileAttachmentAnnotation**](PdfApi.md#getFileAttachmentAnnotation) | **GET** /pdf/\{name}/annotations/fileattachment/\{annotationId} | Read document page FileAttachment annotation by ID.
*PdfApi* | [**getFileAttachmentAnnotationData**](PdfApi.md#getFileAttachmentAnnotationData) | **GET** /pdf/\{name}/annotations/fileattachment/\{annotationId}/data | Read document page FileAttachment annotation by ID.
*PdfApi* | [**getFilesList**](PdfApi.md#getFilesList) | **GET** /pdf/storage/folder/\{path} | Get all files and folders within a folder
*PdfApi* | [**getFileVersions**](PdfApi.md#getFileVersions) | **GET** /pdf/storage/version/\{path} | Get file versions
*PdfApi* | [**getFreeTextAnnotation**](PdfApi.md#getFreeTextAnnotation) | **GET** /pdf/\{name}/annotations/freetext/\{annotationId} | Read document page free text annotation by ID.
*PdfApi* | [**getHighlightAnnotation**](PdfApi.md#getHighlightAnnotation) | **GET** /pdf/\{name}/annotations/highlight/\{annotationId} | Read document page highlight annotation by ID.
*PdfApi* | [**getHtmlInStorageToPdf**](PdfApi.md#getHtmlInStorageToPdf) | **GET** /pdf/create/html | Convert HTML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getImage**](PdfApi.md#getImage) | **GET** /pdf/\{name}/images/\{imageId} | Read document image by ID.
*PdfApi* | [**getImageExtractAsGif**](PdfApi.md#getImageExtractAsGif) | **GET** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format
*PdfApi* | [**getImageExtractAsJpeg**](PdfApi.md#getImageExtractAsJpeg) | **GET** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format
*PdfApi* | [**getImageExtractAsPng**](PdfApi.md#getImageExtractAsPng) | **GET** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format
*PdfApi* | [**getImageExtractAsTiff**](PdfApi.md#getImageExtractAsTiff) | **GET** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format
*PdfApi* | [**getImages**](PdfApi.md#getImages) | **GET** /pdf/\{name}/pages/\{pageNumber}/images | Read document images.
*PdfApi* | [**getInkAnnotation**](PdfApi.md#getInkAnnotation) | **GET** /pdf/\{name}/annotations/ink/\{annotationId} | Read document page ink annotation by ID.
*PdfApi* | [**getLaTeXInStorageToPdf**](PdfApi.md#getLaTeXInStorageToPdf) | **GET** /pdf/create/latex | Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getLineAnnotation**](PdfApi.md#getLineAnnotation) | **GET** /pdf/\{name}/annotations/line/\{annotationId} | Read document page line annotation by ID.
*PdfApi* | [**getLinkAnnotation**](PdfApi.md#getLinkAnnotation) | **GET** /pdf/\{name}/links/\{linkId} | Read document link annotation by ID.
*PdfApi* | [**getMhtInStorageToPdf**](PdfApi.md#getMhtInStorageToPdf) | **GET** /pdf/create/mht | Convert MHT file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getMovieAnnotation**](PdfApi.md#getMovieAnnotation) | **GET** /pdf/\{name}/annotations/movie/\{annotationId} | Read document page movie annotation by ID.
*PdfApi* | [**getPage**](PdfApi.md#getPage) | **GET** /pdf/\{name}/pages/\{pageNumber} | Read document page info.
*PdfApi* | [**getPageAnnotations**](PdfApi.md#getPageAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations | Read document page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**getPageCaretAnnotations**](PdfApi.md#getPageCaretAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/caret | Read document page caret annotations.
*PdfApi* | [**getPageCircleAnnotations**](PdfApi.md#getPageCircleAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Read document page circle annotations.
*PdfApi* | [**getPageConvertToBmp**](PdfApi.md#getPageConvertToBmp) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to Bmp image and return resulting file in response.
*PdfApi* | [**getPageConvertToEmf**](PdfApi.md#getPageConvertToEmf) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to Emf image and return resulting file in response.
*PdfApi* | [**getPageConvertToGif**](PdfApi.md#getPageConvertToGif) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to Gif image and return resulting file in response.
*PdfApi* | [**getPageConvertToJpeg**](PdfApi.md#getPageConvertToJpeg) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and return resulting file in response.
*PdfApi* | [**getPageConvertToPng**](PdfApi.md#getPageConvertToPng) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to Png image and return resulting file in response.
*PdfApi* | [**getPageConvertToTiff**](PdfApi.md#getPageConvertToTiff) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and return resulting file in response.
*PdfApi* | [**getPageFileAttachmentAnnotations**](PdfApi.md#getPageFileAttachmentAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/fileattachment | Read document page FileAttachment annotations.
*PdfApi* | [**getPageFreeTextAnnotations**](PdfApi.md#getPageFreeTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Read document page free text annotations.
*PdfApi* | [**getPageHighlightAnnotations**](PdfApi.md#getPageHighlightAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/highlight | Read document page highlight annotations.
*PdfApi* | [**getPageInkAnnotations**](PdfApi.md#getPageInkAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/ink | Read document page ink annotations.
*PdfApi* | [**getPageLineAnnotations**](PdfApi.md#getPageLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Read document page line annotations.
*PdfApi* | [**getPageLinkAnnotation**](PdfApi.md#getPageLinkAnnotation) | **GET** /pdf/\{name}/pages/\{pageNumber}/links/\{linkId} | Read document page link annotation by ID.
*PdfApi* | [**getPageLinkAnnotations**](PdfApi.md#getPageLinkAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/links | Read document page link annotations.
*PdfApi* | [**getPageMovieAnnotations**](PdfApi.md#getPageMovieAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/movie | Read document page movie annotations.
*PdfApi* | [**getPagePolygonAnnotations**](PdfApi.md#getPagePolygonAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Read document page polygon annotations.
*PdfApi* | [**getPagePolyLineAnnotations**](PdfApi.md#getPagePolyLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Read document page polyline annotations.
*PdfApi* | [**getPagePopupAnnotations**](PdfApi.md#getPagePopupAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/popup | Read document page popup annotations.
*PdfApi* | [**getPageRedactionAnnotations**](PdfApi.md#getPageRedactionAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/redaction | Read document page redaction annotations.
*PdfApi* | [**getPages**](PdfApi.md#getPages) | **GET** /pdf/\{name}/pages | Read document pages info.
*PdfApi* | [**getPageScreenAnnotations**](PdfApi.md#getPageScreenAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/screen | Read document page screen annotations.
*PdfApi* | [**getPageSoundAnnotations**](PdfApi.md#getPageSoundAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/sound | Read document page sound annotations.
*PdfApi* | [**getPageSquareAnnotations**](PdfApi.md#getPageSquareAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Read document page square annotations.
*PdfApi* | [**getPageSquigglyAnnotations**](PdfApi.md#getPageSquigglyAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/squiggly | Read document page squiggly annotations.
*PdfApi* | [**getPageStampAnnotations**](PdfApi.md#getPageStampAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/stamp | Read document page stamp annotations.
*PdfApi* | [**getPageStamps**](PdfApi.md#getPageStamps) | **GET** /pdf/\{name}/pages/\{pageNumber}/stamps | Read page document stamps.
*PdfApi* | [**getPageStrikeOutAnnotations**](PdfApi.md#getPageStrikeOutAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/strikeout | Read document page StrikeOut annotations.
*PdfApi* | [**getPageTables**](PdfApi.md#getPageTables) | **GET** /pdf/\{name}/pages/\{pageNumber}/tables | Read document page tables.
*PdfApi* | [**getPageText**](PdfApi.md#getPageText) | **GET** /pdf/\{name}/pages/\{pageNumber}/text | Read page text items.
*PdfApi* | [**getPageTextAnnotations**](PdfApi.md#getPageTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Read document page text annotations.
*PdfApi* | [**getPageUnderlineAnnotations**](PdfApi.md#getPageUnderlineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/underline | Read document page underline annotations.
*PdfApi* | [**getPclInStorageToPdf**](PdfApi.md#getPclInStorageToPdf) | **GET** /pdf/create/pcl | Convert PCL file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getPdfInStorageToDoc**](PdfApi.md#getPdfInStorageToDoc) | **GET** /pdf/\{name}/convert/doc | Converts PDF document (located on storage) to DOC format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToEpub**](PdfApi.md#getPdfInStorageToEpub) | **GET** /pdf/\{name}/convert/epub | Converts PDF document (located on storage) to EPUB format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToHtml**](PdfApi.md#getPdfInStorageToHtml) | **GET** /pdf/\{name}/convert/html | Converts PDF document (located on storage) to Html format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToLaTeX**](PdfApi.md#getPdfInStorageToLaTeX) | **GET** /pdf/\{name}/convert/latex | Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToMobiXml**](PdfApi.md#getPdfInStorageToMobiXml) | **GET** /pdf/\{name}/convert/mobixml | Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToPdfA**](PdfApi.md#getPdfInStorageToPdfA) | **GET** /pdf/\{name}/convert/pdfa | Converts PDF document (located on storage) to PdfA format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToPptx**](PdfApi.md#getPdfInStorageToPptx) | **GET** /pdf/\{name}/convert/pptx | Converts PDF document (located on storage) to PPTX format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToSvg**](PdfApi.md#getPdfInStorageToSvg) | **GET** /pdf/\{name}/convert/svg | Converts PDF document (located on storage) to SVG format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToTiff**](PdfApi.md#getPdfInStorageToTiff) | **GET** /pdf/\{name}/convert/tiff | Converts PDF document (located on storage) to TIFF format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXls**](PdfApi.md#getPdfInStorageToXls) | **GET** /pdf/\{name}/convert/xls | Converts PDF document (located on storage) to XLS format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXlsx**](PdfApi.md#getPdfInStorageToXlsx) | **GET** /pdf/\{name}/convert/xlsx | Converts PDF document (located on storage) to XLSX format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXml**](PdfApi.md#getPdfInStorageToXml) | **GET** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXps**](PdfApi.md#getPdfInStorageToXps) | **GET** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and returns resulting file in response content
*PdfApi* | [**getPolygonAnnotation**](PdfApi.md#getPolygonAnnotation) | **GET** /pdf/\{name}/annotations/polygon/\{annotationId} | Read document page polygon annotation by ID.
*PdfApi* | [**getPolyLineAnnotation**](PdfApi.md#getPolyLineAnnotation) | **GET** /pdf/\{name}/annotations/polyline/\{annotationId} | Read document page polyline annotation by ID.
*PdfApi* | [**getPopupAnnotation**](PdfApi.md#getPopupAnnotation) | **GET** /pdf/\{name}/annotations/popup/\{annotationId} | Read document page popup annotation by ID.
*PdfApi* | [**getPsInStorageToPdf**](PdfApi.md#getPsInStorageToPdf) | **GET** /pdf/create/ps | Convert PS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getRedactionAnnotation**](PdfApi.md#getRedactionAnnotation) | **GET** /pdf/\{name}/annotations/redaction/\{annotationId} | Read document page redaction annotation by ID.
*PdfApi* | [**getScreenAnnotation**](PdfApi.md#getScreenAnnotation) | **GET** /pdf/\{name}/annotations/screen/\{annotationId} | Read document page screen annotation by ID.
*PdfApi* | [**getScreenAnnotationData**](PdfApi.md#getScreenAnnotationData) | **GET** /pdf/\{name}/annotations/screen/\{annotationId}/data | Read document page screen annotation by ID.
*PdfApi* | [**getSoundAnnotation**](PdfApi.md#getSoundAnnotation) | **GET** /pdf/\{name}/annotations/sound/\{annotationId} | Read document page sound annotation by ID.
*PdfApi* | [**getSoundAnnotationData**](PdfApi.md#getSoundAnnotationData) | **GET** /pdf/\{name}/annotations/sound/\{annotationId}/data | Read document page sound annotation by ID.
*PdfApi* | [**getSquareAnnotation**](PdfApi.md#getSquareAnnotation) | **GET** /pdf/\{name}/annotations/square/\{annotationId} | Read document page square annotation by ID.
*PdfApi* | [**getSquigglyAnnotation**](PdfApi.md#getSquigglyAnnotation) | **GET** /pdf/\{name}/annotations/squiggly/\{annotationId} | Read document page squiggly annotation by ID.
*PdfApi* | [**getStampAnnotation**](PdfApi.md#getStampAnnotation) | **GET** /pdf/\{name}/annotations/stamp/\{annotationId} | Read document page stamp annotation by ID.
*PdfApi* | [**getStampAnnotationData**](PdfApi.md#getStampAnnotationData) | **GET** /pdf/\{name}/annotations/stamp/\{annotationId}/data | Read document page stamp annotation by ID.
*PdfApi* | [**getStrikeOutAnnotation**](PdfApi.md#getStrikeOutAnnotation) | **GET** /pdf/\{name}/annotations/strikeout/\{annotationId} | Read document page StrikeOut annotation by ID.
*PdfApi* | [**getSvgInStorageToPdf**](PdfApi.md#getSvgInStorageToPdf) | **GET** /pdf/create/svg | Convert SVG file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getTable**](PdfApi.md#getTable) | **GET** /pdf/\{name}/tables/\{tableId} | Read document page table by ID.
*PdfApi* | [**getText**](PdfApi.md#getText) | **GET** /pdf/\{name}/text | Read document text.
*PdfApi* | [**getTextAnnotation**](PdfApi.md#getTextAnnotation) | **GET** /pdf/\{name}/annotations/text/\{annotationId} | Read document page text annotation by ID.
*PdfApi* | [**getUnderlineAnnotation**](PdfApi.md#getUnderlineAnnotation) | **GET** /pdf/\{name}/annotations/underline/\{annotationId} | Read document page underline annotation by ID.
*PdfApi* | [**getVerifySignature**](PdfApi.md#getVerifySignature) | **GET** /pdf/\{name}/verifySignature | Verify signature document.
*PdfApi* | [**getWebInStorageToPdf**](PdfApi.md#getWebInStorageToPdf) | **GET** /pdf/create/web | Convert web page to PDF format and return resulting file in response. 
*PdfApi* | [**getWordsPerPage**](PdfApi.md#getWordsPerPage) | **GET** /pdf/\{name}/pages/wordCount | Get number of words per document page.
*PdfApi* | [**getXfaPdfInStorageToAcroForm**](PdfApi.md#getXfaPdfInStorageToAcroForm) | **GET** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content
*PdfApi* | [**getXmlInStorageToPdf**](PdfApi.md#getXmlInStorageToPdf) | **GET** /pdf/create/xml | Convert XML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getXpsInStorageToPdf**](PdfApi.md#getXpsInStorageToPdf) | **GET** /pdf/create/xps | Convert XPS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getXslFoInStorageToPdf**](PdfApi.md#getXslFoInStorageToPdf) | **GET** /pdf/create/xslfo | Convert XslFo file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**moveFile**](PdfApi.md#moveFile) | **PUT** /pdf/storage/file/move/\{srcPath} | Move file
*PdfApi* | [**moveFolder**](PdfApi.md#moveFolder) | **PUT** /pdf/storage/folder/move/\{srcPath} | Move folder
*PdfApi* | [**objectExists**](PdfApi.md#objectExists) | **GET** /pdf/storage/exist/\{path} | Check if file or folder exists
*PdfApi* | [**postAppendDocument**](PdfApi.md#postAppendDocument) | **POST** /pdf/\{name}/appendDocument | Append document to existing one.
*PdfApi* | [**postBookmark**](PdfApi.md#postBookmark) | **POST** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Add document bookmarks.
*PdfApi* | [**postChangePasswordDocumentInStorage**](PdfApi.md#postChangePasswordDocumentInStorage) | **POST** /pdf/\{name}/changepassword | Change document password in storage.
*PdfApi* | [**postCreateField**](PdfApi.md#postCreateField) | **POST** /pdf/\{name}/fields | Create field.
*PdfApi* | [**postDecryptDocumentInStorage**](PdfApi.md#postDecryptDocumentInStorage) | **POST** /pdf/\{name}/decrypt | Decrypt document in storage.
*PdfApi* | [**postDocumentImageFooter**](PdfApi.md#postDocumentImageFooter) | **POST** /pdf/\{name}/footer/image | Add document image footer.
*PdfApi* | [**postDocumentImageHeader**](PdfApi.md#postDocumentImageHeader) | **POST** /pdf/\{name}/header/image | Add document image header.
*PdfApi* | [**postDocumentPageNumberStamps**](PdfApi.md#postDocumentPageNumberStamps) | **POST** /pdf/\{name}/stamps/pagenumber | Add document page number stamps.
*PdfApi* | [**postDocumentTextFooter**](PdfApi.md#postDocumentTextFooter) | **POST** /pdf/\{name}/footer/text | Add document text footer.
*PdfApi* | [**postDocumentTextHeader**](PdfApi.md#postDocumentTextHeader) | **POST** /pdf/\{name}/header/text | Add document text header.
*PdfApi* | [**postDocumentTextReplace**](PdfApi.md#postDocumentTextReplace) | **POST** /pdf/\{name}/text/replace | Document's replace text method.
*PdfApi* | [**postEncryptDocumentInStorage**](PdfApi.md#postEncryptDocumentInStorage) | **POST** /pdf/\{name}/encrypt | Encrypt document in storage.
*PdfApi* | [**postFlattenDocument**](PdfApi.md#postFlattenDocument) | **POST** /pdf/\{name}/flatten | Flatten the document.
*PdfApi* | [**postInsertImage**](PdfApi.md#postInsertImage) | **POST** /pdf/\{name}/pages/\{pageNumber}/images | Insert image to document page.
*PdfApi* | [**postMovePage**](PdfApi.md#postMovePage) | **POST** /pdf/\{name}/pages/\{pageNumber}/movePage | Move page to new position.
*PdfApi* | [**postOptimizeDocument**](PdfApi.md#postOptimizeDocument) | **POST** /pdf/\{name}/optimize | Optimize document.
*PdfApi* | [**postPageCaretAnnotations**](PdfApi.md#postPageCaretAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/caret | Add document page caret annotations.
*PdfApi* | [**postPageCircleAnnotations**](PdfApi.md#postPageCircleAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Add document page circle annotations.
*PdfApi* | [**postPageFileAttachmentAnnotations**](PdfApi.md#postPageFileAttachmentAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/fileattachment | Add document page FileAttachment annotations.
*PdfApi* | [**postPageFreeTextAnnotations**](PdfApi.md#postPageFreeTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Add document page free text annotations.
*PdfApi* | [**postPageHighlightAnnotations**](PdfApi.md#postPageHighlightAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/highlight | Add document page highlight annotations.
*PdfApi* | [**postPageImageStamps**](PdfApi.md#postPageImageStamps) | **POST** /pdf/\{name}/pages/\{pageNumber}/stamps/image | Add document page image stamps.
*PdfApi* | [**postPageInkAnnotations**](PdfApi.md#postPageInkAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/ink | Add document page ink annotations.
*PdfApi* | [**postPageLineAnnotations**](PdfApi.md#postPageLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Add document page line annotations.
*PdfApi* | [**postPageLinkAnnotations**](PdfApi.md#postPageLinkAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/links | Add document page link annotations.
*PdfApi* | [**postPageMovieAnnotations**](PdfApi.md#postPageMovieAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/movie | Add document page movie annotations.
*PdfApi* | [**postPagePdfPageStamps**](PdfApi.md#postPagePdfPageStamps) | **POST** /pdf/\{name}/pages/\{pageNumber}/stamps/pdfpage | Add document pdf page stamps.
*PdfApi* | [**postPagePolygonAnnotations**](PdfApi.md#postPagePolygonAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Add document page polygon annotations.
*PdfApi* | [**postPagePolyLineAnnotations**](PdfApi.md#postPagePolyLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Add document page polyline annotations.
*PdfApi* | [**postPageRedactionAnnotations**](PdfApi.md#postPageRedactionAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/redaction | Add document page redaction annotations.
*PdfApi* | [**postPageScreenAnnotations**](PdfApi.md#postPageScreenAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/screen | Add document page screen annotations.
*PdfApi* | [**postPageSoundAnnotations**](PdfApi.md#postPageSoundAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/sound | Add document page sound annotations.
*PdfApi* | [**postPageSquareAnnotations**](PdfApi.md#postPageSquareAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Add document page square annotations.
*PdfApi* | [**postPageSquigglyAnnotations**](PdfApi.md#postPageSquigglyAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/squiggly | Add document page squiggly annotations.
*PdfApi* | [**postPageStampAnnotations**](PdfApi.md#postPageStampAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/stamp | Add document page stamp annotations.
*PdfApi* | [**postPageStrikeOutAnnotations**](PdfApi.md#postPageStrikeOutAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/strikeout | Add document page StrikeOut annotations.
*PdfApi* | [**postPageTables**](PdfApi.md#postPageTables) | **POST** /pdf/\{name}/pages/\{pageNumber}/tables | Add document page tables.
*PdfApi* | [**postPageTextAnnotations**](PdfApi.md#postPageTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Add document page text annotations.
*PdfApi* | [**postPageTextReplace**](PdfApi.md#postPageTextReplace) | **POST** /pdf/\{name}/pages/\{pageNumber}/text/replace | Page's replace text method.
*PdfApi* | [**postPageTextStamps**](PdfApi.md#postPageTextStamps) | **POST** /pdf/\{name}/pages/\{pageNumber}/stamps/text | Add document page text stamps.
*PdfApi* | [**postPageUnderlineAnnotations**](PdfApi.md#postPageUnderlineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/underline | Add document page underline annotations.
*PdfApi* | [**postPopupAnnotation**](PdfApi.md#postPopupAnnotation) | **POST** /pdf/\{name}/annotations/\{annotationId}/popup | Add document popup annotations.
*PdfApi* | [**postSignDocument**](PdfApi.md#postSignDocument) | **POST** /pdf/\{name}/sign | Sign document.
*PdfApi* | [**postSignPage**](PdfApi.md#postSignPage) | **POST** /pdf/\{name}/pages/\{pageNumber}/sign | Sign page.
*PdfApi* | [**postSplitDocument**](PdfApi.md#postSplitDocument) | **POST** /pdf/\{name}/split | Split document to parts.
*PdfApi* | [**putAddNewPage**](PdfApi.md#putAddNewPage) | **PUT** /pdf/\{name}/pages | Add new page to end of the document.
*PdfApi* | [**putAddText**](PdfApi.md#putAddText) | **PUT** /pdf/\{name}/pages/\{pageNumber}/text | Add text to PDF document page.
*PdfApi* | [**putAnnotationsFlatten**](PdfApi.md#putAnnotationsFlatten) | **PUT** /pdf/\{name}/annotations/flatten | Flattens the annotations of the specified types
*PdfApi* | [**putBookmark**](PdfApi.md#putBookmark) | **PUT** /pdf/\{name}/bookmarks/bookmark/\{bookmarkPath} | Update document bookmark.
*PdfApi* | [**putCaretAnnotation**](PdfApi.md#putCaretAnnotation) | **PUT** /pdf/\{name}/annotations/caret/\{annotationId} | Replace document caret annotation
*PdfApi* | [**putChangePasswordDocument**](PdfApi.md#putChangePasswordDocument) | **PUT** /pdf/changepassword | Change document password from content.
*PdfApi* | [**putCircleAnnotation**](PdfApi.md#putCircleAnnotation) | **PUT** /pdf/\{name}/annotations/circle/\{annotationId} | Replace document circle annotation
*PdfApi* | [**putCreateDocument**](PdfApi.md#putCreateDocument) | **PUT** /pdf/\{name} | Create empty document.
*PdfApi* | [**putDecryptDocument**](PdfApi.md#putDecryptDocument) | **PUT** /pdf/decrypt | Decrypt document from content.
*PdfApi* | [**putEncryptDocument**](PdfApi.md#putEncryptDocument) | **PUT** /pdf/encrypt | Encrypt document from content.
*PdfApi* | [**putEpubInStorageToPdf**](PdfApi.md#putEpubInStorageToPdf) | **PUT** /pdf/\{name}/create/epub | Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putFieldsFlatten**](PdfApi.md#putFieldsFlatten) | **PUT** /pdf/\{name}/fields/flatten | Flatten form fields in document.
*PdfApi* | [**putFileAttachmentAnnotation**](PdfApi.md#putFileAttachmentAnnotation) | **PUT** /pdf/\{name}/annotations/fileattachment/\{annotationId} | Replace document FileAttachment annotation
*PdfApi* | [**putFileAttachmentAnnotationDataExtract**](PdfApi.md#putFileAttachmentAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/fileattachment/\{annotationId}/data/extract | Extract document FileAttachment annotation content to storage
*PdfApi* | [**putFreeTextAnnotation**](PdfApi.md#putFreeTextAnnotation) | **PUT** /pdf/\{name}/annotations/freetext/\{annotationId} | Replace document free text annotation
*PdfApi* | [**putHighlightAnnotation**](PdfApi.md#putHighlightAnnotation) | **PUT** /pdf/\{name}/annotations/highlight/\{annotationId} | Replace document highlight annotation
*PdfApi* | [**putHtmlInStorageToPdf**](PdfApi.md#putHtmlInStorageToPdf) | **PUT** /pdf/\{name}/create/html | Convert HTML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putImageExtractAsGif**](PdfApi.md#putImageExtractAsGif) | **PUT** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format to folder
*PdfApi* | [**putImageExtractAsJpeg**](PdfApi.md#putImageExtractAsJpeg) | **PUT** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format to folder
*PdfApi* | [**putImageExtractAsPng**](PdfApi.md#putImageExtractAsPng) | **PUT** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format to folder
*PdfApi* | [**putImageExtractAsTiff**](PdfApi.md#putImageExtractAsTiff) | **PUT** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format to folder
*PdfApi* | [**putImageInStorageToPdf**](PdfApi.md#putImageInStorageToPdf) | **PUT** /pdf/\{name}/create/images | Convert image file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putImagesExtractAsGif**](PdfApi.md#putImagesExtractAsGif) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/gif | Extract document images in GIF format to folder.
*PdfApi* | [**putImagesExtractAsJpeg**](PdfApi.md#putImagesExtractAsJpeg) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/jpeg | Extract document images in JPEG format to folder.
*PdfApi* | [**putImagesExtractAsPng**](PdfApi.md#putImagesExtractAsPng) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/png | Extract document images in PNG format to folder.
*PdfApi* | [**putImagesExtractAsTiff**](PdfApi.md#putImagesExtractAsTiff) | **PUT** /pdf/\{name}/pages/\{pageNumber}/images/extract/tiff | Extract document images in TIFF format to folder.
*PdfApi* | [**putInkAnnotation**](PdfApi.md#putInkAnnotation) | **PUT** /pdf/\{name}/annotations/ink/\{annotationId} | Replace document ink annotation
*PdfApi* | [**putLaTeXInStorageToPdf**](PdfApi.md#putLaTeXInStorageToPdf) | **PUT** /pdf/\{name}/create/latex | Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putLineAnnotation**](PdfApi.md#putLineAnnotation) | **PUT** /pdf/\{name}/annotations/line/\{annotationId} | Replace document line annotation
*PdfApi* | [**putLinkAnnotation**](PdfApi.md#putLinkAnnotation) | **PUT** /pdf/\{name}/links/\{linkId} | Replace document page link annotations
*PdfApi* | [**putMergeDocuments**](PdfApi.md#putMergeDocuments) | **PUT** /pdf/\{name}/merge | Merge a list of documents.
*PdfApi* | [**putMhtInStorageToPdf**](PdfApi.md#putMhtInStorageToPdf) | **PUT** /pdf/\{name}/create/mht | Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putMovieAnnotation**](PdfApi.md#putMovieAnnotation) | **PUT** /pdf/\{name}/annotations/movie/\{annotationId} | Replace document movie annotation
*PdfApi* | [**putPageAddStamp**](PdfApi.md#putPageAddStamp) | **PUT** /pdf/\{name}/pages/\{pageNumber}/stamp | Add page stamp.
*PdfApi* | [**putPageConvertToBmp**](PdfApi.md#putPageConvertToBmp) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to bmp image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToEmf**](PdfApi.md#putPageConvertToEmf) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to emf image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToGif**](PdfApi.md#putPageConvertToGif) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to gif image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToJpeg**](PdfApi.md#putPageConvertToJpeg) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToPng**](PdfApi.md#putPageConvertToPng) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to png image and upload resulting file to storage.
*PdfApi* | [**putPageConvertToTiff**](PdfApi.md#putPageConvertToTiff) | **PUT** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and upload resulting file to storage.
*PdfApi* | [**putPclInStorageToPdf**](PdfApi.md#putPclInStorageToPdf) | **PUT** /pdf/\{name}/create/pcl | Convert PCL file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putPdfInRequestToDoc**](PdfApi.md#putPdfInRequestToDoc) | **PUT** /pdf/convert/doc | Converts PDF document (in request content) to DOC format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToEpub**](PdfApi.md#putPdfInRequestToEpub) | **PUT** /pdf/convert/epub | Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToHtml**](PdfApi.md#putPdfInRequestToHtml) | **PUT** /pdf/convert/html | Converts PDF document (in request content) to Html format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToLaTeX**](PdfApi.md#putPdfInRequestToLaTeX) | **PUT** /pdf/convert/latex | Converts PDF document (in request content) to LaTeX format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToMobiXml**](PdfApi.md#putPdfInRequestToMobiXml) | **PUT** /pdf/convert/mobixml | Converts PDF document (in request content) to MOBIXML format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToPdfA**](PdfApi.md#putPdfInRequestToPdfA) | **PUT** /pdf/convert/pdfa | Converts PDF document (in request content) to PdfA format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToPptx**](PdfApi.md#putPdfInRequestToPptx) | **PUT** /pdf/convert/pptx | Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToSvg**](PdfApi.md#putPdfInRequestToSvg) | **PUT** /pdf/convert/svg | Converts PDF document (in request content) to SVG format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToTiff**](PdfApi.md#putPdfInRequestToTiff) | **PUT** /pdf/convert/tiff | Converts PDF document (in request content) to TIFF format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXls**](PdfApi.md#putPdfInRequestToXls) | **PUT** /pdf/convert/xls | Converts PDF document (in request content) to XLS format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXlsx**](PdfApi.md#putPdfInRequestToXlsx) | **PUT** /pdf/convert/xlsx | Converts PDF document (in request content) to XLSX format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXml**](PdfApi.md#putPdfInRequestToXml) | **PUT** /pdf/convert/xml | Converts PDF document (in request content) to XML format and uploads resulting file to storage.
*PdfApi* | [**putPdfInRequestToXps**](PdfApi.md#putPdfInRequestToXps) | **PUT** /pdf/convert/xps | Converts PDF document (in request content) to XPS format and uploads resulting file to storage.
*PdfApi* | [**putPdfInStorageToDoc**](PdfApi.md#putPdfInStorageToDoc) | **PUT** /pdf/\{name}/convert/doc | Converts PDF document (located on storage) to DOC format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToEpub**](PdfApi.md#putPdfInStorageToEpub) | **PUT** /pdf/\{name}/convert/epub | Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToHtml**](PdfApi.md#putPdfInStorageToHtml) | **PUT** /pdf/\{name}/convert/html | Converts PDF document (located on storage) to Html format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToLaTeX**](PdfApi.md#putPdfInStorageToLaTeX) | **PUT** /pdf/\{name}/convert/latex | Converts PDF document (located on storage) to LaTeX format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToMobiXml**](PdfApi.md#putPdfInStorageToMobiXml) | **PUT** /pdf/\{name}/convert/mobixml | Converts PDF document (located on storage) to MOBIXML format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToPdfA**](PdfApi.md#putPdfInStorageToPdfA) | **PUT** /pdf/\{name}/convert/pdfa | Converts PDF document (located on storage) to PdfA format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToPptx**](PdfApi.md#putPdfInStorageToPptx) | **PUT** /pdf/\{name}/convert/pptx | Converts PDF document (located on storage) to PPTX format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToSvg**](PdfApi.md#putPdfInStorageToSvg) | **PUT** /pdf/\{name}/convert/svg | Converts PDF document (located on storage) to SVG format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToTiff**](PdfApi.md#putPdfInStorageToTiff) | **PUT** /pdf/\{name}/convert/tiff | Converts PDF document (located on storage) to TIFF format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXls**](PdfApi.md#putPdfInStorageToXls) | **PUT** /pdf/\{name}/convert/xls | Converts PDF document (located on storage) to XLS format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXlsx**](PdfApi.md#putPdfInStorageToXlsx) | **PUT** /pdf/\{name}/convert/xlsx | Converts PDF document (located on storage) to XLSX format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXml**](PdfApi.md#putPdfInStorageToXml) | **PUT** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXps**](PdfApi.md#putPdfInStorageToXps) | **PUT** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and uploads resulting file to storage
*PdfApi* | [**putPolygonAnnotation**](PdfApi.md#putPolygonAnnotation) | **PUT** /pdf/\{name}/annotations/polygon/\{annotationId} | Replace document polygon annotation
*PdfApi* | [**putPolyLineAnnotation**](PdfApi.md#putPolyLineAnnotation) | **PUT** /pdf/\{name}/annotations/polyline/\{annotationId} | Replace document polyline annotation
*PdfApi* | [**putPopupAnnotation**](PdfApi.md#putPopupAnnotation) | **PUT** /pdf/\{name}/annotations/popup/\{annotationId} | Replace document popup annotation
*PdfApi* | [**putPrivileges**](PdfApi.md#putPrivileges) | **PUT** /pdf/\{name}/privileges | Update privilege document.
*PdfApi* | [**putPsInStorageToPdf**](PdfApi.md#putPsInStorageToPdf) | **PUT** /pdf/\{name}/create/ps | Convert PS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putRedactionAnnotation**](PdfApi.md#putRedactionAnnotation) | **PUT** /pdf/\{name}/annotations/redaction/\{annotationId} | Replace document redaction annotation
*PdfApi* | [**putReplaceImage**](PdfApi.md#putReplaceImage) | **PUT** /pdf/\{name}/images/\{imageId} | Replace document image.
*PdfApi* | [**putScreenAnnotation**](PdfApi.md#putScreenAnnotation) | **PUT** /pdf/\{name}/annotations/screen/\{annotationId} | Replace document screen annotation
*PdfApi* | [**putScreenAnnotationDataExtract**](PdfApi.md#putScreenAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/screen/\{annotationId}/data/extract | Extract document screen annotation content to storage
*PdfApi* | [**putSearchableDocument**](PdfApi.md#putSearchableDocument) | **PUT** /pdf/\{name}/ocr | Create searchable PDF document. Generate OCR layer for images in input PDF document.
*PdfApi* | [**putSetProperty**](PdfApi.md#putSetProperty) | **PUT** /pdf/\{name}/documentproperties/\{propertyName} | Add/update document property.
*PdfApi* | [**putSoundAnnotation**](PdfApi.md#putSoundAnnotation) | **PUT** /pdf/\{name}/annotations/sound/\{annotationId} | Replace document sound annotation
*PdfApi* | [**putSoundAnnotationDataExtract**](PdfApi.md#putSoundAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/sound/\{annotationId}/data/extract | Extract document sound annotation content to storage
*PdfApi* | [**putSquareAnnotation**](PdfApi.md#putSquareAnnotation) | **PUT** /pdf/\{name}/annotations/square/\{annotationId} | Replace document square annotation
*PdfApi* | [**putSquigglyAnnotation**](PdfApi.md#putSquigglyAnnotation) | **PUT** /pdf/\{name}/annotations/squiggly/\{annotationId} | Replace document squiggly annotation
*PdfApi* | [**putStampAnnotation**](PdfApi.md#putStampAnnotation) | **PUT** /pdf/\{name}/annotations/stamp/\{annotationId} | Replace document stamp annotation
*PdfApi* | [**putStampAnnotationDataExtract**](PdfApi.md#putStampAnnotationDataExtract) | **PUT** /pdf/\{name}/annotations/stamp/\{annotationId}/data/extract | Extract document stamp annotation content to storage
*PdfApi* | [**putStrikeOutAnnotation**](PdfApi.md#putStrikeOutAnnotation) | **PUT** /pdf/\{name}/annotations/strikeout/\{annotationId} | Replace document StrikeOut annotation
*PdfApi* | [**putSvgInStorageToPdf**](PdfApi.md#putSvgInStorageToPdf) | **PUT** /pdf/\{name}/create/svg | Convert SVG file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putTable**](PdfApi.md#putTable) | **PUT** /pdf/\{name}/tables/\{tableId} | Replace document page table.
*PdfApi* | [**putTextAnnotation**](PdfApi.md#putTextAnnotation) | **PUT** /pdf/\{name}/annotations/text/\{annotationId} | Replace document text annotation
*PdfApi* | [**putUnderlineAnnotation**](PdfApi.md#putUnderlineAnnotation) | **PUT** /pdf/\{name}/annotations/underline/\{annotationId} | Replace document underline annotation
*PdfApi* | [**putUpdateField**](PdfApi.md#putUpdateField) | **PUT** /pdf/\{name}/fields/\{fieldName} | Update field.
*PdfApi* | [**putUpdateFields**](PdfApi.md#putUpdateFields) | **PUT** /pdf/\{name}/fields | Update fields.
*PdfApi* | [**putWebInStorageToPdf**](PdfApi.md#putWebInStorageToPdf) | **PUT** /pdf/\{name}/create/web | Convert web page to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXfaPdfInRequestToAcroForm**](PdfApi.md#putXfaPdfInRequestToAcroForm) | **PUT** /pdf/convert/xfatoacroform | Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.
*PdfApi* | [**putXfaPdfInStorageToAcroForm**](PdfApi.md#putXfaPdfInStorageToAcroForm) | **PUT** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage
*PdfApi* | [**putXmlInStorageToPdf**](PdfApi.md#putXmlInStorageToPdf) | **PUT** /pdf/\{name}/create/xml | Convert XML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXpsInStorageToPdf**](PdfApi.md#putXpsInStorageToPdf) | **PUT** /pdf/\{name}/create/xps | Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXslFoInStorageToPdf**](PdfApi.md#putXslFoInStorageToPdf) | **PUT** /pdf/\{name}/create/xslfo | Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**storageExists**](PdfApi.md#storageExists) | **GET** /pdf/storage/\{storageName}/exist | Check if storage exists
*PdfApi* | [**uploadFile**](PdfApi.md#uploadFile) | **PUT** /pdf/storage/file/\{path} | Upload file
<a name="copyFile"></a>
## **copyFile**
> copyFile(srcPath, destPath, srcStorageName, destStorageName, versionId)

Copy file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source file path e.g. '/folder/file.ext' | 
**destPath** | **string** | Destination file path | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]
**versionId** | **string** | File version ID to copy | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyFolder"></a>
## **copyFolder**
> copyFolder(srcPath, destPath, srcStorageName, destStorageName)

Copy folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source folder path e.g. '/src' | 
**destPath** | **string** | Destination folder path e.g. '/dst' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFolder"></a>
## **createFolder**
> createFolder(path, storageName)

Create the folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path to create e.g. 'folder_1/folder_2/' | 
**storageName** | **string** | Storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAnnotation"></a>
## **deleteAnnotation**
> deleteAnnotation(name, annotationId, storage, folder)

Delete document annotation by ID

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBookmark"></a>
## **deleteBookmark**
> deleteBookmark(name, bookmarkPath, folder, storage)

Delete document bookmark by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**bookmarkPath** | **string** | The bookmark path. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentAnnotations"></a>
## **deleteDocumentAnnotations**
> deleteDocumentAnnotations(name, storage, folder)

Delete all annotations from the document

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentBookmarks"></a>
## **deleteDocumentBookmarks**
> deleteDocumentBookmarks(name, folder, storage)

Delete all document bookmarks.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentLinkAnnotations"></a>
## **deleteDocumentLinkAnnotations**
> deleteDocumentLinkAnnotations(name, storage, folder)

Delete all link annotations from the document

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentStamps"></a>
## **deleteDocumentStamps**
> deleteDocumentStamps(name, storage, folder)

Delete all stamps from the document

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentTables"></a>
## **deleteDocumentTables**
> deleteDocumentTables(name, storage, folder)

Delete all tables from the document

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteField"></a>
## **deleteField**
> deleteField(name, fieldName, storage, folder)

Delete document field by name.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**fieldName** | **string** | The field name/ | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFile"></a>
## **deleteFile**
> deleteFile(path, storageName, versionId)

Delete file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/folder/file.ext' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID to delete | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
## **deleteFolder**
> deleteFolder(path, storageName, recursive)

Delete folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path e.g. '/folder' | 
**storageName** | **string** | Storage name | [optional]
**recursive** | **boolean** | Enable to delete folders, subfolders and files | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImage"></a>
## **deleteImage**
> deleteImage(name, imageId, storage, folder)

Delete image from document page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLinkAnnotation"></a>
## **deleteLinkAnnotation**
> deleteLinkAnnotation(name, linkId, storage, folder)

Delete document page link annotation by ID

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**linkId** | **string** | The link ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePage"></a>
## **deletePage**
> deletePage(name, pageNumber, storage, folder)

Delete document page by its number.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePageAnnotations"></a>
## **deletePageAnnotations**
> deletePageAnnotations(name, pageNumber, storage, folder)

Delete all annotations from the page

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePageLinkAnnotations"></a>
## **deletePageLinkAnnotations**
> deletePageLinkAnnotations(name, pageNumber, storage, folder)

Delete all link annotations from the page

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePageStamps"></a>
## **deletePageStamps**
> deletePageStamps(name, pageNumber, storage, folder)

Delete all stamps from the page

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePageTables"></a>
## **deletePageTables**
> deletePageTables(name, pageNumber, storage, folder)

Delete all tables from the page

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProperties"></a>
## **deleteProperties**
> deleteProperties(name, storage, folder)

Delete custom document properties.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProperty"></a>
## **deleteProperty**
> deleteProperty(name, propertyName, storage, folder)

Delete document property.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**propertyName** | **string** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteStamp"></a>
## **deleteStamp**
> deleteStamp(name, stampId, storage, folder)

Delete document stamp by ID

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**stampId** | **string** | The stamp ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTable"></a>
## **deleteTable**
> deleteTable(name, tableId, storage, folder)

Delete document table by ID

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**tableId** | **string** | The table ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadFile"></a>
## **downloadFile**
> downloadFile(path, storageName, versionId)

Download file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/folder/file.ext' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID to download | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getBookmark"></a>
## **getBookmark**
> getBookmark(name, bookmarkPath, folder, storage)

Read document bookmark.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**bookmarkPath** | **string** | The bookmark path. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**BookmarkResponse**](BookmarkResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBookmarks"></a>
## **getBookmarks**
> getBookmarks(name, bookmarkPath, folder, storage)

Read document bookmarks node list.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**bookmarkPath** | **string** | The bookmark path. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**BookmarksResponse**](BookmarksResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCaretAnnotation"></a>
## **getCaretAnnotation**
> getCaretAnnotation(name, annotationId, storage, folder)

Read document page caret annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CaretAnnotationResponse**](CaretAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCircleAnnotation"></a>
## **getCircleAnnotation**
> getCircleAnnotation(name, annotationId, storage, folder)

Read document page circle annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CircleAnnotationResponse**](CircleAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscUsage"></a>
## **getDiscUsage**
> getDiscUsage(storageName)

Get disc usage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**storageName** | **string** | Storage name | [optional]

### Return type

[**DiscUsage**](DiscUsage.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocument"></a>
## **getDocument**
> getDocument(name, storage, folder)

Read common document info.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**DocumentResponse**](DocumentResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentAnnotations"></a>
## **getDocumentAnnotations**
> getDocumentAnnotations(name, storage, folder)

Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AnnotationsInfoResponse**](AnnotationsInfoResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentAttachmentByIndex"></a>
## **getDocumentAttachmentByIndex**
> getDocumentAttachmentByIndex(name, attachmentIndex, storage, folder)

Read document attachment info by its index.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**attachmentIndex** | **number** | The attachment index. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentAttachments"></a>
## **getDocumentAttachments**
> getDocumentAttachments(name, storage, folder)

Read document attachments info.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentBookmarks"></a>
## **getDocumentBookmarks**
> getDocumentBookmarks(name, folder, storage)

Read document bookmarks tree.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**BookmarksResponse**](BookmarksResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentCaretAnnotations"></a>
## **getDocumentCaretAnnotations**
> getDocumentCaretAnnotations(name, storage, folder)

Read document caret annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CaretAnnotationsResponse**](CaretAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentCircleAnnotations"></a>
## **getDocumentCircleAnnotations**
> getDocumentCircleAnnotations(name, storage, folder)

Read document circle annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CircleAnnotationsResponse**](CircleAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentFileAttachmentAnnotations"></a>
## **getDocumentFileAttachmentAnnotations**
> getDocumentFileAttachmentAnnotations(name, storage, folder)

Read document FileAttachment annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FileAttachmentAnnotationsResponse**](FileAttachmentAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentFreeTextAnnotations"></a>
## **getDocumentFreeTextAnnotations**
> getDocumentFreeTextAnnotations(name, storage, folder)

Read document free text annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FreeTextAnnotationsResponse**](FreeTextAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentHighlightAnnotations"></a>
## **getDocumentHighlightAnnotations**
> getDocumentHighlightAnnotations(name, storage, folder)

Read document highlight annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**HighlightAnnotationsResponse**](HighlightAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentInkAnnotations"></a>
## **getDocumentInkAnnotations**
> getDocumentInkAnnotations(name, storage, folder)

Read document ink annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**InkAnnotationsResponse**](InkAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentLineAnnotations"></a>
## **getDocumentLineAnnotations**
> getDocumentLineAnnotations(name, storage, folder)

Read document line annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LineAnnotationsResponse**](LineAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentMovieAnnotations"></a>
## **getDocumentMovieAnnotations**
> getDocumentMovieAnnotations(name, storage, folder)

Read document movie annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**MovieAnnotationsResponse**](MovieAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentPolygonAnnotations"></a>
## **getDocumentPolygonAnnotations**
> getDocumentPolygonAnnotations(name, storage, folder)

Read document polygon annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolygonAnnotationsResponse**](PolygonAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentPolyLineAnnotations"></a>
## **getDocumentPolyLineAnnotations**
> getDocumentPolyLineAnnotations(name, storage, folder)

Read document polyline annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolyLineAnnotationsResponse**](PolyLineAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentPopupAnnotations"></a>
## **getDocumentPopupAnnotations**
> getDocumentPopupAnnotations(name, storage, folder)

Read document popup annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PopupAnnotationsResponse**](PopupAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentPopupAnnotationsByParent"></a>
## **getDocumentPopupAnnotationsByParent**
> getDocumentPopupAnnotationsByParent(name, annotationId, storage, folder)

Read document popup annotations by parent id.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The parent annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PopupAnnotationsResponse**](PopupAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentProperties"></a>
## **getDocumentProperties**
> getDocumentProperties(name, storage, folder)

Read document properties.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**DocumentPropertiesResponse**](DocumentPropertiesResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentProperty"></a>
## **getDocumentProperty**
> getDocumentProperty(name, propertyName, storage, folder)

Read document property by name.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**propertyName** | **string** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**DocumentPropertyResponse**](DocumentPropertyResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentRedactionAnnotations"></a>
## **getDocumentRedactionAnnotations**
> getDocumentRedactionAnnotations(name, storage, folder)

Read document redaction annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**RedactionAnnotationsResponse**](RedactionAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentScreenAnnotations"></a>
## **getDocumentScreenAnnotations**
> getDocumentScreenAnnotations(name, storage, folder)

Read document screen annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**ScreenAnnotationsResponse**](ScreenAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentSoundAnnotations"></a>
## **getDocumentSoundAnnotations**
> getDocumentSoundAnnotations(name, storage, folder)

Read document sound annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SoundAnnotationsResponse**](SoundAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentSquareAnnotations"></a>
## **getDocumentSquareAnnotations**
> getDocumentSquareAnnotations(name, storage, folder)

Read document square annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquareAnnotationsResponse**](SquareAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentSquigglyAnnotations"></a>
## **getDocumentSquigglyAnnotations**
> getDocumentSquigglyAnnotations(name, storage, folder)

Read document squiggly annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquigglyAnnotationsResponse**](SquigglyAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentStampAnnotations"></a>
## **getDocumentStampAnnotations**
> getDocumentStampAnnotations(name, storage, folder)

Read document stamp annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StampAnnotationsResponse**](StampAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentStamps"></a>
## **getDocumentStamps**
> getDocumentStamps(name, storage, folder)

Read document stamps.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StampsInfoResponse**](StampsInfoResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentStrikeOutAnnotations"></a>
## **getDocumentStrikeOutAnnotations**
> getDocumentStrikeOutAnnotations(name, storage, folder)

Read document StrikeOut annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StrikeOutAnnotationsResponse**](StrikeOutAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentTables"></a>
## **getDocumentTables**
> getDocumentTables(name, storage, folder)

Read document tables.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**TablesRecognizedResponse**](TablesRecognizedResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentTextAnnotations"></a>
## **getDocumentTextAnnotations**
> getDocumentTextAnnotations(name, storage, folder)

Read document text annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**TextAnnotationsResponse**](TextAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentUnderlineAnnotations"></a>
## **getDocumentUnderlineAnnotations**
> getDocumentUnderlineAnnotations(name, storage, folder)

Read document underline annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**UnderlineAnnotationsResponse**](UnderlineAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadDocumentAttachmentByIndex"></a>
## **getDownloadDocumentAttachmentByIndex**
> getDownloadDocumentAttachmentByIndex(name, attachmentIndex, storage, folder)

Download document attachment content by its index.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**attachmentIndex** | **number** | The attachment index. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getEpubInStorageToPdf"></a>
## **getEpubInStorageToPdf**
> getEpubInStorageToPdf(srcPath, storage)

Convert EPUB file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.epub) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getField"></a>
## **getField**
> getField(name, fieldName, storage, folder)

Get document field by name.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**fieldName** | **string** | The field name/ | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FieldResponse**](FieldResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFields"></a>
## **getFields**
> getFields(name, storage, folder)

Get document fields.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FieldsResponse**](FieldsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileAttachmentAnnotation"></a>
## **getFileAttachmentAnnotation**
> getFileAttachmentAnnotation(name, annotationId, storage, folder)

Read document page FileAttachment annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FileAttachmentAnnotationResponse**](FileAttachmentAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileAttachmentAnnotationData"></a>
## **getFileAttachmentAnnotationData**
> getFileAttachmentAnnotationData(name, annotationId, storage, folder)

Read document page FileAttachment annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getFilesList"></a>
## **getFilesList**
> getFilesList(path, storageName)

Get all files and folders within a folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path e.g. '/folder' | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FilesList**](FilesList.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileVersions"></a>
## **getFileVersions**
> getFileVersions(path, storageName)

Get file versions

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/file.ext' | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FileVersions**](FileVersions.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFreeTextAnnotation"></a>
## **getFreeTextAnnotation**
> getFreeTextAnnotation(name, annotationId, storage, folder)

Read document page free text annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FreeTextAnnotationResponse**](FreeTextAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHighlightAnnotation"></a>
## **getHighlightAnnotation**
> getHighlightAnnotation(name, annotationId, storage, folder)

Read document page highlight annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**HighlightAnnotationResponse**](HighlightAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHtmlInStorageToPdf"></a>
## **getHtmlInStorageToPdf**
> getHtmlInStorageToPdf(srcPath, htmlFileName, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, storage)

Convert HTML file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.zip) | 
**htmlFileName** | **string** | Name of HTML file in ZIP. | [optional]
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getImage"></a>
## **getImage**
> getImage(name, imageId, storage, folder)

Read document image by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**ImageResponse**](ImageResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageExtractAsGif"></a>
## **getImageExtractAsGif**
> getImageExtractAsGif(name, imageId, width, height, storage, folder)

Extract document image in GIF format

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getImageExtractAsJpeg"></a>
## **getImageExtractAsJpeg**
> getImageExtractAsJpeg(name, imageId, width, height, storage, folder)

Extract document image in JPEG format

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getImageExtractAsPng"></a>
## **getImageExtractAsPng**
> getImageExtractAsPng(name, imageId, width, height, storage, folder)

Extract document image in PNG format

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getImageExtractAsTiff"></a>
## **getImageExtractAsTiff**
> getImageExtractAsTiff(name, imageId, width, height, storage, folder)

Extract document image in TIFF format

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getImages"></a>
## **getImages**
> getImages(name, pageNumber, storage, folder)

Read document images.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**ImagesResponse**](ImagesResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInkAnnotation"></a>
## **getInkAnnotation**
> getInkAnnotation(name, annotationId, storage, folder)

Read document page ink annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**InkAnnotationResponse**](InkAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLaTeXInStorageToPdf"></a>
## **getLaTeXInStorageToPdf**
> getLaTeXInStorageToPdf(srcPath, storage)

Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.tex) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getLineAnnotation"></a>
## **getLineAnnotation**
> getLineAnnotation(name, annotationId, storage, folder)

Read document page line annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LineAnnotationResponse**](LineAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLinkAnnotation"></a>
## **getLinkAnnotation**
> getLinkAnnotation(name, linkId, storage, folder)

Read document link annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**linkId** | **string** | The link ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LinkAnnotationResponse**](LinkAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMhtInStorageToPdf"></a>
## **getMhtInStorageToPdf**
> getMhtInStorageToPdf(srcPath, storage)

Convert MHT file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.mht) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getMovieAnnotation"></a>
## **getMovieAnnotation**
> getMovieAnnotation(name, annotationId, storage, folder)

Read document page movie annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**MovieAnnotationResponse**](MovieAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPage"></a>
## **getPage**
> getPage(name, pageNumber, storage, folder)

Read document page info.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**DocumentPageResponse**](DocumentPageResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageAnnotations"></a>
## **getPageAnnotations**
> getPageAnnotations(name, pageNumber, storage, folder)

Read document page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AnnotationsInfoResponse**](AnnotationsInfoResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageCaretAnnotations"></a>
## **getPageCaretAnnotations**
> getPageCaretAnnotations(name, pageNumber, storage, folder)

Read document page caret annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CaretAnnotationsResponse**](CaretAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageCircleAnnotations"></a>
## **getPageCircleAnnotations**
> getPageCircleAnnotations(name, pageNumber, storage, folder)

Read document page circle annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CircleAnnotationsResponse**](CircleAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageConvertToBmp"></a>
## **getPageConvertToBmp**
> getPageConvertToBmp(name, pageNumber, width, height, folder, storage)

Convert document page to Bmp image and return resulting file in response.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPageConvertToEmf"></a>
## **getPageConvertToEmf**
> getPageConvertToEmf(name, pageNumber, width, height, folder, storage)

Convert document page to Emf image and return resulting file in response.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPageConvertToGif"></a>
## **getPageConvertToGif**
> getPageConvertToGif(name, pageNumber, width, height, folder, storage)

Convert document page to Gif image and return resulting file in response.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPageConvertToJpeg"></a>
## **getPageConvertToJpeg**
> getPageConvertToJpeg(name, pageNumber, width, height, folder, storage)

Convert document page to Jpeg image and return resulting file in response.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPageConvertToPng"></a>
## **getPageConvertToPng**
> getPageConvertToPng(name, pageNumber, width, height, folder, storage)

Convert document page to Png image and return resulting file in response.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPageConvertToTiff"></a>
## **getPageConvertToTiff**
> getPageConvertToTiff(name, pageNumber, width, height, folder, storage)

Convert document page to Tiff image and return resulting file in response.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPageFileAttachmentAnnotations"></a>
## **getPageFileAttachmentAnnotations**
> getPageFileAttachmentAnnotations(name, pageNumber, storage, folder)

Read document page FileAttachment annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FileAttachmentAnnotationsResponse**](FileAttachmentAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageFreeTextAnnotations"></a>
## **getPageFreeTextAnnotations**
> getPageFreeTextAnnotations(name, pageNumber, storage, folder)

Read document page free text annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FreeTextAnnotationsResponse**](FreeTextAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageHighlightAnnotations"></a>
## **getPageHighlightAnnotations**
> getPageHighlightAnnotations(name, pageNumber, storage, folder)

Read document page highlight annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**HighlightAnnotationsResponse**](HighlightAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageInkAnnotations"></a>
## **getPageInkAnnotations**
> getPageInkAnnotations(name, pageNumber, storage, folder)

Read document page ink annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**InkAnnotationsResponse**](InkAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageLineAnnotations"></a>
## **getPageLineAnnotations**
> getPageLineAnnotations(name, pageNumber, storage, folder)

Read document page line annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LineAnnotationsResponse**](LineAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageLinkAnnotation"></a>
## **getPageLinkAnnotation**
> getPageLinkAnnotation(name, pageNumber, linkId, storage, folder)

Read document page link annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**linkId** | **string** | The link ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LinkAnnotationResponse**](LinkAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageLinkAnnotations"></a>
## **getPageLinkAnnotations**
> getPageLinkAnnotations(name, pageNumber, storage, folder)

Read document page link annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LinkAnnotationsResponse**](LinkAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageMovieAnnotations"></a>
## **getPageMovieAnnotations**
> getPageMovieAnnotations(name, pageNumber, storage, folder)

Read document page movie annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**MovieAnnotationsResponse**](MovieAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPagePolygonAnnotations"></a>
## **getPagePolygonAnnotations**
> getPagePolygonAnnotations(name, pageNumber, storage, folder)

Read document page polygon annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolygonAnnotationsResponse**](PolygonAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPagePolyLineAnnotations"></a>
## **getPagePolyLineAnnotations**
> getPagePolyLineAnnotations(name, pageNumber, storage, folder)

Read document page polyline annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolyLineAnnotationsResponse**](PolyLineAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPagePopupAnnotations"></a>
## **getPagePopupAnnotations**
> getPagePopupAnnotations(name, pageNumber, storage, folder)

Read document page popup annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PopupAnnotationsResponse**](PopupAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageRedactionAnnotations"></a>
## **getPageRedactionAnnotations**
> getPageRedactionAnnotations(name, pageNumber, storage, folder)

Read document page redaction annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**RedactionAnnotationsResponse**](RedactionAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPages"></a>
## **getPages**
> getPages(name, storage, folder)

Read document pages info.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**DocumentPagesResponse**](DocumentPagesResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageScreenAnnotations"></a>
## **getPageScreenAnnotations**
> getPageScreenAnnotations(name, pageNumber, storage, folder)

Read document page screen annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**ScreenAnnotationsResponse**](ScreenAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageSoundAnnotations"></a>
## **getPageSoundAnnotations**
> getPageSoundAnnotations(name, pageNumber, storage, folder)

Read document page sound annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SoundAnnotationsResponse**](SoundAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageSquareAnnotations"></a>
## **getPageSquareAnnotations**
> getPageSquareAnnotations(name, pageNumber, storage, folder)

Read document page square annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquareAnnotationsResponse**](SquareAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageSquigglyAnnotations"></a>
## **getPageSquigglyAnnotations**
> getPageSquigglyAnnotations(name, pageNumber, storage, folder)

Read document page squiggly annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquigglyAnnotationsResponse**](SquigglyAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageStampAnnotations"></a>
## **getPageStampAnnotations**
> getPageStampAnnotations(name, pageNumber, storage, folder)

Read document page stamp annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StampAnnotationsResponse**](StampAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageStamps"></a>
## **getPageStamps**
> getPageStamps(name, pageNumber, storage, folder)

Read page document stamps.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StampsInfoResponse**](StampsInfoResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageStrikeOutAnnotations"></a>
## **getPageStrikeOutAnnotations**
> getPageStrikeOutAnnotations(name, pageNumber, storage, folder)

Read document page StrikeOut annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StrikeOutAnnotationsResponse**](StrikeOutAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageTables"></a>
## **getPageTables**
> getPageTables(name, pageNumber, storage, folder)

Read document page tables.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**pageNumber** | **number** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**TablesRecognizedResponse**](TablesRecognizedResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageText"></a>
## **getPageText**
> getPageText(name, pageNumber, LLX, LLY, URX, URY, format, regex, splitRects, folder, storage)

Read page text items.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | Number of page (starting from 1). | 
**LLX** | **number** | X-coordinate of lower - left corner. | 
**LLY** | **number** | Y - coordinate of lower-left corner. | 
**URX** | **number** | X - coordinate of upper-right corner. | 
**URY** | **number** | Y - coordinate of upper-right corner. | 
**format** | **Array&lt;string&gt;** | List of formats for search. | [optional]
**regex** | **string** | Formats are specified as a regular expression. | [optional]
**splitRects** | **boolean** | Split result fragments (default is true). | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**TextRectsResponse**](TextRectsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageTextAnnotations"></a>
## **getPageTextAnnotations**
> getPageTextAnnotations(name, pageNumber, storage, folder)

Read document page text annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**TextAnnotationsResponse**](TextAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageUnderlineAnnotations"></a>
## **getPageUnderlineAnnotations**
> getPageUnderlineAnnotations(name, pageNumber, storage, folder)

Read document page underline annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**UnderlineAnnotationsResponse**](UnderlineAnnotationsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPclInStorageToPdf"></a>
## **getPclInStorageToPdf**
> getPclInStorageToPdf(srcPath, storage)

Convert PCL file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.pcl) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToDoc"></a>
## **getPdfInStorageToDoc**
> getPdfInStorageToDoc(name, addReturnToLineEnd, format, imageResolutionX, imageResolutionY, maxDistanceBetweenTextLines, mode, recognizeBullets, relativeHorizontalProximity, folder, storage)

Converts PDF document (located on storage) to DOC format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**addReturnToLineEnd** | **boolean** | Add return to line end. | [optional]
**format** | [**DocFormat**](DocFormat.md) | Allows to specify .doc or .docx file format. | [optional]
**imageResolutionX** | **number** | Image resolution X. | [optional]
**imageResolutionY** | **number** | Image resolution Y. | [optional]
**maxDistanceBetweenTextLines** | **number** | Max distance between text lines. | [optional]
**mode** | [**DocRecognitionMode**](DocRecognitionMode.md) | Allows to control how a PDF document is converted into a word processing document. | [optional]
**recognizeBullets** | **boolean** | Recognize bullets. | [optional]
**relativeHorizontalProximity** | **number** | Relative horizontal proximity. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToEpub"></a>
## **getPdfInStorageToEpub**
> getPdfInStorageToEpub(name, contentRecognitionMode, folder, storage)

Converts PDF document (located on storage) to EPUB format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**contentRecognitionMode** | [**EpubRecognitionMode**](EpubRecognitionMode.md) | Property tunes conversion for this or that desirable method of recognition of content. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToHtml"></a>
## **getPdfInStorageToHtml**
> getPdfInStorageToHtml(name, additionalMarginWidthInPoints, compressSvgGraphicsIfAny, convertMarkedContentToLayers, defaultFontName, documentType, fixedLayout, imageResolution, minimalLineWidth, preventGlyphsGrouping, splitCssIntoPages, splitIntoPages, useZOrder, antialiasingProcessing, cssClassNamesPrefix, explicitListOfSavedPages, fontEncodingStrategy, fontSavingMode, htmlMarkupGenerationMode, lettersPositioningMethod, pagesFlowTypeDependsOnViewersScreenSize, partsEmbeddingMode, rasterImagesSavingMode, removeEmptyAreasOnTopAndBottom, saveShadowedTextsAsTransparentTexts, saveTransparentTexts, specialFolderForAllImages, specialFolderForSvgImages, trySaveTextUnderliningAndStrikeoutingInCss, folder, storage)

Converts PDF document (located on storage) to Html format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**additionalMarginWidthInPoints** | **number** | Defines width of margin that will be forcibly left around that output HTML-areas. | [optional]
**compressSvgGraphicsIfAny** | **boolean** | The flag that indicates whether found SVG graphics(if any) will be compressed(zipped) into SVGZ format during saving. | [optional]
**convertMarkedContentToLayers** | **boolean** | If attribute ConvertMarkedContentToLayers set to true then an all elements inside a PDF marked content (layer) will be put into an HTML div with "data-pdflayer" attribute specifying a layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content. | [optional]
**defaultFontName** | **string** | Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used. | [optional]
**documentType** | [**HtmlDocumentType**](HtmlDocumentType.md) | Result document type. | [optional]
**fixedLayout** | **boolean** | The value indicating whether that HTML is created as fixed layout. | [optional]
**imageResolution** | **number** | Resolution for image rendering. | [optional]
**minimalLineWidth** | **number** | This attribute sets minimal width of graphic path line. If thickness of line is less than 1px Adobe Acrobat rounds it to this value. So this attribute can be used to emulate this behavior for HTML browsers. | [optional]
**preventGlyphsGrouping** | **boolean** | This attribute switch on the mode when text glyphs will not be grouped into words and strings This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of FixedLayout attribute is true. | [optional]
**splitCssIntoPages** | **boolean** | When multipage-mode selected(i.e 'SplitIntoPages' is 'true'), then this attribute defines whether should be created separate CSS-file for each result HTML page. | [optional]
**splitIntoPages** | **boolean** | The flag that indicates whether each page of source document will be converted into it's own target HTML document, i.e whether result HTML will be splitted into several HTML-pages. | [optional]
**useZOrder** | **boolean** | If attribute UseZORder set to true, graphics and text are added to resultant HTML document accordingly Z-order in original PDF document. If this attribute is false all graphics is put as single layer which may cause some unnecessary effects for overlapped objects. | [optional]
**antialiasingProcessing** | [**AntialiasingProcessingType**](AntialiasingProcessingType.md) | The parameter defines required antialiasing measures during conversion of compound background images from PDF to HTML. | [optional]
**cssClassNamesPrefix** | **string** | When PDFtoHTML converter generates result CSSs, CSS class names (something like ".stl_01 {}" ... ".stl_NN {}) are generated and used in result CSS. This property allows forcibly set class name prefix. | [optional]
**explicitListOfSavedPages** | **Array&lt;number&gt;** | With this property You can explicitely define what pages of document should be converted. Pages in this list must have 1-based numbers. I.e. valid numbers of pages must be taken from range (1...[NumberOfPagesInConvertedDocument]) Order of appearing of pages in this list does not affect their order in result HTML page(s) - in result pages allways will go in order in which they are present in source PDF. | [optional]
**fontEncodingStrategy** | [**FontEncodingRules**](FontEncodingRules.md) | Defines encoding special rule to tune PDF decoding for current document. | [optional]
**fontSavingMode** | [**FontSavingModes**](FontSavingModes.md) | Defines font saving mode that will be used during saving of PDF to desirable format. | [optional]
**htmlMarkupGenerationMode** | [**HtmlMarkupGenerationModes**](HtmlMarkupGenerationModes.md) | Sometimes specific reqirments to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments. | [optional]
**lettersPositioningMethod** | [**LettersPositioningMethods**](LettersPositioningMethods.md) | The mode of positioning of letters in words in result HTML. | [optional]
**pagesFlowTypeDependsOnViewersScreenSize** | **boolean** | If attribute 'SplitOnPages=false', than whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such way that flow of areas that represent PDF pages in result HTML will depend on screen resolution of viewer. | [optional]
**partsEmbeddingMode** | [**PartsEmbeddingModes**](PartsEmbeddingModes.md) | It defines whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities. | [optional]
**rasterImagesSavingMode** | [**RasterImagesSavingModes**](RasterImagesSavingModes.md) | Converted PDF can contain raster images This parameter defines how they should be handled during conversion of PDF to HTML. | [optional]
**removeEmptyAreasOnTopAndBottom** | **boolean** | Defines whether in created HTML will be removed top and bottom empty area without any content (if any). | [optional]
**saveShadowedTextsAsTransparentTexts** | **boolean** | Pdf can contain texts that are shadowed by another elements (f.e. by images) but can be selected to clipboard in Acrobat Reader (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML to mimic behaviour of Acrobat Reader (othervise such texts are usually saved as hidden, not available for copying to clipboard). | [optional]
**saveTransparentTexts** | **boolean** | Pdf can contain transparent texts that can be selected to clipboard (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML. | [optional]
**specialFolderForAllImages** | **string** | The path to directory to which must be saved any images if they are encountered during saving of document as HTML. If parameter is empty or null then image files(if any) wil be saved together with other files linked to HTML It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file. | [optional]
**specialFolderForSvgImages** | **string** | The path to directory to which must be saved only SVG-images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG files(if any) wil be saved together with other image-files (near to output file) or in special folder for images (if it specified in SpecialImagesFolderIfAny option). It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file. | [optional]
**trySaveTextUnderliningAndStrikeoutingInCss** | **boolean** | PDF itself does not contain underlining markers for texts. It emulated with line situated under text. This option allows converter try guess that this or that line is a text's underlining and put this info into CSS instead of drawing of underlining graphically. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToLaTeX"></a>
## **getPdfInStorageToLaTeX**
> getPdfInStorageToLaTeX(name, pagesCount, folder, storage)

Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pagesCount** | **number** | Pages count. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToMobiXml"></a>
## **getPdfInStorageToMobiXml**
> getPdfInStorageToMobiXml(name, folder, storage)

Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToPdfA"></a>
## **getPdfInStorageToPdfA**
> getPdfInStorageToPdfA(name, type, folder, storage)

Converts PDF document (located on storage) to PdfA format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**type** | [**PdfAType**](PdfAType.md) | Type of PdfA format. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToPptx"></a>
## **getPdfInStorageToPptx**
> getPdfInStorageToPptx(name, separateImages, slidesAsImages, folder, storage)

Converts PDF document (located on storage) to PPTX format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**separateImages** | **boolean** | Separate images. | [optional]
**slidesAsImages** | **boolean** | Slides as images. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToSvg"></a>
## **getPdfInStorageToSvg**
> getPdfInStorageToSvg(name, compressOutputToZipArchive, folder, storage)

Converts PDF document (located on storage) to SVG format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**compressOutputToZipArchive** | **boolean** | Specifies whether output will be created as one zip-archive. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToTiff"></a>
## **getPdfInStorageToTiff**
> getPdfInStorageToTiff(name, brightness, compression, colorDepth, leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height, xResolution, yResolution, pageIndex, pageCount, folder, storage)

Converts PDF document (located on storage) to TIFF format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**brightness** | **number** | Image brightness. | [optional]
**compression** | [**CompressionType**](CompressionType.md) | Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None. | [optional]
**colorDepth** | [**ColorDepth**](ColorDepth.md) | Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp. | [optional]
**leftMargin** | **number** | Left image margin. | [optional]
**rightMargin** | **number** | Right image margin. | [optional]
**topMargin** | **number** | Top image margin. | [optional]
**bottomMargin** | **number** | Bottom image margin. | [optional]
**orientation** | [**ShapeType**](ShapeType.md) | Image orientation. Possible values are: None, Landscape, Portait. | [optional]
**skipBlankPages** | **boolean** | Skip blank pages flag. | [optional]
**width** | **number** | Image width. | [optional]
**height** | **number** | Image height. | [optional]
**xResolution** | **number** | Horizontal resolution. | [optional]
**yResolution** | **number** | Vertical resolution. | [optional]
**pageIndex** | **number** | Start page to export. | [optional]
**pageCount** | **number** | Number of pages to export. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXls"></a>
## **getPdfInStorageToXls**
> getPdfInStorageToXls(name, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, folder, storage)

Converts PDF document (located on storage) to XLS format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**insertBlankColumnAtFirst** | **boolean** | Insert blank column at first | [optional]
**minimizeTheNumberOfWorksheets** | **boolean** | Minimize the number of worksheets | [optional]
**scaleFactor** | **number** | Scale factor | [optional]
**uniformWorksheets** | **boolean** | Uniform worksheets | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXlsx"></a>
## **getPdfInStorageToXlsx**
> getPdfInStorageToXlsx(name, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, folder, storage)

Converts PDF document (located on storage) to XLSX format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**insertBlankColumnAtFirst** | **boolean** | Insert blank column at first | [optional]
**minimizeTheNumberOfWorksheets** | **boolean** | Minimize the number of worksheets | [optional]
**scaleFactor** | **number** | Scale factor | [optional]
**uniformWorksheets** | **boolean** | Uniform worksheets | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXml"></a>
## **getPdfInStorageToXml**
> getPdfInStorageToXml(name, folder, storage)

Converts PDF document (located on storage) to XML format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXps"></a>
## **getPdfInStorageToXps**
> getPdfInStorageToXps(name, folder, storage)

Converts PDF document (located on storage) to XPS format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPolygonAnnotation"></a>
## **getPolygonAnnotation**
> getPolygonAnnotation(name, annotationId, storage, folder)

Read document page polygon annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolygonAnnotationResponse**](PolygonAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPolyLineAnnotation"></a>
## **getPolyLineAnnotation**
> getPolyLineAnnotation(name, annotationId, storage, folder)

Read document page polyline annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolyLineAnnotationResponse**](PolyLineAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPopupAnnotation"></a>
## **getPopupAnnotation**
> getPopupAnnotation(name, annotationId, storage, folder)

Read document page popup annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PopupAnnotationResponse**](PopupAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPsInStorageToPdf"></a>
## **getPsInStorageToPdf**
> getPsInStorageToPdf(srcPath, storage)

Convert PS file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.ps) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getRedactionAnnotation"></a>
## **getRedactionAnnotation**
> getRedactionAnnotation(name, annotationId, storage, folder)

Read document page redaction annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**RedactionAnnotationResponse**](RedactionAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScreenAnnotation"></a>
## **getScreenAnnotation**
> getScreenAnnotation(name, annotationId, storage, folder)

Read document page screen annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**ScreenAnnotationResponse**](ScreenAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScreenAnnotationData"></a>
## **getScreenAnnotationData**
> getScreenAnnotationData(name, annotationId, storage, folder)

Read document page screen annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getSoundAnnotation"></a>
## **getSoundAnnotation**
> getSoundAnnotation(name, annotationId, storage, folder)

Read document page sound annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SoundAnnotationResponse**](SoundAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSoundAnnotationData"></a>
## **getSoundAnnotationData**
> getSoundAnnotationData(name, annotationId, storage, folder)

Read document page sound annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getSquareAnnotation"></a>
## **getSquareAnnotation**
> getSquareAnnotation(name, annotationId, storage, folder)

Read document page square annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquareAnnotationResponse**](SquareAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSquigglyAnnotation"></a>
## **getSquigglyAnnotation**
> getSquigglyAnnotation(name, annotationId, storage, folder)

Read document page squiggly annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquigglyAnnotationResponse**](SquigglyAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStampAnnotation"></a>
## **getStampAnnotation**
> getStampAnnotation(name, annotationId, storage, folder)

Read document page stamp annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StampAnnotationResponse**](StampAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStampAnnotationData"></a>
## **getStampAnnotationData**
> getStampAnnotationData(name, annotationId, storage, folder)

Read document page stamp annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStrikeOutAnnotation"></a>
## **getStrikeOutAnnotation**
> getStrikeOutAnnotation(name, annotationId, storage, folder)

Read document page StrikeOut annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StrikeOutAnnotationResponse**](StrikeOutAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSvgInStorageToPdf"></a>
## **getSvgInStorageToPdf**
> getSvgInStorageToPdf(srcPath, adjustPageSize, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, storage)

Convert SVG file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.svg) | 
**adjustPageSize** | **boolean** | Adjust page size | [optional]
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getTable"></a>
## **getTable**
> getTable(name, tableId, storage, folder)

Read document page table by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**tableId** | **string** | The table ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**TableRecognizedResponse**](TableRecognizedResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getText"></a>
## **getText**
> getText(name, LLX, LLY, URX, URY, format, regex, splitRects, folder, storage)

Read document text.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**LLX** | **number** | X-coordinate of lower - left corner. | 
**LLY** | **number** | Y - coordinate of lower-left corner. | 
**URX** | **number** | X - coordinate of upper-right corner. | 
**URY** | **number** | Y - coordinate of upper-right corner. | 
**format** | **Array&lt;string&gt;** | List of formats for search. | [optional]
**regex** | **string** | Formats are specified as a regular expression. | [optional]
**splitRects** | **boolean** | Split result fragments (default is true). | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**TextRectsResponse**](TextRectsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTextAnnotation"></a>
## **getTextAnnotation**
> getTextAnnotation(name, annotationId, storage, folder)

Read document page text annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**TextAnnotationResponse**](TextAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnderlineAnnotation"></a>
## **getUnderlineAnnotation**
> getUnderlineAnnotation(name, annotationId, storage, folder)

Read document page underline annotation by ID.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**UnderlineAnnotationResponse**](UnderlineAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVerifySignature"></a>
## **getVerifySignature**
> getVerifySignature(name, signName, storage, folder)

Verify signature document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**signName** | **string** | Sign name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SignatureVerifyResponse**](SignatureVerifyResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebInStorageToPdf"></a>
## **getWebInStorageToPdf**
> getWebInStorageToPdf(url, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, storage)

Convert web page to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**url** | **string** | Source url | 
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getWordsPerPage"></a>
## **getWordsPerPage**
> getWordsPerPage(name, storage, folder)

Get number of words per document page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**WordCountResponse**](WordCountResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getXfaPdfInStorageToAcroForm"></a>
## **getXfaPdfInStorageToAcroForm**
> getXfaPdfInStorageToAcroForm(name, folder, storage)

Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getXmlInStorageToPdf"></a>
## **getXmlInStorageToPdf**
> getXmlInStorageToPdf(srcPath, xslFilePath, storage)

Convert XML file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xml) | 
**xslFilePath** | **string** | Full XSL source filename (ex. /folder1/folder2/template.xsl) | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getXpsInStorageToPdf"></a>
## **getXpsInStorageToPdf**
> getXpsInStorageToPdf(srcPath, storage)

Convert XPS file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xps) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getXslFoInStorageToPdf"></a>
## **getXslFoInStorageToPdf**
> getXslFoInStorageToPdf(srcPath, storage)

Convert XslFo file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xslfo) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="moveFile"></a>
## **moveFile**
> moveFile(srcPath, destPath, srcStorageName, destStorageName, versionId)

Move file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source file path e.g. '/src.ext' | 
**destPath** | **string** | Destination file path e.g. '/dest.ext' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]
**versionId** | **string** | File version ID to move | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFolder"></a>
## **moveFolder**
> moveFolder(srcPath, destPath, srcStorageName, destStorageName)

Move folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Folder path to move e.g. '/folder' | 
**destPath** | **string** | Destination folder path to move to e.g '/dst' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectExists"></a>
## **objectExists**
> objectExists(path, storageName, versionId)

Check if file or folder exists

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File or folder path e.g. '/file.ext' or '/folder' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID | [optional]

### Return type

[**ObjectExist**](ObjectExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postAppendDocument"></a>
## **postAppendDocument**
> postAppendDocument(name, appendFile, startPage, endPage, storage, folder)

Append document to existing one.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The original document name. | 
**appendFile** | **string** | Append file server path. | 
**startPage** | **number** | Appending start page. | [optional]
**endPage** | **number** | Appending end page. | [optional]
**storage** | **string** | The documents storage. | [optional]
**folder** | **string** | The original document folder. | [optional]

### Return type

[**DocumentResponse**](DocumentResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postBookmark"></a>
## **postBookmark**
> postBookmark(name, bookmarkPath, bookmarks, folder, storage)

Add document bookmarks.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**bookmarkPath** | **string** | The bookmark path. | 
**bookmarks** | [**Array&lt;Bookmark&gt;**](Bookmark.md) | The array of bookmark. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**BookmarksResponse**](BookmarksResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postChangePasswordDocumentInStorage"></a>
## **postChangePasswordDocumentInStorage**
> postChangePasswordDocumentInStorage(name, ownerPassword, newUserPassword, newOwnerPassword, storage, folder)

Change document password in storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Document name. | 
**ownerPassword** | **string** | Owner password (encrypted Base64). | 
**newUserPassword** | **string** | New user password (encrypted Base64). | 
**newOwnerPassword** | **string** | New owner password (encrypted Base64). | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCreateField"></a>
## **postCreateField**
> postCreateField(name, page, field, storage, folder)

Create field.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**page** | **number** | Document page number. | 
**field** | [**Field**](Field.md) | Field with the field data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDecryptDocumentInStorage"></a>
## **postDecryptDocumentInStorage**
> postDecryptDocumentInStorage(name, password, storage, folder)

Decrypt document in storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Document name. | 
**password** | **string** | The password (encrypted Base64). | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentImageFooter"></a>
## **postDocumentImageFooter**
> postDocumentImageFooter(name, imageFooter, startPageNumber, endPageNumber, storage, folder)

Add document image footer.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageFooter** | [**ImageFooter**](ImageFooter.md) | The image footer. | 
**startPageNumber** | **number** | The start page number. | [optional]
**endPageNumber** | **number** | The end page number. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentImageHeader"></a>
## **postDocumentImageHeader**
> postDocumentImageHeader(name, imageHeader, startPageNumber, endPageNumber, storage, folder)

Add document image header.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageHeader** | [**ImageHeader**](ImageHeader.md) | The image header. | 
**startPageNumber** | **number** | The start page number. | [optional]
**endPageNumber** | **number** | The end page number. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentPageNumberStamps"></a>
## **postDocumentPageNumberStamps**
> postDocumentPageNumberStamps(name, stamp, startPageNumber, endPageNumber, storage, folder)

Add document page number stamps.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**stamp** | [**PageNumberStamp**](PageNumberStamp.md) | The stamp. | 
**startPageNumber** | **number** | The start page number. | [optional]
**endPageNumber** | **number** | The end page number. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentTextFooter"></a>
## **postDocumentTextFooter**
> postDocumentTextFooter(name, textFooter, startPageNumber, endPageNumber, storage, folder)

Add document text footer.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**textFooter** | [**TextFooter**](TextFooter.md) | The text footer. | 
**startPageNumber** | **number** | The start page number. | [optional]
**endPageNumber** | **number** | The end page number. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentTextHeader"></a>
## **postDocumentTextHeader**
> postDocumentTextHeader(name, textHeader, startPageNumber, endPageNumber, storage, folder)

Add document text header.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**textHeader** | [**TextHeader**](TextHeader.md) | The text header. | 
**startPageNumber** | **number** | The start page number. | [optional]
**endPageNumber** | **number** | The end page number. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentTextReplace"></a>
## **postDocumentTextReplace**
> postDocumentTextReplace(name, textReplace, storage, folder)

Document's replace text method.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**textReplace** | [**TextReplaceListRequest**](TextReplaceListRequest.md) |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**TextReplaceResponse**](TextReplaceResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEncryptDocumentInStorage"></a>
## **postEncryptDocumentInStorage**
> postEncryptDocumentInStorage(name, userPassword, ownerPassword, cryptoAlgorithm, permissionsFlags, usePdf20, storage, folder)

Encrypt document in storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Document name. | 
**userPassword** | **string** | User password (encrypted Base64). | 
**ownerPassword** | **string** | Owner password (encrypted Base64). | 
**cryptoAlgorithm** | [**CryptoAlgorithm**](CryptoAlgorithm.md) | Cryptographic algorithm, see CryptoAlgorithm for details. | 
**permissionsFlags** | **Array&lt;&gt;** | Array of document permissions, see PermissionsFlags for details. | [optional]
**usePdf20** | **boolean** | Support for revision 6 (Extension 8). | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFlattenDocument"></a>
## **postFlattenDocument**
> postFlattenDocument(name, updateAppearances, callEvents, hideButtons, storage, folder)

Flatten the document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**updateAppearances** | **boolean** | If set, all field appearances will be regenerated before flattening. This option may help if field is incorrectly flattened. This option may decrease performance.. | [optional]
**callEvents** | **boolean** | If set, formatting and other JavaScript events will be called. | [optional]
**hideButtons** | **boolean** | If set, buttons will be removed from flattened document. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postInsertImage"></a>
## **postInsertImage**
> postInsertImage(name, pageNumber, llx, lly, urx, ury, imageFilePath, storage, folder, image)

Insert image to document page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**llx** | **number** | Coordinate lower left X. | 
**lly** | **number** | Coordinate lower left Y. | 
**urx** | **number** | Coordinate upper right X. | 
**ury** | **number** | Coordinate upper right Y. | 
**imageFilePath** | **string** | Path to image file if specified. Request content is used otherwise. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**image** | **Buffer** | Image file. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="postMovePage"></a>
## **postMovePage**
> postMovePage(name, pageNumber, newIndex, storage, folder)

Move page to new position.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**newIndex** | **number** | The new page position/index. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOptimizeDocument"></a>
## **postOptimizeDocument**
> postOptimizeDocument(name, options, storage, folder)

Optimize document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**options** | [**OptimizeOptions**](OptimizeOptions.md) | The optimization options. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageCaretAnnotations"></a>
## **postPageCaretAnnotations**
> postPageCaretAnnotations(name, pageNumber, annotations, storage, folder)

Add document page caret annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;CaretAnnotation&gt;**](CaretAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageCircleAnnotations"></a>
## **postPageCircleAnnotations**
> postPageCircleAnnotations(name, pageNumber, annotations, storage, folder)

Add document page circle annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;CircleAnnotation&gt;**](CircleAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageFileAttachmentAnnotations"></a>
## **postPageFileAttachmentAnnotations**
> postPageFileAttachmentAnnotations(name, pageNumber, annotations, storage, folder)

Add document page FileAttachment annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;FileAttachmentAnnotation&gt;**](FileAttachmentAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageFreeTextAnnotations"></a>
## **postPageFreeTextAnnotations**
> postPageFreeTextAnnotations(name, pageNumber, annotations, storage, folder)

Add document page free text annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;FreeTextAnnotation&gt;**](FreeTextAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageHighlightAnnotations"></a>
## **postPageHighlightAnnotations**
> postPageHighlightAnnotations(name, pageNumber, annotations, storage, folder)

Add document page highlight annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;HighlightAnnotation&gt;**](HighlightAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageImageStamps"></a>
## **postPageImageStamps**
> postPageImageStamps(name, pageNumber, stamps, storage, folder)

Add document page image stamps.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**stamps** | [**Array&lt;ImageStamp&gt;**](ImageStamp.md) | The array of stamp. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageInkAnnotations"></a>
## **postPageInkAnnotations**
> postPageInkAnnotations(name, pageNumber, annotations, storage, folder)

Add document page ink annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;InkAnnotation&gt;**](InkAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageLineAnnotations"></a>
## **postPageLineAnnotations**
> postPageLineAnnotations(name, pageNumber, annotations, storage, folder)

Add document page line annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;LineAnnotation&gt;**](LineAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageLinkAnnotations"></a>
## **postPageLinkAnnotations**
> postPageLinkAnnotations(name, pageNumber, links, storage, folder)

Add document page link annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**links** | [**Array&lt;LinkAnnotation&gt;**](LinkAnnotation.md) | Array of link anotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageMovieAnnotations"></a>
## **postPageMovieAnnotations**
> postPageMovieAnnotations(name, pageNumber, annotations, storage, folder)

Add document page movie annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;MovieAnnotation&gt;**](MovieAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPagePdfPageStamps"></a>
## **postPagePdfPageStamps**
> postPagePdfPageStamps(name, pageNumber, stamps, storage, folder)

Add document pdf page stamps.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**stamps** | [**Array&lt;PdfPageStamp&gt;**](PdfPageStamp.md) | The array of stamp. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPagePolygonAnnotations"></a>
## **postPagePolygonAnnotations**
> postPagePolygonAnnotations(name, pageNumber, annotations, storage, folder)

Add document page polygon annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;PolygonAnnotation&gt;**](PolygonAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPagePolyLineAnnotations"></a>
## **postPagePolyLineAnnotations**
> postPagePolyLineAnnotations(name, pageNumber, annotations, storage, folder)

Add document page polyline annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;PolyLineAnnotation&gt;**](PolyLineAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageRedactionAnnotations"></a>
## **postPageRedactionAnnotations**
> postPageRedactionAnnotations(name, pageNumber, annotations, storage, folder)

Add document page redaction annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;RedactionAnnotation&gt;**](RedactionAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageScreenAnnotations"></a>
## **postPageScreenAnnotations**
> postPageScreenAnnotations(name, pageNumber, annotations, storage, folder)

Add document page screen annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;ScreenAnnotation&gt;**](ScreenAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageSoundAnnotations"></a>
## **postPageSoundAnnotations**
> postPageSoundAnnotations(name, pageNumber, annotations, storage, folder)

Add document page sound annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;SoundAnnotation&gt;**](SoundAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageSquareAnnotations"></a>
## **postPageSquareAnnotations**
> postPageSquareAnnotations(name, pageNumber, annotations, storage, folder)

Add document page square annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;SquareAnnotation&gt;**](SquareAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageSquigglyAnnotations"></a>
## **postPageSquigglyAnnotations**
> postPageSquigglyAnnotations(name, pageNumber, annotations, storage, folder)

Add document page squiggly annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;SquigglyAnnotation&gt;**](SquigglyAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageStampAnnotations"></a>
## **postPageStampAnnotations**
> postPageStampAnnotations(name, pageNumber, annotations, storage, folder)

Add document page stamp annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;StampAnnotation&gt;**](StampAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageStrikeOutAnnotations"></a>
## **postPageStrikeOutAnnotations**
> postPageStrikeOutAnnotations(name, pageNumber, annotations, storage, folder)

Add document page StrikeOut annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;StrikeOutAnnotation&gt;**](StrikeOutAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageTables"></a>
## **postPageTables**
> postPageTables(name, pageNumber, tables, storage, folder)

Add document page tables.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**tables** | [**Array&lt;Table&gt;**](Table.md) | The array of table. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageTextAnnotations"></a>
## **postPageTextAnnotations**
> postPageTextAnnotations(name, pageNumber, annotations, storage, folder)

Add document page text annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;TextAnnotation&gt;**](TextAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageTextReplace"></a>
## **postPageTextReplace**
> postPageTextReplace(name, pageNumber, textReplaceListRequest, storage, folder)

Page's replace text method.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**pageNumber** | **number** |  | 
**textReplaceListRequest** | [**TextReplaceListRequest**](TextReplaceListRequest.md) |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**TextReplaceResponse**](TextReplaceResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageTextStamps"></a>
## **postPageTextStamps**
> postPageTextStamps(name, pageNumber, stamps, storage, folder)

Add document page text stamps.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**stamps** | [**Array&lt;TextStamp&gt;**](TextStamp.md) | The array of stamp. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageUnderlineAnnotations"></a>
## **postPageUnderlineAnnotations**
> postPageUnderlineAnnotations(name, pageNumber, annotations, storage, folder)

Add document page underline annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**annotations** | [**Array&lt;UnderlineAnnotation&gt;**](UnderlineAnnotation.md) | The array of annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPopupAnnotation"></a>
## **postPopupAnnotation**
> postPopupAnnotation(name, annotationId, annotation, storage, folder)

Add document popup annotations.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The parent annotation ID. | 
**annotation** | [**PopupAnnotation**](PopupAnnotation.md) | The annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSignDocument"></a>
## **postSignDocument**
> postSignDocument(name, sign, storage, folder)

Sign document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**sign** | [**Signature**](Signature.md) | Signature object containing signature data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSignPage"></a>
## **postSignPage**
> postSignPage(name, pageNumber, sign, storage, folder)

Sign page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**sign** | [**Signature**](Signature.md) | Signature object containing signature data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSplitDocument"></a>
## **postSplitDocument**
> postSplitDocument(name, format, from, to, storage, folder)

Split document to parts.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Document name. | 
**format** | **string** | Resulting documents format. | [optional]
**from** | **number** | Start page if defined. | [optional]
**to** | **number** | End page if defined. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SplitResultResponse**](SplitResultResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putAddNewPage"></a>
## **putAddNewPage**
> putAddNewPage(name, storage, folder)

Add new page to end of the document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**DocumentPagesResponse**](DocumentPagesResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putAddText"></a>
## **putAddText**
> putAddText(name, pageNumber, paragraph, folder, storage)

Add text to PDF document page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | Number of page (starting from 1). | 
**paragraph** | [**Paragraph**](Paragraph.md) | Paragraph data. | 
**folder** | **string** | Document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putAnnotationsFlatten"></a>
## **putAnnotationsFlatten**
> putAnnotationsFlatten(name, startPage, endPage, annotationTypes, storage, folder)

Flattens the annotations of the specified types

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**startPage** | **number** | The start page number. | [optional]
**endPage** | **number** | The end page number. | [optional]
**annotationTypes** | **Array&lt;&gt;** | Array of annotation types. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putBookmark"></a>
## **putBookmark**
> putBookmark(name, bookmarkPath, bookmark, folder, storage)

Update document bookmark.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**bookmarkPath** | **string** | The bookmark path. | 
**bookmark** | [**Bookmark**](Bookmark.md) | The bookmark. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**BookmarkResponse**](BookmarkResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCaretAnnotation"></a>
## **putCaretAnnotation**
> putCaretAnnotation(name, annotationId, annotation, storage, folder)

Replace document caret annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**CaretAnnotation**](CaretAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CaretAnnotationResponse**](CaretAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putChangePasswordDocument"></a>
## **putChangePasswordDocument**
> putChangePasswordDocument(outPath, ownerPassword, newUserPassword, newOwnerPassword, storage, file)

Change document password from content.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.doc) | 
**ownerPassword** | **string** | Owner password (encrypted Base64). | 
**newUserPassword** | **string** | New user password (encrypted Base64). | 
**newOwnerPassword** | **string** | New owner password (encrypted Base64). | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be changed password. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putCircleAnnotation"></a>
## **putCircleAnnotation**
> putCircleAnnotation(name, annotationId, annotation, storage, folder)

Replace document circle annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**CircleAnnotation**](CircleAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**CircleAnnotationResponse**](CircleAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCreateDocument"></a>
## **putCreateDocument**
> putCreateDocument(name, storage, folder)

Create empty document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The new document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The new document folder. | [optional]

### Return type

[**DocumentResponse**](DocumentResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDecryptDocument"></a>
## **putDecryptDocument**
> putDecryptDocument(outPath, password, storage, file)

Decrypt document from content.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.doc) | 
**password** | **string** | The password (encrypted Base64). | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be derypted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putEncryptDocument"></a>
## **putEncryptDocument**
> putEncryptDocument(outPath, userPassword, ownerPassword, cryptoAlgorithm, permissionsFlags, usePdf20, storage, file)

Encrypt document from content.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.doc) | 
**userPassword** | **string** | User password (encrypted Base64). | 
**ownerPassword** | **string** | Owner password (encrypted Base64). | 
**cryptoAlgorithm** | [**CryptoAlgorithm**](CryptoAlgorithm.md) | Cryptographic algorithm, see CryptoAlgorithm for details. | 
**permissionsFlags** | **Array&lt;&gt;** | Array of document permissions, see PermissionsFlags for details. | [optional]
**usePdf20** | **boolean** | Support for revision 6 (Extension 8). | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be encrypted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putEpubInStorageToPdf"></a>
## **putEpubInStorageToPdf**
> putEpubInStorageToPdf(name, srcPath, storage, dstFolder)

Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.epub) | 
**storage** | **string** | The document storage. | [optional]
**dstFolder** | **string** | The destination document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFieldsFlatten"></a>
## **putFieldsFlatten**
> putFieldsFlatten(name, storage, folder)

Flatten form fields in document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFileAttachmentAnnotation"></a>
## **putFileAttachmentAnnotation**
> putFileAttachmentAnnotation(name, annotationId, annotation, storage, folder)

Replace document FileAttachment annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**FileAttachmentAnnotation**](FileAttachmentAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FileAttachmentAnnotationResponse**](FileAttachmentAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFileAttachmentAnnotationDataExtract"></a>
## **putFileAttachmentAnnotationDataExtract**
> putFileAttachmentAnnotationDataExtract(name, annotationId, outFolder, storage, folder)

Extract document FileAttachment annotation content to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**outFolder** | **string** | The output folder. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFreeTextAnnotation"></a>
## **putFreeTextAnnotation**
> putFreeTextAnnotation(name, annotationId, annotation, storage, folder)

Replace document free text annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**FreeTextAnnotation**](FreeTextAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FreeTextAnnotationResponse**](FreeTextAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putHighlightAnnotation"></a>
## **putHighlightAnnotation**
> putHighlightAnnotation(name, annotationId, annotation, storage, folder)

Replace document highlight annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**HighlightAnnotation**](HighlightAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**HighlightAnnotationResponse**](HighlightAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putHtmlInStorageToPdf"></a>
## **putHtmlInStorageToPdf**
> putHtmlInStorageToPdf(name, srcPath, htmlFileName, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, dstFolder, storage)

Convert HTML file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.zip) | 
**htmlFileName** | **string** | Name of HTML file in ZIP. | [optional]
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImageExtractAsGif"></a>
## **putImageExtractAsGif**
> putImageExtractAsGif(name, imageId, width, height, storage, folder, destFolder)

Extract document image in GIF format to folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImageExtractAsJpeg"></a>
## **putImageExtractAsJpeg**
> putImageExtractAsJpeg(name, imageId, width, height, storage, folder, destFolder)

Extract document image in JPEG format to folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImageExtractAsPng"></a>
## **putImageExtractAsPng**
> putImageExtractAsPng(name, imageId, width, height, storage, folder, destFolder)

Extract document image in PNG format to folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImageExtractAsTiff"></a>
## **putImageExtractAsTiff**
> putImageExtractAsTiff(name, imageId, width, height, storage, folder, destFolder)

Extract document image in TIFF format to folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | Image ID. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImageInStorageToPdf"></a>
## **putImageInStorageToPdf**
> putImageInStorageToPdf(name, imageTemplates, dstFolder, storage)

Convert image file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageTemplates** | [**ImageTemplatesRequest**](ImageTemplatesRequest.md) | ImageTemplatesRequestImage templates | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImagesExtractAsGif"></a>
## **putImagesExtractAsGif**
> putImagesExtractAsGif(name, pageNumber, width, height, storage, folder, destFolder)

Extract document images in GIF format to folder.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImagesExtractAsJpeg"></a>
## **putImagesExtractAsJpeg**
> putImagesExtractAsJpeg(name, pageNumber, width, height, storage, folder, destFolder)

Extract document images in JPEG format to folder.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImagesExtractAsPng"></a>
## **putImagesExtractAsPng**
> putImagesExtractAsPng(name, pageNumber, width, height, storage, folder, destFolder)

Extract document images in PNG format to folder.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImagesExtractAsTiff"></a>
## **putImagesExtractAsTiff**
> putImagesExtractAsTiff(name, pageNumber, width, height, storage, folder, destFolder)

Extract document images in TIFF format to folder.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putInkAnnotation"></a>
## **putInkAnnotation**
> putInkAnnotation(name, annotationId, annotation, storage, folder)

Replace document ink annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**InkAnnotation**](InkAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**InkAnnotationResponse**](InkAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putLaTeXInStorageToPdf"></a>
## **putLaTeXInStorageToPdf**
> putLaTeXInStorageToPdf(name, srcPath, dstFolder, storage)

Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.tex) | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putLineAnnotation"></a>
## **putLineAnnotation**
> putLineAnnotation(name, annotationId, annotation, storage, folder)

Replace document line annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**LineAnnotation**](LineAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LineAnnotationResponse**](LineAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putLinkAnnotation"></a>
## **putLinkAnnotation**
> putLinkAnnotation(name, linkId, link, storage, folder)

Replace document page link annotations

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**linkId** | **string** | The link ID. | 
**link** | [**LinkAnnotation**](LinkAnnotation.md) | Link anotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**LinkAnnotationResponse**](LinkAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMergeDocuments"></a>
## **putMergeDocuments**
> putMergeDocuments(name, mergeDocuments, storage, folder)

Merge a list of documents.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Resulting documen name. | 
**mergeDocuments** | [**MergeDocuments**](MergeDocuments.md) | MergeDocuments with a list of documents. | 
**storage** | **string** | Resulting document storage. | [optional]
**folder** | **string** | Resulting document folder. | [optional]

### Return type

[**DocumentResponse**](DocumentResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMhtInStorageToPdf"></a>
## **putMhtInStorageToPdf**
> putMhtInStorageToPdf(name, srcPath, dstFolder, storage)

Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.mht) | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMovieAnnotation"></a>
## **putMovieAnnotation**
> putMovieAnnotation(name, annotationId, annotation, storage, folder)

Replace document movie annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**MovieAnnotation**](MovieAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**MovieAnnotationResponse**](MovieAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageAddStamp"></a>
## **putPageAddStamp**
> putPageAddStamp(name, pageNumber, stamp, storage, folder)

Add page stamp.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**stamp** | [**Stamp**](Stamp.md) | Stamp with data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToBmp"></a>
## **putPageConvertToBmp**
> putPageConvertToBmp(name, pageNumber, outPath, width, height, folder, storage)

Convert document page to bmp image and upload resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**outPath** | **string** | The out path of result image. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToEmf"></a>
## **putPageConvertToEmf**
> putPageConvertToEmf(name, pageNumber, outPath, width, height, folder, storage)

Convert document page to emf image and upload resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**outPath** | **string** | The out path of result image. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToGif"></a>
## **putPageConvertToGif**
> putPageConvertToGif(name, pageNumber, outPath, width, height, folder, storage)

Convert document page to gif image and upload resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**outPath** | **string** | The out path of result image. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToJpeg"></a>
## **putPageConvertToJpeg**
> putPageConvertToJpeg(name, pageNumber, outPath, width, height, folder, storage)

Convert document page to Jpeg image and upload resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**outPath** | **string** | The out path of result image. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToPng"></a>
## **putPageConvertToPng**
> putPageConvertToPng(name, pageNumber, outPath, width, height, folder, storage)

Convert document page to png image and upload resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**outPath** | **string** | The out path of result image. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToTiff"></a>
## **putPageConvertToTiff**
> putPageConvertToTiff(name, pageNumber, outPath, width, height, folder, storage)

Convert document page to Tiff image and upload resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**outPath** | **string** | The out path of result image. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPclInStorageToPdf"></a>
## **putPclInStorageToPdf**
> putPclInStorageToPdf(name, srcPath, dstFolder, storage)

Convert PCL file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.pcl) | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInRequestToDoc"></a>
## **putPdfInRequestToDoc**
> putPdfInRequestToDoc(outPath, addReturnToLineEnd, format, imageResolutionX, imageResolutionY, maxDistanceBetweenTextLines, mode, recognizeBullets, relativeHorizontalProximity, storage, file)

Converts PDF document (in request content) to DOC format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.doc) | 
**addReturnToLineEnd** | **boolean** | Add return to line end. | [optional]
**format** | [**DocFormat**](DocFormat.md) | Allows to specify .doc or .docx file format. | [optional]
**imageResolutionX** | **number** | Image resolution X. | [optional]
**imageResolutionY** | **number** | Image resolution Y. | [optional]
**maxDistanceBetweenTextLines** | **number** | Max distance between text lines. | [optional]
**mode** | [**DocRecognitionMode**](DocRecognitionMode.md) | Allows to control how a PDF document is converted into a word processing document. | [optional]
**recognizeBullets** | **boolean** | Recognize bullets. | [optional]
**relativeHorizontalProximity** | **number** | Relative horizontal proximity. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToEpub"></a>
## **putPdfInRequestToEpub**
> putPdfInRequestToEpub(outPath, contentRecognitionMode, storage, file)

Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.epub) | 
**contentRecognitionMode** | [**EpubRecognitionMode**](EpubRecognitionMode.md) | Property tunes conversion for this or that desirable method of recognition of content. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToHtml"></a>
## **putPdfInRequestToHtml**
> putPdfInRequestToHtml(outPath, additionalMarginWidthInPoints, compressSvgGraphicsIfAny, convertMarkedContentToLayers, defaultFontName, documentType, fixedLayout, imageResolution, minimalLineWidth, preventGlyphsGrouping, splitCssIntoPages, splitIntoPages, useZOrder, antialiasingProcessing, cssClassNamesPrefix, explicitListOfSavedPages, fontEncodingStrategy, fontSavingMode, htmlMarkupGenerationMode, lettersPositioningMethod, pagesFlowTypeDependsOnViewersScreenSize, partsEmbeddingMode, rasterImagesSavingMode, removeEmptyAreasOnTopAndBottom, saveShadowedTextsAsTransparentTexts, saveTransparentTexts, specialFolderForAllImages, specialFolderForSvgImages, trySaveTextUnderliningAndStrikeoutingInCss, storage, file)

Converts PDF document (in request content) to Html format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.html) | 
**additionalMarginWidthInPoints** | **number** | Defines width of margin that will be forcibly left around that output HTML-areas. | [optional]
**compressSvgGraphicsIfAny** | **boolean** | The flag that indicates whether found SVG graphics(if any) will be compressed(zipped) into SVGZ format during saving. | [optional]
**convertMarkedContentToLayers** | **boolean** | If attribute ConvertMarkedContentToLayers set to true then an all elements inside a PDF marked content (layer) will be put into an HTML div with "data-pdflayer" attribute specifying a layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content. | [optional]
**defaultFontName** | **string** | Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used. | [optional]
**documentType** | [**HtmlDocumentType**](HtmlDocumentType.md) | Result document type. | [optional]
**fixedLayout** | **boolean** | The value indicating whether that HTML is created as fixed layout. | [optional]
**imageResolution** | **number** | Resolution for image rendering. | [optional]
**minimalLineWidth** | **number** | This attribute sets minimal width of graphic path line. If thickness of line is less than 1px Adobe Acrobat rounds it to this value. So this attribute can be used to emulate this behavior for HTML browsers. | [optional]
**preventGlyphsGrouping** | **boolean** | This attribute switch on the mode when text glyphs will not be grouped into words and strings This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of FixedLayout attribute is true. | [optional]
**splitCssIntoPages** | **boolean** | When multipage-mode selected(i.e 'SplitIntoPages' is 'true'), then this attribute defines whether should be created separate CSS-file for each result HTML page. | [optional]
**splitIntoPages** | **boolean** | The flag that indicates whether each page of source document will be converted into it's own target HTML document, i.e whether result HTML will be splitted into several HTML-pages. | [optional]
**useZOrder** | **boolean** | If attribute UseZORder set to true, graphics and text are added to resultant HTML document accordingly Z-order in original PDF document. If this attribute is false all graphics is put as single layer which may cause some unnecessary effects for overlapped objects. | [optional]
**antialiasingProcessing** | [**AntialiasingProcessingType**](AntialiasingProcessingType.md) | The parameter defines required antialiasing measures during conversion of compound background images from PDF to HTML. | [optional]
**cssClassNamesPrefix** | **string** | When PDFtoHTML converter generates result CSSs, CSS class names (something like ".stl_01 {}" ... ".stl_NN {}) are generated and used in result CSS. This property allows forcibly set class name prefix. | [optional]
**explicitListOfSavedPages** | **Array&lt;number&gt;** | With this property You can explicitely define what pages of document should be converted. Pages in this list must have 1-based numbers. I.e. valid numbers of pages must be taken from range (1...[NumberOfPagesInConvertedDocument]) Order of appearing of pages in this list does not affect their order in result HTML page(s) - in result pages allways will go in order in which they are present in source PDF. | [optional]
**fontEncodingStrategy** | [**FontEncodingRules**](FontEncodingRules.md) | Defines encoding special rule to tune PDF decoding for current document. | [optional]
**fontSavingMode** | [**FontSavingModes**](FontSavingModes.md) | Defines font saving mode that will be used during saving of PDF to desirable format. | [optional]
**htmlMarkupGenerationMode** | [**HtmlMarkupGenerationModes**](HtmlMarkupGenerationModes.md) | Sometimes specific reqirments to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments. | [optional]
**lettersPositioningMethod** | [**LettersPositioningMethods**](LettersPositioningMethods.md) | The mode of positioning of letters in words in result HTML. | [optional]
**pagesFlowTypeDependsOnViewersScreenSize** | **boolean** | If attribute 'SplitOnPages=false', than whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such way that flow of areas that represent PDF pages in result HTML will depend on screen resolution of viewer. | [optional]
**partsEmbeddingMode** | [**PartsEmbeddingModes**](PartsEmbeddingModes.md) | It defines whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities. | [optional]
**rasterImagesSavingMode** | [**RasterImagesSavingModes**](RasterImagesSavingModes.md) | Converted PDF can contain raster images This parameter defines how they should be handled during conversion of PDF to HTML. | [optional]
**removeEmptyAreasOnTopAndBottom** | **boolean** | Defines whether in created HTML will be removed top and bottom empty area without any content (if any). | [optional]
**saveShadowedTextsAsTransparentTexts** | **boolean** | Pdf can contain texts that are shadowed by another elements (f.e. by images) but can be selected to clipboard in Acrobat Reader (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML to mimic behaviour of Acrobat Reader (othervise such texts are usually saved as hidden, not available for copying to clipboard). | [optional]
**saveTransparentTexts** | **boolean** | Pdf can contain transparent texts that can be selected to clipboard (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML. | [optional]
**specialFolderForAllImages** | **string** | The path to directory to which must be saved any images if they are encountered during saving of document as HTML. If parameter is empty or null then image files(if any) wil be saved together with other files linked to HTML It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file. | [optional]
**specialFolderForSvgImages** | **string** | The path to directory to which must be saved only SVG-images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG files(if any) wil be saved together with other image-files (near to output file) or in special folder for images (if it specified in SpecialImagesFolderIfAny option). It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file. | [optional]
**trySaveTextUnderliningAndStrikeoutingInCss** | **boolean** | PDF itself does not contain underlining markers for texts. It emulated with line situated under text. This option allows converter try guess that this or that line is a text's underlining and put this info into CSS instead of drawing of underlining graphically. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToLaTeX"></a>
## **putPdfInRequestToLaTeX**
> putPdfInRequestToLaTeX(outPath, pagesCount, storage, file)

Converts PDF document (in request content) to LaTeX format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.tex) | 
**pagesCount** | **number** | Pages count. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToMobiXml"></a>
## **putPdfInRequestToMobiXml**
> putPdfInRequestToMobiXml(outPath, storage, file)

Converts PDF document (in request content) to MOBIXML format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.mobixml) | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToPdfA"></a>
## **putPdfInRequestToPdfA**
> putPdfInRequestToPdfA(outPath, type, storage, file)

Converts PDF document (in request content) to PdfA format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.pdf) | 
**type** | [**PdfAType**](PdfAType.md) | Type of PdfA format. | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToPptx"></a>
## **putPdfInRequestToPptx**
> putPdfInRequestToPptx(outPath, separateImages, slidesAsImages, storage, file)

Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.pptx) | 
**separateImages** | **boolean** | Separate images. | [optional]
**slidesAsImages** | **boolean** | Slides as images. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToSvg"></a>
## **putPdfInRequestToSvg**
> putPdfInRequestToSvg(outPath, storage, file)

Converts PDF document (in request content) to SVG format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.svg) | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToTiff"></a>
## **putPdfInRequestToTiff**
> putPdfInRequestToTiff(outPath, brightness, compression, colorDepth, leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height, xResolution, yResolution, pageIndex, pageCount, storage, file)

Converts PDF document (in request content) to TIFF format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.tiff) | 
**brightness** | **number** | Image brightness. | [optional]
**compression** | [**CompressionType**](CompressionType.md) | Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None. | [optional]
**colorDepth** | [**ColorDepth**](ColorDepth.md) | Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp. | [optional]
**leftMargin** | **number** | Left image margin. | [optional]
**rightMargin** | **number** | Right image margin. | [optional]
**topMargin** | **number** | Top image margin. | [optional]
**bottomMargin** | **number** | Bottom image margin. | [optional]
**orientation** | [**ShapeType**](ShapeType.md) | Image orientation. Possible values are: None, Landscape, Portait. | [optional]
**skipBlankPages** | **boolean** | Skip blank pages flag. | [optional]
**width** | **number** | Image width. | [optional]
**height** | **number** | Image height. | [optional]
**xResolution** | **number** | Horizontal resolution. | [optional]
**yResolution** | **number** | Vertical resolution. | [optional]
**pageIndex** | **number** | Start page to export. | [optional]
**pageCount** | **number** | Number of pages to export. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToXls"></a>
## **putPdfInRequestToXls**
> putPdfInRequestToXls(outPath, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, storage, file)

Converts PDF document (in request content) to XLS format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xls) | 
**insertBlankColumnAtFirst** | **boolean** | Insert blank column at first | [optional]
**minimizeTheNumberOfWorksheets** | **boolean** | Minimize the number of worksheets | [optional]
**scaleFactor** | **number** | Scale factor | [optional]
**uniformWorksheets** | **boolean** | Uniform worksheets | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToXlsx"></a>
## **putPdfInRequestToXlsx**
> putPdfInRequestToXlsx(outPath, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, storage, file)

Converts PDF document (in request content) to XLSX format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xlsx) | 
**insertBlankColumnAtFirst** | **boolean** | Insert blank column at first | [optional]
**minimizeTheNumberOfWorksheets** | **boolean** | Minimize the number of worksheets | [optional]
**scaleFactor** | **number** | Scale factor | [optional]
**uniformWorksheets** | **boolean** | Uniform worksheets | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToXml"></a>
## **putPdfInRequestToXml**
> putPdfInRequestToXml(outPath, storage, file)

Converts PDF document (in request content) to XML format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xml) | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToXps"></a>
## **putPdfInRequestToXps**
> putPdfInRequestToXps(outPath, storage, file)

Converts PDF document (in request content) to XPS format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xps) | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInStorageToDoc"></a>
## **putPdfInStorageToDoc**
> putPdfInStorageToDoc(name, outPath, addReturnToLineEnd, format, imageResolutionX, imageResolutionY, maxDistanceBetweenTextLines, mode, recognizeBullets, relativeHorizontalProximity, folder, storage)

Converts PDF document (located on storage) to DOC format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.doc) | 
**addReturnToLineEnd** | **boolean** | Add return to line end. | [optional]
**format** | [**DocFormat**](DocFormat.md) | Allows to specify .doc or .docx file format. | [optional]
**imageResolutionX** | **number** | Image resolution X. | [optional]
**imageResolutionY** | **number** | Image resolution Y. | [optional]
**maxDistanceBetweenTextLines** | **number** | Max distance between text lines. | [optional]
**mode** | [**DocRecognitionMode**](DocRecognitionMode.md) | Allows to control how a PDF document is converted into a word processing document. | [optional]
**recognizeBullets** | **boolean** | Recognize bullets. | [optional]
**relativeHorizontalProximity** | **number** | Relative horizontal proximity. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToEpub"></a>
## **putPdfInStorageToEpub**
> putPdfInStorageToEpub(name, outPath, contentRecognitionMode, folder, storage)

Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.epub) | 
**contentRecognitionMode** | [**EpubRecognitionMode**](EpubRecognitionMode.md) | Property tunes conversion for this or that desirable method of recognition of content. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToHtml"></a>
## **putPdfInStorageToHtml**
> putPdfInStorageToHtml(name, outPath, additionalMarginWidthInPoints, compressSvgGraphicsIfAny, convertMarkedContentToLayers, defaultFontName, documentType, fixedLayout, imageResolution, minimalLineWidth, preventGlyphsGrouping, splitCssIntoPages, splitIntoPages, useZOrder, antialiasingProcessing, cssClassNamesPrefix, explicitListOfSavedPages, fontEncodingStrategy, fontSavingMode, htmlMarkupGenerationMode, lettersPositioningMethod, pagesFlowTypeDependsOnViewersScreenSize, partsEmbeddingMode, rasterImagesSavingMode, removeEmptyAreasOnTopAndBottom, saveShadowedTextsAsTransparentTexts, saveTransparentTexts, specialFolderForAllImages, specialFolderForSvgImages, trySaveTextUnderliningAndStrikeoutingInCss, folder, storage)

Converts PDF document (located on storage) to Html format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.html) | 
**additionalMarginWidthInPoints** | **number** | Defines width of margin that will be forcibly left around that output HTML-areas. | [optional]
**compressSvgGraphicsIfAny** | **boolean** | The flag that indicates whether found SVG graphics(if any) will be compressed(zipped) into SVGZ format during saving. | [optional]
**convertMarkedContentToLayers** | **boolean** | If attribute ConvertMarkedContentToLayers set to true then an all elements inside a PDF marked content (layer) will be put into an HTML div with "data-pdflayer" attribute specifying a layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content. | [optional]
**defaultFontName** | **string** | Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used. | [optional]
**documentType** | [**HtmlDocumentType**](HtmlDocumentType.md) | Result document type. | [optional]
**fixedLayout** | **boolean** | The value indicating whether that HTML is created as fixed layout. | [optional]
**imageResolution** | **number** | Resolution for image rendering. | [optional]
**minimalLineWidth** | **number** | This attribute sets minimal width of graphic path line. If thickness of line is less than 1px Adobe Acrobat rounds it to this value. So this attribute can be used to emulate this behavior for HTML browsers. | [optional]
**preventGlyphsGrouping** | **boolean** | This attribute switch on the mode when text glyphs will not be grouped into words and strings This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of FixedLayout attribute is true. | [optional]
**splitCssIntoPages** | **boolean** | When multipage-mode selected(i.e 'SplitIntoPages' is 'true'), then this attribute defines whether should be created separate CSS-file for each result HTML page. | [optional]
**splitIntoPages** | **boolean** | The flag that indicates whether each page of source document will be converted into it's own target HTML document, i.e whether result HTML will be splitted into several HTML-pages. | [optional]
**useZOrder** | **boolean** | If attribute UseZORder set to true, graphics and text are added to resultant HTML document accordingly Z-order in original PDF document. If this attribute is false all graphics is put as single layer which may cause some unnecessary effects for overlapped objects. | [optional]
**antialiasingProcessing** | [**AntialiasingProcessingType**](AntialiasingProcessingType.md) | The parameter defines required antialiasing measures during conversion of compound background images from PDF to HTML. | [optional]
**cssClassNamesPrefix** | **string** | When PDFtoHTML converter generates result CSSs, CSS class names (something like ".stl_01 {}" ... ".stl_NN {}) are generated and used in result CSS. This property allows forcibly set class name prefix. | [optional]
**explicitListOfSavedPages** | **Array&lt;number&gt;** | With this property You can explicitely define what pages of document should be converted. Pages in this list must have 1-based numbers. I.e. valid numbers of pages must be taken from range (1...[NumberOfPagesInConvertedDocument]) Order of appearing of pages in this list does not affect their order in result HTML page(s) - in result pages allways will go in order in which they are present in source PDF. | [optional]
**fontEncodingStrategy** | [**FontEncodingRules**](FontEncodingRules.md) | Defines encoding special rule to tune PDF decoding for current document. | [optional]
**fontSavingMode** | [**FontSavingModes**](FontSavingModes.md) | Defines font saving mode that will be used during saving of PDF to desirable format. | [optional]
**htmlMarkupGenerationMode** | [**HtmlMarkupGenerationModes**](HtmlMarkupGenerationModes.md) | Sometimes specific reqirments to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments. | [optional]
**lettersPositioningMethod** | [**LettersPositioningMethods**](LettersPositioningMethods.md) | The mode of positioning of letters in words in result HTML. | [optional]
**pagesFlowTypeDependsOnViewersScreenSize** | **boolean** | If attribute 'SplitOnPages=false', than whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such way that flow of areas that represent PDF pages in result HTML will depend on screen resolution of viewer. | [optional]
**partsEmbeddingMode** | [**PartsEmbeddingModes**](PartsEmbeddingModes.md) | It defines whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities. | [optional]
**rasterImagesSavingMode** | [**RasterImagesSavingModes**](RasterImagesSavingModes.md) | Converted PDF can contain raster images This parameter defines how they should be handled during conversion of PDF to HTML. | [optional]
**removeEmptyAreasOnTopAndBottom** | **boolean** | Defines whether in created HTML will be removed top and bottom empty area without any content (if any). | [optional]
**saveShadowedTextsAsTransparentTexts** | **boolean** | Pdf can contain texts that are shadowed by another elements (f.e. by images) but can be selected to clipboard in Acrobat Reader (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML to mimic behaviour of Acrobat Reader (othervise such texts are usually saved as hidden, not available for copying to clipboard). | [optional]
**saveTransparentTexts** | **boolean** | Pdf can contain transparent texts that can be selected to clipboard (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML. | [optional]
**specialFolderForAllImages** | **string** | The path to directory to which must be saved any images if they are encountered during saving of document as HTML. If parameter is empty or null then image files(if any) wil be saved together with other files linked to HTML It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file. | [optional]
**specialFolderForSvgImages** | **string** | The path to directory to which must be saved only SVG-images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG files(if any) wil be saved together with other image-files (near to output file) or in special folder for images (if it specified in SpecialImagesFolderIfAny option). It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file. | [optional]
**trySaveTextUnderliningAndStrikeoutingInCss** | **boolean** | PDF itself does not contain underlining markers for texts. It emulated with line situated under text. This option allows converter try guess that this or that line is a text's underlining and put this info into CSS instead of drawing of underlining graphically. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToLaTeX"></a>
## **putPdfInStorageToLaTeX**
> putPdfInStorageToLaTeX(name, outPath, pagesCount, folder, storage)

Converts PDF document (located on storage) to LaTeX format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.tex) | 
**pagesCount** | **number** | Pages count. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToMobiXml"></a>
## **putPdfInStorageToMobiXml**
> putPdfInStorageToMobiXml(name, outPath, folder, storage)

Converts PDF document (located on storage) to MOBIXML format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.mobixml) | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToPdfA"></a>
## **putPdfInStorageToPdfA**
> putPdfInStorageToPdfA(name, outPath, type, folder, storage)

Converts PDF document (located on storage) to PdfA format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.pdf) | 
**type** | [**PdfAType**](PdfAType.md) | Type of PdfA format. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToPptx"></a>
## **putPdfInStorageToPptx**
> putPdfInStorageToPptx(name, outPath, separateImages, slidesAsImages, folder, storage)

Converts PDF document (located on storage) to PPTX format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.pptx) | 
**separateImages** | **boolean** | Separate images. | [optional]
**slidesAsImages** | **boolean** | Slides as images. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToSvg"></a>
## **putPdfInStorageToSvg**
> putPdfInStorageToSvg(name, outPath, folder, storage)

Converts PDF document (located on storage) to SVG format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.svg) | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToTiff"></a>
## **putPdfInStorageToTiff**
> putPdfInStorageToTiff(name, outPath, brightness, compression, colorDepth, leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height, xResolution, yResolution, pageIndex, pageCount, folder, storage)

Converts PDF document (located on storage) to TIFF format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.tiff) | 
**brightness** | **number** | Image brightness. | [optional]
**compression** | [**CompressionType**](CompressionType.md) | Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None. | [optional]
**colorDepth** | [**ColorDepth**](ColorDepth.md) | Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp. | [optional]
**leftMargin** | **number** | Left image margin. | [optional]
**rightMargin** | **number** | Right image margin. | [optional]
**topMargin** | **number** | Top image margin. | [optional]
**bottomMargin** | **number** | Bottom image margin. | [optional]
**orientation** | [**ShapeType**](ShapeType.md) | Image orientation. Possible values are: None, Landscape, Portait. | [optional]
**skipBlankPages** | **boolean** | Skip blank pages flag. | [optional]
**width** | **number** | Image width. | [optional]
**height** | **number** | Image height. | [optional]
**xResolution** | **number** | Horizontal resolution. | [optional]
**yResolution** | **number** | Vertical resolution. | [optional]
**pageIndex** | **number** | Start page to export. | [optional]
**pageCount** | **number** | Number of pages to export. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToXls"></a>
## **putPdfInStorageToXls**
> putPdfInStorageToXls(name, outPath, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, folder, storage)

Converts PDF document (located on storage) to XLS format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xls) | 
**insertBlankColumnAtFirst** | **boolean** | Insert blank column at first | [optional]
**minimizeTheNumberOfWorksheets** | **boolean** | Minimize the number of worksheets | [optional]
**scaleFactor** | **number** | Scale factor | [optional]
**uniformWorksheets** | **boolean** | Uniform worksheets | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToXlsx"></a>
## **putPdfInStorageToXlsx**
> putPdfInStorageToXlsx(name, outPath, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, folder, storage)

Converts PDF document (located on storage) to XLSX format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xlsx) | 
**insertBlankColumnAtFirst** | **boolean** | Insert blank column at first | [optional]
**minimizeTheNumberOfWorksheets** | **boolean** | Minimize the number of worksheets | [optional]
**scaleFactor** | **number** | Scale factor | [optional]
**uniformWorksheets** | **boolean** | Uniform worksheets | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToXml"></a>
## **putPdfInStorageToXml**
> putPdfInStorageToXml(name, outPath, folder, storage)

Converts PDF document (located on storage) to XML format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xml) | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToXps"></a>
## **putPdfInStorageToXps**
> putPdfInStorageToXps(name, outPath, folder, storage)

Converts PDF document (located on storage) to XPS format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.xps) | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPolygonAnnotation"></a>
## **putPolygonAnnotation**
> putPolygonAnnotation(name, annotationId, annotation, storage, folder)

Replace document polygon annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**PolygonAnnotation**](PolygonAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolygonAnnotationResponse**](PolygonAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPolyLineAnnotation"></a>
## **putPolyLineAnnotation**
> putPolyLineAnnotation(name, annotationId, annotation, storage, folder)

Replace document polyline annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**PolyLineAnnotation**](PolyLineAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PolyLineAnnotationResponse**](PolyLineAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPopupAnnotation"></a>
## **putPopupAnnotation**
> putPopupAnnotation(name, annotationId, annotation, storage, folder)

Replace document popup annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**PopupAnnotation**](PopupAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**PopupAnnotationResponse**](PopupAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPrivileges"></a>
## **putPrivileges**
> putPrivileges(name, privileges, storage, folder)

Update privilege document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**privileges** | [**DocumentPrivilege**](DocumentPrivilege.md) | Document privileges. DocumentPrivilege | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPsInStorageToPdf"></a>
## **putPsInStorageToPdf**
> putPsInStorageToPdf(name, srcPath, dstFolder, storage)

Convert PS file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.ps) | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putRedactionAnnotation"></a>
## **putRedactionAnnotation**
> putRedactionAnnotation(name, annotationId, annotation, storage, folder)

Replace document redaction annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**RedactionAnnotation**](RedactionAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**RedactionAnnotationResponse**](RedactionAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putReplaceImage"></a>
## **putReplaceImage**
> putReplaceImage(name, imageId, imageFilePath, storage, folder, image)

Replace document image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageId** | **string** | The image ID. | 
**imageFilePath** | **string** | Path to image file if specified. Request content is used otherwise. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**image** | **Buffer** | Image file. | [optional]

### Return type

[**ImageResponse**](ImageResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putScreenAnnotation"></a>
## **putScreenAnnotation**
> putScreenAnnotation(name, annotationId, annotation, storage, folder)

Replace document screen annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**ScreenAnnotation**](ScreenAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**ScreenAnnotationResponse**](ScreenAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putScreenAnnotationDataExtract"></a>
## **putScreenAnnotationDataExtract**
> putScreenAnnotationDataExtract(name, annotationId, outFilePath, storage, folder)

Extract document screen annotation content to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**outFilePath** | **string** | The output file path. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSearchableDocument"></a>
## **putSearchableDocument**
> putSearchableDocument(name, storage, folder, lang)

Create searchable PDF document. Generate OCR layer for images in input PDF document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]
**lang** | **string** | language for OCR engine. Possible values: eng, ara, bel, ben, bul, ces, dan, deu, ell, fin, fra, heb, hin, ind, isl, ita, jpn, kor, nld, nor, pol, por, ron, rus, spa, swe, tha, tur, ukr, vie, chi_sim, chi_tra or thier combination e.g. eng,rus  | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSetProperty"></a>
## **putSetProperty**
> putSetProperty(name, propertyName, value, storage, folder)

Add/update document property.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** |  | 
**propertyName** | **string** |  | 
**value** | **string** |  | 
**storage** | **string** |  | [optional]
**folder** | **string** |  | [optional]

### Return type

[**DocumentPropertyResponse**](DocumentPropertyResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSoundAnnotation"></a>
## **putSoundAnnotation**
> putSoundAnnotation(name, annotationId, annotation, storage, folder)

Replace document sound annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**SoundAnnotation**](SoundAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SoundAnnotationResponse**](SoundAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSoundAnnotationDataExtract"></a>
## **putSoundAnnotationDataExtract**
> putSoundAnnotationDataExtract(name, annotationId, outFilePath, storage, folder)

Extract document sound annotation content to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**outFilePath** | **string** | The output file path. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSquareAnnotation"></a>
## **putSquareAnnotation**
> putSquareAnnotation(name, annotationId, annotation, storage, folder)

Replace document square annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**SquareAnnotation**](SquareAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquareAnnotationResponse**](SquareAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSquigglyAnnotation"></a>
## **putSquigglyAnnotation**
> putSquigglyAnnotation(name, annotationId, annotation, storage, folder)

Replace document squiggly annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**SquigglyAnnotation**](SquigglyAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**SquigglyAnnotationResponse**](SquigglyAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putStampAnnotation"></a>
## **putStampAnnotation**
> putStampAnnotation(name, annotationId, annotation, storage, folder)

Replace document stamp annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**StampAnnotation**](StampAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StampAnnotationResponse**](StampAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putStampAnnotationDataExtract"></a>
## **putStampAnnotationDataExtract**
> putStampAnnotationDataExtract(name, annotationId, outFilePath, storage, folder)

Extract document stamp annotation content to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**outFilePath** | **string** | The output file path. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putStrikeOutAnnotation"></a>
## **putStrikeOutAnnotation**
> putStrikeOutAnnotation(name, annotationId, annotation, storage, folder)

Replace document StrikeOut annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**StrikeOutAnnotation**](StrikeOutAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**StrikeOutAnnotationResponse**](StrikeOutAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSvgInStorageToPdf"></a>
## **putSvgInStorageToPdf**
> putSvgInStorageToPdf(name, srcPath, adjustPageSize, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, dstFolder, storage)

Convert SVG file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.svg) | 
**adjustPageSize** | **boolean** | Adjust page size | [optional]
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTable"></a>
## **putTable**
> putTable(name, tableId, table, storage, folder)

Replace document page table.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**tableId** | **string** | The table ID. | 
**table** | [**Table**](Table.md) | The table. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTextAnnotation"></a>
## **putTextAnnotation**
> putTextAnnotation(name, annotationId, annotation, storage, folder)

Replace document text annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**TextAnnotation**](TextAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**TextAnnotationResponse**](TextAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUnderlineAnnotation"></a>
## **putUnderlineAnnotation**
> putUnderlineAnnotation(name, annotationId, annotation, storage, folder)

Replace document underline annotation

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**annotationId** | **string** | The annotation ID. | 
**annotation** | [**UnderlineAnnotation**](UnderlineAnnotation.md) | Annotation. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**UnderlineAnnotationResponse**](UnderlineAnnotationResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUpdateField"></a>
## **putUpdateField**
> putUpdateField(name, fieldName, field, storage, folder)

Update field.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**fieldName** | **string** | The name of a field to be updated. | 
**field** | [**Field**](Field.md) | Field with the field data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FieldResponse**](FieldResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUpdateFields"></a>
## **putUpdateFields**
> putUpdateFields(name, fields, storage, folder)

Update fields.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**fields** | [**Fields**](Fields.md) | Fields with the fields data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FieldsResponse**](FieldsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putWebInStorageToPdf"></a>
## **putWebInStorageToPdf**
> putWebInStorageToPdf(name, url, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, dstFolder, storage)

Convert web page to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**url** | **string** | Source url | 
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putXfaPdfInRequestToAcroForm"></a>
## **putXfaPdfInRequestToAcroForm**
> putXfaPdfInRequestToAcroForm(outPath, storage, file)

Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.pdf) | 
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putXfaPdfInStorageToAcroForm"></a>
## **putXfaPdfInStorageToAcroForm**
> putXfaPdfInStorageToAcroForm(name, outPath, folder, storage)

Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.pdf) | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putXmlInStorageToPdf"></a>
## **putXmlInStorageToPdf**
> putXmlInStorageToPdf(name, srcPath, xslFilePath, dstFolder, storage)

Convert XML file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xml) | 
**xslFilePath** | **string** | Full XSL source filename (ex. /folder1/folder2/template.xsl) | [optional]
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putXpsInStorageToPdf"></a>
## **putXpsInStorageToPdf**
> putXpsInStorageToPdf(name, srcPath, dstFolder, storage)

Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xps) | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putXslFoInStorageToPdf"></a>
## **putXslFoInStorageToPdf**
> putXslFoInStorageToPdf(name, srcPath, dstFolder, storage)

Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xpsfo) | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="storageExists"></a>
## **storageExists**
> storageExists(storageName)

Check if storage exists

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**storageName** | **string** | Storage name | 

### Return type

[**StorageExist**](StorageExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadFile"></a>
## **uploadFile**
> uploadFile(path, File, storageName)

Upload file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext If the content is multipart and path does not contains the file name it tries to get them from filename parameter from Content-Disposition header.  | 
**File** | **Buffer** | File to upload | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FilesUploadResult**](FilesUploadResult.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


