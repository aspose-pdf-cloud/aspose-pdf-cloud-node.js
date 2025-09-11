import { ParserHelper, pdfApi } from "./parserHelper.js";
import path from 'node:path';

export {ParseExportFormsAsXML};

const ParseExportFormsAsXML = {
    async export(documentName, outputXMLName, localFolder, remoteFolder) {
        if ( pdfApi ) {
            await ParserHelper.uploadDocument(documentName, localFolder, remoteFolder);

            const xmlPath = path.join(remoteFolder, outputXMLName)
            const response = await pdfApi.putExportFieldsFromPdfToXmlInStorage( documentName, xmlPath, null, remoteFolder );

            if (response.body.code == 200) {
                console.log("ParseExportFormsAsXML(): Pdf document '" + documentName + "' form fields successfully exported to '" + outputXMLName + "' file!");
                await ParserHelper.downloadResult(outputXMLName, localFolder, remoteFolder, "");
            }
            else
                console.error("ParseExportFormsAsXML(): Unexpected error!") 

        }
    }
};