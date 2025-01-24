// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Delete required Link Annotation from the document using deleteLinkAnnotation() function
// 6. Perform some action after successful removing the Link Annotation from document
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    LINK_FIND_ID: "GI5UO32UN5KVESKBMN2GS33OHMZTEMJMGUYDQLBTGYYCYNJSGE",

    PAGE_NUMBER: 2,     // Your document page number...
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

    getAllLinks: async function () {
        const resultLinks = await pdfApi.getPageLinkAnnotations(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER);

        if (resultLinks.body.code == 200 && resultLinks.body.links.list) {
            if (!Array.isArray(resultLinks.body.links.list) || resultLinks.body.links.list.length === 0) {
                throw new Error("Unexpected error : links is null or empty!!!");
            }
            return resultLinks.body.links.list;
        }
        else
            throw new Error("Unexpected error : can't get links!!!");
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

    removeLink: async function (linkId) {
        const resultDelete = await pdfApi.deleteLinkAnnotation(configParams.PDF_DOCUMENT_NAME, linkId);

        if (resultDelete.body.code == 200) {
            return linkId;
        }
        else
            throw new Error("Unexpected error : can't get link !!!");
    }

}

export default pdfLinks;

await pdfLinks.uploadDocument()
    .then(async () =>{
        return await pdfLinks.getAllLinks();
    })
    .then((links) =>{
        pdfLinks.showLinks(links, "in");
    })
    .then(async () => {
        return await pdfLinks.removeLink(configParams.LINK_FIND_ID);
    })
    .then((linkId) =>{
        console.log("Link '" + linkId + "' was deleted!");
    })
    .then(async () =>{
        await pdfLinks.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
    })
    .catch((message) =>{
        console.log(message);
    });
