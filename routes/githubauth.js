const express = require('express');
const router = express.Router();
const passport = require('passport');

const auth=require('../controllers/users_controller');


router.get('/auth/github', passport.authenticate('github',{ scope: [ 'profile','email' ,'user:email'] }));
 
// GitHub will call this URL
router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/user' }),auth.createSession)

  module.exports =router;