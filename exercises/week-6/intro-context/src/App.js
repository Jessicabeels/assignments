import React, { Component } from 'react'
//destructure non default components 
import { withCounter } from './context/ConterProvider'



const App = props => {
    console.log(props)
    
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }
}