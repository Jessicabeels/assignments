//to change the theme value we have to make a class component that maintains a theme state
import React, {Component} from 'react'
// import {Provider} from '../index'
const ThemeContext = React.createContext()

class ThemeProvider extends Component{
    constructor(){
        super()
        this.state ={
            theme: "dark"
        }
        this.toggleTheme = this.toggleTheme.bind(this)
    }
    
    toggleTheme= () => {
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }
    render(){
        return (
            //return the theme provider and its children
            <ThemeContext.Provider 
                value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}


export const lightTheme = C => props => (
    <ThemeContext.Consumer>
        {value => <C {...value}{...props}/>}
    </ThemeContext.Consumer>
)
//this is abstracting theConsumer away to a HOC called withTheme

export default ThemeProvider