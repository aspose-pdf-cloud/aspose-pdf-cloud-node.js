# Aspose.PDF Cloud Node.js SDK — Agent Analysis

> **Repository:** [aspose-pdf-cloud/aspose-pdf-cloud-node.js](https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node.js)  
> **Version:** 26.7.0 | **npm Package:** `asposepdfcloud`  
> **License:** MIT | **Node.js:** >= 4.8  
> **API Version:** v3.0 | **Language:** TypeScript (compiled to JavaScript)

---

## 1. Repository Overview

The **Aspose.PDF Cloud Node.js SDK** is a generated REST API client that wraps the Aspose.PDF Cloud API v3.0. It enables Node.js and browser-based JavaScript applications to perform a wide range of PDF document processing operations — creation, manipulation, conversion, and rendering — entirely in the cloud.

The SDK is auto-generated from the OpenAPI specification and follows a **two-package TypeScript structure** with models in `src/models/`, API class in `src/api/`, and infrastructure files in `src/`.

---

## 2. Architecture & Core Components

### 2.1 Package Structure

```
aspose-pdf-cloud-node.js/
├── src/
│   ├── api/
│   │   └── api.ts              # PdfApi class — 385+ API methods (~1.1 MB)
│   ├── models/
│   │   ├── annotation.ts       # One model per file (~200+ model files)
│   │   ├── document.ts
│   │   ├── bookmark.ts
│   │   └── ...                 # All model & enum definitions
│   ├── auth.ts                 # IAuthentication interface & OAuth implementation
│   ├── configuration.ts        # Configuration class (selfHost, clientId, clientSecret, baseUrl, debugMode)
│   ├── requestHelper.ts        # HTTP request infrastructure (superagent + request)
│   └── objectSerializer.ts     # Serialization/deserialization with discriminator support
├── test/
│   ├── baseTestPdfApi.ts       # Test singleton: PdfApi init, file upload, table builder
│   ├── testAnnotations.ts      # ~50 test files covering all features
│   ├── testBookmarks.ts
│   ├── testDocument.ts
│   └── ...
├── UsesCases/
│   ├── README.md               # {domain}-specific runnable examples index
│   ├── Attachments/
│   ├── Bookmarks/
│   ├── ChangeLayout/
│   ├── Compares/
│   ├── CompressDocument/
│   ├── CreateDocument/
│   ├── EncryptDecrypt/
│   ├── HeaderFooter/
│   ├── Links/
│   ├── Metadatas/
│   ├── Pages/
│   ├── Parser/
│   ├── Signatures/
│   ├── Split/
│   ├── Stamps/
│   └── Tables/
├── docs/                       # Markdown API documentation per model
├── settings/
│   └── credentials.json        # API credentials (client_id, client_secret, api_url, self_host)
├── testData/                   # Test fixture PDF files
├── package.json                # npm package definition
├── tsconfig.json               # TypeScript configuration
└── typings.json                # TypeScript type definitions
```

### 2.2 Core Files

| File | Purpose |
|------|---------|
| **`src/api/api.ts`** | `PdfApi` class — the main API surface with all REST endpoint methods (385+ methods, ~1.1 MB) |
| **`src/configuration.ts`** | `Configuration` struct holding `baseUrl`, `clientId`, `clientSecret`, `selfHost` flag, `debugMode`, and `authentication` reference |
| **`src/auth.ts`** | `IAuthentication` interface and `OAuth` class implementing client credentials flow with access token caching and 401 auto-refresh |
| **`src/requestHelper.ts`** | HTTP client using `superagent` — handles auth headers (`x-aspose-client: nodejs sdk`, `x-aspose-client-version: 26.7.0`), multipart upload, 401 retry, error response parsing |
| **`src/objectSerializer.ts`** | Type-safe serialization/deserialization with enum map, type map, discriminator support, and primitive type handling |

---

## 3. Data Model Organization

### 3.1 Model Files

All models reside in `src/models/`, one per file, organized by PDF concept:

