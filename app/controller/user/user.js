const User = require('../../model/User')
const {hash} = require('bcryptjs')

let listUser =  (req,res)=>{
    return {msg:"success"};
}

let createUser = async function(req,res){
    let reqInpt  = req.body 
    let password = await hash(reqInpt.password,10)
    let user = {
        email : reqInpt.email,
        password : password
    }

    user = new User(user)

    user.save(function(err){
       if(err)
         throw new Error(err)
    })

    return user;
}

module.exports = {listUser,createUser} 

