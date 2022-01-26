const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema =  new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    desc:{
        type:String,       
        required:true,
        
    },
    
    crateAt:{
        type:Date,       
        default:Date.now    
    },
       
})

 
const User = mongoose.model('User', UserSchema)

module.exports = User