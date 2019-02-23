import React from 'react'
import Spot from './Spot.js'



const List = (props) => {
   
    //name of places mapped, properties of vactionspots mapped through
    const mappedDestinations = props.vacations.map((spot, i) => <Spot 
                                                    place={spot.place}
                                                    price={spot.price} 
                                                    timeToGo={spot.timeToGo} 
                                                    key={i}/>)

    return (
        <div style={
            {border: '1px solid pink',
            margin: 5, 
            padding: 5, 
            fontSize: 40, 
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'black'
            }}>
           Destinations: {mappedDestinations}
        </div>
    )
}

export default List