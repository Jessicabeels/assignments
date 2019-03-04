import React, { Component } from 'react'
import axios from 'axios'

const ThingContext = React.createContext()

class ThingProvider extends Component {
    constructor(){
        super()
        this.state = {
            things: []
        }
        this.url = "https://api.vschool.io/jessica/todo"
        //this.url isnt working for me
    }

    getThings = () => {
        axios.get("https://api.vschool.io/jessica/todo").then(response => {
        //resolve
            this.setState({
                things: response.data
            })
       }) //reject
       .catch(error => console.log(error))
    }

    addThing = (inputs) => {
        const { title, description, price, imgUrl } = inputs
        // POST request
            // Create OBJ
        const newTodo = { title, description, price, imgUrl }

        axios.post("https://api.vschool.io/jessica/todo", newTodo).then(response => {
            // update state 
            this.setState(prevState => {
                return {
                    things: [response.data, ...prevState.things]
                }
            })
            // things: maintain old things, and add in new todo from DB
            // input Values: Reset back to empty strings
        }).catch(error => console.log(error))
    }

    handleDelete = (_id) => {
        // DELETE
        // axios.delete a specific Thing via it's ID
        axios.delete(`${"https://api.vschool.io/jessica/todo"}/${_id}`).then(response => {
            this.setState(prevState => {
                return {
                    // Take the previous array of things, and only return
                    // things that don't have the _id of the deleted one
                    things: prevState.things.filter(thing => thing._id !== _id)
                }
            })    
        }).catch(error => console.log(error))
    }

    handleEdit = (_id, updates) => {
        axios.put(`${"https://api.vschool.io/jessica/todo"}/${_id}`, updates)
            .then(response => {
                // Get the updated Todo
                const updatedThing = response.data
                this.setState(prevState => {
                    return {
                        // Loop through previous things and replace the outdated one with the updated one
                        things: prevState.things.map(thing => thing._id === _id ? updatedThing : thing)
                    }
                })
            })
            .catch(error => console.log(error))
    }

    render(){
        return (
            <ThingContext.Provider 
                value={{
                    things: this.state.things,
                    getThings: this.getThings,
                    addThing: this.addThing,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}>
                { this.props.children }
            </ThingContext.Provider>
        )
    }
}

// HOC used to let components like <App /> Consume the `value` object from the Provider
export const withThings = C => props => (
    <ThingContext.Consumer>
        { value => <C {...props} {...value}/> }
    </ThingContext.Consumer>
)

export default ThingProvider