# TextBoxField
Provides TextBoxField.

*Inherited from [FormField](FormField.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multiline** | **boolean** | Gets or sets multiline flag of the field. If Multiline is true field can contain multiple lines of text. | [optional]
**spellCheck** | **boolean** | Gets or sets spellcheck flag for field. If true field shall be spell checked. | [optional]
**scrollable** | **boolean** | Gets or sets scrollable flag of field. If true field can be scrolled. | [optional]
**forceCombs** | **boolean** | Gets or sets flag which indicates is field divided into spaced positions. | [optional]
**maxLen** | **number** | Gets or sets maximum length of text in the field. | [optional]
**barcode** | **string** | Adds barcode 128 into the field. Field value will be changed onto the code and field become read only. | [optional]
**partialName** | **string** | Field name.<br />*Inherited from [FormField](FormField.md)* | [optional]
**fullName** | **string** | Full Field name.<br />*Inherited from [FormField](FormField.md)* | [optional]
**rect** | [**Rectangle**](Rectangle.md) | Field rectangle.<br />*Inherited from [FormField](FormField.md)* | [optional]
**value** | **string** | Field value.<br />*Inherited from [FormField](FormField.md)* | [optional]
**pageIndex** | **number** | Page index.<br />*Inherited from [FormField](FormField.md)* | 
**height** | **number** | Gets or sets height of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**width** | **number** | Gets or sets width of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**zIndex** | **number** | Z index.<br />*Inherited from [FormField](FormField.md)* | [optional]
**isGroup** | **boolean** | Is group.<br />*Inherited from [FormField](FormField.md)* | [optional]
**parent** | [**FormField**](FormField.md) | Gets field parent.<br />*Inherited from [FormField](FormField.md)* | [optional]
**isSharedField** | **boolean** | Property for Generator support. Used when field is added to header or footer. If true, this field will created once and it's appearance will be visible on all pages of the document. If false, separated field will be created for every document page.<br />*Inherited from [FormField](FormField.md)* | [optional]
**flags** | [**Array&lt;AnnotationFlags&gt;**](AnnotationFlags.md) | Gets Flags of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**color** | [**Color**](Color.md) | Color of the annotation.<br />*Inherited from [FormField](FormField.md)* | [optional]
**contents** | **string** | Get the field content.<br />*Inherited from [FormField](FormField.md)* | [optional]
**margin** | [**MarginInfo**](MarginInfo.md) | Gets or sets a outer margin for paragraph (for pdf generation)<br />*Inherited from [FormField](FormField.md)* | [optional]
**highlighting** | [**LinkHighlightingMode**](LinkHighlightingMode.md) | Field highlighting mode.<br />*Inherited from [FormField](FormField.md)* | [optional]
**horizontalAlignment** | [**HorizontalAlignment**](HorizontalAlignment.md) | Gets HorizontalAlignment of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**verticalAlignment** | [**VerticalAlignment**](VerticalAlignment.md) | Gets VerticalAlignment of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**border** | [**Border**](Border.md) | Gets or sets annotation border characteristics.<br />*Inherited from [FormField](FormField.md)* | [optional]
**links** | [**Array&lt;Link&gt;**](Link.md) | Link to the document.<br />*Inherited from [LinkElement](LinkElement.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/textBoxField.ts)

