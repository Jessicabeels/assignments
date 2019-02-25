import React from 'react'



const Spot = (props) => {
    return (
        <div className = 'list' style={
            {
            padding: 15, 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            fontSize: 15, 
            // background: 'powderblue'
            }}>
            <div className="container"> 
                <div>
                <h1> {props.place}</h1>
                <p className = "price" style={{padding: 2}}>Price: ${props.price} </p>
                <p style={{padding: 2}}>Time To Go: {props.timeToGo}</p>
                <img className = "img" src ={props.imgUrl} alt="location"></img>
                </div>
            </div>
            

        </div>
    )
}

export default Spot