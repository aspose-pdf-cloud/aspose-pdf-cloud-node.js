// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Retrieve required Link Annotation from the document using getPageLinkAnnotation() function
// 6. Perform some action after successful retrieving the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from "node:path";
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_FOLDER: "C:\\Samples\\",
    PDF_DOCUMENT_NAME: "sample.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    PAGE_NUMBER: 2,         // Your document page number...
    LINK_FIND_ID: "GI5UO32UN5KVESKBMN2GS33OHMZTEMJMGUYDQLBTGYYCYNJSGE",
};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfLinks = {
    async uploadDocument() {
        const pdfFilePath = path.join(configParams.LOCAL_FOLDER, configParams.PDF_DOCUMENT_NAME);
        const pdfFileData = await fs.readFile(pdfFilePath);
        await pdfApi.uploadFile(configParams.PDF_DOCUMENT_NAME, pdfFileData);
    },

    async getLinkById () {
        const resultLinks = await pdfApi.getPageLinkAnnotation(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, configParams.LINK_FIND_ID);

        if (resultLinks.body.code == 200 && resultLinks.body.link) {
            this.showLinks( [ resultLinks.body.link ], "found");
            return resultLinks.body.link;
        }
        else
            throw new Error("Unexpected error : can't get link !!!");
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
        await pdfLinks.getLinkById();
    } catch (error) {
        console.error("Error:", error.message);
    }
};

main();
