import { configParams } from "./changeLayoutHelper.js";
import { PdfRotatePages } from "./rotatePageStdAngle.js"
import { PdfCropPage } from "./cropPage.js";
import { PdfResizePages } from "./resizeDocumentAllPages.js";

async function main() {
    try {
        
        await PdfRotatePages.rotate(configParams.PDF_DOCUMENT_NAME,
            configParams.ROTATE_ANGLE, configParams.ROTATE_PAGES,
            configParams.LOCAL_FOLDER, configParams.TEMP_FOLDER);
        
        await PdfCropPage.cropPage(configParams.PDF_DOCUMENT_NAME, 
            configParams.CROP_PAGE_NUMBER, configParams.CROP_LLX, configParams.CROP_LLY, configParams.CROP_WIDTH, configParams.CROP_HEIGHT, configParams.CROP_LOCAL_RESULT_DOCUMENT_NAME,
            configParams.LOCAL_FOLDER, configParams.TEMP_FOLDER);

        await PdfResizePages.resizeAllPages(configParams.PDF_DOCUMENT_NAME,
            configParams.RESIZE_PDF_HTML_FILE, configParams.RESIZE_NEW_PAGE_WIDTH, configParams.RESIZE_NEW_PAGE_HEIGHT, configParams.RESIZE_RESULT_DOCUMENT_NAME,
            configParams.LOCAL_FOLDER, configParams.TEMP_FOLDER);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

await main();