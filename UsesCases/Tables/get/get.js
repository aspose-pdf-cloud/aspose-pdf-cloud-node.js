// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Link Annotation from the document using getPageLinkAnnotation() function
// 6. Perform some action after successful retrieving the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud/src/api/api.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,                                 // Your document page number...
    TABLE_ID: "GE5TCOZSGAYCYNRQGUWDINZVFQ3DGMA",    // Your table Id to be processing...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfTables = {
    uploadFiles: async function (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    uploadDocument: async function () {
        await pdfTables.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    getAllTables: async function () {
        const resultTabs = await pdfApi.getDocumentTables(configParams.PDF_DOCUMENT_NAME);

        if (resultTabs.body.code == 200 && resultTabs.body.tables) {
            if (!Array.isArray(resultTabs.body.tables.list) || resultTabs.body.tables.list.length === 0) {
                throw new Error("Unexpected error : tables is null or empty!!!");
            }
            this.showLTablesInfo(resultTabs.body.tables.list, "all");
            return resultTabs.body.tables.list;
        }
        else
            throw new Error("Unexpected error : can't get tables!!!");
    },

    getTableById: async function (params) {
        const resultTabs = await pdfApi.getTable(configParams.PDF_DOCUMENT_NAME, configParams.TABLE_ID);

        if (resultTabs.body.code == 200 && resultTabs.body.table) {
            this.showLTablesInfo( [ resultTabs.body.table ], "byId");
            return resultTabs.body.table;
        }
        else
            throw new Error("Unexpected error : can't get tables!!!");
    },

    showLTablesInfo: function(tables, prefix) {
        if (Array.isArray(tables) && tables.length > 0)
        {
            tables.forEach(function(table) {
                console.log(prefix +" => id: '" + table.id + "', page: '" + table.pageNum + "', rows: '" + table.rowList.length + "'");
            });
        }
        else
            console.error("showLTablesInfo() error: array of tables is empty!")
    },
}

export default pdfTables;

// Demonstrating functionality
await (async () => {
    await pdfTables.uploadDocument();
    await pdfTables.getAllTables();
    await pdfTables.getTableById();
  })().catch((error) => { console.log(error.message); });
