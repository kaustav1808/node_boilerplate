const fs = require('fs');
const path = require('path');

let checkIfDirectory = function(path){
    try{
        let stats = fs.statSync(path);
        return stats.isDirectory();
    }catch(err){
        return false;
    }
};

let checkIfFile = function(pathString,file=null){
    pathString = file?path.join(pathString,file):pathString;
    try{
        let stats = fs.statSync(pathString);
        return stats.isFile();
    }catch(err){
        return false;
    }
}

module.exports = {checkIfDirectory,checkIfFile}