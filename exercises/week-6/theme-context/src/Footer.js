import React from 'react'
import { Link } from 'react-router-dom'
import { lightTheme } from './context/ThemeProvider.js'


const Footer = (props) => {
    console.log(props)
    return (
        <div className={`footer-${props.theme} footer`}>
        
            <Link to="/trends">Trends</Link>
            <Link to="/help">Help</Link>
            <Link to="/settings">Settings</Link>
        
        </div>
    )
}

export default lightTheme(Footer)