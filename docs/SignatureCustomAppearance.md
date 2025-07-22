# SignatureCustomAppearance
An abstract class which represents signature custom appearance object.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fontFamilyName** | **string** | Gets/sets font family name. It should be existed in the document. Default value: Arial. | [optional]
**fontSize** | **number** | Gets/sets font size. Default value: 10. | [optional]
**rotation** | [**Rotation**](Rotation.md) | Gets or sets signature rotation. | 
**showContactInfo** | **boolean** | Gets/sets contact info visibility. Default value: true. | 
**showReason** | **boolean** | Gets/sets reason visibility. Default value: true. | 
**showLocation** | **boolean** | Gets/sets location visibility. Default value: true. | 
**contactInfoLabel** | **string** | Gets/sets contact info label. Default value: "Contact". | [optional]
**reasonLabel** | **string** | Gets/sets reason label. Default value: "Reason". | [optional]
**locationLabel** | **string** | Gets/sets location label. Default value: "Location". | [optional]
**digitalSignedLabel** | **string** | Gets/sets digital signed label. Default value: "Digitally signed by". | [optional]
**dateSignedAtLabel** | **string** | Gets/sets date signed label. Default value: "Date". | [optional]
**dateTimeLocalFormat** | **string** | Gets/sets datetime local format. Default value: "yyyy.MM.dd HH:mm:ss zzz". | [optional]
**dateTimeFormat** | **string** | Gets/sets datetime format. Default value: "yyyy.MM.dd HH:mm:ss". | [optional]
**backgroundColor** | [**Color**](Color.md) | Gets/sets background color. | [optional]
**foregroundColor** | [**Color**](Color.md) | Gets/sets foreground color. | [optional]
**useDigitalSubjectFormat** | **boolean** | Gets/sets subject format usage. | 
**digitalSubjectFormat** | [**Array&lt;SignatureSubjectNameElements&gt;**](SignatureSubjectNameElements.md) | Gets/sets subject format. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/signatureCustomAppearance.ts)

