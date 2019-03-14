const express = require('express')
//require express
const app = express()
//create server object





//need middleware before you can req.body 
app.use(express.json( ))

//Routes
app.use("/bounties", require('./routes/bounties.js'))

// //Get
// app.get('/', (req, res) => {
//     res.send(bounties)
// })

// //get one 
// app.get('/bounties', (req, res) => {
//     const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
//     res.send(foundBounty)
// })

// //Post
// app.post('/bounties', (req, res) => {
//     req.body._id = uuid()
//     bounties.push(req.body)
//     res.send(req.body)
// })

// //Delete
// app.delete('/bounties/:_id'), (req, res) => {
//     const updatedBounties = bounties.filter(bounty =>  bounty._id !== req.params._id)
//     bounties = updatedBounties
//     res.send(bounties)

// }

//Put


app.listen(7001, () => {
    console.log("server is running ")
})


//Part 1

//1. GETs a list of all bounties //DONE
    //localhost:7000

//2. POSTs new bounties //DONE
    //localhost:7000/bounties/

//3. DELETEs a bounty

//4. PUTs (updates) a bounty
