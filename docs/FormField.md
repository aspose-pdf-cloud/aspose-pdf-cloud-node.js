# FormField
Provides form field.

*Inherited from [LinkElement](LinkElement.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partialName** | **string** | Field name. | [optional]
**rect** | [**Rectangle**](Rectangle.md) | Field rectangle. | [optional]
**value** | **string** | Field value. | [optional]
**pageIndex** | **number** | Page index. | 
**height** | **number** | Gets or sets height of the field. | [optional]
**width** | **number** | Gets or sets width of the field. | [optional]
**zIndex** | **number** | Z index. | [optional]
**isGroup** | **boolean** | Is group. | [optional]
**parent** | [**FormField**](FormField.md) | Gets field parent. | [optional]
**isSharedField** | **boolean** | Property for Generator support. Used when field is added to header or footer. If true, this field will created once and it's appearance will be visible on all pages of the document. If false, separated field will be created for every document page. | [optional]
**flags** | [**Array&lt;AnnotationFlags&gt;**](AnnotationFlags.md) | Gets Flags of the field. | [optional]
**color** | [**Color**](Color.md) | Color of the annotation. | [optional]
**contents** | **string** | Get the field content. | [optional]
**margin** | [**MarginInfo**](MarginInfo.md) | Gets or sets a outer margin for paragraph (for pdf generation) | [optional]
**highlighting** | [**LinkHighlightingMode**](LinkHighlightingMode.md) | Field highlighting mode. | [optional]
**horizontalAlignment** | [**HorizontalAlignment**](HorizontalAlignment.md) | Gets HorizontalAlignment of the field. | [optional]
**verticalAlignment** | [**VerticalAlignment**](VerticalAlignment.md) | Gets VerticalAlignment of the field. | [optional]
**border** | [**Border**](Border.md) | Gets or sets annotation border characteristics. | [optional]
**links** | [**Array&lt;Link&gt;**](Link.md) | Link to the document.<br />*Inherited from [LinkElement](LinkElement.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/formField.ts)

