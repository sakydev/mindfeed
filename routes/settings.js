var express = require('express');
var router = express.Router();

/* Description */
router.get('/settings', function(req, res, next) {
  res.send('user settings');
});

module.exports = router;
