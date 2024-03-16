const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const userSchema = new Schema({

    firstName:{
        type : String,
    },
    secondName:{
        type : String,
    },
    lastName:{
        type : String,
    },
    email:{
        type : String,
    },
    birthDate:{
        type : String,
    },
    phone:{
        type : String,
    },
    Location:{
        type : String,
    },
    image:{
        type : String,
    },
    jobTitle:{
        type : String,
    },
    specialization:{
        type : String,
    },
    password:{
        type : String,
    },
    confirmPassword:{
        type : String,
    },
});



module.exports=userSchema;

