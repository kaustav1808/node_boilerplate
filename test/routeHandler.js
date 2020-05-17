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

    describe('test /test route',()=>{
        it('it should successfully give response success with status 200',(done)=>{
            chai.request(app).get('/test').end((err,res)=>{
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('msg');
                  done();
            });
        })     
    })

    describe('test /test/test2 route',()=>{
        it('it should successfully give response success with status 200',(done)=>{
            chai.request(app).get('/test/test2').end((err,res)=>{
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('msg');
                  done();
            });
        })     
    })

    describe('test /test/domeTest/ route',()=>{
        it('it should successfully give response success with status 200',(done)=>{
            chai.request(app).get('/test/domeTest').end((err,res)=>{
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('msg');
                  done();
            });
        })     
    })

    describe('test /test/domeTest/test3 route',()=>{
        it('it should successfully give response success with status 200',(done)=>{
            chai.request(app).get('/test/domeTest/test3').end((err,res)=>{
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('msg');
                  done();
            });
        })     
    })
})