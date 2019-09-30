# DocMDPAccessPermissionType
The access permissions granted for this document.
Valid values are:
1 - No changes to the document are permitted; any change to the document invalidates the signature.
2 - Permitted changes are filling in forms, instantiating page templates, and signing; other changes invalidate the signature.
3 - Permitted changes are the same as for 2, as well as annotation creation, deletion, and modification; other changes invalidate the signature.

## Enum
Name | Type | Value | Description
------------ | ------------- | ------------- | -------------
**AnnotationModification** | **string** | 'AnnotationModification' | Permitted changes are the same as for FillingInForms, as well as annotation creation, deletion, and modification; other changes invalidate the signature.
**FillingInForms** | **string** | 'FillingInForms' | Permitted changes are filling in forms, instantiating page templates, and signing; other changes invalidate the signature.
**NoChanges** | **string** | 'NoChanges' | No changes to the document are permitted; any change to the document invalidates the signature.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/docMDPAccessPermissionType.ts)

