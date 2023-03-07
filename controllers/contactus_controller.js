const nodemailer = require("../config/nodemailer");


module.exports.contactus=function(req,res){
    console.log('done');
    return res.render('contactus');
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

