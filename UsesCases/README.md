#### Attachments
- **[Attachments/add/appendAttachment.js](Attachments/add/appendAttachment.js)** – Appends a new file as an attachment to a PDF document.
  ```bash
  node UsesCases/Attachments/add/appendAttachment.js
  ```
- **[Attachments/get/getAttachmentAndSave.js](Attachments/get/getAttachmentAndSave.js)** – Retrieves all attachments from a PDF and saves a specific attachment to a local file.
  ```bash
  node UsesCases/Attachments/get/getAttachmentAndSave.js
  ```

#### Bookmarks
- **[Bookmarks/add/appendBookmarks.js](Bookmarks/add/appendBookmarks.js)** – Adds a new bookmark with custom properties to a PDF document.
  ```bash
  node UsesCases/Bookmarks/add/appendBookmarks.js
  ```
- **[Bookmarks/get/getBookmarkByPathAndShow.js](Bookmarks/get/getBookmarkByPathAndShow.js)** – Retrieves and displays a specific bookmark from a PDF using its path.
  ```bash
  node UsesCases/Bookmarks/get/getBookmarkByPathAndShow.js
  ```
- **[Bookmarks/get/getBookmarksAndShow.js](Bookmarks/get/getBookmarksAndShow.js)** – Fetches and lists all bookmarks from a PDF document.
  ```bash
  node UsesCases/Bookmarks/get/getBookmarksAndShow.js
  ```
- **[Bookmarks/remove/removeBookmarks.js](Bookmarks/remove/removeBookmarks.js)** – Deletes a specified bookmark from a PDF document.
  ```bash
  node UsesCases/Bookmarks/remove/removeBookmarks.js
  ```

#### ChangeLayout
- **[ChangeLayout/changeLayoutLaunch.js](ChangeLayout/changeLayoutLaunch.js)** – Orchestrates multiple PDF layout operations: page rotation, cropping, and resizing.
  ```bash
  node UsesCases/ChangeLayout/changeLayoutLaunch.js
  ```
- *[ChangeLayout/changeLayoutHelper.js](ChangeLayout/changeLayoutHelper.js)* – Helper module providing common functions for PDF layout manipulation tasks.
- *[ChangeLayout/cropPage.js](ChangeLayout/cropPage.js)* – Crops a specified region from a PDF page and saves it as a new document.
- *[ChangeLayout/resizeDocumentAllPages.js](ChangeLayout/resizeDocumentAllPages.js)* – Resizes all pages of a PDF document to specified dimensions.
- *[ChangeLayout/rotatePageStdAngle.js](ChangeLayout/rotatePageStdAngle.js)* – Rotates specified pages of a PDF by a standard angle.

#### Compares
- **[Compares/comparesLaunch.js](Compares/comparesLaunch.js)** – Launches a comparison between two PDF documents and highlights differences.
  ```bash
  node UsesCases/Compares/comparesLaunch.js
  ```
- *[Compares/comparePdfDocuments.js](Compares/comparePdfDocuments.js)* – Core logic for comparing two PDF files and generating a difference document.
- *[Compares/comparesHelper.js](Compares/comparesHelper.js)* – Utility module for file upload and download operations during PDF comparison.

#### CompressDocument
- **[CompressDocument/compressPdf.js](CompressDocument/compressPdf.js)** – Compresses a PDF document by optimizing images, fonts, and removing unused objects.
  ```bash
  node UsesCases/CompressDocument/compressPdf.js
  ```

#### CreateDocument
- **[CreateDocument/createPdf.js](CreateDocument/createPdf.js)** – Creates a new PDF document with custom properties, display settings, and multiple pages.
  ```bash
  node UsesCases/CreateDocument/createPdf.js
  ```
- **[CreateDocument/createPdfSimple.js](CreateDocument/createPdfSimple.js)** – Creates a simple, empty PDF document.
  ```bash
  node UsesCases/CreateDocument/createPdfSimple.js
  ```

#### EncryptDecrypt
- **[EncryptDecrypt/decryptDocument.js](EncryptDecrypt/decryptDocument.js)** – Decrypts a password-protected PDF document.
  ```bash
  node UsesCases/EncryptDecrypt/decryptDocument.js
  ```
