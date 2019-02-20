import React from 'react'
import Nav from './Nav.js'
import NameCard from './NameCard.js'
import './style.css'


// function App(){
//     return (
//         <div className="flex-container"> 
//             {/* <App2/> */}
//             <p className="hello-world">Hello World</p>
//             {/* docuemt.create element, add text content, apphead child all in 1 */}
//             {/* <img src={}/> */}
//             <Nav />
//             {/* <Header />
//             <Main />
//             <Footer /> */}


//         </div>
//     )
// }

function App(){


    // const obj = {
    //     color: "blue"
    // }
    return (
        <div>
            <NameCard name="Rick" age={70}/>
            <NameCard name="morty" age={12}/>
        </div>
    )
}

export default App


// import React from 'react'


// function App(props){
//     console.log(props.name)
//     return (
//         <div>
//             <h1>HI my name is {props.name} and I'm {props.age}</h1>
//         </div>
//     )
// }

// export default App


