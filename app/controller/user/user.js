const User = require('../../model/User')
const {hash} = require('bcryptjs')

let listUser = async function (req){
    try{
        let users = await User.aggregate([
            {$skip:parseInt(req.page)>=1?req.page(req.page-1)*10:0},
            {$limit:10}
        ])

        return users;
    }catch(err){
        throw new Error(err)
    }            
}

let getUser  = async function(req){
    try{
        let user = await User.findOne({_id:req.params.id}).exec()

        return user;
    }catch(err){
        throw new Error(err)
    }
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

module.exports = {listUser,getUser,createUser} 

