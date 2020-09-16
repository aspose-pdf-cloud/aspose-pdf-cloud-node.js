# RedactionAnnotation
Provides RedactionAnnotation.

*Inherited from [Annotation](Annotation.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quadPoint** | [**Array&lt;Point&gt;**](Point.md) | An array of 8xN numbers specifying the coordinates of content region that is intended to be removed.  | [optional]
**fillColor** | [**Color**](Color.md) | Gets or sets color to fill annotation. | [optional]
**borderColor** | [**Color**](Color.md) | Gets or sets color of border which is drawn when redaction is not active. | [optional]
**overlayText** | **string** | Text to print on redact annotation. | [optional]
**repeat** | **boolean** | If true overlay text will be repeated on the annotation.  | [optional]
**textAlignment** | [**HorizontalAlignment**](HorizontalAlignment.md) | Gets or sets. Alignment of Overlay Text. | [optional]
**color** | [**Color**](Color.md) | Color of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**contents** | **string** | Get the annotation content.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**modified** | **string** | The date and time when the annotation was last modified.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**id** | **string** | Gets ID of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**flags** | [**Array&lt;AnnotationFlags&gt;**](AnnotationFlags.md) | Gets Flags of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**name** | **string** | Gets Name of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**rect** | [**Rectangle**](Rectangle.md) | Gets Rect of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | 
**pageIndex** | **number** | Gets PageIndex of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**zIndex** | **number** | Gets ZIndex of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**horizontalAlignment** | [**HorizontalAlignment**](HorizontalAlignment.md) | Gets HorizontalAlignment of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**verticalAlignment** | [**VerticalAlignment**](VerticalAlignment.md) | Gets VerticalAlignment of the annotation.<br />*Inherited from [Annotation](Annotation.md)* | [optional]
**links** | [**Array&lt;Link&gt;**](Link.md) | Link to the document.<br />*Inherited from [LinkElement](LinkElement.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/redactionAnnotation.ts)

