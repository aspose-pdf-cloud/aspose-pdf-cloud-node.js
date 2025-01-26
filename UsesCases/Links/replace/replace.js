// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    NEW_LINK_ACTION: "https://reference.aspose.cloud/pdf/#/",

    PAGE_NUMBER: 2,     // Your document page number...

    LINK_FIND_ID: "GI5UO32UN5KVESKBMN2GS33OHMZTEMJMGUYDQLBTGYYCYNJSGE",

};

const pdfApi = new PdfApi(credentials.id, credentials.key);

const pdfLinks = {
    uploadFiles: async function (fileName) {
        const pdfFileData = await fs.readFile(configParams.LOCAL_PATH + fileName);
        await pdfApi.uploadFile(fileName, pdfFileData);
    },

    downloadFiles: async function (local_path, fileName) {
        const changedPdfData = await pdfApi.downloadFile(configParams.PDF_DOCUMENT_NAME);

        const filePath = path.join(local_path, fileName);

        await fs.writeFile(filePath, changedPdfData.body);
        console.log("downloaded: " + filePath);
    },

    uploadDocument: async function () {
        await pdfLinks.uploadFiles(configParams.PDF_DOCUMENT_NAME);
    },

    getLinkById: async function (linkId) {
        const resultLinks = await pdfApi.getPageLinkAnnotation(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, linkId);

        if (resultLinks.body.code == 200 && resultLinks.body.link) {
            return resultLinks.body.link;
        }
        else
            throw new Error("Unexpected error : can't get link !!!");
    },

    replaceLink: async function (linkId) {
        const link = await pdfLinks.getLinkById(linkId);

        link.action = configParams.NEW_LINK_ACTION;
        
        var updResponse = await pdfApi.putLinkAnnotation(configParams.PDF_DOCUMENT_NAME, linkId, link);

        if (updResponse.body.code == 200 && updResponse.body.link) {
            pdfLinks.showLinks( [ updResponse.body.link ], "add");
            return updResponse.body.link;
        }
        else
            throw new Error("Unexpected error : can't append link!!!");
    },

    showLinks: function(links, prefix) {
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

export default pdfLinks;

await (async () => {
    await pdfLinks.uploadDocument();
    await pdfLinks.replaceLink(configParams.LINK_FIND_ID);
    await pdfLinks.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
