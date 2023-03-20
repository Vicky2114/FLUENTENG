const mongoose=require('mongoose');

const LikeSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,

    },
    likeable:{
        type:mongoose.Schema.ObjectId,
        required:true,
        refPath:'onModel'
},
//this field use for defining the type of the linked object since for a dynamic ref
   onModel:{
    type:String,
    required:true,
    enum:['Post','Comment']
   }
}, {
    timestamps:true
   })

const Like=mongoose.model('Like',LikeSchema);
module.exports=Like;