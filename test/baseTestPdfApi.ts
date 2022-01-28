 /**
 *
 * Copyright (c) 2022 Aspose.PDF Cloud
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import http = require('http');
import { PdfApi } from "../src/api/api";
import { FontStyles } from '../src/models/fontStyles';
import { Table } from '../src/models/table';
import { GraphInfo } from '../src/models/graphInfo';
import { Row } from '../src/models/row';
import { Cell } from '../src/models/cell';
import { TextRect } from '../src/models/textRect';
import { FilesUploadResult } from '../src/models/filesUploadResult';
var fs = require('fs');

let pdfApi: PdfApi;

/**
 * Initialize PdfApi
 */
export function getPdfApi() {
  if (!pdfApi) {
    let servercreds_json = fs.readFileSync('../../Settings/servercreds.json', 'utf8')
    let creds = JSON.parse(servercreds_json)
    pdfApi = new PdfApi(creds.AppSID, creds.AppKey, creds.ProductUri);
    pdfApi.configuration.debugMode = true;
  }
  return pdfApi;
}

export const remoteTempFolder = "TempPdfCloud";
export const localTestDataFolder = "testData";

/**
 * 
 * @param name 
 */
export function toBase64(str: string): string {
   return Buffer.from(str).toString('base64');
}


/**
 * Upload file
 */
export function uploadFile(name: string): Promise<{ response: http.IncomingMessage; body: FilesUploadResult;  }>
{
  const path: string = remoteTempFolder + "/" + name;
  var data = fs.readFileSync(this.localTestDataFolder + "/" + name);
  
  return getPdfApi().uploadFile(path, data).then();
}

/**
 *  Create Table instance
 */
export function drawTable() {
  const textState = {
    font: "Arial Bold",
    fontSize: 11,
    foregroundColor: { a: 0xFF, r: 0x00, g: 0xFF, b: 0x00 },
    backgroundColor: { a: 0xFF, r: 0xFF, g: 0x00, b: 0x00},
    fontStyle: FontStyles.Bold,
    fontFile: null
  };

  const numOfCols = 5;
  const numOfRows = 5;

  const table = new Table();
  table.rows = [];

  let colWidths = "";
  for (let c = 0; c < numOfCols; c++)
  {
      colWidths += " 30";
  }

  table.columnWidths = colWidths;

  table.defaultCellTextState = textState;

  const borderTableBorder = new GraphInfo();
  borderTableBorder.color = { a: 0xFF, r: 0x00, g: 0xFF, b: 0x00 };
  borderTableBorder.lineWidth = 1;

  table.defaultCellBorder = {
      top: borderTableBorder,
      right: borderTableBorder,
      bottom: borderTableBorder,
      left: borderTableBorder,
      roundedBorderRadius: 0
  };
  table.top = 100;

  for (let r = 0; r < numOfRows; r++)
  {

      const row = new Row();
      row.cells = [];

      for (let c = 0; c < numOfCols; c++)
      {
          const cell = new Cell();
          cell.backgroundColor = { a: 0xFF, r: 0x00, g: 0x88, b: 0x00 };
          cell.defaultCellTextState = textState;
          
          const textRect = new TextRect();
          textRect.text = "value";
          cell.paragraphs = [textRect];
          
          // change properties on cell
          
          if (c == 1)
          {
              cell.defaultCellTextState.foregroundColor = { a: 0xFF, r: 0x00, g: 0x00, b: 0xFF };
          }

          // change properties on cell AFTER first clearing and re-adding paragraphs
          else if (c == 2)
          {
              cell.paragraphs[0].text = "y";
              cell.defaultCellTextState.foregroundColor = { a: 0xFF, r: 0x00, g: 0x00, b: 0xFF };
          }

          // change properties on paragraph
          else if (c == 3)
          {
              cell.paragraphs[0].textState = textState;
              cell.paragraphs[0].textState.foregroundColor = { a: 0xFF, r: 0x00, g: 0x00, b: 0xFF };
          }

          // change properties on paragraph AFTER first clearing and re-adding paragraphs
          else if (c == 4)
          {
            cell.paragraphs = null;
            cell.htmlFragment = '<ul><li>First</li><li>Second</li></ul>';
          }
          row.cells.push(cell);
          
      }
      table.rows.push(row);
  }
  return table;
}