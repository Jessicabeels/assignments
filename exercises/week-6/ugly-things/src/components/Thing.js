import React, { Component } from 'react'
import AddThingForm from './AddThingForm.js'

// Todo is given it's own state so that EACH todo can operate SEPARATELY
// If the toggle was maintained in App, then toggling one would toggle All.
// This is also the reason behind giving each todo its own handleChange and
// handleSubmit so that it only affects that specific <Todo />.
class Thing extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    // toggler = () => {
    //     this.setState(prevState => ({
    //         isToggled: !prevState.isToggled
    //         if 
    //     }))
    // }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }


    render(){
        const { title, description, imgUrl, handleDelete, _id } = this.props

        // We use a terniary and a toggle below to show either the listed Todo information
        // Or the form used to submit the edits.
        return (
            <div>
                { !this.state.isToggled 
                    ?   <div className="thing-div" style={{ backgroundImage: `url(${imgUrl})`}}>
                            <h1>{title}</h1>
                            <h3>{description}</h3>
                            <button onClick={() => handleDelete(_id)}>Delete</button>
                            <button onClick={this.toggler}>Update Edit</button>
                        </div>
                    :   <div className="edit-thing-div">
                            <AddThingForm 
                                {...this.state}
                                btnText="Edit"
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                            />
                            <button onClick={this.toggler}>Close</button>
                        </div>
                }
            </div>
        )
    }
}


export default Thing