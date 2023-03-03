const express = require('express');
const { Passport } = require('passport');
const router = express.Router();
const passport = require('passport');

const books=require('../controllers/books_controller');

router.get('/books',books.books);



module.exports = router;