| Category | Example Files |
|----------|---------------|
| **Annotations** | `annotation.ts`, `annotationType.ts`, `annotationFlags.ts`, `annotationState.ts`, `annotationInfo.ts`, `caretAnnotation.ts`, `circleAnnotation.ts`, `fileAttachmentAnnotation.ts`, `freeTextAnnotation.ts`, `highlightAnnotation.ts`, `inkAnnotation.ts`, `lineAnnotation.ts`, `linkAnnotation.ts`, `movieAnnotation.ts`, `polygonAnnotation.ts`, `polyLineAnnotation.ts`, `popupAnnotation.ts`, `redactionAnnotation.ts`, `screenAnnotation.ts`, `soundAnnotation.ts`, `squareAnnotation.ts`, `squigglyAnnotation.ts`, `stampAnnotation.ts`, `strikeOutAnnotation.ts`, `textAnnotation.ts`, `underlineAnnotation.ts` |
| **Form Fields** | `field.ts`, `fieldType.ts`, `formField.ts`, `checkBoxField.ts`, `comboBoxField.ts`, `listBoxField.ts`, `radioButtonField.ts`, `textBoxField.ts`, `signatureField.ts`, `choiceField.ts` |
| **Document** | `document.ts`, `documentConfig.ts`, `documentProperty.ts`, `documentProperties.ts`, `displayProperties.ts`, `documentPrivilege.ts` |
| **Pages** | `page.ts`, `pages.ts`, `pageLayout.ts`, `pageMode.ts`, `pageRange.ts`, `pageWordCount.ts` |
| **Stamps** | `stamp.ts`, `imageStamp.ts`, `textStamp.ts`, `pageNumberStamp.ts`, `pdfPageStamp.ts`, `imageStampPageSpecified.ts`, `textStampPageSpecified.ts` |
| **Conversions** | `docFormat.ts`, `htmlDocumentType.ts`, `epubRecognitionMode.ts`, `colorDepth.ts`, `compressionType.ts`, `outputFormat.ts` |
| **Storage** | `fileVersion.ts`, `fileVersions.ts`, `filesList.ts`, `filesUploadResult.ts`, `discUsage.ts`, `objectExist.ts`, `storageExist.ts` |
| **Primitives** | `color.ts`, `point.ts`, `rectangle.ts`, `dash.ts`, `border.ts`, `borderInfo.ts`, `marginInfo.ts`, `graphInfo.ts`, `link.ts`, `linkElement.ts` |
| **Enums** | `annotationType.ts`, `borderStyle.ts`, `borderEffect.ts`, `capStyle.ts`, `direction.ts`, `fontStyles.ts`, `horizontalAlignment.ts`, `justification.ts`, `lineEnding.ts`, `lineSpacing.ts`, `cryptoAlgorithm.ts`, `permissionsFlags.ts` |

### 3.2 Response Type Naming Convention

- **Single entity:** `{Entity}Response` — e.g., `DocumentResponse`, `BookmarkResponse`, `CircleAnnotationResponse`
- **Collection:** `{Entity}sResponse` — e.g., `BookmarksResponse`, `CircleAnnotationsResponse`, `FieldsResponse`
- **Base:** `AsposeResponse` with `Code` (number) and `Status` (string)

---

## 4. API Capabilities

### 4.1 Document Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `getDocument` | GET `/pdf/{name}` | Read document info |
| `putCreateDocument` | PUT `/pdf/{name}` | Create empty document |
| `postCreateDocument` | POST `/pdf/{name}` | Create document with config |
| `postOptimizeDocument` | POST `/pdf/{name}/optimize` | Optimize document (compress images, remove unused objects, unembed fonts) |
| `postSplitDocument` | POST `/pdf/{name}/split` | Split document into pages |
| `postOrganizeDocument` | POST `/pdf/{name}/organize` | Reorder pages |
| `postOrganizeDocuments` | POST `/pdf/organize` | Organize pages from multiple documents |
| `putMergeDocuments` | PUT `/pdf/{name}/merge` | Merge multiple documents |

### 4.2 Page Operations

All page operations follow the `getPage`, `postPage`, `deletePage` naming pattern:

| Method | Description |
|--------|-------------|
| `getPage` | Read page info |
| `getPages` | Get all pages |
| `postPage*` | Add new page |
| `deletePage` | Delete page by number |
| `putPage*` | Update page |
| `getPageConvertToTiff/Jpeg/Png/Emf/Bmp/Gif` | Convert page to image (GET) |
| `putPageConvertToTiff/Jpeg/Png/Emf/Bmp/Gif` | Convert page to image (PUT) |
| `getPageText` | Extract text from page region |
| `postPageImageStamps` | Add image stamp |
| `postPageTextStamps` | Add text stamp |
| `postPagePdfPageStamps` | Add PDF page stamp |
| `postPagePageNumberStamps` | Add page number stamp |

