var express = require('express');
var router = express.Router();

/* Description */
router.get('/auth', function(req, res, next) {
  res.send('authenticates + generates token');
});

module.exports = router;
