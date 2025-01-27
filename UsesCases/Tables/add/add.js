// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from ".//credentials.json"  with { type: "json" };
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
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    PAGE_NUMBER: 2,     // Your document page number...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfTables = {
    uploadFiles: async function (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    downloadFiles: async function (local_path, fileName) {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);

        const filePath = path.join(local_path, fileName);

        await fs.writeFile(filePath, changedPdfData.body);
        console.log("downloaded: " + filePath);
    },

    uploadDocument: async function () {
        await pdfTables.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    initTable: function () {
        const numOfCols = 5;
        const numOfRows = 5;

        const headerTextState = {
            font: "Arial Bold",
            fontSize: 11,
            foregroundColor: { a: 0xFF, r: 0xFF, g: 0xFF, b: 0xFF },
            fontStyle: FontStyles.Bold,
            fontFile: null,
            underline: false,
            strikeOut: false,
            superscript: false,
            subscript: false,
        };

        const commonTextState = {
            font: "Arial Bold",
            fontSize: 11,
            foregroundColor: { a: 0xFF, r: 0x70, g: 0x70, b: 0x70 },
            fontFile: null,
            underline: false,
            strikeOut: false,
            superscript: false,
            subscript: false,
        };
    
        const table = new Table();
        table.rows = [];
    
        let colWidths = "";
        for (let c = 0; c < numOfCols; c++)
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
    
        for (let r = 0; r < numOfRows; r++)
        {
            const row = new Row();

            row.cells = [];
    
            for (let c = 0; c < numOfCols; c++)
            {
                const cell = new Cell();
                
                cell.defaultCellTextState = commonTextState;

                if (r == 0)  // header cells
                {
                    cell.backgroundColor = { a: 0xFF, r: 0x80, g: 0x80, b: 0x80 };
                    cell.defaultCellTextState = headerTextState;
                }
                else {
                    cell.backgroundColor = { a: 0xFF, r: 0xFF, g: 0xFF, b: 0xFF };
                };
              
                const textRect = new TextRect();
                if (r == 0)
                    textRect.text = "header #" + c;
                else
                    textRect.text = "value";
                cell.paragraphs = [textRect];

                row.cells.push(cell);
            }
            table.rows.push(row);
        }
        return table;
    },

    addTableOnPage: async function (pageNum) {
        const jsonTable = pdfTables.initTable();

        const resultTabs = await pdfApi.postPageTables(configParams.PDF_DOCUMENT_NAME, pageNum, [ jsonTable ]);

        if (resultTabs.body.code == 200) {
            console.log("Table successfully added!");
            return resultTabs.body.table;
        }
        else
            throw new Error("Unexpected error : can't get tables!!!");
    },
}

export default pdfTables;

await (async () => {
    await pdfTables.uploadDocument();
    await pdfTables.addTableOnPage(configParams.PAGE_NUMBER);
    await pdfTables.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });