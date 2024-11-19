const { PdfApi } = require("asposepdfcloud");
const fs = require("fs");

const fileName = "PdfWithImages2.pdf";
const folder = "Documents";
const storage = null;
const api = new PdfApi("http://172.17.0.1:5000/v3.0");

async function main()
{
    const response = await api.uploadFile(folder + "/" +fileName, fs.readFileSync("testData/" + fileName), storage)
    console.log(response.body.uploaded[0])
}

main();
