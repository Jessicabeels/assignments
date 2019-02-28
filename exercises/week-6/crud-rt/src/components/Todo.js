import React from 'react'


const Todo = (props) => {
    //props.
    console.log(props)

    const  { title, description, imgUrl, price, completed, _id } = props
    return (
        <div style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'}}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>$ {price}</p>
            <input type='checkbox' checked={completed} />
            <button onClick={ () => props.handleDelete(_id)}>Delete</button>
        </div>
    )
}

export default Todo