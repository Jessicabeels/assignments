import React, { Component } from 'react'

//Jigher Order COmponents - HOCS
//They are compeonets that either
    //take component as an argument
    //or/and

class Toggle extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false
        }
    }

    toggler = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }







}