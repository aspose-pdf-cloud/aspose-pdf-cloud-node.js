import { configParams } from "./parserHelper.js";
import { ParseExportFormsAsXML } from "./parserGetFormsAsXML.js"
import { ParseExportFormsAsFDF } from "./parserGetFormsAsFDF.js";
import { ParseExportImages } from "./parserGetImages.js";
import { ParseExportTables } from "./parserGetTables.js";
import { ParseExportTextBoxes } from "./parserGetTextBoxes.js";

async function main() {
    try {
        
        await ParseExportFormsAsXML.export(configParams.PDF_DOCUMENT_NAME, configParams.XML_OUTPUT_FILE, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);

        await ParseExportFormsAsFDF.export(configParams.PDF_DOCUMENT_NAME, configParams.FDF_OUTPUT_FILE, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);

        await ParseExportImages.export(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);

        await ParseExportTables.export(configParams.PDF_DOCUMENT_NAME, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);

        await ParseExportTextBoxes.export(configParams.PDF_DOCUMENT_NAME, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

await main();