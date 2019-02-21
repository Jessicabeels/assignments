import React from 'react'
// import Name from './Name.js'
import Person from './Person.js'



const App = () => {
    // const fruits = ['pineapple', 'oranges', 'bananas', 'lemons']
    // const names = ['Rick', 'Morty', 'Summer', 'Jerry']
    // const mappedFruits = fruits.map((name, i) => {
    //     return <h3 key={i}>{i+1}: {name}</h3>
    // const mappedNameComponents = names.map((name, i) => <Name name = {name} key={i} />)
    
    const people = [
        {
            name: 'Rick',
            age: '70',
            favColor: "teal",
            friends: ["morty", "birdman"]
        },
        {
            name: 'Morty',
            age: '13',
            favColor: 'yellow',
            friends: ["jerry", "birdman", "summer"]
        },
        {
            name: 'Summer',
            age: '16',
            favColor: 'pink',
            friends: ["morty", "jerry"]
        },
        {
            name: 'Jerry',
            age: 54,
            favColor: 'purple',
            friends: ["morty"]
        }
    ]

    const mappedCharacters = people.map((character, i) => 
                                            <Person
                                              key={i}
                                              name={character.name} 
                                              age={character.age} 
                                              favColor={character.age}
                                              friends={character.friends} /> )


    return (
        <div>
            <h1>Mapping Fruits in React </h1>
            <ol>
            <li>{mappedCharacters}</li>
            {/* <li>{mappedNameComponents}</li> */}
            </ol>
 
        </div>
    )
}


export default App


















// import React from 'react'


// const App = () => {
//     const names = ["Rick", "Morty"]
//     const mappedNames = names.map(name => {
//         return <h1>{name}</h1>
//         //JSX element
        
//     })
//     return (
//         <div>
//             <h1>Mapping in React .map()</h1>
//             {mappedNames}
           
//             {names.map(name => <h1>{name}</h1>)}
//             <ul>
//                 {[<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>]}
//             </ul>
            
//         </div>
//     )
// }



// export default App