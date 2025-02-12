// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Link Annotation from the document using deleteLinkAnnotation() function
// 6. Perform some action after successful removing the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 1,     // Your document page number...
    TABLE_ID: "GE5TCOZSGAYCYNRQGUWDINZVFQ3DGMA",
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfTables = {
    async uploadDocument () {
        const fileNamePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(fileNamePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },
                            
     async downloadResult () {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async getAllTables (prefix) {
        const resultTabs = await pdfApi.getDocumentTables(configParams.PDF_DOCUMENT_NAME);
    
        if (resultTabs.body.code == 200 && resultTabs.body.tables) {
            if (!Array.isArray(resultTabs.body.tables.list) || resultTabs.body.tables.list.length === 0) {
                console.log("Unexpected error : tables is null or empty!!!");
            }
            this.showTablesInfo(resultTabs.body.tables.list, prefix);
            return resultTabs.body.tables.list;
        }
        else
            console.error("Unexpected error : can't get links!!!");
    },

    async deleteTable () {
        const resultTabs = await pdfApi.deleteTable(configParams.PDF_DOCUMENT_NAME, configParams.TABLE_ID);
        if (resultTabs.body.code == 200) {
            console.log("Table #" + configParams.TABLE_ID + " deleted!");
            return true;
        }
        else
            console.error("Unexpected error : can't delete table!");
    },

    async deleteTables () {
        const resultTabs = await pdfApi.deletePageTables(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER);

        if (resultTabs.body.code == 200) {
            console.log("Tables on page #" + configParams.PAGE_NUMBER + " deleted!");
            return true;
        }
        else
            throw new Error("Unexpected error : can't get tables!!!");
    },

    showTablesInfo (tables, prefix) {
        if (Array.isArray(tables) && tables.length > 0)
        {
            tables.forEach(function(table) {
                console.log(prefix +" => id: '" + table.id + "', page: '" + table.pageNum + "', rows: '" + table.rowList.length + "', columns: '" + table.rowList[0].cellList.length + "'");
            });
        }
        else
            console.error("showTablesInfo() error: array of tables is empty!")
    },
}

async function main() {
    try {
        await pdfTables.uploadDocument();

        await pdfTables.getAllTables("All tables");
        await pdfTables.deleteTable();
        await pdfTables.getAllTables("Tables after drop one");

        await pdfTables.deleteTables(configParams.PAGE_NUMBER);
        await pdfTables.getAllTables("Tables after drop all");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
