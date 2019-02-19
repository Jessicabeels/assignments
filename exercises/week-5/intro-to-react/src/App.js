import React from 'react'
import Nav from './Nav.js'
import './style.css'


function App(){
    return (
        <div className="flex-container"> 
            {/* <App2/> */}
            <p className="hello-world">Hello World</p>
            {/* docuemt.create element, add text content, apphead child all in 1 */}
            {/* <img src={}/> */}
            <Nav />
            {/* <Header />
            <Main />
            <Footer /> */}


        </div>
    )
}

export default App
