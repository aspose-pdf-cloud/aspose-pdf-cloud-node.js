![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm](https://img.shields.io/npm/v/asposepdfcloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/asposepdfcloud) ![node-current](https://img.shields.io/node/v/asposepdfcloud) ![npm type definitions](https://img.shields.io/npm/types/asposepdfcloud) [![GitHub license](https://img.shields.io/github/license/aspose-pdf-cloud/aspose-pdf-cloud-node.js)](https://github.com/aspose-pdf-cloud/aspose-pdf-cloud-node/blob/master/LICENSE)
# Node.js REST API to Process PDF in Cloud
[Aspose.PDF Cloud](https://products.aspose.cloud/pdf) is a true REST API that enables you to perform a wide range of document processing operations including creation, manipulation, conversion and rendering of PDF documents in the cloud.

Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to process documents in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights. This repository contains new generation SDKs for Aspose.PDF Cloud and examples.

These SDKs are now fully supported. If you have any questions, see any bugs or have enhancement request, feel free to reach out to us at [Free Support Forums](https://forum.aspose.cloud/c/pdf).

Extract Text & Images of a PDF document online https://products.aspose.app/pdf/parser.

## PDF Processing Features

- Add PDF document's header & footer in text or image format.
- Add tables & stamps (text or image) to PDF documents.
- Append multiple PDF documents to an existing file.
- Work with PDF attachments, annotations, & form fields.
- Apply encryption or decryption to PDF documents & set a password.
- Delete all stamps & tables from a page or entire PDF document.
- Delete a specific stamp or table from the PDF document by its ID.
- Replace single or multiple instances of text on a PDF page or from the entire document.
- Extensive support for converting PDF documents to various other file formats.
- Extract various elements of PDF files & make PDF documents optimized.

## Read & Write PDF Formats
PDF, EPUB, HTML, TeX, SVG, XML, XPS, FDF, XFDF

## Save PDF As
XLS, XLSX, PPTX, DOC, DOCX, MobiXML, JPEG, EMF, PNG, BMP, GIF, TIFF, Text

## Read PDF Formats
MHT, PCL, PS, XSLFO, MD

## Enhancements in Version 24.12
- Add support for PDF to PDF 3B conversion.
- A new version of Aspose.PDF Cloud was prepared using the latest version of Aspose.PDF for .NET.

## Installation

### NPM

From the command line:

```bash
$ npm install asposepdfcloud --save
```
## Get PDF Page Annotations in Node.Js
```js
	// Get your ClientId and ClientSecret from https://dashboard.aspose.cloud (free registration required).
	const pdfApi = new PdfApi("MY_CLIENT_ID", "MY_CLIENT_SECRET");

	let pageNumber = 1;
	let pdfDocName = "example.pdf";
	let remoteFolder = "folderName";

	pdfApi.getPageAnnotations(pdfDocName, pageNumber, null, remoteFolder)
	.then((result) => {
		console.log(result.response);
		console.log(result.body);
	});
```

## SelfHost Aspose.PDF Cloud
Create *PdfApi* object with one **baseUrl** parameter:
```js
	const pdfApi = new PdfApi("MY_SELFHOST_URL");
```

## Unit Tests
Aspose PDF SDK includes a suite of unit tests within the "test" subdirectory. These Unit Tests also serves as examples of how to use the Aspose PDF SDK.

## Licensing
All Aspose.PDF Cloud SDKs are licensed under [MIT License](LICENSE).
