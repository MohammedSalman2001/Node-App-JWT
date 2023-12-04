const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    nic:{type:String,require:true},
    name:{type:String,require:true},
    address:{type:String,require:true},
    salary:{type:Number,require:true}
});

module.exports=mongoose.model('Customer',customerSchema)