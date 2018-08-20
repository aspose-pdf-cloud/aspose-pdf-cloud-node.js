 /**
 *
 *   Copyright (c) 2018 Aspose.Pdf for Cloud
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
import { SaaSposeResponse } from "../src/models/saaSposeResponse"
var fs = require('fs');

let pdfApi: PdfApi;

/**
 * Initialize PdfApi
 */
export function getPdfApi() {
  if (!pdfApi) {

    //Get App key and App SID from https://cloud.aspose.com
    pdfApi = new PdfApi(
      "AppSID", 
      "AppKey"
    )
    pdfApi.configuration.debugMode = true;
  }
  return pdfApi;
}

export const remoteTempFolder = "TempPdfCloud";
export const localTestDataFolder = "testData";


/**
 * Upload file
 */
export function uploadFile(name: string): Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }>
{
  const path: string = remoteTempFolder + "/" + name;
  var data = fs.readFileSync(this.localTestDataFolder + "/" + name);
  
  return getPdfApi().putCreate(path, data).then();
}
