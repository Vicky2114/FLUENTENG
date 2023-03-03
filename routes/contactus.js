const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const contactus=require('../controllers/contactus_controller');

router.get('/contactus',passport.checkAuthentication,contactus.contactus);



module.exports = router;