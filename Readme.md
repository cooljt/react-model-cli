# React Component Generate CLI Tool
## How to use
First download the repo:  
    `git clone https://github.com/cooljt/react-model-cli.git`

Run below command to install tool in local npm repository(need node version > 11, may need permission to install into global package manager)  
    `npm install -g`

Then can run the program as:  
    `create-react-model --model [path-of-you-json-file]`

It will generate the react component files from the classes defined in your json file. There are two folders generated, one is `models` folder contains the react components, another one is `services` folder contains the REST service file.  

There is a sample json file name *model.json* in the repo for format reference.  
