import  React, { Component } from 'react'
import './style.css'
import Nav from './Nav.js'
// import PubList from './components/PubList'
import { withPubs } from './Context/PubProvider'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Saved from './components/Saved'

//start by getting and mapping API
//then make it a react router

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            authors: '',
            date: '', 
            subjects: '', 
            language: '',
            publisher: '',
            identifiers: '',
            oai: '',
            issn: '',
            url: ''
            
        }
    }
    


componentDidMount() {
    
    this.props.getPubs()
}


    render(){
        return (
            <div>

                <Nav/>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/saved" component= { Saved }/>
                </Switch>
            </div>





            // <div className="body">
                
            //     <div className="box header">
            //         <Nav />
            //     </div>
            //     <Switch>
            //         <Route exact path="/" component={ Home }/>
            //         <Route path="/about" component={ About }/>
            //         <Route path="/saved" component= { Saved }/>
            //     </Switch>
            //     <div className="box sidebar">sidebar
            //     <div className="prof"> Profile</div>
            //     <div className="more">Things you may like</div>
            //     </div>
            //     <div className="box content">
            //         <PubList />
            //     </div>
            //     <div className="box footer">Footer</div>
            // </div>
        )
    }
}

export default withPubs(App)