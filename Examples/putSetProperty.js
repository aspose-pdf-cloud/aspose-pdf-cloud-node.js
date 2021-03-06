const { PdfApi } = require("asposepdfcloud");
const { DocumentProperty } = require("asposepdfcloud/src/models/DocumentProperty");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


const propertyNames = ["prop1", "prop2"];
const propertyValues = ["val1", "val2"];

const property1 = new DocumentProperty();
property1.name = propertyNames[0];
property1.value = propertyValues[0];

const property2 = new DocumentProperty();
property2.name = propertyNames[1];
property2.value = propertyValues[1];

pdfApi.
    putSetProperty("4apges.pdf", property1.name, property1.value, null, null).then((result) => {
        console.log(result.response);
    });
