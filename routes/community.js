const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const community=require('../controllers/community_controller');

router.get('/community',passport.checkAuthentication,community.community);



module.exports = router;