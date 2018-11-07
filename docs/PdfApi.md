# PdfApi

All URIs are relative to *https://api.aspose.cloud/v2.0/*

Method | HTTP request | Description
------------- | ------------- | -------------
*PdfApi* | [**deleteAnnotation**](PdfApi.md#deleteAnnotation) | **DELETE** /pdf/\{name}/annotations/\{annotationId} | Delete document annotation by ID
*PdfApi* | [**deleteDocumentAnnotations**](PdfApi.md#deleteDocumentAnnotations) | **DELETE** /pdf/\{name}/annotations | Delete all annotations from the document
*PdfApi* | [**deleteDocumentLinkAnnotations**](PdfApi.md#deleteDocumentLinkAnnotations) | **DELETE** /pdf/\{name}/links | Delete all link annotations from the document
*PdfApi* | [**deleteField**](PdfApi.md#deleteField) | **DELETE** /pdf/\{name}/fields/\{fieldName} | Delete document field by name.
*PdfApi* | [**deleteImage**](PdfApi.md#deleteImage) | **DELETE** /pdf/\{name}/images/\{imageId} | Delete image from document page.
*PdfApi* | [**deleteLinkAnnotation**](PdfApi.md#deleteLinkAnnotation) | **DELETE** /pdf/\{name}/links/\{linkId} | Delete document page link annotation by ID
*PdfApi* | [**deletePage**](PdfApi.md#deletePage) | **DELETE** /pdf/\{name}/pages/\{pageNumber} | Delete document page by its number.
*PdfApi* | [**deletePageAnnotations**](PdfApi.md#deletePageAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/annotations | Delete all annotations from the page
*PdfApi* | [**deletePageLinkAnnotations**](PdfApi.md#deletePageLinkAnnotations) | **DELETE** /pdf/\{name}/pages/\{pageNumber}/links | Delete all link annotations from the page
*PdfApi* | [**deleteProperties**](PdfApi.md#deleteProperties) | **DELETE** /pdf/\{name}/documentproperties | Delete custom document properties.
*PdfApi* | [**deleteProperty**](PdfApi.md#deleteProperty) | **DELETE** /pdf/\{name}/documentproperties/\{propertyName} | Delete document property.
*PdfApi* | [**getCircleAnnotation**](PdfApi.md#getCircleAnnotation) | **GET** /pdf/\{name}/annotations/circle/\{annotationId} | Read document page circle annotation by ID.
*PdfApi* | [**getDocument**](PdfApi.md#getDocument) | **GET** /pdf/\{name} | Read common document info.
*PdfApi* | [**getDocumentAnnotations**](PdfApi.md#getDocumentAnnotations) | **GET** /pdf/\{name}/annotations | Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**getDocumentAttachmentByIndex**](PdfApi.md#getDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex} | Read document attachment info by its index.
*PdfApi* | [**getDocumentAttachments**](PdfApi.md#getDocumentAttachments) | **GET** /pdf/\{name}/attachments | Read document attachments info.
*PdfApi* | [**getDocumentBookmarks**](PdfApi.md#getDocumentBookmarks) | **GET** /pdf/\{name}/bookmarks | Read document bookmark/bookmarks (including children).
*PdfApi* | [**getDocumentCircleAnnotations**](PdfApi.md#getDocumentCircleAnnotations) | **GET** /pdf/\{name}/annotations/circle | Read document circle annotations.
*PdfApi* | [**getDocumentFreeTextAnnotations**](PdfApi.md#getDocumentFreeTextAnnotations) | **GET** /pdf/\{name}/annotations/freetext | Read document free text annotations.
*PdfApi* | [**getDocumentLineAnnotations**](PdfApi.md#getDocumentLineAnnotations) | **GET** /pdf/\{name}/annotations/line | Read document line annotations.
*PdfApi* | [**getDocumentPolygonAnnotations**](PdfApi.md#getDocumentPolygonAnnotations) | **GET** /pdf/\{name}/annotations/polygon | Read document polygon annotations.
*PdfApi* | [**getDocumentPolyLineAnnotations**](PdfApi.md#getDocumentPolyLineAnnotations) | **GET** /pdf/\{name}/annotations/polyline | Read document polyline annotations.
*PdfApi* | [**getDocumentProperties**](PdfApi.md#getDocumentProperties) | **GET** /pdf/\{name}/documentproperties | Read document properties.
*PdfApi* | [**getDocumentProperty**](PdfApi.md#getDocumentProperty) | **GET** /pdf/\{name}/documentproperties/\{propertyName} | Read document property by name.
*PdfApi* | [**getDocumentSquareAnnotations**](PdfApi.md#getDocumentSquareAnnotations) | **GET** /pdf/\{name}/annotations/square | Read document square annotations.
*PdfApi* | [**getDocumentTextAnnotations**](PdfApi.md#getDocumentTextAnnotations) | **GET** /pdf/\{name}/annotations/text | Read document text annotations.
*PdfApi* | [**getDownload**](PdfApi.md#getDownload) | **GET** /storage/file | Download a specific file 
*PdfApi* | [**getDownloadDocumentAttachmentByIndex**](PdfApi.md#getDownloadDocumentAttachmentByIndex) | **GET** /pdf/\{name}/attachments/\{attachmentIndex}/download | Download document attachment content by its index.
*PdfApi* | [**getEpubInStorageToPdf**](PdfApi.md#getEpubInStorageToPdf) | **GET** /pdf/create/epub | Convert EPUB file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getField**](PdfApi.md#getField) | **GET** /pdf/\{name}/fields/\{fieldName} | Get document field by name.
*PdfApi* | [**getFields**](PdfApi.md#getFields) | **GET** /pdf/\{name}/fields | Get document fields.
*PdfApi* | [**getFreeTextAnnotation**](PdfApi.md#getFreeTextAnnotation) | **GET** /pdf/\{name}/annotations/freetext/\{annotationId} | Read document page free text annotation by ID.
*PdfApi* | [**getHtmlInStorageToPdf**](PdfApi.md#getHtmlInStorageToPdf) | **GET** /pdf/create/html | Convert HTML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getImage**](PdfApi.md#getImage) | **GET** /pdf/\{name}/images/\{imageId} | Read document image by ID.
*PdfApi* | [**getImageExtractAsGif**](PdfApi.md#getImageExtractAsGif) | **GET** /pdf/\{name}/images/\{imageId}/extract/gif | Extract document image in GIF format
*PdfApi* | [**getImageExtractAsJpeg**](PdfApi.md#getImageExtractAsJpeg) | **GET** /pdf/\{name}/images/\{imageId}/extract/jpeg | Extract document image in JPEG format
*PdfApi* | [**getImageExtractAsPng**](PdfApi.md#getImageExtractAsPng) | **GET** /pdf/\{name}/images/\{imageId}/extract/png | Extract document image in PNG format
*PdfApi* | [**getImageExtractAsTiff**](PdfApi.md#getImageExtractAsTiff) | **GET** /pdf/\{name}/images/\{imageId}/extract/tiff | Extract document image in TIFF format
*PdfApi* | [**getImages**](PdfApi.md#getImages) | **GET** /pdf/\{name}/pages/\{pageNumber}/images | Read document images.
*PdfApi* | [**getLaTeXInStorageToPdf**](PdfApi.md#getLaTeXInStorageToPdf) | **GET** /pdf/create/latex | Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getLineAnnotation**](PdfApi.md#getLineAnnotation) | **GET** /pdf/\{name}/annotations/line/\{annotationId} | Read document page line annotation by ID.
*PdfApi* | [**getLinkAnnotation**](PdfApi.md#getLinkAnnotation) | **GET** /pdf/\{name}/links/\{linkId} | Read document link annotation by ID.
*PdfApi* | [**getListFiles**](PdfApi.md#getListFiles) | **GET** /storage/folder | Get the file listing of a specific folder 
*PdfApi* | [**getMhtInStorageToPdf**](PdfApi.md#getMhtInStorageToPdf) | **GET** /pdf/create/mht | Convert MHT file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getPage**](PdfApi.md#getPage) | **GET** /pdf/\{name}/pages/\{pageNumber} | Read document page info.
*PdfApi* | [**getPageAnnotations**](PdfApi.md#getPageAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations | Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
*PdfApi* | [**getPageCircleAnnotations**](PdfApi.md#getPageCircleAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Read document page circle annotations.
*PdfApi* | [**getPageConvertToBmp**](PdfApi.md#getPageConvertToBmp) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/bmp | Convert document page to Bmp image and return resulting file in response.
*PdfApi* | [**getPageConvertToEmf**](PdfApi.md#getPageConvertToEmf) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/emf | Convert document page to Emf image and return resulting file in response.
*PdfApi* | [**getPageConvertToGif**](PdfApi.md#getPageConvertToGif) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/gif | Convert document page to Gif image and return resulting file in response.
*PdfApi* | [**getPageConvertToJpeg**](PdfApi.md#getPageConvertToJpeg) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/jpeg | Convert document page to Jpeg image and return resulting file in response.
*PdfApi* | [**getPageConvertToPng**](PdfApi.md#getPageConvertToPng) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/png | Convert document page to Png image and return resulting file in response.
*PdfApi* | [**getPageConvertToTiff**](PdfApi.md#getPageConvertToTiff) | **GET** /pdf/\{name}/pages/\{pageNumber}/convert/tiff | Convert document page to Tiff image and return resulting file in response.
*PdfApi* | [**getPageFreeTextAnnotations**](PdfApi.md#getPageFreeTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Read document page free text annotations.
*PdfApi* | [**getPageLineAnnotations**](PdfApi.md#getPageLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Read document page line annotations.
*PdfApi* | [**getPageLinkAnnotation**](PdfApi.md#getPageLinkAnnotation) | **GET** /pdf/\{name}/pages/\{pageNumber}/links/\{linkId} | Read document page link annotation by ID.
*PdfApi* | [**getPageLinkAnnotations**](PdfApi.md#getPageLinkAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/links | Read document page link annotations.
*PdfApi* | [**getPagePolygonAnnotations**](PdfApi.md#getPagePolygonAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Read document page polygon annotations.
*PdfApi* | [**getPagePolyLineAnnotations**](PdfApi.md#getPagePolyLineAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Read document page polyline annotations.
*PdfApi* | [**getPages**](PdfApi.md#getPages) | **GET** /pdf/\{name}/pages | Read document pages info.
*PdfApi* | [**getPageSquareAnnotations**](PdfApi.md#getPageSquareAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Read document page square annotations.
*PdfApi* | [**getPageText**](PdfApi.md#getPageText) | **GET** /pdf/\{name}/pages/\{pageNumber}/text | Read page text items.
*PdfApi* | [**getPageTextAnnotations**](PdfApi.md#getPageTextAnnotations) | **GET** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Read document page text annotations.
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
*PdfApi* | [**getPdfInStorageToXml**](PdfApi.md#getPdfInStorageToXml) | **GET** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and returns resulting file in response content
*PdfApi* | [**getPdfInStorageToXps**](PdfApi.md#getPdfInStorageToXps) | **GET** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and returns resulting file in response content
*PdfApi* | [**getPolygonAnnotation**](PdfApi.md#getPolygonAnnotation) | **GET** /pdf/\{name}/annotations/polygon/\{annotationId} | Read document page polygon annotation by ID.
*PdfApi* | [**getPolyLineAnnotation**](PdfApi.md#getPolyLineAnnotation) | **GET** /pdf/\{name}/annotations/polyline/\{annotationId} | Read document page polyline annotation by ID.
*PdfApi* | [**getPsInStorageToPdf**](PdfApi.md#getPsInStorageToPdf) | **GET** /pdf/create/ps | Convert PS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getSquareAnnotation**](PdfApi.md#getSquareAnnotation) | **GET** /pdf/\{name}/annotations/square/\{annotationId} | Read document page square annotation by ID.
*PdfApi* | [**getSvgInStorageToPdf**](PdfApi.md#getSvgInStorageToPdf) | **GET** /pdf/create/svg | Convert SVG file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getText**](PdfApi.md#getText) | **GET** /pdf/\{name}/text | Read document text.
*PdfApi* | [**getTextAnnotation**](PdfApi.md#getTextAnnotation) | **GET** /pdf/\{name}/annotations/text/\{annotationId} | Read document page text annotation by ID.
*PdfApi* | [**getVerifySignature**](PdfApi.md#getVerifySignature) | **GET** /pdf/\{name}/verifySignature | Verify signature document.
*PdfApi* | [**getWebInStorageToPdf**](PdfApi.md#getWebInStorageToPdf) | **GET** /pdf/create/web | Convert web page to PDF format and return resulting file in response. 
*PdfApi* | [**getWordsPerPage**](PdfApi.md#getWordsPerPage) | **GET** /pdf/\{name}/pages/wordCount | Get number of words per document page.
*PdfApi* | [**getXfaPdfInStorageToAcroForm**](PdfApi.md#getXfaPdfInStorageToAcroForm) | **GET** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content
*PdfApi* | [**getXmlInStorageToPdf**](PdfApi.md#getXmlInStorageToPdf) | **GET** /pdf/create/xml | Convert XML file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getXpsInStorageToPdf**](PdfApi.md#getXpsInStorageToPdf) | **GET** /pdf/create/xps | Convert XPS file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**getXslFoInStorageToPdf**](PdfApi.md#getXslFoInStorageToPdf) | **GET** /pdf/create/xslfo | Convert XslFo file (located on storage) to PDF format and return resulting file in response. 
*PdfApi* | [**postAppendDocument**](PdfApi.md#postAppendDocument) | **POST** /pdf/\{name}/appendDocument | Append document to existing one.
*PdfApi* | [**postCreateField**](PdfApi.md#postCreateField) | **POST** /pdf/\{name}/fields | Create field.
*PdfApi* | [**postDocumentTextReplace**](PdfApi.md#postDocumentTextReplace) | **POST** /pdf/\{name}/text/replace | Document's replace text method.
*PdfApi* | [**postInsertImage**](PdfApi.md#postInsertImage) | **POST** /pdf/\{name}/pages/\{pageNumber}/images | Insert image to document page.
*PdfApi* | [**postMovePage**](PdfApi.md#postMovePage) | **POST** /pdf/\{name}/pages/\{pageNumber}/movePage | Move page to new position.
*PdfApi* | [**postOptimizeDocument**](PdfApi.md#postOptimizeDocument) | **POST** /pdf/\{name}/optimize | Optimize document.
*PdfApi* | [**postPageCircleAnnotations**](PdfApi.md#postPageCircleAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/circle | Add document page circle annotations.
*PdfApi* | [**postPageFreeTextAnnotations**](PdfApi.md#postPageFreeTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/freetext | Add document page free text annotations.
*PdfApi* | [**postPageLineAnnotations**](PdfApi.md#postPageLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/line | Add document page line annotations.
*PdfApi* | [**postPageLinkAnnotations**](PdfApi.md#postPageLinkAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/links | Add document page link annotations.
*PdfApi* | [**postPagePolygonAnnotations**](PdfApi.md#postPagePolygonAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polygon | Add document page polygon annotations.
*PdfApi* | [**postPagePolyLineAnnotations**](PdfApi.md#postPagePolyLineAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/polyline | Add document page polyline annotations.
*PdfApi* | [**postPageSquareAnnotations**](PdfApi.md#postPageSquareAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/square | Add document page square annotations.
*PdfApi* | [**postPageTextAnnotations**](PdfApi.md#postPageTextAnnotations) | **POST** /pdf/\{name}/pages/\{pageNumber}/annotations/text | Add document page text annotations.
*PdfApi* | [**postPageTextReplace**](PdfApi.md#postPageTextReplace) | **POST** /pdf/\{name}/pages/\{pageNumber}/text/replace | Page's replace text method.
*PdfApi* | [**postSignDocument**](PdfApi.md#postSignDocument) | **POST** /pdf/\{name}/sign | Sign document.
*PdfApi* | [**postSignPage**](PdfApi.md#postSignPage) | **POST** /pdf/\{name}/pages/\{pageNumber}/sign | Sign page.
*PdfApi* | [**postSplitDocument**](PdfApi.md#postSplitDocument) | **POST** /pdf/\{name}/split | Split document to parts.
*PdfApi* | [**putAddNewPage**](PdfApi.md#putAddNewPage) | **PUT** /pdf/\{name}/pages | Add new page to end of the document.
*PdfApi* | [**putAddText**](PdfApi.md#putAddText) | **PUT** /pdf/\{name}/pages/\{pageNumber}/text | Add text to PDF document page.
*PdfApi* | [**putCircleAnnotation**](PdfApi.md#putCircleAnnotation) | **PUT** /pdf/\{name}/annotations/circle/\{annotationId} | Replace document circle annotation
*PdfApi* | [**putCreate**](PdfApi.md#putCreate) | **PUT** /storage/file | Upload a specific file 
*PdfApi* | [**putCreateDocument**](PdfApi.md#putCreateDocument) | **PUT** /pdf/\{name} | Create empty document.
*PdfApi* | [**putEpubInStorageToPdf**](PdfApi.md#putEpubInStorageToPdf) | **PUT** /pdf/\{name}/create/epub | Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putFieldsFlatten**](PdfApi.md#putFieldsFlatten) | **PUT** /pdf/\{name}/fields/flatten | Flatten form fields in document.
*PdfApi* | [**putFreeTextAnnotation**](PdfApi.md#putFreeTextAnnotation) | **PUT** /pdf/\{name}/annotations/freetext/\{annotationId} | Replace document free text annotation
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
*PdfApi* | [**putLaTeXInStorageToPdf**](PdfApi.md#putLaTeXInStorageToPdf) | **PUT** /pdf/\{name}/create/latex | Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putLineAnnotation**](PdfApi.md#putLineAnnotation) | **PUT** /pdf/\{name}/annotations/line/\{annotationId} | Replace document line annotation
*PdfApi* | [**putLinkAnnotation**](PdfApi.md#putLinkAnnotation) | **PUT** /pdf/\{name}/links/\{linkId} | Replace document page link annotations
*PdfApi* | [**putMergeDocuments**](PdfApi.md#putMergeDocuments) | **PUT** /pdf/\{name}/merge | Merge a list of documents.
*PdfApi* | [**putMhtInStorageToPdf**](PdfApi.md#putMhtInStorageToPdf) | **PUT** /pdf/\{name}/create/mht | Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 
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
*PdfApi* | [**putPdfInStorageToXml**](PdfApi.md#putPdfInStorageToXml) | **PUT** /pdf/\{name}/convert/xml | Converts PDF document (located on storage) to XML format and uploads resulting file to storage
*PdfApi* | [**putPdfInStorageToXps**](PdfApi.md#putPdfInStorageToXps) | **PUT** /pdf/\{name}/convert/xps | Converts PDF document (located on storage) to XPS format and uploads resulting file to storage
*PdfApi* | [**putPolygonAnnotation**](PdfApi.md#putPolygonAnnotation) | **PUT** /pdf/\{name}/annotations/polygon/\{annotationId} | Replace document polygon annotation
*PdfApi* | [**putPolyLineAnnotation**](PdfApi.md#putPolyLineAnnotation) | **PUT** /pdf/\{name}/annotations/polyline/\{annotationId} | Replace document polyline annotation
*PdfApi* | [**putPrivileges**](PdfApi.md#putPrivileges) | **PUT** /pdf/\{name}/privileges | Update privilege document.
*PdfApi* | [**putPsInStorageToPdf**](PdfApi.md#putPsInStorageToPdf) | **PUT** /pdf/\{name}/create/ps | Convert PS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putReplaceImage**](PdfApi.md#putReplaceImage) | **PUT** /pdf/\{name}/images/\{imageId} | Replace document image.
*PdfApi* | [**putSearchableDocument**](PdfApi.md#putSearchableDocument) | **PUT** /pdf/\{name}/ocr | Create searchable PDF document. Generate OCR layer for images in input PDF document.
*PdfApi* | [**putSetProperty**](PdfApi.md#putSetProperty) | **PUT** /pdf/\{name}/documentproperties/\{propertyName} | Add/update document property.
*PdfApi* | [**putSquareAnnotation**](PdfApi.md#putSquareAnnotation) | **PUT** /pdf/\{name}/annotations/square/\{annotationId} | Replace document square annotation
*PdfApi* | [**putSvgInStorageToPdf**](PdfApi.md#putSvgInStorageToPdf) | **PUT** /pdf/\{name}/create/svg | Convert SVG file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putTextAnnotation**](PdfApi.md#putTextAnnotation) | **PUT** /pdf/\{name}/annotations/text/\{annotationId} | Replace document text annotation
*PdfApi* | [**putUpdateField**](PdfApi.md#putUpdateField) | **PUT** /pdf/\{name}/fields/\{fieldName} | Update field.
*PdfApi* | [**putUpdateFields**](PdfApi.md#putUpdateFields) | **PUT** /pdf/\{name}/fields | Update fields.
*PdfApi* | [**putWebInStorageToPdf**](PdfApi.md#putWebInStorageToPdf) | **PUT** /pdf/\{name}/create/web | Convert web page to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXfaPdfInRequestToAcroForm**](PdfApi.md#putXfaPdfInRequestToAcroForm) | **PUT** /pdf/convert/xfatoacroform | Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.
*PdfApi* | [**putXfaPdfInStorageToAcroForm**](PdfApi.md#putXfaPdfInStorageToAcroForm) | **PUT** /pdf/\{name}/convert/xfatoacroform | Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage
*PdfApi* | [**putXmlInStorageToPdf**](PdfApi.md#putXmlInStorageToPdf) | **PUT** /pdf/\{name}/create/xml | Convert XML file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXpsInStorageToPdf**](PdfApi.md#putXpsInStorageToPdf) | **PUT** /pdf/\{name}/create/xps | Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 
*PdfApi* | [**putXslFoInStorageToPdf**](PdfApi.md#putXslFoInStorageToPdf) | **PUT** /pdf/\{name}/create/xslfo | Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 
<a name="deleteAnnotation"></a>
## **deleteAnnotation**
> deleteAnnotation(name, annotationId, storage, folder) : AsposeResponse

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

<a name="deleteDocumentAnnotations"></a>
## **deleteDocumentAnnotations**
> deleteDocumentAnnotations(name, storage, folder) : AsposeResponse

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

<a name="deleteDocumentLinkAnnotations"></a>
## **deleteDocumentLinkAnnotations**
> deleteDocumentLinkAnnotations(name, storage, folder) : AsposeResponse

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

<a name="deleteField"></a>
## **deleteField**
> deleteField(name, fieldName, storage, folder) : AsposeResponse

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

<a name="deleteImage"></a>
## **deleteImage**
> deleteImage(name, imageId, storage, folder) : AsposeResponse

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
> deleteLinkAnnotation(name, linkId, storage, folder) : AsposeResponse

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
> deletePage(name, pageNumber, storage, folder) : AsposeResponse

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
> deletePageAnnotations(name, pageNumber, storage, folder) : AsposeResponse

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
> deletePageLinkAnnotations(name, pageNumber, storage, folder) : AsposeResponse

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

<a name="deleteProperties"></a>
## **deleteProperties**
> deleteProperties(name, storage, folder) : AsposeResponse

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
> deleteProperty(name, propertyName, storage, folder) : AsposeResponse

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

<a name="getCircleAnnotation"></a>
## **getCircleAnnotation**
> getCircleAnnotation(name, annotationId, storage, folder) : CircleAnnotationResponse

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

<a name="getDocument"></a>
## **getDocument**
> getDocument(name, storage, folder) : DocumentResponse

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
 - **Accept**: multipart/form-data

<a name="getDocumentAnnotations"></a>
## **getDocumentAnnotations**
> getDocumentAnnotations(name, storage, folder) : AnnotationsInfoResponse

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
> getDocumentAttachmentByIndex(name, attachmentIndex, storage, folder) : AttachmentResponse

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
> getDocumentAttachments(name, storage, folder) : AttachmentsResponse

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
> getDocumentBookmarks(name, bookmarkPath, storage, folder) : file

Read document bookmark/bookmarks (including children).

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**bookmarkPath** | **string** | The bookmark path. Leave it empty if you want to get all the bookmarks in the document. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getDocumentCircleAnnotations"></a>
## **getDocumentCircleAnnotations**
> getDocumentCircleAnnotations(name, storage, folder) : CircleAnnotationsResponse

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

<a name="getDocumentFreeTextAnnotations"></a>
## **getDocumentFreeTextAnnotations**
> getDocumentFreeTextAnnotations(name, storage, folder) : FreeTextAnnotationsResponse

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

<a name="getDocumentLineAnnotations"></a>
## **getDocumentLineAnnotations**
> getDocumentLineAnnotations(name, storage, folder) : LineAnnotationsResponse

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

<a name="getDocumentPolygonAnnotations"></a>
## **getDocumentPolygonAnnotations**
> getDocumentPolygonAnnotations(name, storage, folder) : PolygonAnnotationsResponse

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
> getDocumentPolyLineAnnotations(name, storage, folder) : PolyLineAnnotationsResponse

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

<a name="getDocumentProperties"></a>
## **getDocumentProperties**
> getDocumentProperties(name, storage, folder) : DocumentPropertiesResponse

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
> getDocumentProperty(name, propertyName, storage, folder) : DocumentPropertyResponse

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

<a name="getDocumentSquareAnnotations"></a>
## **getDocumentSquareAnnotations**
> getDocumentSquareAnnotations(name, storage, folder) : SquareAnnotationsResponse

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

<a name="getDocumentTextAnnotations"></a>
## **getDocumentTextAnnotations**
> getDocumentTextAnnotations(name, storage, folder) : TextAnnotationsResponse

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

<a name="getDownload"></a>
## **getDownload**
> getDownload(path, versionId, storage) : file

Download a specific file 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Path of the file including the file name and extension e.g. /file.ext | 
**versionId** | **string** | File's version | [optional]
**storage** | **string** | User's storage name | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getDownloadDocumentAttachmentByIndex"></a>
## **getDownloadDocumentAttachmentByIndex**
> getDownloadDocumentAttachmentByIndex(name, attachmentIndex, storage, folder) : file

Download document attachment content by its index.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**attachmentIndex** | **number** | The attachment index. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getEpubInStorageToPdf"></a>
## **getEpubInStorageToPdf**
> getEpubInStorageToPdf(srcPath, storage) : file

Convert EPUB file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.epub) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getField"></a>
## **getField**
> getField(name, fieldName, storage, folder) : FieldResponse

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
> getFields(name, storage, folder) : FieldsResponse

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

<a name="getFreeTextAnnotation"></a>
## **getFreeTextAnnotation**
> getFreeTextAnnotation(name, annotationId, storage, folder) : FreeTextAnnotationResponse

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

<a name="getHtmlInStorageToPdf"></a>
## **getHtmlInStorageToPdf**
> getHtmlInStorageToPdf(srcPath, htmlFileName, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, storage) : file

Convert HTML file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.zip) | 
**htmlFileName** | **string** | Name of HTML file in ZIP. | 
**height** | **number** | Page height | [optional]
**width** | **number** | Page width | [optional]
**isLandscape** | **boolean** | Is page landscaped | [optional]
**marginLeft** | **number** | Page margin left | [optional]
**marginBottom** | **number** | Page margin bottom | [optional]
**marginRight** | **number** | Page margin right | [optional]
**marginTop** | **number** | Page margin top | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getImage"></a>
## **getImage**
> getImage(name, imageId, storage, folder) : ImageResponse

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
> getImageExtractAsGif(name, imageId, width, height, storage, folder) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageExtractAsJpeg"></a>
## **getImageExtractAsJpeg**
> getImageExtractAsJpeg(name, imageId, width, height, storage, folder) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageExtractAsPng"></a>
## **getImageExtractAsPng**
> getImageExtractAsPng(name, imageId, width, height, storage, folder) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageExtractAsTiff"></a>
## **getImageExtractAsTiff**
> getImageExtractAsTiff(name, imageId, width, height, storage, folder) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImages"></a>
## **getImages**
> getImages(name, pageNumber, storage, folder) : ImagesResponse

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

<a name="getLaTeXInStorageToPdf"></a>
## **getLaTeXInStorageToPdf**
> getLaTeXInStorageToPdf(srcPath, storage) : file

Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.tex) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getLineAnnotation"></a>
## **getLineAnnotation**
> getLineAnnotation(name, annotationId, storage, folder) : LineAnnotationResponse

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
> getLinkAnnotation(name, linkId, storage, folder) : LinkAnnotationResponse

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

<a name="getListFiles"></a>
## **getListFiles**
> getListFiles(path, storage) : FilesResponse

Get the file listing of a specific folder 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Start with name of storage e.g. root folder '/'or some folder '/folder1/..' | [optional]
**storage** | **string** | User's storage name | [optional]

### Return type

[**FilesResponse**](FilesResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMhtInStorageToPdf"></a>
## **getMhtInStorageToPdf**
> getMhtInStorageToPdf(srcPath, storage) : file

Convert MHT file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.mht) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPage"></a>
## **getPage**
> getPage(name, pageNumber, storage, folder) : DocumentPageResponse

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
> getPageAnnotations(name, pageNumber, storage, folder) : AnnotationsInfoResponse

Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.

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

<a name="getPageCircleAnnotations"></a>
## **getPageCircleAnnotations**
> getPageCircleAnnotations(name, pageNumber, storage, folder) : CircleAnnotationsResponse

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
> getPageConvertToBmp(name, pageNumber, width, height, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageConvertToEmf"></a>
## **getPageConvertToEmf**
> getPageConvertToEmf(name, pageNumber, width, height, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageConvertToGif"></a>
## **getPageConvertToGif**
> getPageConvertToGif(name, pageNumber, width, height, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageConvertToJpeg"></a>
## **getPageConvertToJpeg**
> getPageConvertToJpeg(name, pageNumber, width, height, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageConvertToPng"></a>
## **getPageConvertToPng**
> getPageConvertToPng(name, pageNumber, width, height, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageConvertToTiff"></a>
## **getPageConvertToTiff**
> getPageConvertToTiff(name, pageNumber, width, height, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageFreeTextAnnotations"></a>
## **getPageFreeTextAnnotations**
> getPageFreeTextAnnotations(name, pageNumber, storage, folder) : FreeTextAnnotationsResponse

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

<a name="getPageLineAnnotations"></a>
## **getPageLineAnnotations**
> getPageLineAnnotations(name, pageNumber, storage, folder) : LineAnnotationsResponse

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
> getPageLinkAnnotation(name, pageNumber, linkId, storage, folder) : LinkAnnotationResponse

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
> getPageLinkAnnotations(name, pageNumber, storage, folder) : LinkAnnotationsResponse

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

<a name="getPagePolygonAnnotations"></a>
## **getPagePolygonAnnotations**
> getPagePolygonAnnotations(name, pageNumber, storage, folder) : PolygonAnnotationsResponse

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
> getPagePolyLineAnnotations(name, pageNumber, storage, folder) : PolyLineAnnotationsResponse

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

<a name="getPages"></a>
## **getPages**
> getPages(name, storage, folder) : DocumentPagesResponse

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

<a name="getPageSquareAnnotations"></a>
## **getPageSquareAnnotations**
> getPageSquareAnnotations(name, pageNumber, storage, folder) : SquareAnnotationsResponse

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

<a name="getPageText"></a>
## **getPageText**
> getPageText(name, pageNumber, format, regex, splitRects, folder, LLX, LLY, URX, URY, storage) : TextRectsResponse

Read page text items.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | Number of page (starting from 1). | 
**format** | **Array&lt;string&gt;** | List of formats for search. | [optional]
**regex** | **string** | Formats are specified as a regular expression. | [optional]
**splitRects** | **boolean** | Split result fragments (default is true). | [optional]
**folder** | **string** | The document folder. | [optional]
**LLX** | **number** |  | 
**LLY** | **number** |  | 
**URX** | **number** |  | 
**URY** | **number** |  | 
**storage** | **string** | The document storage. | [optional]

### Return type

[**TextRectsResponse**](TextRectsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPageTextAnnotations"></a>
## **getPageTextAnnotations**
> getPageTextAnnotations(name, pageNumber, storage, folder) : TextAnnotationsResponse

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

<a name="getPclInStorageToPdf"></a>
## **getPclInStorageToPdf**
> getPclInStorageToPdf(srcPath, storage) : file

Convert PCL file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.pcl) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToDoc"></a>
## **getPdfInStorageToDoc**
> getPdfInStorageToDoc(name, addReturnToLineEnd, format, imageResolutionX, imageResolutionY, maxDistanceBetweenTextLines, mode, recognizeBullets, relativeHorizontalProximity, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToEpub"></a>
## **getPdfInStorageToEpub**
> getPdfInStorageToEpub(name, contentRecognitionMode, folder, storage) : file

Converts PDF document (located on storage) to EPUB format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**contentRecognitionMode** | [**EpubRecognitionMode**](EpubRecognitionMode.md) | ?roperty tunes conversion for this or that desirable method of recognition of content. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToHtml"></a>
## **getPdfInStorageToHtml**
> getPdfInStorageToHtml(name, additionalMarginWidthInPoints, compressSvgGraphicsIfAny, convertMarkedContentToLayers, defaultFontName, documentType, fixedLayout, imageResolution, minimalLineWidth, preventGlyphsGrouping, splitCssIntoPages, splitIntoPages, useZOrder, antialiasingProcessing, cssClassNamesPrefix, explicitListOfSavedPages, fontEncodingStrategy, fontSavingMode, htmlMarkupGenerationMode, lettersPositioningMethod, pagesFlowTypeDependsOnViewersScreenSize, partsEmbeddingMode, rasterImagesSavingMode, removeEmptyAreasOnTopAndBottom, saveShadowedTextsAsTransparentTexts, saveTransparentTexts, specialFolderForAllImages, specialFolderForSvgImages, trySaveTextUnderliningAndStrikeoutingInCss, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToLaTeX"></a>
## **getPdfInStorageToLaTeX**
> getPdfInStorageToLaTeX(name, pagesCount, folder, storage) : file

Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pagesCount** | **number** | Pages count. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToMobiXml"></a>
## **getPdfInStorageToMobiXml**
> getPdfInStorageToMobiXml(name, folder, storage) : file

Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToPdfA"></a>
## **getPdfInStorageToPdfA**
> getPdfInStorageToPdfA(name, type, folder, storage) : file

Converts PDF document (located on storage) to PdfA format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**type** | [**PdfAType**](PdfAType.md) | Type of PdfA format. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToPptx"></a>
## **getPdfInStorageToPptx**
> getPdfInStorageToPptx(name, separateImages, slidesAsImages, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToSvg"></a>
## **getPdfInStorageToSvg**
> getPdfInStorageToSvg(name, compressOutputToZipArchive, folder, storage) : file

Converts PDF document (located on storage) to SVG format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**compressOutputToZipArchive** | **boolean** | Specifies whether output will be created as one zip-archive. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToTiff"></a>
## **getPdfInStorageToTiff**
> getPdfInStorageToTiff(name, brightness, compression, colorDepth, leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height, xResolution, yResolution, pageIndex, pageCount, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXls"></a>
## **getPdfInStorageToXls**
> getPdfInStorageToXls(name, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, folder, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXml"></a>
## **getPdfInStorageToXml**
> getPdfInStorageToXml(name, folder, storage) : file

Converts PDF document (located on storage) to XML format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPdfInStorageToXps"></a>
## **getPdfInStorageToXps**
> getPdfInStorageToXps(name, folder, storage) : file

Converts PDF document (located on storage) to XPS format and returns resulting file in response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getPolygonAnnotation"></a>
## **getPolygonAnnotation**
> getPolygonAnnotation(name, annotationId, storage, folder) : PolygonAnnotationResponse

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
> getPolyLineAnnotation(name, annotationId, storage, folder) : PolyLineAnnotationResponse

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

<a name="getPsInStorageToPdf"></a>
## **getPsInStorageToPdf**
> getPsInStorageToPdf(srcPath, storage) : file

Convert PS file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.ps) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getSquareAnnotation"></a>
## **getSquareAnnotation**
> getSquareAnnotation(name, annotationId, storage, folder) : SquareAnnotationResponse

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

<a name="getSvgInStorageToPdf"></a>
## **getSvgInStorageToPdf**
> getSvgInStorageToPdf(srcPath, adjustPageSize, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getText"></a>
## **getText**
> getText(name, format, regex, splitRects, folder, LLX, LLY, URX, URY, storage) : TextRectsResponse

Read document text.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**format** | **Array&lt;string&gt;** | List of formats for search. | [optional]
**regex** | **string** | Formats are specified as a regular expression. | [optional]
**splitRects** | **boolean** | Split result fragments (default is true). | [optional]
**folder** | **string** | The document folder. | [optional]
**LLX** | **number** |  | 
**LLY** | **number** |  | 
**URX** | **number** |  | 
**URY** | **number** |  | 
**storage** | **string** | The document storage. | [optional]

### Return type

[**TextRectsResponse**](TextRectsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTextAnnotation"></a>
## **getTextAnnotation**
> getTextAnnotation(name, annotationId, storage, folder) : TextAnnotationResponse

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

<a name="getVerifySignature"></a>
## **getVerifySignature**
> getVerifySignature(name, signName, storage, folder) : SignatureVerifyResponse

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
> getWebInStorageToPdf(url, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, storage) : file

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

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getWordsPerPage"></a>
## **getWordsPerPage**
> getWordsPerPage(name, storage, folder) : WordCountResponse

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
> getXfaPdfInStorageToAcroForm(name, folder, storage) : file

Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getXmlInStorageToPdf"></a>
## **getXmlInStorageToPdf**
> getXmlInStorageToPdf(srcPath, xslFilePath, storage) : file

Convert XML file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xml) | 
**xslFilePath** | **string** | Full XSL source filename (ex. /folder1/folder2/template.xsl) | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getXpsInStorageToPdf"></a>
## **getXpsInStorageToPdf**
> getXpsInStorageToPdf(srcPath, storage) : file

Convert XPS file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xps) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getXslFoInStorageToPdf"></a>
## **getXslFoInStorageToPdf**
> getXslFoInStorageToPdf(srcPath, storage) : file

Convert XslFo file (located on storage) to PDF format and return resulting file in response. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.xslfo) | 
**storage** | **string** | The document storage. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="postAppendDocument"></a>
## **postAppendDocument**
> postAppendDocument(name, appendDocument, appendFile, startPage, endPage, storage, folder) : DocumentResponse

Append document to existing one.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The original document name. | 
**appendDocument** | [**AppendDocument**](AppendDocument.md) | with the append document data. | [optional]
**appendFile** | **string** | Append file server path. | [optional]
**startPage** | **number** | Appending start page. | [optional]
**endPage** | **number** | Appending end page. | [optional]
**storage** | **string** | The documents storage. | [optional]
**folder** | **string** | The original document folder. | [optional]

### Return type

[**DocumentResponse**](DocumentResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCreateField"></a>
## **postCreateField**
> postCreateField(name, page, field, storage, folder) : AsposeResponse

Create field.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**page** | **number** | Document page number. | 
**field** | [**Field**](Field.md) | with the field data. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDocumentTextReplace"></a>
## **postDocumentTextReplace**
> postDocumentTextReplace(name, textReplace, storage, folder) : TextReplaceResponse

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

<a name="postInsertImage"></a>
## **postInsertImage**
> postInsertImage(name, pageNumber, llx, lly, urx, ury, imageFilePath, storage, folder, image) : AsposeResponse

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
> postMovePage(name, pageNumber, newIndex, storage, folder) : AsposeResponse

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
> postOptimizeDocument(name, options, storage, folder) : AsposeResponse

Optimize document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**options** | [**OptimizeOptions**](OptimizeOptions.md) | The optimization options. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPageCircleAnnotations"></a>
## **postPageCircleAnnotations**
> postPageCircleAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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

<a name="postPageFreeTextAnnotations"></a>
## **postPageFreeTextAnnotations**
> postPageFreeTextAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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

<a name="postPageLineAnnotations"></a>
## **postPageLineAnnotations**
> postPageLineAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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
> postPageLinkAnnotations(name, pageNumber, links, storage, folder) : AsposeResponse

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

<a name="postPagePolygonAnnotations"></a>
## **postPagePolygonAnnotations**
> postPagePolygonAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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
> postPagePolyLineAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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

<a name="postPageSquareAnnotations"></a>
## **postPageSquareAnnotations**
> postPageSquareAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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

<a name="postPageTextAnnotations"></a>
## **postPageTextAnnotations**
> postPageTextAnnotations(name, pageNumber, annotations, storage, folder) : AsposeResponse

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
> postPageTextReplace(name, pageNumber, textReplaceListRequest, storage, folder) : TextReplaceResponse

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

<a name="postSignDocument"></a>
## **postSignDocument**
> postSignDocument(name, signature, storage, folder) : AsposeResponse

Sign document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**signature** | [**Signature**](Signature.md) | Signature object containing signature data. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSignPage"></a>
## **postSignPage**
> postSignPage(name, pageNumber, signature, storage, folder) : AsposeResponse

Sign page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**signature** | [**Signature**](Signature.md) | Signature object containing signature data. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSplitDocument"></a>
## **postSplitDocument**
> postSplitDocument(name, format, from, to, storage, folder) : SplitResultResponse

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
> putAddNewPage(name, storage, folder) : DocumentPagesResponse

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
> putAddText(name, pageNumber, paragraph, folder, storage) : AsposeResponse

Add text to PDF document page.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | Number of page (starting from 1). | 
**paragraph** | [**Paragraph**](Paragraph.md) | Paragraph data. | [optional]
**folder** | **string** | Document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCircleAnnotation"></a>
## **putCircleAnnotation**
> putCircleAnnotation(name, annotationId, annotation, storage, folder) : CircleAnnotationResponse

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

<a name="putCreate"></a>
## **putCreate**
> putCreate(path, versionId, storage, File) : AsposeResponse

Upload a specific file 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext | 
**versionId** | **string** | Source file's version | [optional]
**storage** | **string** | User's storage name | [optional]
**File** | **Buffer** | File to upload | 

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putCreateDocument"></a>
## **putCreateDocument**
> putCreateDocument(name, storage, folder) : DocumentResponse

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

<a name="putEpubInStorageToPdf"></a>
## **putEpubInStorageToPdf**
> putEpubInStorageToPdf(name, srcPath, storage, dstFolder) : AsposeResponse

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
> putFieldsFlatten(name, storage, folder) : AsposeResponse

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

<a name="putFreeTextAnnotation"></a>
## **putFreeTextAnnotation**
> putFreeTextAnnotation(name, annotationId, annotation, storage, folder) : FreeTextAnnotationResponse

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

<a name="putHtmlInStorageToPdf"></a>
## **putHtmlInStorageToPdf**
> putHtmlInStorageToPdf(name, srcPath, htmlFileName, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, dstFolder, storage) : AsposeResponse

Convert HTML file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**srcPath** | **string** | Full source filename (ex. /folder1/folder2/template.zip) | 
**htmlFileName** | **string** | Name of HTML file in ZIP. | 
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
> putImageExtractAsGif(name, imageId, width, height, storage, folder, destFolder) : AsposeResponse

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
> putImageExtractAsJpeg(name, imageId, width, height, storage, folder, destFolder) : AsposeResponse

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
> putImageExtractAsPng(name, imageId, width, height, storage, folder, destFolder) : AsposeResponse

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
> putImageExtractAsTiff(name, imageId, width, height, storage, folder, destFolder) : AsposeResponse

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
> putImageInStorageToPdf(name, imageTemplates, dstFolder, storage) : AsposeResponse

Convert image file (located on storage) to PDF format and upload resulting file to storage. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**imageTemplates** | [**ImageTemplatesRequest**](ImageTemplatesRequest.md) | Image templates | 
**dstFolder** | **string** | The destination document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImagesExtractAsGif"></a>
## **putImagesExtractAsGif**
> putImagesExtractAsGif(name, pageNumber, width, height, storage, folder, destFolder) : AsposeResponse

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
> putImagesExtractAsJpeg(name, pageNumber, width, height, storage, folder, destFolder) : AsposeResponse

Extract document images in JPEG format to folder.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**width** | **number** | The converted image width. | [optional]
**height** | **number** | The converted image height. | [optional]
**storage** | **string** |  | [optional]
**folder** | **string** | The document folder. | [optional]
**destFolder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putImagesExtractAsPng"></a>
## **putImagesExtractAsPng**
> putImagesExtractAsPng(name, pageNumber, width, height, storage, folder, destFolder) : AsposeResponse

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
> putImagesExtractAsTiff(name, pageNumber, width, height, storage, folder, destFolder) : AsposeResponse

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

<a name="putLaTeXInStorageToPdf"></a>
## **putLaTeXInStorageToPdf**
> putLaTeXInStorageToPdf(name, srcPath, dstFolder, storage) : AsposeResponse

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
> putLineAnnotation(name, annotationId, annotation, storage, folder) : LineAnnotationResponse

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
> putLinkAnnotation(name, linkId, link, storage, folder) : LinkAnnotationResponse

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
> putMergeDocuments(name, mergeDocuments, storage, folder) : file

Merge a list of documents.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Resulting documen name. | 
**mergeDocuments** | [**MergeDocuments**](MergeDocuments.md) | with a list of documents. | [optional]
**storage** | **string** | Resulting document storage. | [optional]
**folder** | **string** | Resulting document folder. | [optional]

### Return type

**file**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMhtInStorageToPdf"></a>
## **putMhtInStorageToPdf**
> putMhtInStorageToPdf(name, srcPath, dstFolder, storage) : AsposeResponse

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

<a name="putPageAddStamp"></a>
## **putPageAddStamp**
> putPageAddStamp(name, pageNumber, stamp, storage, folder) : AsposeResponse

Add page stamp.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**pageNumber** | **number** | The page number. | 
**stamp** | [**Stamp**](Stamp.md) | with data. | 
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPageConvertToBmp"></a>
## **putPageConvertToBmp**
> putPageConvertToBmp(name, pageNumber, outPath, width, height, folder, storage) : AsposeResponse

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
> putPageConvertToEmf(name, pageNumber, outPath, width, height, folder, storage) : AsposeResponse

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
> putPageConvertToGif(name, pageNumber, outPath, width, height, folder, storage) : AsposeResponse

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
> putPageConvertToJpeg(name, pageNumber, outPath, width, height, folder, storage) : AsposeResponse

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
> putPageConvertToPng(name, pageNumber, outPath, width, height, folder, storage) : AsposeResponse

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
> putPageConvertToTiff(name, pageNumber, outPath, width, height, folder, storage) : AsposeResponse

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
> putPclInStorageToPdf(name, srcPath, dstFolder, storage) : AsposeResponse

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
> putPdfInRequestToDoc(outPath, addReturnToLineEnd, format, imageResolutionX, imageResolutionY, maxDistanceBetweenTextLines, mode, recognizeBullets, relativeHorizontalProximity, storage, file) : AsposeResponse

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
> putPdfInRequestToEpub(outPath, contentRecognitionMode, storage, file) : AsposeResponse

Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.epub) | 
**contentRecognitionMode** | [**EpubRecognitionMode**](EpubRecognitionMode.md) | ?roperty tunes conversion for this or that desirable method of recognition of content. | [optional]
**storage** | **string** | The document storage. | [optional]
**file** | **Buffer** | A file to be converted. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putPdfInRequestToHtml"></a>
## **putPdfInRequestToHtml**
> putPdfInRequestToHtml(outPath, additionalMarginWidthInPoints, compressSvgGraphicsIfAny, convertMarkedContentToLayers, defaultFontName, documentType, fixedLayout, imageResolution, minimalLineWidth, preventGlyphsGrouping, splitCssIntoPages, splitIntoPages, useZOrder, antialiasingProcessing, cssClassNamesPrefix, explicitListOfSavedPages, fontEncodingStrategy, fontSavingMode, htmlMarkupGenerationMode, lettersPositioningMethod, pagesFlowTypeDependsOnViewersScreenSize, partsEmbeddingMode, rasterImagesSavingMode, removeEmptyAreasOnTopAndBottom, saveShadowedTextsAsTransparentTexts, saveTransparentTexts, specialFolderForAllImages, specialFolderForSvgImages, trySaveTextUnderliningAndStrikeoutingInCss, storage, file) : AsposeResponse

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
> putPdfInRequestToLaTeX(outPath, pagesCount, storage, file) : AsposeResponse

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
> putPdfInRequestToMobiXml(outPath, storage, file) : AsposeResponse

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
> putPdfInRequestToPdfA(outPath, type, storage, file) : AsposeResponse

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
> putPdfInRequestToPptx(outPath, separateImages, slidesAsImages, storage, file) : AsposeResponse

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
> putPdfInRequestToSvg(outPath, storage, file) : AsposeResponse

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
> putPdfInRequestToTiff(outPath, brightness, compression, colorDepth, leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height, xResolution, yResolution, pageIndex, pageCount, storage, file) : AsposeResponse

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
> putPdfInRequestToXls(outPath, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, storage, file) : AsposeResponse

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

<a name="putPdfInRequestToXml"></a>
## **putPdfInRequestToXml**
> putPdfInRequestToXml(outPath, storage, file) : AsposeResponse

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
> putPdfInRequestToXps(outPath, storage, file) : AsposeResponse

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
> putPdfInStorageToDoc(name, outPath, addReturnToLineEnd, format, imageResolutionX, imageResolutionY, maxDistanceBetweenTextLines, mode, recognizeBullets, relativeHorizontalProximity, folder, storage) : AsposeResponse

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
> putPdfInStorageToEpub(name, outPath, contentRecognitionMode, folder, storage) : AsposeResponse

Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**outPath** | **string** | Full resulting filename (ex. /folder1/folder2/result.epub) | 
**contentRecognitionMode** | [**EpubRecognitionMode**](EpubRecognitionMode.md) | ?roperty tunes conversion for this or that desirable method of recognition of content. | [optional]
**folder** | **string** | The document folder. | [optional]
**storage** | **string** | The document storage. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPdfInStorageToHtml"></a>
## **putPdfInStorageToHtml**
> putPdfInStorageToHtml(name, outPath, additionalMarginWidthInPoints, compressSvgGraphicsIfAny, convertMarkedContentToLayers, defaultFontName, documentType, fixedLayout, imageResolution, minimalLineWidth, preventGlyphsGrouping, splitCssIntoPages, splitIntoPages, useZOrder, antialiasingProcessing, cssClassNamesPrefix, explicitListOfSavedPages, fontEncodingStrategy, fontSavingMode, htmlMarkupGenerationMode, lettersPositioningMethod, pagesFlowTypeDependsOnViewersScreenSize, partsEmbeddingMode, rasterImagesSavingMode, removeEmptyAreasOnTopAndBottom, saveShadowedTextsAsTransparentTexts, saveTransparentTexts, specialFolderForAllImages, specialFolderForSvgImages, trySaveTextUnderliningAndStrikeoutingInCss, folder, storage) : AsposeResponse

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
> putPdfInStorageToLaTeX(name, outPath, pagesCount, folder, storage) : AsposeResponse

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
> putPdfInStorageToMobiXml(name, outPath, folder, storage) : AsposeResponse

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
> putPdfInStorageToPdfA(name, outPath, type, folder, storage) : AsposeResponse

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
> putPdfInStorageToPptx(name, outPath, separateImages, slidesAsImages, folder, storage) : AsposeResponse

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
> putPdfInStorageToSvg(name, outPath, folder, storage) : AsposeResponse

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
> putPdfInStorageToTiff(name, outPath, brightness, compression, colorDepth, leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height, xResolution, yResolution, pageIndex, pageCount, folder, storage) : AsposeResponse

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
> putPdfInStorageToXls(name, outPath, insertBlankColumnAtFirst, minimizeTheNumberOfWorksheets, scaleFactor, uniformWorksheets, folder, storage) : AsposeResponse

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

<a name="putPdfInStorageToXml"></a>
## **putPdfInStorageToXml**
> putPdfInStorageToXml(name, outPath, folder, storage) : AsposeResponse

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
> putPdfInStorageToXps(name, outPath, folder, storage) : AsposeResponse

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
> putPolygonAnnotation(name, annotationId, annotation, storage, folder) : PolygonAnnotationResponse

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
> putPolyLineAnnotation(name, annotationId, annotation, storage, folder) : PolyLineAnnotationResponse

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

<a name="putPrivileges"></a>
## **putPrivileges**
> putPrivileges(name, privileges, storage, folder) : AsposeResponse

Update privilege document.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**privileges** | [**DocumentPrivilege**](DocumentPrivilege.md) | Document privileges.  | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**AsposeResponse**](AsposeResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPsInStorageToPdf"></a>
## **putPsInStorageToPdf**
> putPsInStorageToPdf(name, srcPath, dstFolder, storage) : AsposeResponse

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

<a name="putReplaceImage"></a>
## **putReplaceImage**
> putReplaceImage(name, imageId, imageFilePath, storage, folder, image) : ImageResponse

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

<a name="putSearchableDocument"></a>
## **putSearchableDocument**
> putSearchableDocument(name, storage, folder, lang) : AsposeResponse

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
> putSetProperty(name, propertyName, value, storage, folder) : DocumentPropertyResponse

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

<a name="putSquareAnnotation"></a>
## **putSquareAnnotation**
> putSquareAnnotation(name, annotationId, annotation, storage, folder) : SquareAnnotationResponse

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

<a name="putSvgInStorageToPdf"></a>
## **putSvgInStorageToPdf**
> putSvgInStorageToPdf(name, srcPath, adjustPageSize, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, dstFolder, storage) : AsposeResponse

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

<a name="putTextAnnotation"></a>
## **putTextAnnotation**
> putTextAnnotation(name, annotationId, annotation, storage, folder) : TextAnnotationResponse

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

<a name="putUpdateField"></a>
## **putUpdateField**
> putUpdateField(name, fieldName, field, storage, folder) : FieldResponse

Update field.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**fieldName** | **string** | The name of a field to be updated. | 
**field** | [**Field**](Field.md) | with the field data. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FieldResponse**](FieldResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUpdateFields"></a>
## **putUpdateFields**
> putUpdateFields(name, fields, storage, folder) : FieldsResponse

Update fields.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | The document name. | 
**fields** | [**Fields**](Fields.md) | with the fields data. | [optional]
**storage** | **string** | The document storage. | [optional]
**folder** | **string** | The document folder. | [optional]

### Return type

[**FieldsResponse**](FieldsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putWebInStorageToPdf"></a>
## **putWebInStorageToPdf**
> putWebInStorageToPdf(name, url, height, width, isLandscape, marginLeft, marginBottom, marginRight, marginTop, dstFolder, storage) : AsposeResponse

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
> putXfaPdfInRequestToAcroForm(outPath, storage, file) : AsposeResponse

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
> putXfaPdfInStorageToAcroForm(name, outPath, folder, storage) : AsposeResponse

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
> putXmlInStorageToPdf(name, srcPath, xslFilePath, dstFolder, storage) : AsposeResponse

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
> putXpsInStorageToPdf(name, srcPath, dstFolder, storage) : AsposeResponse

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
> putXslFoInStorageToPdf(name, srcPath, dstFolder, storage) : AsposeResponse

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


