const nodemailer=require('../config/nodemailer');
const Comment = require('../models/comment');


//this is another way of exporting method
exports.newComment = (comment)=>{
    let htmlString=nodemailer.renderTemplate({comment:comment},'/reply.ejs')

    nodemailer.transporter.sendMail({
        from:'vr6994056@gmail.com',
        to:comment.user.email,
        subject:"Reply To Your Post",
        html:htmlString
    },(err,info)=>{
        if(err){console.log("error",err);return;}
        console.log("message sent",info)
        return;
    })
}