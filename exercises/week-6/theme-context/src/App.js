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
                <p> a Page that can be edited, props theme is going
                     to toggle from light to dark </p>
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