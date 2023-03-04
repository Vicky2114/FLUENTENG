const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const aboutus=require('../controllers/aboutus_controller');

router.get('/aboutus',passport.checkAuthentication,aboutus.aboutus);



module.exports = router;