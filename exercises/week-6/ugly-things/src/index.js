import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ThingProvider from './context/ThingProvider.js'



ReactDOM.render(
    <ThingProvider>
        <App />
    </ThingProvider>
,document.getElementById('root'))