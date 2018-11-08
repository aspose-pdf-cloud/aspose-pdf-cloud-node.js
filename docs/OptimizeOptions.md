# OptimizeOptions
Represents Pdf optimize options.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowReusePageContent** | **boolean** | If true page contents will be reused when document is optimized for equal pages. | 
**compressImages** | **boolean** | If this flag is set to true images will be compressed in the document. compression level is specfied with ImageQuality property. | 
**imageQuality** | **number** | Specifie slevel of image compression when CompressIamges flag is used. | 
**linkDuplcateStreams** | **boolean** | If this flag is set to true, Resource streams will be analyzed. If duplicate streams are found (i.e. if stream contents is equal), then thes streams will be stored as one object. This allows to decrease document size in some cases (for example, when same document was concatenedted multiple times). | 
**removeUnusedObjects** | **boolean** | If this flag is set to true, all document objects will be checked and unused objects (i.e. objects which does not have any reference) are removed from document. | 
**removeUnusedStreams** | **boolean** | If this flag set to true, every resource is checked on it's usage. If resource is never used, then resources is removed. This may decrease document size for example when pages were extracted from document.  | 
**unembedFonts** | **boolean** | Make fonts not embedded if set to true.  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/optimizeOptions.ts)

