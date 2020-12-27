const fs = require("fs");

fs.copyFileSync("gitignore.txt",".gitignore",(err)=>{
    if(error) {
        console.log("Failed to copy the the file content if gitignore.txt");
    }else{
        console.log("File copy successfully done");
    }
})