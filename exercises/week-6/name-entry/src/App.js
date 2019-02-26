import React, { Component } from 'react'
import EntryForm from './EntryForm.js'
import List from './List.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            ageInput: "",
            names: [],
            ages: []
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
                names: [...prevState.names, this.state.nameInput],
                ages: [...prevState.ages, this.state.ageInput],
                
                nameInput: "",
                ageInput: ""

            }
        })
    }

    render(){

        // const mappedName = this.state.names.map((name, key) => <h1>{name}</h1>)
        // const mappedAge = this.state.ages.map((age, key) => <h1>{age}</h1>)

        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <h2>{this.state.ageInput}</h2>
                
               <EntryForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    nameInput={this.state.nameInput}
                    // ageInput={this.state.ageInput}
                    />

                <div>
                    {/* This is where you would map out your state names Array */}
                    {/* {mappedName}
                    {mappedAge} */}
                    <List names={this.state.names}
                            ages={this.state.ages}
                            />
                </div>
            </div>
        )
    }
}

export default App