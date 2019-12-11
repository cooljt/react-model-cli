const fs = require('fs');
const baseReactDir = process.cwd() + "/react/models/";
const baseReactServiceDir = process.cwd() + "/react/services/";
const generateReactComponents = (name, components) => {
    createDir(baseReactDir + name);
    let filePath = baseReactDir + name + "/";
    Object.keys(components).forEach((key) => {
        let fileName = name + key + ".js";
        writeFile(filePath + fileName, components[key]);
    });
}

const generateReactService = (name, services) => {
    createDir(baseReactServiceDir + name);
    let filePath = baseReactServiceDir + name + "/";
    Object.keys(services).forEach((key) => {
        let fileName = name + key + ".js";
        writeFile(filePath + fileName, services[key]);
    });
}

const createDir = (dirPath) => {
    try {
        fs.statSync(dirPath)
    } catch (e) {
        fs.mkdirSync(dirPath, {recursive: true});
    }
};

const writeFile = (filePath, content) => {
    fs.writeFile(filePath, content, (error) => {
        if (error) {
            console.log("Error : "+error);
        } else {
            console.log("Model file created for React component: " + filePath);
        }
    });
}

module.exports = {generateReactComponents, generateReactService};