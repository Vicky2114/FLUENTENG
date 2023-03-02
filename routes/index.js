const express = require('express');

const router = express.Router();

console.log('router loaded');

const home=require('../controllers/home_controller');

router.get('/',home.home);
router.use('/user', require('./user'));
router.use('/user',require('./profile'))

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;