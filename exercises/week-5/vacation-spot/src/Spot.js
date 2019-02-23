import React from 'react'



const Spot = (props) => {
    return (
        <div className = 'list' style={
            {border: '1px white solid', 
            margin: 15,
            padding: 15, 
            height: 200,
            display: 'grid',
            flexDirection: 'row',
            flexWrap: 'wrap',
            fontSize: 15, 
            // background: 'powderblue'
            }}>
            <h1> {props.place}</h1>
            <p className = "price" style={{padding: 2}}>Price: {props.price} </p>
            <p style={{padding: 2}}>Time To Go: {props.timeToGo}</p>

        </div>
    )
}

export default Spot