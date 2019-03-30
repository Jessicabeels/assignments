const express = require("express")
const postRouter= express.Router()
const Post = require('../models/post.js')


//Add new post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, newPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPost)
    })
})

//get all posts belonging to specific user
postRouter.get("/", (req, res, next) => {
    Post.find({user: req.user._id})
})