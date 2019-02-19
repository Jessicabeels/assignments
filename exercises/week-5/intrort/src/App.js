import React from 'react'
import Nav from './Nav.js'
import './style.css'



function App() {
    return (
    <div className = "container">
        <div className= "text"> 
            <h1 className = "title">Spot's Dog Sitting Spot</h1>   
        </div>
        <div className = 'img'></div>
        
        <Nav />
        <p>The best dogsitting in the South Bay. Book your dog's vacation while you're on vacation!</p>
    </div>
        )
    }


export default App
