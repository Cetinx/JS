const User = require('../models/User')


exports.userCrate = async(req,res) => {

    try {
        const user = await User.create(req.body)
        res.redirect('users')
        
    } catch (error) {
        
        console.log(error);
    }

}


exports.usersFind = async(req,res) => {

    try {
        const users = await User.find()      
        res.render('users' , {
       
            users
       
        })
        
    } catch (error) {
        
        console.log(error);
    }

}


exports.usersEditGet = async(req,res) => {

    try {
        const user = await User.findOne({_id:req.params.id})      
        res.render('edit' , {
            user
        })
        
    } catch (error) {
        
        console.log(error);
    }

}


exports.usersEditPut = async(req,res) => {
     
       
    try {
        const user = await User.findOne({_id:req.params.id})
        user.name = req.body.name
        user.desc = req.body.desc
        user.save()
        res.redirect('/users')
        
    } catch (error) {
        
    }

}


exports.usersDelete = async(req,res) => {
     
       
    try {
        const user = await User.findByIdAndRemove({_id:req.params.id})
        
        res.redirect('/users')
        
    } catch (error) {
        
    }

}