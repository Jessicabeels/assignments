import React from 'react'


const EntryForm = props => {

    return ( 
    <form onSubmit={props.handleSubmit}>
        <input 
            type="text" 
            name="nameInput" 
            value={props.nameInput}
            onChange={props.handleChange} 
            placeholder="Name"/>
        <input 
            type="text" 
            name="ageInput" 
            value={props.ageInput} 
            onChange={props.handleChange} 
            placeholder="Age"/>
        <button>Submit</button>
    </form>
    )
}

export default EntryForm