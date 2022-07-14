var express = require('express');
var router = express.Router();

/* Description */
router.get('/collections', function(req, res, next) {
  res.send('user collections');
});

module.exports = router;
