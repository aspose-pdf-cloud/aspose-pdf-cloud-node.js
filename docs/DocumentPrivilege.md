# DocumentPrivilege
Represents the privileges for accessing Pdf file./>.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPrint** | **boolean** | Sets the permission which allow print or not. true is allow and false or not set is forbidden. | [optional]
**allowDegradedPrinting** | **boolean** | Sets the permission which allow degraded printing or not. true is allow and false or not set is forbidden. | [optional]
**allowModifyContents** | **boolean** | Sets the permission which allow modify contents or not. true is allow and false or not set is forbidden. | [optional]
**allowCopy** | **boolean** | Sets the permission which allow copy or not. true is allow and false or not set is forbidden. | [optional]
**allowModifyAnnotations** | **boolean** | Sets the permission which allow modify annotations or not. true is allow and false or not set is forbidden. | [optional]
**allowFillIn** | **boolean** | Sets the permission which allow fill in forms or not. true is allow and false or not set is forbidden. | [optional]
**allowScreenReaders** | **boolean** | Sets the permission which allow screen readers or not. true is allow and false or not set is forbidden. | [optional]
**allowAssembly** | **boolean** | Sets the permission which allow assembly or not. true is allow and false or not set is forbidden. | [optional]
**printAllowLevel** | **number** | Sets the print level of document's privilege. Just as the Adobe Professional's Printing Allowed settings. 0: None. 1: Low Resolution (150 dpi). 2: High Resolution. | [optional]
**changeAllowLevel** | **number** | Sets the change level of document's privilege. Just as the Adobe Professional's Changes Allowed settings. 0: None. 1: Inserting, Deleting and Rotating pages. 2: Filling in form fields and signing existing signature fields. 3: Commenting, filling in form fields, and signing existing signature fields. 4: Any except extracting pages. | [optional]
**copyAllowLevel** | **number** | Sets the copy level of document's privilege. Just as the Adobe Professional's permission settings. 0: None. 1: Enable text access for screen reader devices for the visually impaired. 2: Enable copying of text, images and other content. | [optional]
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

