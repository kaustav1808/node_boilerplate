let app = require('../app');
let chai  = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';

chai.use(chaiHttp);

describe('route test started',()=>{
    describe('test / route',(done)=>{
        chai.request(app).get('/').end((err,res)=>{
            console.log(err)
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('msg');
              done();
        })
    })
})