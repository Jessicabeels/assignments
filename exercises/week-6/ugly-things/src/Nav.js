import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    console.log(props)
    return (
        <div className="nav">

            <Link to= "/tweeter">Tweeter</Link>
            <Link to= "/">Home</Link>
            <Link to="/about">About</Link>
            <Link to= "/dark"> Dark Mode </Link>
            <Link to="/twit" className="twit"> Twit</Link>
        
    
        </div>
    )
}

export default Nav