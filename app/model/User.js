const mongoose = require('mongoose')

const  Schema     = mongoose.Schema;

const  userSchema = Schema({
    name:{
        type:String,
        default:null
    },
    password:String,
    email:{
        type:String,
        unique:true 
    },
    username:{
        type:String,
        default:null
    },
})

let User = mongoose.model('Users',userSchema)

module.exports = User