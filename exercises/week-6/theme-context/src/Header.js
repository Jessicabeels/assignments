import React from 'react'
import {Consumer} from './index'
import {withTheme} from'./context/ThemeProvider'


const Header = props => (
    <Consumer>
        {value => (
            <div className={`${value.theme}-header`}>
                <h1>Wicked Rad Header</h1>
                <button onClick={value.toggleTheme}>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
            </div>
        )}
    </Consumer>
)

export default Header