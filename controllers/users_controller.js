const User = require("../models/user");

module.exports.authentication = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('home');
    }

    return res.render('authentication', {
        title: "fluneteng"
    })
}

module.exports.create=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error",err)
            return;
        }
        if(!user){
           User.create({name:req.body.name,
                email:req.body.email,
                password:req.body.password
                
            },function(err,user){
                if(err){
                    console.log("error in creating account",err)
                    return;
                }
                return res.redirect('/user');
            })
        }
        else{
            console.log('you have signed up')
            req.flash('success', 'Sign up Succesfully');
            return res.redirect('/user');
        }
    })
}


module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You have logged out!');


    return res.redirect('/user');
}
