const express = require('express')
//require express

const app = express()
const uuid = require('uuid/v4')




let bounties = [


    {
        firstName: "Anikan",
        lastName: "Skywalker", 
        living: false,
        bountyAmount: 78,
        type: 'Sith',
        _id: uuid()

    }, 
    {
        firstName: 'Jar Jar',
        lastName: 'Binks',
        living: true,
        bountyAmount: 5000,
        type: 'Sith',
        id: uuid()
    },
    {
        firstName: 'That one ewok who dies',
        lastName: 'Bob',
        living: false,
        bountyAmout: 30000,
        type: 'Sith',
        id: uuid()
    }
]


//Get
app.get('/', (req, res) => {
    res.send(bounties)
})

Post
app.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

//Delete

//Put


app.listen(7000, () => {
    console.log("server is running ")
})