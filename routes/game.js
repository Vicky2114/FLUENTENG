const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const game=require('../controllers/game_controller');

router.get('/game',passport.checkAuthentication,game.game);
<<<<<<< HEAD
=======
router.get('/game1',passport.checkAuthentication,game.game1);
router.get('/game2',passport.checkAuthentication,game.game2);
>>>>>>> b6d74c8d5c170ce49026ed9055c6543bec9f0400



module.exports = router;