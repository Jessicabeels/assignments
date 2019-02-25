import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            ageInput: ""
        }
    }

    handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // e.target.name: The literal name we gave the input that MUST match the input name in state
        // e.target.value: The literal value the user just typed into the input box. 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        // You will need to use prevState here when you add your 'names' array so that you can 
        // maintain previous entries to the array while adding the new one.
        this.setState(prevState => {
            return {
                nameInput: "",
                ageInput: ""
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange} placeholder="Name"/>
                    <input type="text" name="ageInput" value={this.state.ageInput} onChange={this.handleChange} placeholder="Age"/>
                    <button>Submit</button>
                </form>

                <div>
                    {/* This is where you would map out your state names Array */}
                </div>
            </div>
        )
    }
}

export default App