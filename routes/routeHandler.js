const routeConfig   = require('../config/route');
const routeResolver = require('./routeResolver');

let routeHandler = async function(req,res,callback){
    const currentPath = req.originalUrl;
    const basePath    = req.baseUrl;

    if(basePath == 'api'){
        const resolver = import('./apiRoutes')
    }else{
        const resolver = import('./webRoute')
    }

    resolver.routeResolver(currentPath).then(resolver=>{
        
    })
    
    try{
        await resolver.dispatchController(req,res);
    }catch(error){
        callback(error)
    }
    callback(resolver.getResponse())
}

exports.default  = routeHandler;