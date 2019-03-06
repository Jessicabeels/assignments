import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import PubProvider from './Context/PubProvider.js'





ReactDOM.render(
    <BrowserRouter>
        <PubProvider>
            <App />
        </PubProvider>
    </BrowserRouter>, 
document.getElementById('root'))