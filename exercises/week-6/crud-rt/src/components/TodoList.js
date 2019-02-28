import React from 'react'
import Todo from './Todo.js'



const TodoList = (props) => {

    const mappedTodos = props.todos.maps(todo => <Todo  {...todo} handleDelete={props.handleDelete} key={todo._id}/>)
    return (
        <div>
            {mappedTodos}
        </div>
    )
}

export default TodoList