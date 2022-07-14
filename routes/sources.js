var express = require('express');
var router = express.Router();

/* Description */
router.get('/sources', function(req, res, next) {
  res.send('anything to do with sources');
});

module.exports = router;
