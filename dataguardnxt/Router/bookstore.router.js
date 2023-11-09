const express=require('express')
const server=express()
const bookController=require('../Controller/bookstore.controller')
const router=express.Router()

router.post("/create",bookController.bookuser)
router.get("/find",bookController.getAllBooks)
router.put("/update/:_id",bookController.updateBook)
router.delete("/delete/:_id",bookController.delete)
router.post("/findone/:_id",bookController.findone)
router.get('/search/category/:category',bookController.searchByCategory);
router.get('/search/title/:title', bookController.searchByTitle);
router.get('/search/author/:author', bookController.searchByAuthor);
router.get('/search/year/:year', bookController.searchByYear);


module.exports=router

