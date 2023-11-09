const express=require('express')
const mongoose=require('mongoose')
const server=express();
const signupRouter=require('./Router/signup.router')
const loginRouter=require('./Router/login.router')
const bookRouter=require('./Router/bookstore.router')

server.use(express.json())

server.listen(8000,()=>{
    console.log('server running...');
}) 

server.use('/signup',signupRouter)
server.use('/login',loginRouter)
server.use('/bookstore',bookRouter)



