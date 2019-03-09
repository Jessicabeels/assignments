import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Nav = (props) => {
    const { navToggle, toggler } = props
    return (
        <div onClick = {toggler} className={`nav nav-${navToggle ? "closed" : "open"}`}>
        {/* <div className="nav"> */}
            <Link className = "title" to="/">Pub Pocket</Link>
            <div className="logo-container">
                <div className="logo"></div>
            </div>
            <Searchbar />
            <Link to="/"></Link>
            <Link className="about" to="/about">About</Link>
            <Link className="saved" to="/saved">Saved</Link>
            <Link className = "profile" to="/profile">Profile</Link>
        </div>
    )
}


export default Nav