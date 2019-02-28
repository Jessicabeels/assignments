import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state={
            bgColor: "blue",
            fontSize: 20
        }
    }

    componentDidMount(){
        //axios request
        //save response data in state
        window.addEventListener("keydown", (e) => {
            console.log(e)
            if(e.which === 71){
                this.setState({
                    bgColor: "green",
                    fontSize: 50
                })
                alert('hi')
            }
            if(e.which === 73){
                this.setState({
                    bgColor: "yellow",
                    fontSize: 100
                })
                console.log("boo")
            }
        })
    
    }

    componentWillUnmount(){
        window.removeEventListener("keydown")
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.bgColor, fontSize:this.state.fontSize }}>
                <h1>Hello {this.state.username}</h1>
            </div>
        )
    }
}

export default App