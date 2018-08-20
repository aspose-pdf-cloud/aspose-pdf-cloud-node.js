# Aspose.PDF Cloud
[Aspose.PDF Cloud](https://products.aspose.cloud/pdf/cloud) is a true REST API that enables you to perform a wide range of document processing operations including creation, manipulation, conversion and rendering of Pdf documents in the cloud.

Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to process documents in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights. This repository contains new generation SDKs for Aspose.PDF Cloud and examples.

These SDKs are now fully supported. If you have any questions, see any bugs or have enhancement request, feel free to reach out to us at [Free Support Forums](https://forum.aspose.cloud/c/pdf).

## Installation

###  NPM

From the command line:

```bash
$ npm install asposepdfcloud --save
```

## Usage

APIs of this SDK can be called as follows:
```javascript

const { PdfApi } = require("asposewordscloud");

let pdfApi = new PdfApi(AppSid, AppKey);

let pageNumber = 1;
let pdfDocName = "example.pdf";
let remoteFolder = "folderName"; 

pdfApi.getPageAnnotations(pdfDocName, pageNumber, null, remoteFolder)
    .then((result) => {
        console.log(result.response);
        console.log(result.body);
});

```

## Unit Tests
Aspose PDF SDK includes a suite of unit tests within the "test" subdirectory. These Unit Tests also serves as examples of how to use the Aspose PDF SDK.

## Licensing
All Aspose.PDF Cloud SDKs are licensed under [MIT License](LICENSE).

## Resources
+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/pdf/cloud)
+ [**Documentation**](https://docs.aspose.cloud/display/pdfcloud/Home)
+ [**Free Support Forum**](https://forum.aspose.cloud/c/pdf)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)
+ [**Blog**](https://blog.aspose.cloud/category/aspose-products/aspose-pdf-product-family/)
