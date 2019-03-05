import  React, { Component } from 'react'
import './style.css'
import Nav from './Nav.js'

//start by getting and mapping API
//then make it a react router

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            authors: '',
            date: ''
        }
    }
    





    render(){
       

        return (
            <div className="body">
                
                <div className="box header">
                    <Nav />
                </div>
                <div className="box sidebar">Sidebar</div>
                <div className="box content">Content</div>
                <div className="box footer">Footer</div>
            </div>
        )
    }
}

export default App