- **[EncryptDecrypt/encryptDocument.js](EncryptDecrypt/encryptDocument.js)** – Encrypts a PDF document with user and owner passwords using a specified algorithm.
  ```bash
  node UsesCases/EncryptDecrypt/encryptDocument.js
  ```

#### HeaderFooter
- **[HeaderFooter/appendImageFooter.js](HeaderFooter/appendImageFooter.js)** – Adds an image-based footer to all pages of a PDF document.
  ```bash
  node UsesCases/HeaderFooter/appendImageFooter.js
  ```
- **[HeaderFooter/appendImageHeader.js](HeaderFooter/appendImageHeader.js)** – Adds an image-based header to all pages of a PDF document.
  ```bash
  node UsesCases/HeaderFooter/appendImageHeader.js
  ```
- **[HeaderFooter/appendTextFooter.js](HeaderFooter/appendTextFooter.js)** – Appends a text footer to all pages of a PDF.
  ```bash
  node UsesCases/HeaderFooter/appendTextFooter.js
  ```
- **[HeaderFooter/appendTextHeader.js](HeaderFooter/appendTextHeader.js)** – Appends a text header to all pages of a PDF.
  ```bash
  node UsesCases/HeaderFooter/appendTextHeader.js
  ```

#### Links
- **[Links/add/appendLink.js](Links/add/appendLink.js)** – Inserts a new hyperlink annotation onto a specified page of a PDF.
  ```bash
  node UsesCases/Links/add/appendLink.js
  ```
- **[Links/get/getAllLinks.js](Links/get/getAllLinks.js)** – Retrieves and displays all link annotations from a specific PDF page.
  ```bash
  node UsesCases/Links/get/getAllLinks.js
  ```
- **[Links/get/getLinkById.js](Links/get/getLinkById.js)** – Fetches and displays a specific link annotation by its ID from a PDF page.
  ```bash
  node UsesCases/Links/get/getLinkById.js
  ```
- **[Links/remove/removeLink.js](Links/remove/removeLink.js)** – Deletes a specified link annotation from a PDF document.
  ```bash
  node UsesCases/Links/remove/removeLink.js
  ```
- **[Links/replace/replaceFoundLink.js](Links/replace/replaceFoundLink.js)** – Replaces the target URL of an existing link annotation in a PDF.
  ```bash
  node UsesCases/Links/replace/replaceFoundLink.js
  ```

#### Metadatas
- **[Metadatas/remove/deleteMetadata.js](Metadatas/remove/deleteMetadata.js)** – Deletes a specific XMP metadata property from a PDF document.
  ```bash
  node UsesCases/Metadatas/remove/deleteMetadata.js
  ```

#### Pages
- **[Pages/add/addPage.js](Pages/add/addPage.js)** – Adds a new blank page to an existing PDF document.
  ```bash
  node UsesCases/Pages/add/addPage.js
  ```
- **[Pages/get/getPagesAndShow.js](Pages/get/getPagesAndShow.js)** – Retrieves and displays information about all pages or a specific page in a PDF.
  ```bash
  node UsesCases/Pages/get/getPagesAndShow.js
  ```
- **[Pages/move/movePage.js](Pages/move/movePage.js)** – Moves a page to a new position within the PDF document.
  ```bash
  node UsesCases/Pages/move/movePage.js
  ```
- **[Pages/remove/removePage.js](Pages/remove/removePage.js)** – Deletes a specified page from a PDF document.
  ```bash
  node UsesCases/Pages/remove/removePage.js
  ```
- **[Pages/stamp/pageAaddTextStamp.js](Pages/stamp/pageAaddTextStamp.js)** – Places a text stamp on a specified page of a PDF.
  ```bash
  node UsesCases/Pages/stamp/pageAaddTextStamp.js
  ```
- **[Pages/stamp/pageAddImageStamp.js](Pages/stamp/pageAddImageStamp.js)** – Places an image stamp on a specified page of a PDF.
  ```bash
  node UsesCases/Pages/stamp/pageAddImageStamp.js
  ```
