const express = require('express')
const User = require('../models/user.js')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')


authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
    })
})