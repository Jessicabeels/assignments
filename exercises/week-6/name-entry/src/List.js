import React from 'react'
import Name from './Name.js'
import Age from './Age.js'

const List = props => {
    const mappedName = props.names.map((name, key) => 
    <Name 
        key = {key}
        name ={name} />)

    const mappedAge = props.ages.map((age, key) =>
    <Age
        age = {age}
         />)
    return (
        <div>
             {mappedName} 
             {mappedAge}
        </div>
       
    )
    
}
export default List