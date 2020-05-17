const routeConfig   = require('../config/route');
let path = require('path');
const fs = require('fs');
let express = require('express');
let router = express.Router();
const helpers = require('../app/helpers/GlobalHelpers')

const pathParams = {
    currentPath:null,
    basePath:null,
    appRootPath:null,
    routerBasePath:null,
    resolvedPath : '',
    pathArray:[],
};

let routeHandler =  function(req,res,next){
    if(!routeConfig.routePath)
        throw new Error("route path is not set");

    //initialize path params
    initPath(req);

    //resolve route modules
    let routeFile = resolveRouter();

    resolveModule(routeFile).then((routerModule)=>{
        let currentRouterPath = pathParams.pathArray.length? pathParams.pathArray.join('/'):'/';
        router.all(currentRouterPath,routerModule(req,res,next));
    }).catch(err=>{
        next();
    });
};

let initPath = function (req){
      pathParams.currentPath    = req.originalUrl;
      pathParams.basePath       = req.baseUrl;
      pathParams.appRootPath    = process.cwd();
      pathParams.routerBasePath = path.join(pathParams.appRootPath, routeConfig.routePath);
      pathParams.pathArray      = pathParams.currentPath.split('/');
      pathParams.pathArray.shift();
};

let resolveRouter = function() {
    let currentPath  = path.join(pathParams.routerBasePath , '');
    let pathResolver = 'index.js';

    while(pathParams.pathArray.length){
        let path = pathParams.pathArray.shift();
        if(path){
            if(helpers.checkIfDirectory(currentPath+path)){
                currentPath = path.join(currentPath,path);
                pathParams.resolvedPath += "/"+path;
            }
            else if(helpers.checkIfFile(currentPath,path+'.js')){
                pathParams.resolvedPath += "/";
                pathResolver = path+'.js';
                break;
            }else if(helpers.checkIfFile(currentPath,'index.js')){
                pathResolver = 'index.js';
                pathParams.resolvedPath += "/";
                pathParams.pathArray.unshift(path);
                break;
            }else{
                throw new Error('Route file not found');
            }
        }
        else if(pathParams.pathArray.length) {
            throw new Error("invalid URL " + pathParams.currentPath)
        }else if(helpers.checkIfFile(currentPath,'index.js')){
            pathResolver = 'index.js';
            pathParams.resolvedPath += "/";
            break;
        }else{
            throw new Error('Route file not found');
        }
    }

    return path.join(currentPath,pathResolver);
};

let resolveModule = async function(modulePath){
    try{
        let routeModule = await require(modulePath);
        return routeModule;
    }catch(err){
       return err;
    }
};


module.exports  = routeHandler;