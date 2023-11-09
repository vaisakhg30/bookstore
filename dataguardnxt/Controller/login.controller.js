const express=require('express')
const mongoose=require('mongoose')
const server=express()
const jwt = require('jsonwebtoken');
const signupModel=require('../Model/signup.model')

exports.loginuser=((req,res)=>{
    try {
        const email=req.body.email
        const password=req.body.password
        console.log("password",password);
        signupModel.findOne({"email":email}).then((data)=>{
            console.log("data",data);
            if(data.password==password){
                const token = jwt.sign({ id: data._id, name: data.name },"secretkey")
                res.send({"message":"Login Success","access_token":token})
            }else{
                res.send("invalid username or password")
            }
        }).catch((error)=>{
            console.log("errro",error)
            res.status(400).send ("invalid username or password")
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})