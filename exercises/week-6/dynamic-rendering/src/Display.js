import React from 'react'


//function that returns JSX

const Display = props => {
    //if(props.gretting === "Hello")
    const style = {}
    let elementToShow
    switch(props.age){
        case 25:
            elementToShow = <h1> You care 25</h1>
            style.backgroundColor = "blue"
            break;
        case 30: 
            elementToShow = <h1> You care 30</h1>
            break;
        default: 
            elementToShow = <h1> Not sure of age</h1>
            
    
    }
    return (
        <div>
            {props.isAuthenticated}
            
        </div>
    )
}


export default Display