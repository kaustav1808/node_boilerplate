const fs = require('fs');
const path = require('path');

let checkIfDirectory = function(path){
    try{
        let stats = fs.statSync(path);
    }catch(err){
        throw new Error(err)
    }

    return stats.isDirectory();
};

let checkIfFile = function(pathString,type=null){
    pathString = type?path.join(pathString,type):pathString;
    console.log(pathString)
    try{
        let stats = fs.statSync(pathString);
        return stats.isFile();
    }catch(err){
        return false;
    }
}

module.exports = {checkIfDirectory,checkIfFile}