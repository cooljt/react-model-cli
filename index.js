#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const loadModelFile = require('./loadModel');

const obj = loadModelFile(argv);




