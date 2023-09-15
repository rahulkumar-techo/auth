require("dotenv").config();
const express = require('express');
const path = require('path')
const app = express();
const hbs = require('hbs');
const bcrptjs = require('bcryptjs');
require('./db/conn')
const Register = require('./models/register');
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../template/views")
const partials_path = path.join(__dirname,"../template/partials")
// app.use(express.static(static_path))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine" , "hbs");
app.set('views',template_path);
hbs.registerPartials(partials_path);


// ---------ROUTERS---------->
app.get("/" ,(req,res) =>{
   res.render('index')
})
app.get("/login" ,(req,res) =>{
   res.render('login')
})

app.get("/register" ,(req,res) =>{
   res.render('register')
})



app.post("/register" ,async (req,res) =>{

 try {
const password = req.body.password;
const cpassword = req.body.cpassword;

if(password === cpassword){
  
    const storeDataInDataBase  = new Register({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        password:req.body.password,
        cpassword:req.body.cpassword,
        gender:req.body.gender,
    });

    const token = await storeDataInDataBase.generateToken();
    
    const saveDataBaseData = await storeDataInDataBase.save();
    res.status(201).render("index");

}else{
    // res.send({message:'error password not matched '})
    res.send('password error')
}
    
 } catch (error) {
    res.status(400).send(error)
    
 }
})
// login checky
app.post("/login" , async (req,res) =>{

   try {
    const email = req.body.email;
    const password = req.body.password;

    const userMail =  await Register.findOne({email:email});
    const isMatched =  bcrptjs.compare(password,userMail.password);

    const token = await userMail.generateToken();
    

   if(isMatched){

    res.status(201).render("index");
   }
   else{
    res.send("password is Not matched !. ")
   }

   } catch (error) {
    res.status(400).send("Invalid Email") 
   }

 })

app.listen(port,()=>{
    console.log("Server is running ... " +port)
})

