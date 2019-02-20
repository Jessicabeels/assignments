import React from 'react'


function NameCard(props){
    return (
        <div>
            <h5>HI my name is {props.name} and I'm {props.age} </h5>
        </div>
    )
}

export default NameCard