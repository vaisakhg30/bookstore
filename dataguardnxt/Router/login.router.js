const express=require('express')
const server=express()
const loginController=require('../Controller/login.controller')
const router=express.Router()

router.post("/loginuser",loginController.loginuser)

module.exports=router
