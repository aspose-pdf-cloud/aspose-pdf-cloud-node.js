// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Link Annotation from the document using deleteLinkAnnotation() function
// 6. Perform some action after successful removing the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import path from 'node:path';
import fs from 'node:fs/promises';
import { PdfApi } from "asposepdfcloud/src/api/api.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 1,                                 // Your document page number...
    TABLE_ID: "GE5TCOZSGAYCYNRQGUWDINZVFQ3DGMA",    // Your table Id to be processing...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfTables = {
    uploadFiles: async function (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    uploadDocument: async function () {
        await this.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    downloadFiles: async function (local_path, fileName) {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
    
        const filePath = path.join(local_path, fileName);
    
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("downloaded: " + filePath);
    },

    getAllTables: async function (prefix) {
        const resultTabs = await pdfApi.getDocumentTables(configParams.PDF_DOCUMENT_NAME);
    
        if (resultTabs.body.code == 200 && resultTabs.body.tables) {
            if (!Array.isArray(resultTabs.body.tables.list) || resultTabs.body.tables.list.length === 0) {
                console.log("Unexpected error : tables is null or empty!!!");
            }
            this.showTablesInfo(resultTabs.body.tables.list, prefix);
            return resultTabs.body.tables.list;
        }
        else
            throw new Error("Unexpected error : can't get tables!!!");
    },

    deleteTable: async function () {
        const resultTabs = await pdfApi.deleteTable(configParams.PDF_DOCUMENT_NAME, configParams.TABLE_ID);
        if (resultTabs.body.code == 200) {
            console.log("Table #" + configParams.TABLE_ID + " deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't delete table!");
    },

    deleteTables: async function (pageNumber) {
        const resultTabs = await pdfApi.deletePageTables(configParams.PDF_DOCUMENT_NAME, pageNumber);

        if (resultTabs.body.code == 200) {
            console.log("Tables on page #" + pageNumber + " deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get tables!!!");
    },

    showTablesInfo: function(tables, prefix) {
        if (Array.isArray(tables) && tables.length > 0)
        {
            tables.forEach(function(table) {
                console.log(prefix +" => id: '" + table.id + "', page: '" + table.pageNum + "', rows: '" + table.rowList.length + "'");
            });
        }
        else
            console.error("showTablesInfo() error: array of tables is empty!")
    },
}

export default pdfTables;

// Demonstrating functionality
await (async () => {
    await pdfTables.uploadDocument();
    await pdfTables.deleteTable();
    await pdfTables.getAllTables("initial");
    await pdfTables.deleteTables(configParams.PAGE_NUMBER);
    await pdfTables.getAllTables("after");
    await pdfTables.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
  })().catch((error) => { console.log(error.message); });
