const { PdfApi } = require("asposepdfcloud");
const { DocumentPrivilege } = require("asposepdfcloud/src/models/documentPrivilege");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');

const documentPrivilege = new DocumentPrivilege();
documentPrivilege.allowCopy = false;
documentPrivilege.allowPrint = false;


pdfApi.putPrivileges("4pages.pdf", documentPrivilege, null, null)
    .then((result) => {
        console.log(result.response);
    });