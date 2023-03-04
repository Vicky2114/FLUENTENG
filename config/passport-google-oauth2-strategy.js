const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
<<<<<<< HEAD
        clientID: "267715881379-fh1an1364har1qd0lgrt1ac9bdjmcctp.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/user/auth/google/callback",
=======
        clientID: "267715881379-h3am098m8vbhquoobg8q19p48lonon9o.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "https://fluenteng.onrender.com/user/auth/google/callback",
>>>>>>> b6d74c8d5c170ce49026ed9055c6543bec9f0400
    },

    function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex'),
                }, function(err, user){
                    if (err){console.log('error in creating user google strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }


));


module.exports = passport;
