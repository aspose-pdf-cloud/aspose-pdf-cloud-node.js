import { ParserHelper, pdfApi } from "./parserHelper.js";
import fs from 'node:fs/promises';
import path from 'node:path';

export {ParseExportTables};

const ParseExportTables = {
    async export(documentName, localFolder, remoteFolder) {
        if ( pdfApi ) {
            await ParserHelper.uploadDocument(documentName, localFolder, remoteFolder);

            const response = await pdfApi.getDocumentTables( documentName, null, remoteFolder );

            if (response.body.code == 200) {
                console.log("ParseExportTables(): Tables successfully extracted!");

                var result = "[\n";
                for (const table of response.body.tables.list) {
                    const responseTable = await pdfApi.getTable(documentName, table.id, null, remoteFolder);
                    result += JSON.stringify(responseTable.body.table) + ",\n\n";
                }
                result += "]";

                const filePath = path.join(localFolder, "parsed_tables_output.json");
                await fs.writeFile(filePath, result);
                console.log("Downloaded: " + filePath);   
            }
            else
                console.error("ParseExportTables(): Unexpected error!") 

        }
    }
};