import { PdfChangeLayoutHelper, pdfApi } from "./changeLayoutHelper.js";
import path from 'node:path';
import { HtmlDocumentType } from "../../src/models/htmlDocumentType.js";
import { OutputFormat } from "../../src/models/outputFormat.js"

export { PdfResizePages }

const PdfResizePages = {
    async resizeAllPages(document, htmlTempDoc, width, height, outputDocument, localFolder, tempFolder) {
        await PdfChangeLayoutHelper.uploadDocument(document, localFolder, tempFolder)

        const htmlTempPath = path.join(tempFolder, htmlTempDoc);

        const html_response = await pdfApi.putPdfInStorageToHtml(
            document, 
            htmlTempPath, 
            null, null, null, null,
            HtmlDocumentType.Xhtml,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            tempFolder,
            null, null,
            OutputFormat.Folder);

        if (html_response.body.code != 200) {
            console.error("resizePages(): Can't convert pdf to html!");
            return;
        }
        else
            console.log("resizePages(): temporary file '" + htmlTempDoc + "' succesfully creaated.")

        const response = await pdfApi.putHtmlInStorageToPdf(
            outputDocument,
            htmlTempPath, 
            htmlTempDoc,
            height,
            width,
            null, null, null, null, null,
            tempFolder,
            null);
                
        if (response.body.code == 200) {
            console.log("resizePages(): Pages successfully resized.");
            await PdfChangeLayoutHelper.downloadResult(outputDocument, localFolder, tempFolder, "resized_doc_");
        }
        else
            console.log("resizePages(): Can't convert html to pdf!")

    },
    
};