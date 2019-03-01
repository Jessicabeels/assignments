
import { Component } from 'react'

class Toggle extends Component {
    constructor(){
        super()
        this.state ={
            isToggled: false
        }
    }




    toggler
    
    
    
    
    render(){
        return this.props.render({ isToggled: this.state.isToggled, toggler: this.toggler 
    
        })
    }
    
    //do backwards, find out what render does 
    //redner returns the logic from toggler
    
    //we're not returning any JSX so dont techincally need react
    
    



}
