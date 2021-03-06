#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const ejs = require('ejs');

const loadModelFile = require('./loadModel');
const {tableTemplate, listTemplate, editorTemplate} = require('./template/modelTemplate');
const {RESTServiceTemplate} = require('./template/serviceTemplate');
const {generateReactComponents, generateReactService} = require("./writeToFile");

const obj = loadModelFile(argv);
for (let i = 0; i < obj["classes"].length; i++) {
    let tableComponent = ejs.render(tableTemplate, {entity: obj["classes"][i]["name"]});
    let listComponent = ejs.render(listTemplate, {entity: obj["classes"][i]["name"], entityFields:obj["classes"][i]["fields"]});
    let editorComponent = ejs.render(editorTemplate, {entity: obj["classes"][i]["name"]});
    let RESTService = ejs.render(RESTServiceTemplate, {entity: obj["classes"][i]["name"]});
    
    const components = {"Table": tableComponent, "List":listComponent, "Editor":editorComponent};
    const services = {"Service": RESTService};
    generateReactComponents(obj["classes"][i]["name"], components);
    generateReactService(obj["classes"][i]["name"], services);
}



