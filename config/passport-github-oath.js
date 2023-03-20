const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(
    new GitHubStrategy(
      {
        clientID: "d104e13435e012b39d97",
        clientSecret: "2470e17192d260d6e974c53c37815441fa61c362",
        callbackURL: 'http://localhost:8000/user/auth/github/callback',
      },
      function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in github strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email:profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex'),
                }, function(err, user){
                    if (err){console.log('error in creating user github strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }
  ));


module.exports = passport;
