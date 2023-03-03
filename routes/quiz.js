const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const quiz=require('../controllers/quiz_controller');

router.get('/quiz',passport.checkAuthentication,quiz.quiz);



module.exports = router;