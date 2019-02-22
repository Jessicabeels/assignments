import React from 'react'
import App from './App.js'


const List = props => {
   
    // const mappedPets = props.pets.map((pet, i) => <Pet name={pet.name} breed={pet.breed}/>)
    //name of places mapped, properties of vactionspots mapped through
    const mappedDestinations = props.vacationSpots.map((spot, i) => <Spot name={spot.place} price={spot.price} timeToGo={spot.timeToGo} key={i}/>)



    return (
        <div>
            {mappedDestinations}
        </div>
    )
}







export default List