const nodemailer=require('nodemailer');
const ejs=require('ejs');
const { request } = require('express');
const path=require('path');
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:'587',
    secure:false,
    auth: {
        user:'rkroyvky@gmail.com',
        pass: 'fniqferxmsxjsoug'
    }
})

let renderTemplate=(data,relativePath)=>{
    let mailHtml;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log("error in occur temp");return}
            mailHtml=template;
        }

    )
            return mailHtml;
}

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}