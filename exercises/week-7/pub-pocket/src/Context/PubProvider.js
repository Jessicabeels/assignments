import React, { Component } from 'react'
import axios from 'axios'
const keys = process.env.REACT_APP_KEYS


const PubContext = React.createContext()

class PubProvider extends Component {
    constructor(){
        super()
        this.state = {
            pubs: [],
            searches:[],
            savedPubs: "list"|| []
            
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

////////////////////Save stufff

    saveStuff = (title) => {
        console.log(title)
        console.log(this.state.searches)
        const pubToSave = this.state.searches.find(pub => pub.title === title)
        // const list = [...this.state.list]
        // list.push(savedPubs)
        console.log(pubToSave)
        this.setState(prevState => ({
            // list,
            savedPubs:[...prevState.savedPubs, pubToSave]
        }) )
        localStorage.setItem( "list", this.state.savedPubs)
    }

    //loadStufff

    ///button fire save stuff and as paramenter savestuff needs id of pubs

    ////////////////Search //////////////

    getSearch = (userInput) => {
        axios.get(`https://core.ac.uk/api-v2/articles/search/${userInput}?page=1&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${keys}`).then(response => {
        //CORS?????    

            // console.log(response.data)
            
            this.setState({
                searches: response.data.data
            })
            localStorage.getItem("list")
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
                    handleChange: this.handleChange,
                    savedPubs: this.state.savedPubs,
                    saveStuff: this.saveStuff
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