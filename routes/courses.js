const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const courses=require('../controllers/courses_controller');

router.get('/courses',passport.checkAuthentication,courses.courses);



module.exports = router;