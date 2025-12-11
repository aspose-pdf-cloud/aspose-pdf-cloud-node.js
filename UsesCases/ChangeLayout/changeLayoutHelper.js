import credentials from "./../../settings/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { Rotation } from "asposepdfcloud/src/models/rotation.js";
import { DocumentConfig } from "asposepdfcloud/src/models/documentConfig.js" 
import { DocumentProperties } from "asposepdfcloud/src/models/documentProperties.js"
import { DocumentProperty } from "asposepdfcloud/src/models/documentProperty.js"
import { DisplayProperties } from "asposepdfcloud/src/models/displayProperties.js"
import { ImageStamp } from "asposepdfcloud/src/models/imageStamp.js"
import { HorizontalAlignment } from "asposepdfcloud/src/models/horizontalAlignment.js"
import { VerticalAlignment } from "asposepdfcloud/src/models/verticalAlignment.js"
import { HtmlDocumentType } from "asposepdfcloud/src/models/htmlDocumentType.js";
import { OutputFormat } from "asposepdfcloud/src/models/outputFormat.js"
import { DefaultPageConfig } from "asposepdfcloud/src/models/defaultPageConfig.js";

export { configParams, pdfApi, PdfChangeLayoutHelper };

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "PdfWithScreenAnnotations.pdf",
    TEMP_FOLDER: 'TempPdfCloud',
    
    ROTATE_ANGLE: Rotation.on90,
    ROTATE_PAGES: "1-2",

    CROP_PAGE_TEMP_FILE: "sample_temp_file.png",
    CROP_LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    CROP_PAGE_NUMBER: 1,
    CROP_PAGE_WIDTH: 0,
    CROP_PAGE_HEIGHT: 0,        
    CROP_HEIGHT: 400,
    CROP_WIDTH: 300,
    CROP_LLX: 100,
    CROP_LLY: 200,

    RESIZE_PDF_HTML_FILE: "sample_temp_file.html",
    RESIZE_RESULT_DOCUMENT_NAME:"output_sample.pdf",
    RESIZE_PAGE_NUMBER: 2,
    RESIZE_NEW_PAGE_WIDTH: 1000,
    RESIZE_NEW_PAGE_HEIGHT: 3000,

};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const PdfChangeLayoutHelper = {
    async uploadFile (fileName, localFolder, tempFolder) {
        const fileNamePath = path.join(localFolder, fileName);
        const fileData = await fs.readFile(fileNamePath);
        const storagePath = path.join(tempFolder, fileName);
        await pdfApi.uploadFile(storagePath, fileData)
            .then(() => console.log("File: '" + fileName +"' successfully uploaded."));
    },

    async uploadDocument(document, localFolder, tempFolder) {
        await this.uploadFile(document, localFolder, tempFolder)
    },

    async downloadResult(document, localFolder, tempFolder, prefix) {
        const fileName = path.join(tempFolder, document);
        const changedPdfData = await pdfApi.downloadFile(fileName);
        const filePath = path.join(localFolder, prefix + document);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async getPageInfo (document, pageNumber, tempFolder) {
        const resultPages = await pdfApi.getPage( document, pageNumber, null, tempFolder );

        if (resultPages.body.code == 200 && resultPages.body.page) {
            this.showPages( [ resultPages.body.page ], "page");
            configParams.PAGE_HEIGHT = resultPages.body.page.rectangle.uRY - resultPages.body.page.rectangle.lLY;
            configParams.PAGE_WIDTH = resultPages.body.page.rectangle.uRX - resultPages.body.page.rectangle.lLX;
            return {
                "width": configParams.PAGE_WIDTH,
                "height": configParams.PAGE_HEIGHT 
            }
        }
        else {
            console.error("Unexpected error : can't get pages!!!");
            return null;
        }
    },

    showPages (pages, prefix) {
        if (Array.isArray(pages) && pages.length > 0)
        {
            pages.forEach(function(page) {
                console.log(prefix +" => id: '" + page.id + "', lLx: '" + page.rectangle.lLX + "', lLY: '" + page.rectangle.lLY + "', uRX: '" + page.rectangle.uRX + "', uRY: '" + page.rectangle.uRY + "'");
            });
        }
        else
            console.error("showPages() error: array of pages is empty!")
    },

    async extractPdfPage(document, pageNumber, width, height, localFolder, tempFolder) {
        const response = await pdfApi.getPageConvertToPng(document, pageNumber, Math.trunc(width), Math.trunc(height), tempFolder);
        if (response.response.status != 200)
        {
            console.error("extractPdfPage(): Faild to convert page to image!");
            return null;
        }
        const filePath = path.join(localFolder, document + ".png");
        await fs.writeFile(filePath, response.body);

        const imageFile = document + ".png";
        const imagePath = localFolder;
        
        await this.uploadFile(imageFile, localFolder, tempFolder);

        console.log("Page #" + pageNumber + " extracted as image.");
        return imageFile;
    },

    async createPdfDocument(document, width, height, tempFolder) {
        const pdfConfig = new DocumentConfig();
        pdfConfig.pagesCount = 1;
        
        pdfConfig.displayProperties = new DisplayProperties();
        pdfConfig.displayProperties.centerWindow = true;
        pdfConfig.displayProperties.hideMenuBar = true;

        pdfConfig.documentProperties = new DocumentProperties();
        const docProperty = new DocumentProperty();
        docProperty.builtIn = false;
        docProperty.name = "prop1";
        docProperty.value = "Val1";

        pdfConfig.documentProperties.list = [ docProperty ];
        
        pdfConfig.defaultPageConfig = new DefaultPageConfig();
        pdfConfig.defaultPageConfig.height = height;
        pdfConfig.defaultPageConfig.width = width;

        const response = await pdfApi.postCreateDocument(document, pdfConfig, null, tempFolder);
        console.log("Document #" + document + " created.")
        return response;
    },

    async insertPageAsImage(document, imageFileValue, llx, lly, tempFolder) {
        const stamp = new ImageStamp();
        stamp.background = true;
        stamp.horizontalAlignment = HorizontalAlignment.None;
        stamp.verticalAlignment = VerticalAlignment.None;
        stamp.opacity = 1;
        stamp.rotate = Rotation.None;
        stamp.rotateAngle = 0;
        stamp.xIndent = -llx;
        stamp.yIndent = -lly;
        stamp.zoom = 1;
        stamp.fileName = configParams.TEMP_FOLDER + '/' + imageFileValue;

        const response = await pdfApi.postPageImageStamps(document, 1, [stamp], null, tempFolder);
        console.log("Image iserted into '" + document + "document on page #1");
        return response;
    },
};