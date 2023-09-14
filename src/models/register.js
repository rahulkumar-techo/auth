const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const schemaRegister = new mongoose.Schema({
  fname: { type: String,  },
  lname: { type: String,  },
  email: { type: String, unique: true },
  phone: { type: Number,unique: true },
  age: { type: Number },
  password: { type: String },
  cpassword: { type: String },
  gender: { type: String,  },
});

schemaRegister.pre("save", async function(next){
if(this.isModified('password')){
  console.log(`${this.password}`);
   this.password =await bcrypt.hash(this.password,10);
   this.cpassword =undefined;
   console.log(`${this.password}`);
}
  next();

})


const Register = mongoose.model('Register',schemaRegister);


module.exports = Register;
