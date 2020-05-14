const routeConfig   = require('../config/route');
const path = require('path');
const fs = require('fs');
var express = require('express');
var router = express.Router();

const pathParams = {
    currentPath:null,
    basePath:null,
    appRootPath:null,
    routerBasePath:null,
    pathArray:[],
}

let routeHandler =  function(req,res,next){
    if(!routeConfig.routePath)
        throw new Error("route path is not set");

    //initialize path params
    initPath(req);

    //resolve route modules
    //resolveRouter();

    console.log(pathParams);

    next();
};

let initPath = function (req){
      pathParams.currentPath    = req.originalUrl;
      pathParams.basePath       = req.baseUrl;
      pathParams.appRootPath    = process.env.PWD;
      pathParams.routerBasePath = path.join(pathParams.appRootPath,routeConfig.routePath);
      pathParams.pathArray      = pathParams.currentPath.split('/').shift();
};

let resolveRouter = async function() {
    let currentPath = pathParams.routerBasePath + '/';

    if((typeof pathParams.pathArray == 'string') && (pathParams.pathArray)){
       let pathResolver = 'indexRoute.js';

       try{
           let module = await import(currentPath+pathResolver);
       }catch(err){
           throw new Error(err.message);
       }
    }

    pathParams.pathArray.forEach(function(path){
        if(!path)
            return;

    })
};

module.exports  = routeHandler;