const {controllerPath} = require('..config/route')

const config = {
    basePath:'/',
    maxLevel:10,
    controllerPath
}

const initConfig = object.create(config);
const initRouteInstances = object.create({});
const currentGroup = null

let group = (name,callback)=>{
    if(!name){
        throw new Error('Route group should have a unique name')
    }
    this.initResolver[name] =     
}

exports.default = routeResolve