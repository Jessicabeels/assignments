import React from 'react'
import PropTypes from 'prop-types'

const Animal = props => {
    return (
        <div>
            <h1>Type: {props.type}</h1>
            <h3>Sound: {props.sound}</h3>
            <p>Legs: {props.legs}</p>
            <p>Diet: {props.diet}</p>
        </div>
    )
}

Animal.propTypes = {
    type: PropTypes.string.isRequired,
    sound:PropTypes.string.isRequired,
    legs: PropTypes.number.isRequired,
    diet: PropTypes.string.isRequired
}

export default Animal