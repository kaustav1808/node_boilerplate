const routeConfig   = require('../config/route');
const path = require('path');
const fs = require('fs');
let express = require('express');
let router = express.Router();
const helpers = require('../app/helpers/GlobalHelpers')

const pathParams = {
    currentPath:null,
    basePath:null,
    appRootPath:null,
    routerBasePath:null,
    pathArray:[],
};

let routeHandler =  function(req,res,next){
    if(!routeConfig.routePath)
        throw new Error("route path is not set");

    //initialize path params
    initPath(req);

    //resolve route modules
    let routeFile = resolveRouter();

    resolveModule().then((routerModule)=>{
        let currentRouterPath = pathParams.pathArray.join('/');
        router.use(currentRouterPath,routerModule);
    }).catch(err=>{
        next(err);
    });
};

let initPath = function (req){
      pathParams.currentPath    = req.originalUrl;
      pathParams.basePath       = req.baseUrl;
      pathParams.appRootPath    = process.env.PWD;
      pathParams.routerBasePath = path.join(pathParams.appRootPath,routeConfig.routePath);
      pathParams.pathArray      = pathParams.currentPath.split('/');
      pathParams.pathArray.shift();
};

let resolveRouter = function() {
    let currentPath  = pathParams.routerBasePath + '/';
    let pathResolver = 'index.js';

    while(pathParams.pathArray.length){
        let path = pathParams.pathArray.shift();
        if(path){
            if(helpers.checkIfDirectory(currentPath+path))
                currentPath += path+'/';
            else if(helpers.checkIfFile(currentPath+path,'js')){
                pathResolver = path+'.js';
                break;
            }else if(helpers.checkIfFile(currentPath+'index','js')){
                pathResolver = 'index.js';
                pathParams.pathArray.unshift(path);
                break;
            }else{
                throw new Error('Route file not found');
            }
        }
        else if(pathParams.pathArray.length) {
            throw new Error("invalid URL " + pathParams.currentPath)
        }else if(helpers.checkIfFile(currentPath+'index','js')){
            pathResolver = 'index.js';
            break;
        }else{
            throw new Error('Route file not found');
        }
    }

    return currentPath+pathResolver;
};

let resolveModule = async function(modulePath){
    try{
        let routeModule = await import(modulePath)
    }catch(err){
        throw new Error(err);
    }

    return routeModule;
};


module.exports  = routeHandler;