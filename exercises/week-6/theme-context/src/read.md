import React from 'react'
import { lightTheme } from './context/ThemeProvider.js'
import './style.css'
import Nav from './Nav.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import Footer from './Footer.js';
import { withThings } from ThingProvider
import ThingProvider from './context/ThingProvider.js';
class App extends Component {
    // set state in the constructor
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        }
    }

    //componentDidMount
    componentDidMount(){
        //call getTodes from context on page load
        this.props.getTodos()
    }

    handleChange= (e) => {
        const { name, value } = e.target
        //destructuring the ...
        this.setState({ [name]: value})
    }
    

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
            description: '',
            imgUrl: ''
        })
    }

    render(){
        return (
            <div className={`home-${props.theme}`}>
    
                <Nav />
                <div className="main">
                
                <h1>Tweeter</h1>
                <h4 className="username"> Username @handle</h4>
                <span className="username-chicken"></span>
                    <p> Feed of Mildly irritating things, and mildly satisfying </p>
                         yooooooooooooooo
                        
    
                </div>
    
    
                <div>
                    <button onClick={props.toggleTheme}>Theme Mode {props.theme === "light" ? "dark" : "light"} !</button>
                </div>
                <Footer />
            </div>

        )

    }




}


export default lightTheme(App)


//need a form with IMG, title, description
//need to handleChange and handleSubmit
