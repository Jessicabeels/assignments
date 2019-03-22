import React, { Component } from 'react'
import AddBountyForm from './components/AddBountyForm'
// import BountyForm from './components/BountyForm'
import BountyList from './components/BountyList'
import { withBounties } from './context/BountyProvider'


class App extends Component {
    constructor(){
        super()
        this.state ={ 
            bounties: [],
            firstName: '',
            lastName: '',
            living: true,
            bountyAmount: '',
            jedi: false,
            sith: false
        }
    }

    componentDidMount(){
        this.props.getBounties()
    }


    handleChange = e => {
            const value = e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value
                    console.log(e.target.name)
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.jedi)
        console.log(this.state.sith)
        // let type = ""
        // if (this.state.jedi === true){
        //     type = "Jedi"
        // } 

        // if (this.state.sith === true) {
        //     type = "Sith"
        // }
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bountyAmount: this.state.bountyAmount,
            jedi: this.state.jedi,
            sith: this.state.sith

        }
        this.props.postBounties(newBounty)
        this.setState({firstName: "", lastName: "", bountyAmount: "", living: false, type: ""})
    }

    render(){
        
        return(
            <div className="app-container">
                <h1 className="header">Boba Fett's Bounty Hunting </h1>
                <div className="background"></div>
                <AddBountyForm
                    btnText="Add Bounty"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <BountyList
                    bounties={this.props.bounties}
                    deleteBounties={this.props.deleteBounties}
                    updateBounties={this.props.updateBounties}
                />
                
            </div>
        )
    
    }
}

export default withBounties(App)