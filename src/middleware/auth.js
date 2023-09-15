const jwt = require("jsonwebtoken");
const Register = require("../models/register");

const auth = async (req, res, next) => {
  try {
    // getting cookies value (jwt token)
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyUser);
    
    //with the help of verifyUser id we can easily acess documents data.
    const user = await Register.findOne({ _id:verifyUser._id});
  
    req.token =token;
    req.user=user;

    next();
  } catch (error) {
    res.status(401).send({message:error});
  }
};

module.exports = auth;
