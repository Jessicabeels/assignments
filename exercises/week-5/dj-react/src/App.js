import React from 'react'



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color1: "white",
        }
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
    
    handleChangeColor2 = () => {
        const colors = ['purple']
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
            <div>
                <button onClick={this.handleChangeColor1}>Small Time</button>
                <button onClick={this.handleChangeColor2}>Party DJ</button>
                <div class="top-half">
                    <div style ={boxStyle}>Box1</div>
                    <div style ={boxStyle}>Box2</div>
                </div>
                <div>
                    <div style = {boxStyle}>Box3</div>
                </div>
                <div>
                    <div style = {boxStyle}>Box4</div>
                </div>
                
            </div>
            
            
        )
    }
}



export default App

