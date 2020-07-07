const mongoose = require('mongoose')

const  Schema     = mongoose.Schema;

const  userSchema = Schema({
    name:{
        type:String,
        default:null
    },
    password:String,
    email:String,
    username:{
        type:String,
        default:null
    },
})

let User = mongoose.model('Users',userSchema)

exports.default = User
