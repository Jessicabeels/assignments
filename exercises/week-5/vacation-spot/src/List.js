import React from 'react'
import Spot from './Spot.js'


const List = props => {
   
    //name of places mapped, properties of vactionspots mapped through
    const mappedDestinations = props.vacationSpots.map((spot, i) => <Spot 
                                                    name={spot.place}
                                                    price={spot.price} 
                                                    timeToGo={spot.timeToGo} 
                                                    key={i}/>)

    return (
        <div>
           Destinations {mappedDestinations}
        </div>
    )
}

export default List