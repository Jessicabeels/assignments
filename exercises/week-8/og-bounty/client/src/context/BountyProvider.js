import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

class BountyProvider extends Component {
        constructor(){
        super()
        this.state = {
            bounties: []
           
        }
    }

//GET
    getBounties = () => {
        axios.get("/bounties").then(response => {
            this.setState({
                bounties: response.data
            })
        })
    }

//getting bounties with axios, need to go to /bounties from server 
//and get the response. rom the response you will set the state of bounties to 
//the response.data

//POST
    postBounties = newBounty => {
        axios.post("/bounties", newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }



//with post, creating a newBounty that will be posted, go through /bounties route, 

    deleteBounties = _id => {
        axios.delete(`/bounties/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }

    updateBounties = (_id, updates) => {
        axios.put(`/bounties/${_id}`, updates).then(response => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id ? response.data : bounty)
            }))
        })
    }

    render(){
        return (
            <BountyContext.Provider
            value = {{
                bounties: this.state.bounties, 
                getBounties: this.getBounties,
                postBounties: this.postBounties,
                updateBounties: this.updateBounties,
                deleteBounties: this.deleteBounties
            }}>

                { this.props.children }
            </BountyContext.Provider>
               
              
                
        )
    }

}
export default BountyProvider

export const withBounties = C => props => (
    <BountyContext.Consumer>
         { value => <C {...props} {...value}/> }
    </BountyContext.Consumer>
)


