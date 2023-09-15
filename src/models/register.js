const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const schemaRegister = new mongoose.Schema({
  fname: { type: String,  },
  lname: { type: String,  },
  email: { type: String, unique: true },
  phone: { type: Number,unique: true },
  age: { type: Number },
  password: { type: String },
  cpassword: { type: String },
  gender: { type: String,  },
  token:[{token:{type:String,required:true}}]}
  )
// Instance methods as it is
schemaRegister.methods.generateToken = async function(){
try {
  const token = await jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
  // console.log("token",token)
  this.token = this.token.concat({token:token});

  await this.save();
  return token;

} catch (error) {
  
  res.send("the error at token "+error)
}

}

// converting Password into HasedPassord :
schemaRegister.pre("save", async function(next){
if(this.isModified('password')){

   this.password =await bcrypt.hash(this.password,10);
   this.cpassword =undefined;

}
  next();

})


const Register = mongoose.model('Register',schemaRegister);


module.exports = Register;
