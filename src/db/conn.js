const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rahulkumar001:rahulkumar00@cluster0.rxkouvi.mongodb.net/form?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    console.log("connection Successfulli fullfield ")
})
.catch((err) =>{
    console.log("no connections "+err)
})