### 4.3 Annotations (22+ Types)

Each annotation type supports full CRUD operations:

| Operation | Pattern |
|-----------|---------|
| **Get all** | `getDocument{Type}Annotations(name, args)` |
| **Get by page** | `getPage{Type}Annotations(name, pageNumber, args)` |
| **Get by ID** | `get{Type}Annotation(name, annotationId, args)` |
| **Create** | `postPage{Type}Annotations(name, pageNumber, annotation, args)` |
| **Update** | `put{Type}Annotation(name, annotationId, annotation, args)` |
| **Delete** | `deleteAnnotation(name, annotationId, args)` |
| **Flatten** | `putAnnotationsFlatten(name, args)` |

Supported types: Caret, Circle, FileAttachment, FreeText, Highlight, Ink, Line, Link, Movie, Polygon, PolyLine, Popup, Redaction, Screen, Sound, Square, Squiggly, Stamp, StrikeOut, Text, Underline.

### 4.4 Form Fields (8 Types)

| Field Type | Operations |
|------------|------------|
| CheckBox, ComboBox, ListBox, RadioButton, TextBox, Signature | Get document fields, get page fields, get by name, create, update, delete |
| General | `getFields`, `putUpdateFields`, `putFieldsFlatten`, `postFlattenDocument` |
| Import/Export | XML, FDF, XFDF formats (GET and PUT for each) |

### 4.5 Bookmarks

| Method | Description |
|--------|-------------|
| `getDocumentBookmarks` | Get bookmark tree |
| `getBookmarks` | Get bookmarks at path |
| `getBookmark` | Get single bookmark |
| `postBookmark` | Add bookmark |
| `putBookmark` | Update bookmark |
| `deleteBookmark` | Delete bookmark |
| `deleteDocumentBookmarks` | Delete all bookmarks |

### 4.6 Conversions

**PDF → Other formats:**
DOC, DOCX, EPUB, Excel (XLS/XLSX), HTML, MobiXML, PDF/A, PPTX, SVG, TEX, TIFF, XLS, XML, XPS, Text, and more.

**Other formats → PDF:**
APS, BMP, EPUB, GIF, HTML, JPEG, Markdown, MHTML, PCL, PNG, PS, SVG, TeX, Web, XML, XPS, XSL FO, images.

**Pattern:** `get{Format}InStorageToPdf` / `put{Format}InStorageToPdf` for each source format.

### 4.7 Storage & File Management

| Method | Description |
|--------|-------------|
| `uploadFile` | Upload file to cloud storage |
| `downloadFile` | Download file from cloud storage |
| `copyFile` / `moveFile` / `deleteFile` | File operations |
| `createFolder` / `copyFolder` / `moveFolder` / `deleteFolder` | Folder operations |
| `getFilesList` | List files in folder |
| `getDiscUsage` | Get storage usage |
| `objectExists` / `storageExists` | Check existence |
| `getFileVersions` | List file versions |

### 4.8 Other Features

| Feature | Key Methods |
|---------|-------------|
| **Text** | `getText`, `getPageText`, `putAddText` |
| **Images** | `getImages`, `getImage`, `deleteImage`, `postInsertImage`, `getImageExtractAsJpeg/Png/Gif/Tiff` |
| **Links** | `getPageLinkAnnotations`, `postPageLinkAnnotations`, `putLinkAnnotation`, `deleteLinkAnnotation` |
| **Stamps** | `getDocumentStamps`, `getPageStamps`, `postPageTextStamps`, `postPageImageStamps`, `deleteStamp`, `deleteDocumentStamps`, `deletePageStamps` |
| **Tables** | `getDocumentTables`, `getPageTables`, `postPageTables`, `putTable`, `deleteTable`, `deleteDocumentTables`, `deletePageTables` |
| **Headers/Footers** | Via text/image stamps |
| **Encryption** | `putEncryptDocument`, `putDecryptDocument`, `putChangePasswordDocument` |
| **Properties** | `getDocumentProperties`, `putSetProperty`, `deleteProperty`, `deleteProperties` |
| **XMP Metadata** | `getXmpMetadataJson`, `getXmpMetadataXml`, `postXmpMetadata` |
| **Layers** | `getDocumentLayers`, `deleteDocumentLayer` |
| **Compare** | `postCompareDocument` |
| **Privileges** | `putPrivileges` |
| **Digital Signatures** | `getDocumentSignatureFields`, `getSignatureField`, `putSignatureField`, `putSignDocument`, `getVerifySignature` |
| **OCR** | `putSearchDocument` (OCR text recognition) |

