const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const game=require('../controllers/game_controller');

router.get('/game',passport.checkAuthentication,game.game);
router.get('/game1',passport.checkAuthentication,game.game1);
router.get('/game2',passport.checkAuthentication,game.game2);




module.exports = router;