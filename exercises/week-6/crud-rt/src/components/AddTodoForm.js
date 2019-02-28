import React from 'react'

const AddToDoForm = (props) => {
    const { title, description, price, handleChange, handleSubmit } = props
    return (
        <form>
            <input type="text"
                 name="title"
                 value={props.title}
                 onChange={props.handleChange} />
            <input type="text"
                 name="description"
                 value={props.title}
                 onChange={props.handleChange} />
            <input type="text"
                 name="price"
                 value={props.title}
                 onChange={props.handleChange} />
            <buton></buton>
        </form>
    )
}
