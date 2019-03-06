import React, { Component } from 'react'
import axios from 'axios'
const keys = process.env.REACT_APP_KEYS


const PubContext = React.createContext()

class PubProvider extends Component {
    constructor(){
        super()
        this.state = {
            pubs: []
        }
    }


    getPubs = () => {
        axios.get(`https://core.ac.uk/api-v2/journals/search/science?page=1&pageSize=80&apiKey=${keys}`).then(response => {
            console.log(response)
            this.setState({
                pubs: response.data.data
            })
        })
        .catch(error => console.log(error))
    }

    addPub = (inputs) => {
        const { title, identifiers, subjects, language, publisher } = inputs
        //create Obj
        const newPub= { title, identifiers, subjects, language, publisher} 

        axios.post(`https://core.ac.uk/api-v2/journals/search/science?page=1&pageSize=80&apiKey=${keys}`, newPub).then(response => {
            //update the state
            this.setState(prevState => {
                return {
                    things: [response.data, ...prevState.pubs]
                }
            })
        }).catch(error => console.log(error))
    }

    render(){
        return (
            <PubContext.Provider
                value={{
                    pubs: this.state.pubs,
                    getPubs: this.getPubs,
                    addPub: this.addPub
                }}>
                { this.props.children }
                </PubContext.Provider>
        )
    }
}

export const withPubs = C => props => (
    <PubContext.Consumer>
        { value => <C {...props} {...value}/>}
    </PubContext.Consumer>
)

export default PubProvider