const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

//Middlewares
app.use(express.json()) //req.body
app.use(morgan('dev')) //helpful console.logs in server console

//Routes
app.use("/todo", require('./routes/todoRoutes.js'))

//DB Connection
mongoose.connect('mongodb://localhost:27017/first-db', {useNewUrlParser: true}, () => {
    console.log('connected to DB')
})
   

 
app.listen(7003, () => {
    console.log('[+] server is running on Port 7003')
})