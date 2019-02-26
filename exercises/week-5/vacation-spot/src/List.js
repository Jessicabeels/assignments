import React from 'react'
import Spot from './Spot.js'



const List = (props) => {
   
    //name of places mapped, properties of vactionspots mapped through
    const mappedDestinations = props.vacations.map((spot, i) => <Spot 
                                                    place={spot.place}
                                                    price={spot.price} 
                                                    timeToGo={spot.timeToGo}
                                                    imgUrl = {spot.imgUrl} 
                                                    key={i}/>)

    return (
        <div style={
            {
            margin: 30, 
            padding: 5, 
            fontSize: 40, 
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'row',
            }}>
            <div></div>
            {mappedDestinations}
           
        </div>
    )
}

export default List