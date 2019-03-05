import React, { Component } from 'react'
import ThingList from './components/ThingList.js'
import AddThingForm from './components/AddThingForm.js'
import { withThings } from './context/ThingProvider.js'
import Nav from './Nav.js'
import './style.css'


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
                
                
                
                    <header class="header">
                        
                    </header>
                    
                    <aside class="sidebar">
                        <div className="user">
                            <h3 className="pic">Mildly Irritating <h6>@mildyirritating</h6></h3>
                        </div>
                    </aside>
                    <article class="content">
                    {/* <button onClick className="swap">Satisfy Me </button>  */}
                    <h1>A Tweeter exclusively for Mildly Irritating (& Mildly Satisfying) things</h1>
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
                    </article>
                    <footer class="footer"></footer>
            </div>
        )
    }
}

export default withThings(App)





