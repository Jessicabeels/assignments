import React from 'react'
import BoxesContain from './BoxContain';
import './style.css'



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            bgColor1: "blue",
            bgColor2: "blue",
            bgColor3: "blue",
            bgColor4: "blue",
            radius1: 50,
            radius2: 50,
            radius3: 50,
            radius4: 50
        }
    }

    handleChangeAll = () => {
        this.state(prevState => {
            return {
                bgColor1: prevState.bgColor1 === "blue" ? "green" : "blue",
                bgColor2: prevState.bgColor2 === "blue" ? "green" : "blue",
                bgColor3: prevState.bgColor3 === "blue" ? "green" : "blue",
                bgColor4: prevState.bgColor4 === "blue" ? "green" : "blue"
            }
        })
    }

    handleChangeTopLeft = () => {
        this.setState({
            bgcolor1: "purple"
        })
    }
        

    handleChangeBlue = () => {
        const colors = ['blue']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({
            color1: currentColor
        })
    }

    handleChangeColor2 = () => {
        const colors = ['purple']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        console.log(currentColor)
        this.setState({
            color1: currentColor
        })
        console.log(this.state.color1)
        console.log(this.state.color2)
    }

    handleChangeColor1 = () => {
        const colors = ['white', 'black']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        // console.log(currentColor)
        this.setState({
            color1: currentColor
        })
        console.log(this.state.color1)
        console.log(this.state.color2)
    }

    render(){
        const boxStyle = {
            width: 200,
            height: 100,
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 40,
            backgroundColor: this.state.color1
        }
        return (
            <div className="app-container">
                <BoxesContain chicken={this.state}/>
                
                <div className="top-half">
                    <div style ={boxStyle}>Box1</div>
                    <div style ={boxStyle}>Box2</div>
                </div>
                <div>
                    <div style = {boxStyle}>Box3</div>
                </div>
                <div>
                    <div style = {boxStyle}>Box4</div>
                </div>
                <button onClick={this.handleChangeColor1}>Small Time</button>
                <button onClick={this.handleChangeColor2}>Party DJ</button>
                <button onClick={this.handleChangeAll}>All</button>
                <button onClick={this.handleChangeBlue}>Professional DJ</button>
                <button onClick={this.handleChangeTopLeft}>Top</button>
                {/* <button onClick={this.handleChangeBox1}>Box 1</button> */}
                

                
                
                
            </div>
            
            
        )
    }
}



export default App

