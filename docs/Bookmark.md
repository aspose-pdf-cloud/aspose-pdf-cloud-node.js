# Bookmark
Provides link to bookmark.

*Inherited from [LinkElement](LinkElement.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Get the Title; | [optional]
**italic** | **boolean** | Is bookmark italic. | [optional]
**bold** | **boolean** | Is bookmark bold. | [optional]
**color** | [**Color**](Color.md) | Get the color | [optional]
**action** | **string** | Gets or sets the action bound with the bookmark. If PageNumber is presented the action can not be specified. The action type includes: "GoTo", "GoToR", "Launch", "Named". | [optional]
**level** | **number** | Gets or sets bookmark's hierarchy level. | [optional]
**destination** | **string** | Gets or sets bookmark's destination page. Required if action is set as string.Empty. | [optional]
**pageDisplay** | **string** | Gets or sets the type of display bookmark's destination page. | [optional]
**pageDisplay_Bottom** | **number** | Gets or sets the bottom coordinate of page display. | [optional]
**pageDisplay_Left** | **number** | Gets or sets the left coordinate of page display. | [optional]
**pageDisplay_Right** | **number** | Gets or sets the right coordinate of page display. | [optional]
**pageDisplay_Top** | **number** | Gets or sets the top coordinate of page display. | [optional]
**pageDisplay_Zoom** | **number** | Gets or sets the zoom factor of page display. | [optional]
**pageNumber** | **number** | Gets or sets the number of bookmark's destination page.  | [optional]
**remoteFile** | **string** | Gets or sets the file (path) which is required for "GoToR" action of bookmark. | [optional]
**bookmarks** | [**Bookmarks**](Bookmarks.md) | The children bookmarks. | [optional]
**links** | [**Array&lt;Link&gt;**](Link.md) | Link to the document.<br />*Inherited from [LinkElement](LinkElement.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/bookmark.ts)

