import React, { Component } from 'react'
import {withPubs} from './Context/PubProvider'

class Searchbar extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }


    handleChange = e => {
        const { value} = e.target
        this.setState({userInput: value})
        console.log('changed')
    }

    //HandleSubmit 
    handleSubmit = e=> {
        console.log('clicked: ')
        e.preventDefault()
        this.props.getSearch(this.state.userInput)
        this.setState({
            userInput: e.target.value,
            userInput: ''
        })

    }


render(){
    return (
        <form onSubmit={this.handleSubmit} className="search-form">
            <input className = "search"
            type="text"
            name="userInput"
            value={this.state.userInput}
            placeholder = "Search"
            onChange  = {this.handleChange}
            />
        <button className="search-button"></button>
        </form>
    )



}

}






export default withPubs(Searchbar)