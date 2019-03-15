const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')



//Get ALL
todoRouter.get("/", (req, res) => {
    console.log(req)
    // res.send(fakeDB)
    Todo.find((err, todos) => {
        if(err){
            //handleError
            res.status(500)
            return res.send(err)

        }
        //Send back response
        return res.status(200).send(todos)
    })
} )

//GET ONE 
todoRouter.get("/:_id", (req, res) => {
    //this object is our filtering criteria for what we are asking for\\
    Todo.findOne({_id: req.params._id}, (err, foundTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})
module.exports = todoRouter



//POST aadd one
todoRouter.post("/", (req, res) => {
    //creat new todo object using our schema (blueprint)
    const newTodo = new Todo(req.body)
    //send that object to the DB to be saved
    newTodo.save((err, newTodoObj) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

//DELEtE

todoRouter.delete("/:_id", (req, res) => {
    Todo.findOneAndRemove({_id: req.params._id}, (err, deletedTodo => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully deleted Item with ID ${deletedTodo.title}`)
    }))
})

//PUT - update one

todoRouter.put("/:_id", (req, res) => {
    Todo.findOneAndUpdate(
        {_id: req.params._id},//Find the todo with this _id
        req.body,           //Update it with this object
        {new: true},
        (err, updatedTodo) => {
            if (err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedTodo)
        })
})
