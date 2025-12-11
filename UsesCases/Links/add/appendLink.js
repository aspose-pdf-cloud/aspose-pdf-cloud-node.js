// 1. Load your Application Secret and Key from the JSON file or set credentials in another way
// 2. Create an object to connect to the Pdf.Cloud API
// 3. Upload your document file
// 4. Create a new Link Annotation with the required properties
// 5. Append new Link Annotation to the document using postPageLinkAnnotations() function
// 6. Perform some action after successful addition
// All values of variables starting with "YOUR_****" should be replaced by real user values

import credentials from "./../../../settings/credentials.json"  with { type: "json" };    // json-file in this format: { "id": "*****", "key": "*******" }
import fs from 'node:fs/promises';
import path from 'node:path';
import { PdfApi } from "asposepdfcloud";
import { Color } from "asposepdfcloud/src/models/color.js";
import { Link } from "asposepdfcloud/src/models/link.js";
import { Rectangle } from "asposepdfcloud/src/models/rectangle.js";
import { LinkAnnotation } from "asposepdfcloud/src/models/linkAnnotation.js";
import { LinkHighlightingMode} from "asposepdfcloud/src/models/linkHighlightingMode.js";
import { LinkActionType } from "asposepdfcloud/src/models/linkActionType.js";

const configParams = {
    LOCAL_FOLDER: "testData",
    PDF_DOCUMENT_NAME: "PdfWithLinks.pdf",
    LOCAL_RESULT_DOCUMENT_NAME: "output_sample.pdf",
    NEW_LINK_ACTION: "https://reference.aspose.cloud/pdf/#/",
    PAGE_NUMBER: 1,     // Your document page number...
    LINK_POS_LLX: 70,
    LINK_POS_LLY: 731.229,
    LINK_POS_URX: 90,
    LINK_POS_URY: 745.185,
};

const pdfApi = new PdfApi(credentials.client_id, credentials.client_secret);

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

    async appendLink () {
        const linkColor = new Color({ a: 255, r: 0, g: 255, b: 0 });

        const linkRectangle = new Rectangle();
        linkRectangle.lLX = configParams.LINK_POS_LLX;
        linkRectangle.lLY = configParams.LINK_POS_LLY;
        linkRectangle.uRX = configParams.LINK_POS_URX;
        linkRectangle.uRY = configParams.LINK_POS_URY;

        const linkItem = new Link({ rel: "self" });

        const newLink = new LinkAnnotation();
        newLink.links = [ linkItem ];
        newLink.actionType = LinkActionType.GoToURIAction,
        newLink.action = configParams.NEW_LINK_ACTION,
        newLink.highlighting = LinkHighlightingMode.Invert,
        newLink.color = linkColor;
        newLink.rect = linkRectangle;
        
        var addResponse = await pdfApi.postPageLinkAnnotations(configParams.PDF_DOCUMENT_NAME, configParams.PAGE_NUMBER, [ newLink ]);

        if (addResponse.body.code == 200) {
            console.log("Append link successful!");
            return true;
        }
    },
}

async function main() {
    try {
        await pdfLinks.uploadDocument();
        await pdfLinks.appendLink();
        await pdfLinks.downloadResult();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
