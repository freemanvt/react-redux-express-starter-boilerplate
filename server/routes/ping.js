var express = require('express');
var logger = require('../logger');
var router = express.Router();

router.get('/', function(req, res) {
  logger.debug('ping invoked');
  res.json({status : 'OK'}).end();
});

module.exports = router;