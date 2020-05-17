var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/test/domeTest/', function(req, res, next) {
  //console.log('[hey i am called]')
  res.send({msg:"success"});
 //next();
});

module.exports = router;
