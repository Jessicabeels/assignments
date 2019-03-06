import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'



const Nav = () => {
    return (
        <div className="nav">
            <Link className = "title" to="/">Pub Pocket</Link>
            <div className="logo-container">
                <div className="logo"></div>
            </div>
            <Search />
            <Link to="/"></Link>
            <Link to="/about">About</Link>
            <Link to="/saved">Saved</Link>
            <Link className = "profile" to="/profile">Profile</Link>
        </div>
    )
}


export default Nav