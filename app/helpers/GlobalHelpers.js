const fs = require('fs');

let checkIfDirectory = function(path){
    try{
        const stats = fs.statSync(path);
    }catch(err){
        throw new Error(err)
    }

    return stats.isDirectory();
};

let checkIfFile = function(path,type=null){
    path = type?'/'+path+'.'+type:path;
    console.log(path)
    try{
        const stats = fs.statSync(path);
    }catch(err){
        return false;
    }

    return stats.isFile();
}

module.exports = {checkIfDirectory,checkIfFile}