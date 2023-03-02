const User=require('../models/user');
const fs = require('fs');
const path = require('path');
const { urlencoded } = require('express');

module.exports.profile=function(req,res){
    return res.render('profile');
}
module.exports.updateon=function(req,res){
    return res.render('update');
}
module.exports.update = async function(req, res){
   

    if(req.user.id == req.params.id){

        try{

            let user = await User.findById(req.params.id);
            User.uploadedAvatar(req, res, function(err){
                if (err) {console.log('*****Multer Error: ', err)}
                
                user.name =req.body.name;
                user.email =req.body.email;
                user.Phone=req.body.phone;
                user.age=req.body.age;
                user.exp=req.body.exp;
                user.education=req.body.education;
                
                

                if (req.file){

                    if (user.avatar){
                        fs.unlinkSync(path.join(__dirname, '..', user.avatar));
                    }


                    // this is saving the path of the uploaded file into the avatar field in the user
                    user.avatar = User.avatarPath + '/' + req.file.filename;
                }
                user.save();
                req.flash('success','profile updated succesfully')
                return res.redirect('back');
            });

        }catch(err){
            console.log('error')
            req.flash('error', err);
            return res.redirect('back');
        }


    }else{
        req.flash('error', 'Unauthorized!');
        return res.status(401).send('Unauthorized');
    }
}