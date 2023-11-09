const express=require('express')
const mongoose=require('mongoose')
const server=express()

const signupModel=require('../Model/signup.model')
//Create Signup
exports.signupuser=((req,res)=>{
    try {
        signupModel.create(req.body).then((data)=>{
            res.send("user saved")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})