---

## 5. Testing Infrastructure

### 5.1 Test Base (`test/baseTestPdfApi.ts`)

- Singleton pattern via `getPdfApi()` — lazy initialization on first call
- Reads credentials from `settings/credentials.json`
- Supports both public cloud (`new PdfApi(clientId, clientSecret)`) and self-hosted (`new PdfApi(baseUrl)`) modes
- Provides `uploadFile(name)` helper
- Provides `drawTable()` helper for creating table test fixtures
- Debug mode enabled by default (`pdfApi.configuration.debugMode = true`)

### 5.2 Credentials Format

```json
{
    "api_url": "https://api.aspose.cloud/v3.0",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "self_host": false
}
```

### 5.3 Test Pattern

All tests follow a consistent pattern using Mocha:

```typescript
import { expect, assert } from 'chai';
import { getPdfApi, remoteTempFolder, localTestDataFolder } from './baseTestPdfApi';

describe('Get Document Tests', function () {
    it('getDocument', async () => {
        const name = "4pages.pdf";
        const pdfApi = getPdfApi();
        const result = await pdfApi.getDocument(name, null, remoteTempFolder);
        assert.strictEqual(result.body.code, 200);
    });
});
```

Test files: 50 test files in `test/` covering all major features (annotations, bookmarks, document, fields, images, layers, stamps, tables, text, signatures, XMP metadata, etc.).

---

## 6. Use Cases (`UsesCases/`)

The `UsesCases/` directory contains **{domain}-specific, runnable JavaScript examples** organized by domain.

### 6.1 Directory Structure

Each {domain} directory contains JavaScript files, optionally organized into subdirectories by action:

```
UsesCases/{domain}/
├── add/                        # Group folder (optional)
│   └── somefile.js             # Individual files (optional)       
├── anotherfile.js              # Individual files (optional)
```

### 6.2 README.md Format

The `UsesCases/README.md` serves as the index for all use case domains. It follows a strict format:

#### Section Structure

Each domain is documented as a Markdown section with the following structure:

```markdown
#### {domain}
- **[{domain}/{path to main file}.js]({domain}/{path to main file}.js)** – Description of the main entry file containing function main().
  ```bash
  node UsesCases/{domain}/{path to main file}.js
  ```
- *[{domain}/{path to operation file}.js]({domain}/{path to operation file}.js)* – Description of the operation containing cloud method invocation.
```

**Formatting Rules:**

| Element | Rule |
|---------|------|
| **Section header** | `#### {domain}` — level-4 heading, PascalCase |
| **Main files** | Listed first, bold (`**`), includes `node` run command in a code block |
| **Operation files** | Listed after main files, italic (`*`), one per line |
| **File links** | Relative paths from `UsesCases/` directory |
| **Descriptions** | Present tense, action-oriented (e.g., "Adds", "Retrieves", "Deletes") |
| **Blank lines** | One blank line between sections |

### Example

```markdown
#### Compares
- **[Compares/comparesLaunch.js](Compares/comparesLaunch.js)** – Launches a comparison between two PDF documents and highlights differences.
  ```bash
  node UsesCases/Compares/comparesLaunch.js
  ```
- *[Compares/comparePdfDocuments.js](Compares/comparePdfDocuments.js)* – Core logic for comparing two PDF files and generating a difference document.
```

### 6.3 File Inclusion/Exclusion Rules

When generating or updating `UsesCases/README.md`, the following rules determine which files are included:

#### Included Files

| File Pattern | Reason | Example |
|-------------|--------|---------|
| `*{main}.js` (main files) | Files contains `function main()` function | `getDocumentSignatures.js`, `comparesLaunch.js` |
| `*{operation}.js` (operation files) | Individual domain operations contains cloud method invocations (no `function main()`) | `resizeDocumentAllPages.js`, `comparePdfDocuments.js` |

