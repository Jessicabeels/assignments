import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ThingProvider from './context/ThingProvider.js'
import { BrowserRouter } from 'react-router-dom'
import './style.css'


ReactDOM.render(
<BrowserRouter>
    <ThingProvider>
        <App />
    </ThingProvider>
</BrowserRouter>
   
,document.getElementById('root'))