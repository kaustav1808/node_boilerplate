const express = require('express');
const router = express.Router();
const userController = require('../../../app/controller/user/user')

/* GET users listing. */
router.post('/api/v1/users', function(req, res, next) {
    userController
        .listUser(req,res)
        .then(usere=>{
            res.send(usere)
        }).catch(err=>{
             next()
        })
      
});

/* Find a user*/
router.get('/api/v1/users/:id', function(req, res, next) {
    
  userController
      .getUser(req,res)
      .then(result=>{
         res.send(result)
      }).catch(err=>{
          next()
      })
});

/*Create a user*/
router.post('/api/v1/users/create', function(req, res, next) {
  userController
      .createUser(req,res)
      .then(result=>{
         res.send(result)
      }).catch(err=>{
          next()
      })
});


module.exports = router;
