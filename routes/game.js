const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const game=require('../controllers/game_controller');

router.get('/game',game.game);



module.exports = router;