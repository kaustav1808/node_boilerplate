var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/test/test2/', function(req, res, next) {
  //console.log('[hey i am called]')
  res.send({msg:"success"});
 //next();
});

module.exports = router;
