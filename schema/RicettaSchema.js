const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const ricettaSchema = new Schema({

    patientName:{
        type : String,
    },
    patientAge:{
        type : String,
    },
    patientSex:{
        type : String,
    },
    drug:{
        type : String,
    },
    usageTime:{
        type : String,
    },
    usage:{
        type : String,
    },
    usePeriod:{
        type : String,
    },
    note:{
        type : String,
    },
    date:{
        type : String,
    },
    doctor:{
        type : String,
    },
});


module.exports=ricettaSchema;

