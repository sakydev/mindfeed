var express = require('express');
var router = express.Router();

/* Description */
router.get('/favorites', function(req, res, next) {
  res.send('user favs');
});

module.exports = router;
