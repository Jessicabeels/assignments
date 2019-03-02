import React from 'react'
//if we're not using state or lifecycle methofs we shouldnt be using a class

const App = (props) => {


    return (
        <div>
    
            <Toggle render={({isToggled, toggler}) =>
            <>
                <h1>The light is {isToggled ? "On" : "Off"}</h1>
                <button onClick={toggler}> Turn {isToggled ? "off" : "on"}</button>
            </>
            
                }/>
            <Toggle render={({isToggled, toggler}) =>
            <>
                <h1>The light is {isToggled ? "On" : "Off"}</h1>
                <button onClick={toggler}> Turn {isToggled ? "off" : "on"}</button>
            </>
            
                }/>
        </div>
    )

}


<Form 
    render={props => <TodoForm {...props}/>}
    inputs={{title: "", description: ""}}
    sibmit={inputs => props.addToDo(inputs)}
/>

//render props allows us to write logic 1x and reuse it