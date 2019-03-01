import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ThemeProvider from './context/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

// export const {Consumer, Provider} = React.createContext()
//to make a context, to make a component of 2 smaller components Consumer and Provider 
// would wrap Theme Provider in Browser Router? 




ReactDOM.render(
<BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
</BrowserRouter>
   

, document.getElementById('root'))


