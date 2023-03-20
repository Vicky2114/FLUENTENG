const nodemailer = require("../config/nodemailer");
const Post =require('../models/post')
const User=require('../models/user');
const { use } = require("../routes");

module.exports.contactus=async function(req,res){
    try{
        // populate the user of each post
       let posts = await Post.find({})
       .sort('-createdAt')
       .populate('user')
       .populate({
           path: 'comments',
           populate: {
               path: 'user'
           },
           populate:{
               path:'likes'
           }
       }).populate('comments')
       .populate('likes');
   
       let users = await User.find({});

       return res.render('contactus', {
           title: "FluentEng",
           posts:  posts,
           all_users: users
       });

   }catch(err){
       console.log('Error', err);
       return;
   }
}
module.exports.feedback=function(req,res){
    try{
        let user={
            email:req.body.email,
            name:req.body.name,
            phone:req.body.phone,
            message:req.body.message,
        }

        let htmlString1=nodemailer.renderTemplate({user},'/feedback.ejs')
        let htmlString2=nodemailer.renderTemplate({user},'/community.ejs')
        nodemailer.transporter.sendMail({
            from:'vr6994056@gmail.com',
            to:user.email,
            subject:"Thanks For Feedback",
            html:htmlString1
           })
        nodemailer.transporter.sendMail({
            from:'vr6994056@gmail.com',
            to:'fluenteng2023@gmail.com',
            subject:"Feedback From User",
            html:htmlString2
           })
           req.flash('success','your feedback send succesfully');
           return res.redirect('/contactus')


    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

