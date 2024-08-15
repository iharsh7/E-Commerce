const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require('./Schema')
const Userprofile = require('./Schema');
const Productinfo = require('./productSchema');
app.use(express.json());
// app.use(urle)
app.use(
    cors({
      origin: "*",
    })
  );
  app.get("/",(req,res)=>{
    res.send("Hello from server");
})


//         ADD IMAGE OF PRODUCT 

    const storage = multer.diskStorage({
        destination: './uploads/images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })
    const upload = multer({storage:storage})
    app.use('/images',express.static('uploads/images'))
    app.post('/upload',upload.single('product'),(req,res)=>{
        res.json({
            success:1,
            image_url:`http://localhost:4000/images/${req.file.filename}`
        })
    })

    app.post("/register",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!email || !password || !name){
            return res.status(422).json({error:"Invalid form fillup"});
            
           }
        
       
           const preExist = await Userprofile.findOne({email});
           if(preExist){
           return res.status(422).json({error:"already in use"});

           }
           else{
           const newUser = new Userprofile({name,email,password});
           await newUser.save();
          return res.status(201).json({message:"Successfull registration"});
           }

    }
    catch(e){
        console.log(e);

    }

})
    app.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password ){
            return res.status(401).json({error:"Invalid form fillup"});
            
           }
        
       
           const preExist = await Userprofile.findOne({email});
        //    if(preExist){
        //    return res.status(422).json({error:"already in use"});

        //    }
        //    else{
        //    const newUser = new Userprofile({name,email,password});
        //    await newUser.save();
        //   return res.status(201).json({message:"Successfull registration"});
        //    }
        if(!preExist){
            console.log("Invalid");
            return res.status(401).json({message:'No such user found'})
        }
        else{
            return res.status(201).json({message:'Successful login'})
        }

    }
    catch(e){
        console.log(e);

    }

})
app.post('/addItem',async (req,res)=>{
try{
    const {id,info,category,name,price} = req.body;
    console.log("----------------------------------------------------------")
    console.log(id);
    console.log("----------------------------------------------------------")
    const user = await Userprofile.find({email:info});
    console.log(user); 
    const finding = await Userprofile.find({$and:[{email:info},{product:id}]})
    console.log(finding);
    if(finding.length!=0){
        console.log(" Pehle se hai");
        res.status(400).json({message:" Already added"});
    }
    else{
    const iinfo = await Userprofile.findOneAndUpdate({email:info},{$push:{product:id}});
    const iinfo2 = await Userprofile.findOneAndUpdate({email:info},{$push:{total:price}});
    

    res.status(201).json({message:"Item added to cart"});
    console.log(iinfo + " new id created");
    }
}
catch(e){
    console.log(e);
}
})

app.post('/fetchproduct',async (req,res)=>{
    try{
        console.log("Entered into cart");
        // console.log(req.query.name);

        const {info} = req.body;
        const data = await Userprofile.find({email:req.query.name});
        const totalprice = await Userprofile.aggregate([
            {
              $project: {
                totalSum: { $sum: "$total" }
              }
            }
          ])
          console.log(totalprice);
        res.status(201).send({data,totalprice});
    }
    catch(e){
        console.log(e);
    }
})
app.post('/deleteproduct',async(req,res)=>{
    try{
        console.log(req.query.id);
        console.log(req.query.email);
        console.log(req.query.price);

       const fresh =  await Userprofile.updateOne({email:req.query.email},{$pull:{product:req.query.id}})
       const fresh1 =  await Userprofile.updateOne({email:req.query.email},{$pull:{total:req.query.price}})
       res.status(201).send(fresh);
    }
    catch(err){
        console.log(err);
    }
})
app.listen(4000,()=>{
    console.log("Listining to port 4000");
})