// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";;

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    LINK_REMOVE_ID: "GI5UO32UN5KVESKBMN2GS33OHMZTEMJMGUYDQLBTGYYCYNJSGE",
    NEW_LINK_ACTION: "https://reference.aspose.cloud/pdf/#/",
    PAGE_NUMBER: 2,     // Your document page number...
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfLinks = {
   async uploadDocument() {
        const pdfFilePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(pdfFilePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },
       
    async downloadResult() {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);
        const filePath = path.join(configParams.LOCAL_FOLDER, configParams.LOCAL_RESULT_DOCUMENT_NAME);
        await fs.writeFile(filePath, changedPdfData.body);
        console.log("Downloaded: " + filePath);
    },

    async replaceLink () {
        const link = await pdfLinks.getLinkById(configParams.LINK_REMOVE_ID);

        link.action = configParams.NEW_LINK_ACTION;
        
        var updResponse = await pdfApi.putLinkAnnotation(configParams.PDF_DOCUMENT_NAME, configParams.LINK_REMOVE_ID, link);

        if (updResponse.body.code == 200 && updResponse.body.link) {
            pdfLinks.showLinks( [ updResponse.body.link ], "drop");
            return updResponse.body.link;
        }
        else
            console.Error("Unexpected error : can't append link!!!");
    },

    async getLinkById () {
        const resultLinks = await pdfApi.getPageLinkAnnotation(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, configParams.LINK_REMOVE_ID);

        if (resultLinks.body.code == 200 && resultLinks.body.link) {
            this.showLinks( [ resultLinks.body.link ], "found");
            return resultLinks.body.link;
        }
        else
            console.Error("Unexpected error : can't get link !!!");
    },

    showLinks (links, prefix) {
        if (Array.isArray(links) && links.length > 0)
        {
            links.forEach(function(link) {
                console.log(prefix +" => '" + link.id + "', '" + link.action);
            });
        }
        else
            console.error("showLinks() error: array of links is empty!")
    },

}

async function main() {
    try {
        await pdfLinks.uploadDocument();
        await pdfLinks.replaceLink();
        await pdfLinks.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
