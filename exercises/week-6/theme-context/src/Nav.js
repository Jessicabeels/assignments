import React from 'react'
import { Link } from'react-router-dom'
import { lightTheme } from './context/ThemeProvider.js'



const Nav = (props) => {
    console.log(props)
    return (
        <div className={`nav-${props.theme} nav`}>
           
                <Link to="/">Home</Link>
                <Link to="/about">Notifications</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/twit" className="Twit">Twit</Link>
        

        </div>
        
    )
}

export default lightTheme(Nav)