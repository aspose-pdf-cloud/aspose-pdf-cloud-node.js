import { PdfChangeLayoutHelper, pdfApi } from "./changeLayoutHelper.js";

export { PdfRotatePages };

const PdfRotatePages = {
    async rotate(document, angle, pages, localFolder, tempFolder) {
        if ( pdfApi) {
            await PdfChangeLayoutHelper.uploadDocument(document, localFolder, tempFolder);

            const response = await pdfApi.postDocumentPagesRotate(
                document, angle, pages, null, tempFolder);

            if (response.body.code == 200) {
                console.log("rotatePages(): Page successfully rotated.");
                await PdfChangeLayoutHelper.downloadResult(document, localFolder, tempFolder, "rotated_output_");
            }
            else
                console.error("rotatePages(): Can't rotate pdf document pages!")
        }
    
    },
};