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
               bounties: prevState.bounties.filter(wizard => wizard._id !== _id)
           }))
       }))
   }


    render(){
        console.log(this.state)
        return(
            <div className="app-container">

                <h1 className="header">Star Wars Bounty Hunting</h1>
            
                <div className="background"></div>


                <form onSubmit={this.handleSubmit}>
                    First Name:
                      <input
                         type="text"
                         name="firstName"
                         value={this.state.firstName}
                         onChange={this.handleChange}  />
                    Last Name: <input
                         type="text"
                         name="lastName"
                         value={this.state.lastName}
                         onChange={this.handleChange}/>
                    <input
                         type="radio"
                         name="living" 
                         value={this.state.living} 
                         onChange={this.handleChange}/> Alive
                    <input
                         type="radio"
                         name="living" 
                         value={this.state.living}
                         onChange={this.handleChange}/> Dead
                    Bounty Amount <input
                         type="text"
                         name="bountyAmount"
                         value={this.state.bountyAmount}
                         onChange={this.handleChange}/>
                    Jedi <input type="radio"
                         name="type" 
                         value={this.state.type} 
                         onChange={this.onChange}/>
                    Sith <input
                         type="radio"
                         name="type" 
                         value={this.state.type} 
                         onChange={this.onChange}/>

                    <button> Submit </button>

                </form>
                { this.state.bounties.map(bounty => 
                <div className="container">
                    <h1>
                        {bounty.firstName} {bounty.lastName}
                    </h1>
                    <div class="fade"></div>
                    <section class="star-wars">
                    <div class="crawl">
                        <div class="title">
                            <h1>is Alive? {bounty.living.toString()} </h1>
                        </div>
                        
                        <p className="specs">Bounty: {bounty.bountyAmount} TYPE: {bounty.type.toString()} </p>
                        <Bounty handleDelete={this.handleDelete}/>
                    </div>
                    </section>
                </div>)}
            </div>
        )
    
    }
}

export default App