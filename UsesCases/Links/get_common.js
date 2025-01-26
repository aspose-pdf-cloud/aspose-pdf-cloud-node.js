// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Perform the retreiving link annotattions from Pdf document using getPageLinkAnnotations() function
// 5. Check result and perform some actions with result.body object
// 6. Create a new Link Annotation with the required properties
// 7. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 8. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "credentials.json"  with { type: "json" };
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { Color } from "asposepdfcloud/src/models/color.js";
import { Link } from "asposepdfcloud/src/models/link.js";
import { Rectangle } from "asposepdfcloud/src/models/rectangle.js";
import { LinkAnnotation } from "asposepdfcloud/src/models/linkAnnotation.js";

const configParams = {
    LOCAL_PATH: "C:\\Samples\\",

    PDF_DOCUMENT_NAME: "sample.pdf",

    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",

    NEW_LINK_ACTION: "https://reference.aspose.cloud/pdf/#/",

    PAGE_NUMBER: 2,     // Your document page number...

    LINK_POS_LLX: 244.914,

    LINK_POS_LLY: 488.622,

    LINK_POS_URX: 284.776,

    LINK_POS_URY: 498.588,
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
            pdfLinks.showLinks(resultLinks.body.links.list, "in");
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
            console.error("showBoormarks() error: array of bookmark is empty!")
    },

    appendLink: async function () {

        const linkColor = new Color();
        linkColor.a = 255;
        linkColor.r = 0;
        linkColor.g = 255;
        linkColor.b = 0;

        const linkRectangle = new Rectangle();
        linkRectangle.lLX = configParams.LINK_POS_LLX;
        linkRectangle.lLY = configParams.LINK_POS_LLY;
        linkRectangle.uRX = configParams.LINK_POS_URX;
        linkRectangle.uRY = configParams.LINK_POS_URY;

       const linkItem = new Link();
       linkItem.href = "";
       linkItem.rel = "self";
       linkItem.type = null;
       linkItem.title = null;

        const newLink = new LinkAnnotation();
        newLink.links = [ linkItem ];
        newLink.actionType = "GoToURIAction";
        newLink.action = configParams.NEW_LINK_ACTION,
        newLink.highlighting = "Invert";
        newLink.color = linkColor;
        newLink.rect = linkRectangle;
        
        var addResponse = await pdfApi.postPageLinkAnnotations(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, [ newLink ]);

        if (addResponse.body.code == 200) {
            pdfLinks.showLinks( [ newLink ], "add");
            return newLink;
        }
        else
            throw new Error("Unexpected error : can't append link!!!");
    },
}

export default pdfLinks;

await (async () => {
    await pdfLinks.uploadDocument();
    await pdfLinks.getAllLinks();
    await pdfLinks.appendLink();
    await pdfLinks.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
})().catch((error) => { console.log(error.message); });
    .then(async () =>{
        await pdfLinks.downloadFiles( configParams.LOCAL_PATH, configParams.LOCAL_RESULT_DOCUMENT_NAME );
    })
    .catch((message) =>{
        console.log(message);
    });
