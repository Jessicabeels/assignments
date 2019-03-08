import React, { Component } from 'react'
import axios from 'axios'
const keys = process.env.REACT_APP_KEYS


const PubContext = React.createContext()

class PubProvider extends Component {
    constructor(){
        super()
        this.state = {
            pubs: [],
            searches:[]
            
        }
    }

////////////////////////////////////////////Get basic feed ///////////////////////////////
    getPubs = () => {
        axios.get(`https://core.ac.uk/api-v2/journals/search/science?page=1&pageSize=30&apiKey=${keys}`).then(response => {
            // console.log(response)
            this.setState({
                pubs: response.data.data
            })
        })
        .catch(error => console.log(error))
    }
////////////////////////////////////////////Get basic feed ///////////////////////////////


    ////////////////Search //////////////

    getSearch = (userInput) => {
        axios.get(`https://core.ac.uk/api-v2/articles/search/${userInput}?page=1&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${keys}`).then(response => {
        //CORS?????    

            // console.log(response.data)
            
            this.setState({
                searches: response.data.data
            })
        })
        .catch(error => console.log(error))
    }

   
     ////////////////Search //////////////


    render(){
        return (
            <PubContext.Provider
                value={{
                    pubs: this.state.pubs,
                    searches: this.state.searches,
                    getPubs: this.getPubs,
                    getSearch: this.getSearch,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange
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