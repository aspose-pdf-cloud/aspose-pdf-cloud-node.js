# SplitResultDocument
Represents split result document,

*Inherited from [Link](Link.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Gets or sets the page number. | 
**href** | **string** | The "href" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference (Inherited from **[Link](Link.md)**) | [optional]
**rel** | **string** | atom:link elements MAY have a "rel" attribute that indicates the link relation type. If the "rel" attribute is not present, the link element MUST be interpreted as if the link relation type is "alternate". (Inherited from **[Link](Link.md)**) | [optional]
**type** | **string** | On the link element, the "type" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced. Note that the type attribute does not override the actual media type returned with the representation. (Inherited from **[Link](Link.md)**) | [optional]
**title** | **string** | The "title" attribute conveys human-readable information about the link. The content of the "title" attribute is Language-Sensitive. (Inherited from **[Link](Link.md)**) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

