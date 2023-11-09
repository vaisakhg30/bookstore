const express=require('express')
const server=express()
const router=express.Router()

const signupcontroller=require('../Controller/signup.controller')

router.post("/create",signupcontroller.signupuser)

module.exports=router