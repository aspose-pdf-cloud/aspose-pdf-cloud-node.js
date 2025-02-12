// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud./src/api/api.js";
import { Table } from "asposepdfcloud/src/models/table.js";
import { Cell } from "asposepdfcloud/src/models/cell.js";
import { FontStyles } from "asposepdfcloud/src/models/fontStyles.js";
import { GraphInfo } from "asposepdfcloud/src/models/graphInfo.js";
import { Row } from "asposepdfcloud./src/models/row.js";
import { TextRect } from "asposepdfcloud/src/models/textRect.js";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,     // Your document page number...
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

    initTable () {
        const numOfCols = 5;
        const numOfRows = 5;

        const headerTextState = {
            font: "Arial Bold",
            fontSize: 11,
            foregroundColor: { a: 0xFF, r: 0xFF, g: 0xFF, b: 0xFF },
            fontStyle: FontStyles.Bold,
        };

        const commonTextState = {
            font: "Arial Bold",
            fontSize: 11,
            foregroundColor: { a: 0xFF, r: 0x70, g: 0x70, b: 0x70 },
        };
    
        const table = new Table();
        table.rows = [];
    
        let colWidths = "";
        for (let colIndex = 0; colIndex < numOfCols; colIndex++)
        {
            colWidths += " 70";
        }
    
        table.columnWidths = colWidths;
    
        const borderTableBorder = new GraphInfo();
        borderTableBorder.color = { a: 0xFF, r: 0x00, g: 0xFF, b: 0x00 };
        borderTableBorder.lineWidth = 0.5;
    
        table.defaultCellBorder = {
            top: borderTableBorder,
            right: borderTableBorder,
            bottom: borderTableBorder,
            left: borderTableBorder,
            roundedBorderRadius: 0
        };
        table.left = 150;
        table.top = 250;
    
        for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++)
        {
            const row = new Row();

            row.cells = [];
    
            for (let colIndex = 0; colIndex < numOfCols; colIndex++)
            {
                const cell = new Cell();
                
                cell.defaultCellTextState = commonTextState;

                if (rowIndex == 0)  // header cells
                {
                    cell.backgroundColor = { a: 0xFF, r: 0x80, g: 0x80, b: 0x80 };
                    cell.defaultCellTextState = headerTextState;
                }
                else {
                    cell.backgroundColor = { a: 0xFF, r: 0xFF, g: 0xFF, b: 0xFF };
                };
              
                const textRect = new TextRect();
                if (rowIndex == 0)
                    textRect.text = "header #" + colIndex;
                else
                    textRect.text = "value #'(" + rowIndex + "," + colIndex + "')";
                cell.paragraphs = [textRect];

                row.cells.push(cell);
            }
            table.rows.push(row);
        }
        return table;
    },

    async addTableOnPage () {
        const jsonTable = this.initTable();

        const resultTabs = await pdfApi.postPageTables(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, [ jsonTable ]);

        if (resultTabs.body.code == 200) {
            console.log("Table successfully added!");
            return resultTabs.body.table;
        }
        else
            comsole.error("Unexpected error : can't get links!!!");
    },
}

async function main() {
    try {
        await pdfTables.uploadDocument();
        await pdfTables.addTableOnPage();
        await pdfTables.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
