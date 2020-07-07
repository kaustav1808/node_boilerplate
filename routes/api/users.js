var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('users success');
});

/* Find a user*/
router.get('/users/{id}', function(req, res, next) {
  res.send('users success');
});

/*Create a user*/
router.post('/users/create', function(req, res, next) {
  res.send('users success');
});


module.exports = router;
