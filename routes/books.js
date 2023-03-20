const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const books=require('../controllers/books_controller');

router.get('/books',passport.checkAuthentication,books.books);
router.get('/books1',passport.checkAuthentication,books.books1);
router.get('/books2',passport.checkAuthentication,books.books2);



module.exports = router;