const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Userprofile"
    },
    productname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
const Productinfo = mongoose.model("product",productSchema)
module.exports = Productinfo;
