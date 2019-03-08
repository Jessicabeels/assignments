import  React, { Component } from 'react'
import Nav from './Nav.js'
// import PubList from './components/PubList'
import { withPubs } from './Context/PubProvider'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Saved from './components/Saved'
// import Profile from './components/Profile'
import { PageFade } from './transitions'
import './style.css'

//start by getting and mapping API
//then make it a react router

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            authors: '',
            downloadUrl: '',
            subjects: '', 
            language: '',
            publisher: '',
            identifiers: '',
            issn: '',
            url: '', 
            navToggle: false
            
        }
    }
    







componentDidMount() {
    this.props.getPubs()
    // this.props.getSearch()
}


////////////////////////transition hamburger//////////////////////////////////////
toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle}))
////////////////////////transition hamburger//////////////////////////////////////



    render(){
        const { navToggle } = this.state ////
        const { location } = this.props ///
        return (
            <div>

                <Nav navToggle={navToggle} toggler={this.toggler} /> 
                <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
                <button className={`rotate rotate=${navToggle ? "open" : "closed"}`} onClick={this.toggler}> |||</button>

                <PageFade location={location}>
                    <Switch location={location}>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/about" component={ About }/>
                        <Route path="/saved" component= { Saved }/>
                        {/* <Route path="/profile" component= { Profile }/> */}
                    </Switch>
                </PageFade>
               
            </div>

        )
    }
}

export default withRouter(withPubs(App))







