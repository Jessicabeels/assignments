import React from 'react'
import { lightTheme } from './context/ThemeProvider.js'
import './style.css'
import Nav from './Nav.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import Footer from './Footer.js';



const App = props => {
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

export default lightTheme(App)


//need a form with IMG, title, description
//need to handleChange and handleSubmit
