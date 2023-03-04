const express = require('express');

const router = express.Router();

console.log('router loaded');

const home=require('../controllers/home_controller');

router.get('/',home.home);
router.use('/user', require('./user'));
router.use('/user',require('./profile'))
router.use('/forget-password',require('./forgetpassword'))
router.use('/',require('./quiz'));
router.use('/',require('./game'));
router.use('/',require('./books'));
router.use('/',require('./contactus'));
router.use('/',require('./aboutus'));
router.use('/',require('./typing'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;