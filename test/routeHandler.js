let app = require('../app');
let expect  = require("chai").expect;
let request = require("request");
let BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';