#### Excluded Files

| File Pattern | Reason | Example |
|-------------|--------|---------|
| **Non-`.js` files** | Only Javascript source files are documented | `*.md`, `*.json`, `*.pdf` |
| `*.js` (helper files) | Shared utilities (API init, file upload/download) | `comparesHelper.js` |
| `*.js` (data files)| Test data files (Initialization of complex data) | `fields.js` |
| **Files outside `UsesCases/`** | README only covers the `UsesCases/` directory | Root-level `*.js` files |
| **Hidden files/directories** | Not user-facing | `.DS_Store`, `.gitkeep` |

#### Ordering Rules

1. **Domains** are listed in **alphabetical order** by directory name.
2. **Within a domain**, files are ordered as:
   - `{main}.js` (first, bold)
   - All remaining `*.js` files in **alphabetical order** (italic)

---

## 7. Design Patterns & Conventions

### 7.1 Code Generation

The SDK is **auto-generated** from the OpenAPI specification. Evidence:
- `.swagger-codegen-ignore` file present
- Consistent, repetitive method structure across all 385+ API methods
- Uniform TypeScript model files with `getAttributeTypeMap()` pattern
- Standardized error handling and parameter validation

### 7.2 Key Conventions

| Convention | Description |
|------------|-------------|
| **TypeScript** | All source in TypeScript, compiled to JavaScript (`src/api/api.js`) |
| **Organized directory** | Models in `src/models/`, API in `src/api/`, infrastructure in `src/` |
| **MIT license header** | Every `.ts` and `.js` file starts with the same license block |
| **Promise-based returns** | `Promise<{ response: http.IncomingMessage; body: T; }>` for all API methods |
| **Optional params** | TypeScript optional parameters (`?`) for all optional query/header params |
| **Custom headers** | `x-aspose-client: nodejs sdk`, `x-aspose-client-version: 26.7.0` |
| **Self-host support** | Constructor overload: single `baseUrl` param for self-host, two params for OAuth |
| **Auth** | OAuth2 client credentials flow with automatic token caching and 401 retry |
| **Enums** | String-based enums defined as const objects with value maps |
| **Discriminator support** | `findCorrectType()` for polymorphic model deserialization |

### 7.3 Error Handling

```typescript
// API errors are caught and parsed from response body
try {
    const result = ObjectSerializer.deserialize(bodyContent, "SaaSposeResponse");
    reject({ message: result.message, code: response.status });
} catch (error) {
    reject({ message: "Error while parse server error: " + error });
}
```

### 7.4 Constructor Overloads

```typescript
// Self-hosted mode
constructor(baseUrl: string);

// OAuth2 cloud mode
constructor(clientId: string, clientSecret: string);
```

---

## 8. Dependencies & Build

### 8.1 Dependencies

**Runtime dependencies:**
| Package | Version | Purpose |
|---------|---------|---------|
| `bluebird` | ^3.5.0 | Promise library |
| `request` | ^2.81.0 | HTTP client (legacy) |
| `superagent` | ^3.7.0 | Modern HTTP client |
| `@types/bluebird` | * | TypeScript types |
| `@types/request` | * | TypeScript types |

**Dev dependencies:**
| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | ^5.8.2 | TypeScript compiler |
| `mocha` | ^7.0.0 | Test framework |
| `ts-node` | ^7.0.0 | TypeScript execution for tests |
| `@types/mocha` | ^5.2.5 | TypeScript types |

### 8.2 Installation

```bash
npm install asposepdfcloud --save
```

### 8.3 Build & Test

```bash
npm run build        # tsc — compiles TypeScript to JavaScript
npm test             # mocha test/test*.ts — runs all tests
npm run clean        # removes compiled .js, .d.ts, .js.map files
```

---

## 9. Documentation

The `docs/` directory contains **Markdown files** with API reference documentation:

- `{Model}.md` — One file per model/enum type (e.g., `Document.md`, `Annotation.md`, `Bookmark.md`)
- `{Response}.md` — One file per response type (e.g., `DocumentResponse.md`, `AnnotationsResponse.md`)
- Each file documents properties, types, and example usage
