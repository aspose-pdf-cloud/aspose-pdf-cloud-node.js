import credentials from "./../../../settings/credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud/src/api/api.js";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "PdfWithTable.pdf",
    TABLE_ID: "GE5TIMJ3HEYCYOBTFQ2TANZMG43TA",    // Your table id...
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

const pdfTables = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },
                           
    async getAllTables () {
        const resultTabs = await pdfApi.getDocumentTables(configParams.PDF_DOCUMENT_NAME);

        if (resultTabs.body.code == 200 && resultTabs.body.tables) {
            if (!Array.isArray(resultTabs.body.tables.list) || resultTabs.body.tables.list.length === 0) {
                throw new Error("Unexpected error : tables is null or empty!!!");
            }
            this.showTablesInfo(resultTabs.body.tables.list, "All tables");
            return resultTabs.body.tables.list;
        }
        else
            console.error("Unexpected error : can't get links!!!");
    },

    async getTableById () {
        const resultTabs = await pdfApi.getTable(configParams.PDF_DOCUMENT_NAME, configParams.TABLE_ID);

        if (resultTabs.body.code == 200 && resultTabs.body.table) {
            this.showTablesInfo( [ resultTabs.body.table ], "Table by Id");
            return resultTabs.body.table;
        }
        else
            console.error("Unexpected error : can't get links!!!");
    },

    showTablesInfo(tables, prefix) {
        if (Array.isArray(tables) && tables.length > 0)
        {
            tables.forEach(function(table) {
                console.log(prefix +" => id: '" + table.id + "', page: '" + table.pageNum + "', rows: '" + table.rowList.length + "', columns: '" + table.rowList[0].cellList.length + "'");
            });
        }
        else
            console.error("showBoormarks() error: array of tables is empty!")
    },
}

async function main() {
    try {
        await pdfTables.uploadDocument();
        await pdfTables.getAllTables();
        await pdfTables.getTableById();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
