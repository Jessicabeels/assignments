import React from 'react'
import InfoBox from './InfoBox.js'
import './style.css'

function App() {
    
    const titleStyle = {
        color: "blue",
        backgroundColor: "Black",
        fontFamily: "sans-serif"
    }

    const subtitleStyle = {
        color: "red",
        backgroundColor: "orange"
    }
    
    return (
    <div className="boxes"> 
        <h1 style={titleStyle}> Hello World</h1>
        <h2 style={subtitleStyle}>Goodbye Moon</h2>
        <InfoBox style={"blue"} title="This box is blue" subtitle=" SO blue!" information="Here's the info"/>
        <InfoBox style={"red"}title="This box is red" subtitle=" SO red!" information="Here's the info on red"/>
        <InfoBox style= {"green"} title="This box is green" subtitle=" SO green!" information="Here's the info"/>
        <InfoBox style={"purple"}title="This box is purple" subtitle=" SO purple!" information="Here's the info"/>
        <InfoBox style={"pink"} title="This box is pink" subtitle=" SO pink!" information="Here's the info"/>
    </div>
    )
}

export default App