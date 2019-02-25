import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Superhero = (props) => {
    return  (
       
    <div className= "hero" onClick = {props.onClick}>
        <h2>{props.name}</h2>
        <h4> superpower: {props.superpower}</h4>
        <img className = "img" src ={props.imgUrl} alt="hero"></img>
    </div>
        
    )
}

Superhero.propTypes = {
    name: PropTypes.string,
    catchphrase: PropTypes.string,
    imgUrl: PropTypes.string
}

export default Superhero







