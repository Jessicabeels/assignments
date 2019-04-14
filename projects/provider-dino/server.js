const express =require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const POSRT = process.env.PORT || 7200


//middleswares for every request
app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongo://localhost:27017/provider-dino', {"usedNewUrlParser": true}, () => {
    console.log(" [o] [o] connected to the DB")
})

//security checkpoint
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/scores", require('./routes/scoreRoutes.js'))

//Global Server Error Handler
app.use((err, req, res, next) => {
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server setup
app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})