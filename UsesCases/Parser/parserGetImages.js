import { ParserHelper, pdfApi } from "./parserHelper.js";
import fs from 'node:fs/promises';
import path from 'node:path';

export {ParseExportImages};

const ParseExportImages = {
    async export(documentName, pageNumber, localFolder, remoteFolder) {
        if ( pdfApi ) {
            await ParserHelper.uploadDocument(documentName, localFolder, remoteFolder);

            const response = await pdfApi.getImages( documentName, pageNumber, null, remoteFolder );

            if (response.body.code == 200) {

                response.body.images.list.forEach(async function (image) {
                    const responseImage = await pdfApi.getImageExtractAsPng(documentName, image.id, null, null, null, remoteFolder);

                    const filePath = path.join(localFolder, image.id + ".png");
                    await fs.writeFile(filePath, responseImage.body);
                    console.log("Downloaded: " + filePath);
                });
            }
            else
                console.error("ParseExportImages(): Unexpected error!") 

        }
    }
};