var express = require('express');
var passport = require('passport');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var request = require('request');

// We are going to want to share some data between our server and UI, so we'll be sure to pass that data in an env variable.
var env = {
  // AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  // AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  // AUTH0_CALLBACK_URL: 'http://localhost:4000/callback'
};

router.get('/', function(req, res, next) {
  console.log('router index');
  res.render('index', { env: env });
});

router.get('/login', function(req, res, next) {
  res.sendfile('app/dist/login.html');
});


module.exports = router
