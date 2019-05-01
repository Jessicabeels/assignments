const express = require('express')
const User = require('../models/user.js')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
    //check if a user by the submitted userbame already exists
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }

        //Does a user already exist?
        if(user){
            res.status(400)
            return next(new Error("That username already exists!"))
        }

        //create the user, then send the user object and JWT token to tthe front end
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            //creates token using jwt.sign() we give the user as an object 
            //for the token payload, and use out private environment SECRET
            //for the signature
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }

            //did bcrypt.compare find a matched password?
            if(!isMatch){
                res.status(401)
                return next(new Error("Username or password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({user: user.withoutPassword(), token})
        })
    })
})

module.exports = authRouter