- **[Pages/wordsCount/wordsCount.js](Pages/wordsCount/wordsCount.js)** – Counts the number of words on each page of a PDF document.
  ```bash
  node UsesCases/Pages/wordsCount/wordsCount.js
  ```

#### Parser
- **[Parser/parserLaunch.js](Parser/parserLaunch.js)** – Executes multiple PDF parsing operations to extract forms, images, tables, and text boxes.
  ```bash
  node UsesCases/Parser/parserLaunch.js
  ```
- *[Parser/parserGetFormsAsFDF.js](Parser/parserGetFormsAsFDF.js)* – Exports form field data from a PDF to an FDF file.
- *[Parser/parserGetFormsAsXML.js](Parser/parserGetFormsAsXML.js)* – Exports form field data from a PDF to an XML file.
- *[Parser/parserGetImages.js](Parser/parserGetImages.js)* – Extracts images from a specified page of a PDF and saves them as PNG files.
- *[Parser/parserGetTables.js](Parser/parserGetTables.js)* – Extracts table data from a PDF and saves it as a JSON file.
- *[Parser/parserGetTextBoxes.js](Parser/parserGetTextBoxes.js)* – Extracts text box field data from a PDF and saves it as a JSON file.
- *[Parser/parserHelper.js](Parser/parserHelper.js)* – Helper module providing common file operations for PDF parsing tasks.

#### Signatures
- **[Signatures/addDocumentSignature.js](Signatures/addDocumentSignature.js)** – Adds a digital signature field with a PKCS#7 certificate to a PDF document.
  ```bash
  node UsesCases/Signatures/addDocumentSignature.js
  ```
- **[Signatures/getDocumentSignatures.js](Signatures/getDocumentSignatures.js)** – Retrieves and lists all signature fields from a signed PDF document.
  ```bash
  node UsesCases/Signatures/getDocumentSignatures.js
  ```
- **[Signatures/replaceDocumentSignature.js](Signatures/replaceDocumentSignature.js)** – Replaces an existing digital signature in a PDF with a new one.
  ```bash
  node UsesCases/Signatures/replaceDocumentSignature.js
  ```
- **[Signatures/verifySignature.js](Signatures/verifySignature.js)** – Verifies the validity of a specific digital signature in a PDF document.
  ```bash
  node UsesCases/Signatures/verifySignature.js
  ```

#### Split
- **[Split/splitPages.js](Split/splitPages.js)** – Splits a PDF document into individual pages, saving each as a separate file.
  ```bash
  node UsesCases/Split/splitPages.js
  ```
- **[Split/splitRange.js](Split/splitRange.js)** – Splits a PDF into multiple documents based on specified page ranges.
  ```bash
  node UsesCases/Split/splitRange.js
  ```

#### Stamps
- **[Stamps/add/appendDocumentStamps.js](Stamps/add/appendDocumentStamps.js)** – Adds both text and image stamps to a PDF document.
  ```bash
  node UsesCases/Stamps/add/appendDocumentStamps.js
  ```
- **[Stamps/remove/removeStamps.js](Stamps/remove/removeStamps.js)** – Removes all stamps from a page or a specific stamp by ID from a PDF.
  ```bash
  node UsesCases/Stamps/remove/removeStamps.js
  ```

#### Tables
- **[Tables/add/appendTable.js](Tables/add/appendTable.js)** – Inserts a formatted table with custom rows and columns onto a PDF page.
  ```bash
  node UsesCases/Tables/add/appendTable.js
  ```
- **[Tables/get/getTablesAndShow.js](Tables/get/getTablesAndShow.js)** – Retrieves and displays information about all tables or a specific table in a PDF.
  ```bash
  node UsesCases/Tables/get/getTablesAndShow.js
  ```
- **[Tables/remove/removeTables.js](Tables/remove/removeTables.js)** – Deletes all tables from a page or a specific table by ID from a PDF.
  ```bash
  node UsesCases/Tables/remove/removeTables.js
  ```
- **[Tables/replace/replaceTable.js](Tables/replace/replaceTable.js)** – Replaces an existing table in a PDF with a newly formatted one.
  ```bash
  node UsesCases/Tables/replace/replaceTable.js
  ```