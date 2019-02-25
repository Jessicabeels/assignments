import React from 'react'
import Box from './Box.js'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color1: "blue",
            color2: "red",
            color3: "green",
            count: 0
        }
        this.colors = []
    }

    handleClick = () => {
        //generate 3 different colors
        const colors = ['green', 'purple', 'teal']
        // alert("Hello")
        const chosenColor1 = colors[Math.floor(Math.random() * colors.length)]
        const chosenColor2 = colors[Math.floor(Math.random() * colors.length)]
        const chosenColor3 = colors[Math.floor(Math.random() * colors.length)]
        this.setState(prevState => {
            return {
            color1: chosenColor1,
            color2: chosenColor2,
            color3: chosenColor3,
            count: prevState + 1
            }
        })
        //dont need prev state because it doesnt matter what it was before, but adding count 4 example
    }


    render(){
        return (
            // <div style={{backgroundColor: this.state.color, height: 200, width: 200}}className="box" onClick={this.handleClick}></div>
            <Box color = {this.state.color1} handleChangeColor={this.handleChangeColor} count={} />
            <Box color = {this.state.color2} handleChangeColor={this.handleChangeColor} count={} />
            <Box color = {this.state.color3} handleChangeColor={this.handleChangeColor} count={} />
            
        )
  
    }
}




export default App