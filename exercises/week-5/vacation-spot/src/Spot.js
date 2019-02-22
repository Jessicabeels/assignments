import React from 'react'



const Spot = (props) => {
    return (
        <div>
            Place: {props.place}
            Price: {props.price}
            Time To Go: {props.timeToGo}

        </div>
    )
}

export default Spot