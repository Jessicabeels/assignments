import React from 'react'
import BoxesContain from './BoxContain';
import './style.css'
// import Sound from './Sound.js'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            bgColor1: "blue",
            bgColor2: "blue",
            bgColor3: "blue",
            bgColor4: "blue",
        }
    }

        
     handleChangeSmall = () => {
        const colors = ['white', 'black']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        // console.log(currentColor)
        this.setState({
            bgColor1: currentColor,
            bgColor2: currentColor,
            bgColor3: currentColor,
            bgColor4: currentColor
        })
    }

    handleChangeParty = () => {
        this.setState({
            bgColor1: "purple",
            bgColor2: "purple"
        })
    }

    handleChangePro1 = () => {
        this.setState({
            bgColor3: "blue"
        })
    }

    handleChangePro2 =() => {
        this.setState({
            bgColor4: "blue"
        })
    }

    handleChangeBig = () => {
        const colors = ['red', 'orange', 'pink', 'magenta', 'hot pink', 'lavender']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        const colorsCold = ['light blue', 'powderblue', 'teal', 'limegreen', 'navy', 'green']
        const colorBox2 = colorsCold[Math.floor(Math.random()*  colorsCold.length)]
        this.setState({
            bgColor1: currentColor,
            bgColor2: colorBox2,
            bgColor4: currentColor,
            bgColor3: colorBox2

        })
    }

    render(){
        return (
            <div className="app-container">
                <BoxesContain chicken={this.state}/>
                <div className="controls-container">
                    <button onClick={this.handleChangeParty}>Party DJ</button>
                    <button onClick={this.handleChangeSmall}>Small Time</button>
                    <button onClick={this.handleChangePro1}>Pro 1 </button>
                    <button onClick={this.handleChangePro2}>Pro 2 </button>
                    <button onClick={this.handleChangeBig}>Big Time</button>
                    {/* <Sound /> */}
                </div>
                
            </div>
            
            
        )
    }
}



export default App

