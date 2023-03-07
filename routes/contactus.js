const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const contactus=require('../controllers/contactus_controller');

router.get('/contactus',contactus.contactus);
router.post('/feedback',contactus.feedback);



module.exports = router;