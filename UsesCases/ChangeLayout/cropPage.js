import { PdfChangeLayoutHelper, pdfApi } from "./changeLayoutHelper.js";

export { PdfCropPage };

const PdfCropPage = {
    async cropPage(document, pageNumber, llx, lly, width, height, outputDocument, localFolder, tempFolder) {
        if ( pdfApi ) {
            await PdfChangeLayoutHelper.uploadDocument(document, localFolder, tempFolder);  

            console.log(document);
            console.log(tempFolder);
            console.log(localFolder);
            var pageSie = await PdfChangeLayoutHelper.getPageInfo(document, pageNumber, tempFolder);

            const imageFile = await PdfChangeLayoutHelper.extractPdfPage(document, pageNumber, pageSie.width, pageSie.height, localFolder, tempFolder);
            const newPdf = await PdfChangeLayoutHelper.createPdfDocument(outputDocument, width, height, tempFolder);
            if (newPdf.body.code != 200) {
                console.error("cropPage(): Failed to create new PDF document!");
                return;
            }

            const response = await PdfChangeLayoutHelper.insertPageAsImage(outputDocument, imageFile, llx, lly, tempFolder);

            if (response.body.code == 200) {
                console.log("cropPage(): Page successfully cropped.");
                await PdfChangeLayoutHelper.downloadResult(outputDocument, localFolder, tempFolder, "cropped_")
            }
            else
                console.error("cropPage(): Can't crop pdf document page!")
        }
    
    },
};