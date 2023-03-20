const express = require('express');

const router = express.Router();

console.log('router loaded');

const home=require('../controllers/home_controller');

router.get('/',home.home);
router.use('/user', require('./user'));
router.use('/user', require('./githubauth'));
router.use('/user',require('./profile'))
router.use('/forget-password',require('./forgetpassword'))
router.use('/',require('./quiz'));
router.use('/',require('./game'));
router.use('/',require('./books'));
router.use('/',require('./contactus'));
router.use('/',require('./aboutus'));
router.use('/',require('./typing'));
router.use('/',require('./courses'));

router.use('/comments', require('./comments'));
router.use('/posts', require('./posts'));
router.use('/likes',require('./likes'))
router.use('/',require('./community'))

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

router.use('/api', require('./api'));
module.exports = router;