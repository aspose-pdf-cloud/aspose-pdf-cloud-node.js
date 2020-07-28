# ImageCompressionVersion
Describes versions of image compression algorithm.

## Enum
Name | Type | Value | Description
------------ | ------------- | ------------- | -------------
**Fast** | **string** | 'Fast' | Improved algorithm faster then standard but applicable not for all cases.
**Mixed** | **string** | 'Mixed' | Use fast algorithm when possible and standard for other cases. May be slower then "Fast" but may produce better compression.
**Standard** | **string** | 'Standard' | Standard algorithm. Default value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/imageCompressionVersion.ts)

