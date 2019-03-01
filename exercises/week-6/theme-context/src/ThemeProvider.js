//to change the theme value we have to make a class component that maintains a theme state
import React, {Component} from 'react'
import {Provider} from './index'

class ThemeProvider extends React.Component{
    constructor(){
        super()
        this.state ={
            theme: "dark"
        }
        this.toggleTheme = this.toggleTheme.bind(this)
    }
    toggleTheme(){
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }
    render(){
        const props={
            toggleTheme: this.toggleTheme,
            ...this.state
        }
        return (
            //return the theme provider and its children
            <Provider value={props}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ThemeProvider

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value}{...props}/>}
    </Consumer>
)
//this is abstracting theConsumer away to a HOC called withTheme