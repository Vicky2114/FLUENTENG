const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const userProfile=require('../controllers/profile_controller');

router.get('/profile/:id', passport.checkAuthentication, userProfile.profile);
router.get('/update',passport.checkAuthentication,userProfile.updateon)

router.post('/update/:id', passport.checkAuthentication, userProfile.update);



module.exports = router;