import credentials from "./../../settings/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud/src/api/api.js";
import { DocumentConfig } from "asposepdfcloud/src/models/documentConfig.js" 
import { DocumentProperties } from "asposepdfcloud/src/models/documentProperties.js"
import { DocumentProperty } from "asposepdfcloud/src/models/documentProperty.js"
import { DisplayProperties } from "asposepdfcloud/src/models/displayProperties.js"
import { DefaultPageConfig } from "asposepdfcloud/src/models/defaultPageConfig.js"
import { Direction } from "asposepdfcloud/src/models/direction.js";
import { PageMode } from "asposepdfcloud/src/models/pageMode.js";
import { PageLayout } from "asposepdfcloud/src/models/pageLayout.js";

const configParams = {
    LOCAL_FOLDER: "testData",
    TEMP_FOLDER : 'TempPdfCloud',
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_WIDTH: 590,
    PAGE_HEIGHT: 894,
    PAGES_COUNT: 5,
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const PdfPageChanges = {
    async downloadResult() {
        const fileName = path.join( configParams.TEMP_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        const changedPdfData = await pdfApi.downloadFile(fileName);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async createPdfDocument() {
        const pdfConfig = new DocumentConfig();
        pdfConfig.pagesCount = configParams.PAGES_COUNT;
        
        pdfConfig.displayProperties = new DisplayProperties();
        pdfConfig.displayProperties.centerWindow = true;
        pdfConfig.displayProperties.hideMenuBar = true;
        pdfConfig.displayProperties.direction = Direction.L2R;
        pdfConfig.displayProperties.displayDocTitle = true;
        pdfConfig.displayProperties.hideToolBar = true;
        pdfConfig.displayProperties.hideWindowUI = true;
        pdfConfig.displayProperties.nonFullScreenPageMode = PageMode.UseThumbs;
        pdfConfig.displayProperties.pageLayout = PageLayout.TwoPageLeft;
        pdfConfig.displayProperties.pageMode = PageMode.UseThumbs;

        pdfConfig.documentProperties = new DocumentProperties();
        const docProperty = new DocumentProperty();
        docProperty.builtIn = false;
        docProperty.name = "prop1";
        docProperty.value = "Val1";

        pdfConfig.documentProperties.list = [ docProperty ];
        
        pdfConfig.defaultPageConfig = new DefaultPageConfig();
        pdfConfig.defaultPageConfig.height = configParams.CROP_HEIGHT;
        pdfConfig.defaultPageConfig.width = configParams.CROP_WIDTH;

        const response = await pdfApi.postCreateDocument(configParams.LOCAL_RESULT_DOCUMENT_NAME, pdfConfig, null, configParams.TEMP_FOLDER);
        console.log("Document #" + configParams.LOCAL_RESULT_DOCUMENT_NAME + " created.")
        return response;
    },
};

async function main() {
    try {
        await PdfPageChanges.createPdfDocument();
        await PdfPageChanges.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();