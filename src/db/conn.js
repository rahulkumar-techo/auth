const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    console.log("connection Successfulli fullfield ")
})
.catch((err) =>{
    console.log("no connections "+err)
})

