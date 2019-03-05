import React from 'react'
import { Link } from 'react-router-dom'



const Nav = (props) => {
    return (
        <div className="nav">
            <Link className = "title" to="/">Pub Pocket</Link>
            <Link to="/"></Link>
            <Link to="/">About</Link>
            <Link to="/">Saved</Link>
            <Link className = "profile" to="/profile">Profile</Link>
        </div>
    )
}


export default Nav