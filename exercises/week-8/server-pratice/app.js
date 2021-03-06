const express = require('express')
const app = express()
const uuid = require('uuid/v4')

//Fake database
const people = [
    {
        name: "Rick", 
        age: 70,
        _id: uuid()
    },
    {
        name: "Morty",
        age: 12,
        _id: uuid()
    }, 
    {
        name: "Birdman",
        age: "old",
        _id: uuid()
    }
]

//middleware
app.use(express.json())



app.get("/people/:_id", (req, res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)
    res.send(foundPerson)
})

app.post('/people', (req, res) => {
    //add id to request body
    //add it to fake database
    res.send(people)
})


app.listen(5800, () => {
    console.log("Server is running on post 5800")
})