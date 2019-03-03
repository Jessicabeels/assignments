import React, { Component } from 'react'
import axios from 'axios'

const ThingContext = React.createContext()

class ThingProvider extends Component {
    constructor(){
        super()
        this.state = {
            things: []
        }
        this.url = "https://api.vschool.io/pauline/todo"
    }

    getThings = () => {
        axios.get(this.url).then(response => {
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
        const newThing = { title, description, price, imgUrl }

        axios.post(this.url, newThing).then(response => {
            // update state 
            this.setState(prevState => {
                return {
                    things: [response.data, ...prevState.things]
                }
            })
            // things: maintain old things, and add in new thing from DB
            // input Values: Reset back to empty strings
        }).catch(error => console.log(error))
    }

    handleDelete = (_id) => {
        // DELETE
        // axios.delete a specific Thing via it's ID
        axios.delete(`${this.url}/${_id}`).then(response => {
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
        axios.put(`${this.url}/${_id}`, updates)
            .then(response => {
                // Get the updated Thing
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
                    getthings: this.getthings,
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
export const withthings = C => props => (
    <ThingContext.Consumer>
        { value => <C {...props} {...value}/> }
    </ThingContext.Consumer>
)

export default ThingProvider