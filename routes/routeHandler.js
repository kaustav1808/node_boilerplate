const routeConfig   = require('../config/route');
const path = require('path')

let routeHandler =  function(req,res,next,callback){
    if(!routeConfig.routePath)
        throw new Error("route path is not set");

    const currentPath = req.originalUrl;res.send(currentPath);
    const basePath    = req.baseUrl;
    let   routerBasePath = path.join(__dirname,routeConfig.routePath);
    let   pathArray     = currentPath.split('/');
    next();
};

module.exports  = routeHandler;