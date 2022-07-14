var express = require('express');
var router = express.Router();

/* Description */
router.get('/feed', function(req, res, next) {
  res.send('feed here');
});

module.exports = router;
