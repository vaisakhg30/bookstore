const express=require('express')
const mongoose=require('mongoose')
const server=express()
const bookstoreModel=require('../Model/bookstore.model')

//Create Book
exports.bookuser = (req, res) => {
    try {
        console.log(req.body)
        if (req.body.userRole !== 'admin') {
            return res.status(403).send("Unauthorized access. Only admins can add data.");
        }
        bookstoreModel.create(req.body).then((data) => {
            res.send("Data saved");
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//Display all data
exports.getAllBooks = (req, res) => {
    try {
        bookstoreModel.find().then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//Update Data
exports.updateBook=((req,res)=>{
    try {
        if (req.body.userRole !== 'admin') {
            return res.status(403).send("Unauthorized access. Only admins can add data.");
        }
            bookstoreModel.updateOne({"_id":req.params._id},{$set:req.body}).then((data)=>{
                res.send("Updated")
            })
          
    } catch (error) {
        res.status(400).send(error)
        
    }
})

//Delete Data
exports.delete=((req,res)=>{
    try {
        if (req.body.userRole !== 'admin') {
            return res.status(403).send("Unauthorized access. Only admins can add data.");
        }
        bookstoreModel.deleteOne({"_id":req.params._id}).then((data)=>{
            res.send("Deleted")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

//Find Single Data
exports.findone=((req,res)=>{
    try {
          bookstoreModel.findOne({"_id":req.params._id}).then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.status(400).send(error)
    }
}) 

//Search Category
exports.searchByCategory = (req, res) => {
    const category = req.params.category;
    try {
        bookstoreModel.find({ category: category }).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//Search Title
exports.searchByTitle = (req, res) => {
    const title = req.params.title;
    try {
        bookstoreModel.find({ title:title}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//Search Author
exports.searchByAuthor = (req, res) => {
    const author = req.params.author;
    try {
        bookstoreModel.find({ author:author}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//Search Publish Year
exports.searchByYear = (req, res) => {
    const year = req.params.year;
    try {
        bookstoreModel.find({ publishedYear: year }).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};
