const express = require('express');
const router = express.Router();
const passport = require('passport');

const forget=require('../controllers/forget_controller');

router.get('/',forget.ren);
router.post('/link',forget.forgetpass);
router.get('/reset-password/:id/:token',forget.resetpassword);
router.post('/reset-password/:id/:token',forget.reset);
module.exports=router;
