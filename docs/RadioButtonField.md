# RadioButtonField
Provides RadioButtonField.

*Inherited from [ChoiceField](ChoiceField.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**Array&lt;Option&gt;**](Option.md) | Gets collection of options of the radio button. | [optional]
**radioButtonOptionsField** | [**Array&lt;RadioButtonOptionField&gt;**](RadioButtonOptionField.md) | Gets collection of radio button options field. | [optional]
**style** | [**BoxStyle**](BoxStyle.md) | Style of field box. | [optional]
**selected** | **number** | Gets or sets index of selected item. Numbering of items is started from 1. | 
**multiSelect** | **boolean** | Gets or sets multiselection flag.<br />*Inherited from [ChoiceField](ChoiceField.md)* | [optional]
**partialName** | **string** | Field name.<br />*Inherited from [FormField](FormField.md)* | [optional]
**rect** | [**Rectangle**](Rectangle.md) | Field rectangle.<br />*Inherited from [FormField](FormField.md)* | [optional]
**value** | **string** | Field value.<br />*Inherited from [FormField](FormField.md)* | [optional]
**pageIndex** | **number** | Page index.<br />*Inherited from [FormField](FormField.md)* | 
**height** | **number** | Gets or sets height of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**width** | **number** | Gets or sets width of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**zIndex** | **number** | Z index.<br />*Inherited from [FormField](FormField.md)* | [optional]
**isGroup** | **boolean** | Is group.<br />*Inherited from [FormField](FormField.md)* | 
**parent** | [**FormField**](FormField.md) | Gets field parent.<br />*Inherited from [FormField](FormField.md)* | [optional]
**isSharedField** | **boolean** | Property for Generator support. Used when field is added to header or footer. If true, this field will created once and it's appearance will be visible on all pages of the document. If false, separated field will be created for every document page.<br />*Inherited from [FormField](FormField.md)* | [optional]
**flags** | [**Array&lt;AnnotationFlags&gt;**](AnnotationFlags.md) | Gets Flags of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**color** | [**Color**](Color.md) | Color of the annotation.<br />*Inherited from [FormField](FormField.md)* | [optional]
**contents** | **string** | Get the field content.<br />*Inherited from [FormField](FormField.md)* | [optional]
**margin** | [**MarginInfo**](MarginInfo.md) | Gets or sets a outer margin for paragraph (for pdf generation)<br />*Inherited from [FormField](FormField.md)* | [optional]
**highlighting** | [**LinkHighlightingMode**](LinkHighlightingMode.md) | Field highlighting mode.<br />*Inherited from [FormField](FormField.md)* | [optional]
**horizontalAlignment** | [**HorizontalAlignment**](HorizontalAlignment.md) | Gets HorizontalAlignment of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**verticalAlignment** | [**VerticalAlignment**](VerticalAlignment.md) | Gets VerticalAlignment of the field.<br />*Inherited from [FormField](FormField.md)* | [optional]
**links** | [**Array&lt;Link&gt;**](Link.md) | Link to the document.<br />*Inherited from [LinkElement](LinkElement.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/radioButtonField.ts)

