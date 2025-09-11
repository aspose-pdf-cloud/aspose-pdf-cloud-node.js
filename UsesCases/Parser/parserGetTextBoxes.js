import { ParserHelper, pdfApi } from "./parserHelper.js";
import fs from 'node:fs/promises';
import path from 'node:path';

export {ParseExportTextBoxes};

const ParseExportTextBoxes = {
    async export(documentName, localFolder, remoteFolder) {
        if ( pdfApi ) {
            await ParserHelper.uploadDocument(documentName, localFolder, remoteFolder);

            const response = await pdfApi.getDocumentTextBoxFields( documentName, null, remoteFolder );

            if (response.body.code == 200) {
                console.log("ParseExportTextBoxes(): TextBox Fileds successfully extracted!");
                
                var result = "[\n";
                await Promise.all(
                    response.body.fields.list.map(async (textbox) => {
                        const responseText = await pdfApi.getTextBoxField(documentName, textbox.fullName, null, remoteFolder)
                            .then(function(responseTextBox){
                                result += JSON.stringify(responseTextBox.body.field) + ",\n\n";
                            });
                        })
                    );
                result += "]";

                const filePath = path.join(localFolder, "parsed_text_boxes_output.json");
                await fs.writeFile(filePath, result);
                console.log("Downloaded: " + filePath);   
            }
            else
                console.error("ParseExportTextBoxes(): Unexpected error!") 

        }
    }
};