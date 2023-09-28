const express= require('express');
const router= express.Router();
const path= require('path');
const database= require('../database/db');
const User= require('../model/user');





router.post('/login',(req, res, next) => {
    const name= req.body.name;
    console.log(name);
    const email= req.body.email;
    const phone= req.body.phone;
    const id= Math.random();
    const user_obj=new User( id,name,email,phone);
    user_obj.save().then((res)=>{
        res.json
    }).catch((err)=>{
        console.log(err);
    });
})


router.get('/',(req, res, next) => {
    User.fetchAll()
    .then((users) =>{
        console.log(users)
        res.json({users})
    })
    .catch((err) =>{
        console.log(err);
    })
    
});


router.delete('/delete/:id' , (req,res)=>{
    User.deleteById(req.params.id).then(()=>{
        return res.status(200).json({success : true})
    }).catch(e => {
        console.log(e)
        return res.status(403).json({success : false})
    })
})

module.exports= router;
