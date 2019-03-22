const express = require('express') 
const bountyRouter = express.Router()
const uuid = require('uuid/v4')
 
let bounties = [
    {
        firstName: "Anikan",
        lastName: "Skywalker", 
        living: false,
        bountyAmount: 78,
        sith: true,
        _id: uuid()

    }, 
    {
        firstName: 'Jar Jar',
        lastName: 'Binks',
        living: true,
        bountyAmount: 5000,
        sith: true,
        _id: uuid()
    },
    {
        firstName: 'That one ewok who dies',
        lastName: 'Bob',
        living: false,
        bountyAmount: 30000,
        sith: true,
        _id: uuid()
    }
]


bountyRouter.get("/search", (req,res) => {
    console.log(req.query)
})
//doesn't work


//Get //DONE
    //localhost:7000/bounties
bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })



//localHost:7000/bounties/bounties , so we change to '/' bc /bounties was already decalred in the /routes, so its localhost:7000/bounties


//get one ///????
bountyRouter.get('/', (req, res) => {
    const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
    res.send(foundBounty)
})

//Post //DONE
//localhost:7000/bounties/bounties
bountyRouter.post('/', (req, res) => {
    req.body._id = uuid()
    bounties.push(req.body)
    res.send(req.body)
})


bountyRouter.route("/:_id")

//GET one localhost:7000/bounties/id
    //DONE
    .get((req, res) => {
        const foundBounty = bounties.find( bounty => bounty._id)
        res.send(foundBounty)
    })
//PUT localhost:7000/bounties/id
    //DONE
    .put((req, res) => {
        const foundBounty = bounties.find(bounty => bounty._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })
    //DELETE localhost:7000/bounties/id
    //DONE
    .delete((req, res) => {
        const updatedDB = bounties.filter(user => user._id !== req.params._id)
        bounties = updatedDB
        res.send("User successfully deleted")

    })


module.exports = bountyRouter

