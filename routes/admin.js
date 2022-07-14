var express = require('express');
var router = express.Router();

// ********* All /admin/users endpoints **********
/* list all users */
router.get('/users', function(req, res, next) {
  res.send('list of all users');
});

/* list a single user */
router.get('/users/:user', function(req, res, next) {
  res.send(req.params);
});

/* create a new user */
router.post('/users', function(req, res, next) {
  res.send('create a new user');
});

/* update a single user */
router.put('/users/:user', function(req, res, next) {
  res.send('update a user');
});

/* delete a user */
router.delete('/users/:user', function(req, res, next) {
  res.send('delete user');
});

// ********* All /admin/stats endpoints **********
/* list overall stats */
router.get('/stats', function(req, res, next) {
  res.send('list of all stats');
});

// ********* All /admin/settings endpoints **********
/* list all settings */
router.get('/settings', function(req, res, next) {
  res.send('list of all settings');
});

/* update settings */
router.put('/settings', function(req, res, next) {
  res.send('update settings');
});
module.exports = router;
