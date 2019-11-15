const fs = require('fs');

const loadModelFile = (argv) => {
    if (!argv.hasOwnProperty('model') || argv['model'] === true) {
        console.error("Wrong Format, Use: create-react-model --model path-to-your-model-json-file");
        return process.exit(0);
    } else {
        const modelFile = argv['model'];
        const obj = JSON.parse(fs.readFileSync(modelFile, 'utf8'));
        return obj;
    }
}

module.exports = loadModelFile;