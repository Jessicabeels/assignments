import React, { Component } from 'react'
import ThingList from './components/ThingList.js'
import AddThingForm from './components/AddThingForm.js'
import { withThings } from './context/ThingProvider.js'
import Nav from './Nav.js'


class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        }
        this.url= "https://api.vschool.io/jessica/todo"
    }


    //new, this is the context stuff, to call context from provider 
    componentDidMount(){
       this.props.getThings()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addThing(this.state)
        this.setState({
            title: '',
            description: '',
            imgUrl: ''
        })
    }

    render(){
        return (
            <div className="app-container">
                <Nav />
                <h1 className="header">Mildly infuriating Things list</h1>
                <div className="user">
                    <div className="profile">
                    </div>
                    <h5> @mildyirritating</h5>
                </div>
                <AddThingForm className="form"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    title={this.state.title}
                    description={this.state.description}
                    imgUrl={this.state.imgUrl}
                    btnText="Twit"/>
                <ThingList className="transbox"
                    things={this.props.things}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}/>
            </div>
        )
    }
}

export default withThings(App)





