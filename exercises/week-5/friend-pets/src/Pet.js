import React from 'react'






const Pet = (props) => {
        
        return (
            <div style={{border: '1px solid red', margin: 5, padding: 5}}>
                <p style={{border: '1px solid blue', margin: 5, padding: 5}}>Name: {props.name}</p>
                <p>Breed: {props.breed}</p>
            </div>
        )
    }



export default Pet