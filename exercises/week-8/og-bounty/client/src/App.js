import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state ={ 
            bounties: []
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


    render(){
        return(
            <div className="app-container">

                <h1>Star Wars Bounty Hunting time</h1>
                { this.state.bounties.map(bounty => 
                <div>
                    <h1>
                        {bounty.firstName} {bounty.lastName}
                    </h1>
                    <h3>
                    is Alive? {bounty.living.toString()} Bounty Amount: {bounty.bountyAmount} type: {bounty.type}
                    </h3>
                    
                
                 </div>)}
            </div>
        )
    
    }
}

export default App