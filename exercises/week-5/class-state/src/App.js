import React from 'react'
import CounterControls from './CounterControls'
import CounterDisplay from './CounterDisplay'

//Class components vs. functional components
    //stateful              stateless
    //logic                 display
//state
//event listeners

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }


    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }   


    handleDecrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        })
    }   

    handleMult = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter * 2
            }
        })
    }   




    render() {
            // console.log(this.props)
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls 
                handleIncrement = {this.handleIncrement}
                handleDecrement = {this.handleDecrement}
                handleMult = {this.handleMult}/>
            </div>
            )
        }
    
}
export default App;


















// import React from 'react'

// //Class components vs. FUnctional Components

// // class Component {
// //     constructor(data){
// //         this.data = data
// //     }
// // }
// ///////////////////what a basic class component needs
// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             counter: 0,
//         }
//     }
//     //Doing words (methods)
//     //write function in between constructor and render method.

//     handleClick = () => {
//         this.setState(prevState => {
//             return {
//                 counter: prevState.counter + 1
//             }
//         })
//     }
//     //use fat arrow synthax for our handle method

//     render(){
//         console.log(this.props)
//         return (
//             <div>
//                 {this.state.counter}
//                 <button onClick={this.handleClick}> + </button>
//                 {/* <form onSubmit={}>
//                 </form> */}
//             </div>
//         )
//     }
// }
// //whenever we use class we need super
// ///////////////////////////////////

// const App = () => {
//     console.log(props)

//     return (
//         <div>
//             {this.props.greeting}
//         </div>
//     )
// }


// export default App