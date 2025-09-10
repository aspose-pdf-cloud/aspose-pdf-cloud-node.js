import { ParserHelper, pdfApi } from "./parserHelper.js";
import path from 'node:path';

export {ParseExportFormsAsFDF};

const ParseExportFormsAsFDF = {
    async export(documentName, outputFDFName, localFolder, remoteFolder) {
        if ( pdfApi ) {
            await ParserHelper.uploadDocument(documentName, localFolder, remoteFolder);

            const fdfPath = path.join(remoteFolder, outputFDFName)
            const response = await pdfApi.putExportFieldsFromPdfToFdfInStorage( documentName, fdfPath, null, remoteFolder );

            if (response.body.code == 200) {
                console.log("ParseExportFormsAsFDF(): Pdf document '" + documentName + "' form fields successfully exported to '" + outputFDFName + "' file!");
                await ParserHelper.downloadResult(outputFDFName, localFolder, remoteFolder, "");
            }
            else
                console.error("ParseExportFormsAsFDF(): Unexpected error!") 

        }
    }
};