import React from 'react'
import Nav from './Nav.js'
import List from './List.js'
import Footer from './foot.js'
import './style.css'



function App() {
    return (
    <div className = "container">
        <div className= "text"> 
            <h1 className = "title">Spot's Dog Sitting Spot</h1>   
        </div>
        <div className = 'img1'></div>
        <Nav />
        <p>The best dogsitting in the South Bay. Book your dog's vacation during your vacation!</p>
        <List />
        <Footer />
        
        
    </div>
        )
    }


export default App
