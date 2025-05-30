import path from 'node:path';
import { pdfComparesHelper, pdfApi } from "../Compares/comparesHelper.js";

export const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    REMOTE_FOLDER: "Your_Temp_Pdf_Cloud",
    PDF_DOCUMENT_1: "sample_compare_1.pdf",
    PDF_DOCUMENT_2: "sample_compare_2.pdf",
    PDF_OUTPUT: "output_compare.pdf",
    REMOTE_FOLDER: "Your_Temp_Pdf_Cloud",
};

export const pdfCompares = {
    async comparePdfDocuments(document1, document2, output_document) {
        await pdfComparesHelper.uploadFile(document1, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);
        await pdfComparesHelper.uploadFile(document2, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);

        const remotePdf1 = path.join(configParams.REMOTE_FOLDER, document1);
        const remotePdf2 = path.join(configParams.REMOTE_FOLDER, document2);
        var remotePdfOut = path.join(configParams.REMOTE_FOLDER, output_document);

        const response = await pdfApi.postComparePdf(remotePdf1, remotePdf2, remotePdfOut);
        
        if (response.body.code != 200) {
            console.log("Unexpected error!");
        }
        else{
            console.log("Compare was successful!y finished in '" + output_document + "' file.");
            await pdfComparesHelper.downloadResult(output_document, configParams.LOCAL_FOLDER, configParams.REMOTE_FOLDER);
        }
    
    }

};
