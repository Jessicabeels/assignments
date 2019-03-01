import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }


    componentDidMount(){
        axios.get('api.com').then(response => {
            this.setState({
                todoes: response.data
            })
        }).catch(error => console.log(error))
    }


    render(){
        return(
            <div>
                {this.state.todos.map( tpdp => (
                    <div style={{backgroundImage: `url(${todo.imgUrl})`, backgroundSize: 'cover'}}>
                ))}

            </div>
        )
    }
}


export default App


//in index 


//ReactDOM.render(<TodoProvider>
// </TodoProvider>
//     <App/> 




//</div>



