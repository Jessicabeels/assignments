const express = require("express")
const app = express()
const uuid = require('uuid/v4')


let todos = [
    {
        name: "swing in the park",
        description: "wheeeeee",
        completed: false, 
        _id: uuid()
    },
    {
        name: "studying javascript",
        description: "wooooo",
        completed: true,
        _id: uuid()
    },
    {
        name: "clean house",
        description: "wahhhhh",
        completed: false,
        _id: uuid()
    }
]

//POST
///???????
app.post('/todos', (req, res)=> {
    req.body._id = uuid()
    todos.push(req.body)
    res.send(req.body)
})

//Get
//collection
app.get('/todos', (req, res) => {
    res.send(todos)  
});


//resource 
app.get('/todos/:_id', (req, res) => {
    const ID = req.params._id
    const foundTodos = todos.find(todo => todo._id === ID)
    res.send(foundTodos)
})




//PUT
app.put('/todos/:_id', (req, res) => {
    const foundTodos = todos.find(todo => todo._id ===req.params._id )
    Object.assign(foundTodos, req.body)
    res.send(foundTodos)

})


//DELETE

app.delete('/todos/:_id', (req, res) => {
    const updatedTodos = todos.filter(todo => todo._id !==req.params._id )
    todos = updatedTodos
    res.send(todos)

})






app.listen(5800, () => {
    console.log("App listening on port 5800!")
})