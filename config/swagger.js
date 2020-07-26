require('dotenv').config()

module.exports = {
    "swagger_base_path":"/doc/api",
    "views_path":"views/api-docs",
    "info":{
        title: "Node Boiler Plate Demo",
        description: "API the project Node BoilerPlate",
        termsOfServiceUrl: "",
        contact: "kaustavofficial1808@gmail.com",
        license: "",
        licenseUrl: ""
      },
    "version":"1.0.0",
    "domain":process.env.SWAGGER_DOMAIN || "localhost",  
    "port": process.env.SWAGGER_PORT || 8080,  
    "api_docs":""
}