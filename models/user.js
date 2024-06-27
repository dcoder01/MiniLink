// const { default: mongoose } = require('mongoose')
const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    //new 
    role:{
        type:String,
        required: true,
        default: "Normal",
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps:true})

const User= mongoose.model('user', userSchema)

module.exports=User;