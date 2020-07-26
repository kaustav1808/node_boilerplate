var express = require('express');
var config = require('../config/swagger')
var swaggerPath = express();
var swagger = require('swagger-node-express').createNew(swaggerPath);

let configSwagger = ()=>{
    if(process.env.SWAGGER_RUN){
        swagger.setApiInfo(config.info);

        // Set api-doc path
        swagger.configureSwaggerPaths('', 'api-docs', '');

        return true
    }
    return false;
    
}

let startSwaggerWithPorts = ()=>{
        // Configure the API domain
        var domain = config.domain;
        var port = config.port;

        console.log('Swagger Port running on : ' + port + '.')

        // Set and display the application URL
        var applicationUrl = 'http://' + domain + ':' + port;
        console.log('Swagger API running on ' + applicationUrl);


        swagger.configure(applicationUrl, config.version);

        // Start the web server
        return port;
}

module.exports = { configSwagger,swaggerPath,startSwaggerWithPorts};
