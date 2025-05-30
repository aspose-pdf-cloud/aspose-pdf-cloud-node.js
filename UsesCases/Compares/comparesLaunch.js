import { pdfCompares, configParams } from "../Compares/comparePdfDocuments.js";

async function main() {
    try {
        await pdfCompares.comparePdfDocuments(configParams.PDF_DOCUMENT_1, configParams.PDF_DOCUMENT_2, configParams.PDF_OUTPUT);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

await main();