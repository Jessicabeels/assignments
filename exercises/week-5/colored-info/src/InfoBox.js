import React from 'react'



function InfoBox(props) {
    
    return ( 
    <div style={{backgroundColor: props.style}}>
        <h3>Title: {props.title}</h3>
        <h5>Subtitle:{props.subtitle}</h5>
        <p>information:{props.information}</p>
    </div>
    )
}

export default InfoBox