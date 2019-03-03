import React, { Component } from 'react'
import AddThingForm from './AddThingForm.js'


//we're going to give each todo its own state so that each todo can operate separately via the toggler,
// so when we're toggling, when we toggle 1 we aren't toggling them all.
//thats also why we're giving each to do its own handle change and handle submit so it only effexts
//the specifc thing

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
    return (
        <div>
            { ! this.state.isToggled
                ? <div className="container" style={{ backgroundImage: `url(${imgUrl})`}}>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                    <button onClick={this.toggler}>Edit</button>
                </div>
            : <div className = "edit-contain">
                <AddThingForm
                    {...this.state}
                    btnText="Edit"
                    handleChange = {this.handleChange}
                    handleSubmit ={this.handleSubmit}
                />
                <button onClick={this.toggler}></button>
            </div>
                }
        </div>
    )
}
   
}

export default Thing