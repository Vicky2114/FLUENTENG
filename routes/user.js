const express = require('express');
const router = express.Router();
const passport = require('passport');

const auth=require('../controllers/users_controller');

router.get('/',auth.authentication)
router.post('/create', auth.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user'},
), auth.createSession);
router.get('/sign-out',auth.destroySession);

module.exports = router;