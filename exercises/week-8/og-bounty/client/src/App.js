import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import Bounty from './components/Bounty'


class App extends Component {
    constructor(){
        super()
        this.state ={ 
            bounties: [],
            firstName: '',
            lastName: '',
            living: '',
            bountyAmount: '',
            type: ''
        }
    }

    componentDidMount(){
        axios.get("/bounties").then(res => {
            // console.log(res)
            this.setState({
                bounties: res.data
            })
        })
        .catch(err => console.log(err))
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type

        }

        axios.post("/bounties", newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, res.data],
                firstName: '',
                lastName: '',
                living: '',
                bountyAmount: '',
                type: ''
            }))
        })
    }

   handleDelete = (_id) => {
       axios.delete(`/bounties/${_id}`.then(response => {
           this.setState(prevState => ({
               bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
           }))
       }))
   }


    render(){
        console.log(this.state)
        return(
            <div className="app-container">

                <h1 className="header">Star Wars Bounty Hunting</h1>
            
                <div className="background"></div>
                <BountyForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                


                { this.state.bounties.map(bounty => <Bounty handleDelete={this.handleDelete} key={bounty._id} {...bounties} />)}
            </div>
        )
    
    }
}

export default App