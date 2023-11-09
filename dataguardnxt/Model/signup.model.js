const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/data')

const signupModel=new mongoose.Schema({

    
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

module.exports=new mongoose.model("signuptable",signupModel)