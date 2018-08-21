 /**
 *
 *   Copyright (c) 2018 Aspose.PDF Cloud
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

import * as BaseTest from "./baseTestPdfApi";
import "mocha";
import { HttpStatusCode } from "../src/models/httpStatusCode";
import { CompressionType } from "../src/models/compressionType";
import { ColorDepth } from "../src/models/colorDepth";
import { ShapeType } from "../src/models/shapeType";
import { TiffExportOptions } from "../src/models/tiffExportOptions";
var assert = require('assert');

describe("DocumentSaveAsTiff Tests", () => {

    const name = "4pages.pdf";
    const resFileName = "4pages.tiff";
    const brightness = 0.6;
    const compression = CompressionType.CCITT4;
    const colorDepth = ColorDepth.Format1bpp;
    const leftMargin = 0;
    const rightMargin = 0;
    const topMargin = 0;
    const bottomMargin = 0;
    const orientation = ShapeType.Portrait;
    const skipBlankPages = true;
    const width = 1200;
    const height = 1600;
    const xResolution = 200;
    const yResolution = 200;
    const pageIndex = 2;
    const pageCount = 2;

    before( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("PutDocumentSaveAsTiff using query params Test", () => {

        it("should return response with code 200", async () => {

            return BaseTest.getPdfApi().putDocumentSaveAsTiff(name, null, resFileName, brightness, compression, colorDepth, 
                    leftMargin, rightMargin, topMargin, bottomMargin, orientation, skipBlankPages, width, height,
                    xResolution, yResolution, pageIndex, pageCount, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });

    describe("PutDocumentSaveAsTiff using Object Test", () => {

        it("should return response with code 200", async () => {

            let tiffExportOptions = new TiffExportOptions();
            tiffExportOptions.resultFile = resFileName;
            tiffExportOptions.brightness = brightness;
            tiffExportOptions.compression = compression;
            tiffExportOptions.colorDepth = colorDepth;
            tiffExportOptions.leftMargin = leftMargin;
            tiffExportOptions.rightMargin = rightMargin;
            tiffExportOptions.topMargin = topMargin;
            tiffExportOptions.bottomMargin = bottomMargin;
            tiffExportOptions.orientation = orientation;
            tiffExportOptions.skipBlankPages = skipBlankPages;
            tiffExportOptions.width = width;
            tiffExportOptions.height = height;
            tiffExportOptions.xResolution = xResolution;
            tiffExportOptions.yResolution = yResolution;
            tiffExportOptions.pageIndex = pageIndex;
            tiffExportOptions.pageCount = pageCount;

            return BaseTest.getPdfApi().putDocumentSaveAsTiff(name, tiffExportOptions, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null, null, null, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });
});