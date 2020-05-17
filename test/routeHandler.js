let app = require('../app');
let chai  = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';

chai.use(chaiHttp);

describe('route test started',()=>{
    describe('test / route',()=>{
        it('it should successfully give response success with status 200',(done)=>{
            chai.request(app).get('/').end((err,res)=>{
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('msg');
                  done();
            });
        })     
    })
})