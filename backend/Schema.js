const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(()=>{
    console.log("Connected with database");
}).catch((e)=>{
    console.log(e);
})


const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    product:[Number],

    total:[Number],
    
    date:{
        type:Date,
        default:Date.now
    },
})
const Userprofile =  mongoose.model("userdata",userSchema);
module.exports = Userprofile;
