import React from 'react'
import PropTypes from 'prop-types'

const CounterControls = props => {
    return (
        <div>
            <button onClick={props.handleIncrement}> + </button>
            <button onClick={props.handleDecrement}> - </button>
            <button onClick={props.handleMult}> * </button>
        </div>
    )
}


CounterControls.propTypes = {
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleMult: PropTypes.func
}

export default CounterControls