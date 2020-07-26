var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var routeHandler =  require('./routes/routeHandler');
var app = express();
var config = require("./config/swagger")
var swagger = require('./bin/swagger')

// view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'hbs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//express api default route
app.use(routeHandler);

 //set swagger route for swagger path
 app.use(config.swagger_base_path,swagger.swaggerPath)

let swaggerConfigStatus = swagger.configSwagger()


//serve url path for Swagger UI
app.get('/docs', function (req, res) {
  res.sendFile(__dirname +"/"+config.views_path+ '/index.html');
});

app.get('/docs-json', function (req, res) {
  res.sendFile(__dirname +"/"+config.views_path+ '/api-docs.json');
});

if(swaggerConfigStatus)
  app.listen(swagger.startSwaggerWithPorts()) 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
