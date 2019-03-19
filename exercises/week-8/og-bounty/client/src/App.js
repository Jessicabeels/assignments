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
        this.props.getBounties()
    }


    handleChange = e => {
            const value = e.target.value === "checkbox"
                    ? e.target.checked
                    : e.target.value
        this.setState({
            [e.target.name]: value
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
        this.props.addBounty(newBounty)
        this.setState({firstName: "", lastName: "", bountyAmount: "", living: false, type: ""})

//         axios.post("/bounties", newBounty).then(res => {
//             this.setState(prevState => ({
//                 bounties: [...prevState.bounties, res.data],
//                 firstName: '',
//                 lastName: '',
//                 living: '',
//                 bountyAmount: '',
//                 type: ''
//             }))
//         })
//     }

//    handleDelete = (_id) => {
//        axios.delete(`/bounties/${_id}`.then(response => {
//            this.setState(prevState => ({
//                bounties: prevState.bounties.filter(wizard => wizard._id !== _id)
//            }))
//        }))
//    }


    render(){
        
        return(
            <div className="app-container">
                <BountyForm></BountyForm>
                
            </div>
        )
    
    }
}

export default App