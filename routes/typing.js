const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const typing=require('../controllers/typing_controller');

router.get('/typing',passport.checkAuthentication,typing.typing);



module.exports = router;