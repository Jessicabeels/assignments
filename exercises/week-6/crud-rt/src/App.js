import React, { Component } from 'react'
import TodoList from './components/TodoList.js'
import axios from 'axios'

//GET - map out todos
    //todolist - list out todos
    //todo - singular todo that is mapped out in TodoList componenet

//App - 
    //componentDidMount
    //add place for todos in state
    //componentWillUnmount
        //window.eventListeners
        //setInterval. setTimeout

//Components
    //<AddToDoForm/>
    //state properties for input values
    //handleChange, HandleSubmit

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            title: '',
            description: '',
            price: ''
        }
    }

    componentDidMount() {
        this.getTodos()
    }


    getTodos = () => {
        axios.get("https://api.vschool.io/natej/todo").then(response => {
            //resolve
            console.log(response) // make sure our data works b4 
            this.setState({
                todos: response.data
            })
        })
        .catch(error => console.log(error))
        //reject
    }


handleChange = e => {
    const {name, value } = e.target
    this.setState({
        [name]: value
    })
    
}



handleSubmit = e => {
    e.preventDefault()
    const { title, description, price, imgUrl } = this.state
    //POST request
        //create OBJ
    const newTodo = {title, description, price, imgUrl }
    const newTodo = {
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
    }

    axios.post("https://api.vschoolio/attila/todo", newTodo).then(response => {
        console.log(response)
        this.setState(prevState => {
            return {
                todos: [response.data, ...prevState.todos],
                title: '',
                description: '',
                price: ''
            }
        })
    })
    .catch(error => console.log(error))
    //Post request
        //CREATE new object

    //update state
        //todos: maintain old todos, and add in new todo from DB
        //inout values: reset back to empty strings
}


handleDelete = (_id) => {
    //DELETE
    //axios.delte a specific todo via its ID
    axios.delete(`api.com/${_id}`).then(response => {
        this.setState(prevState => {
            return {
                //take the previous arrays of todos, and onlt returntodos that don't have the _id of the deleted one
                todos: prevState.todos.filter(todo => todo.id !== _id)
            }
        })
    }).catch(error => console.log(error))
}
    render(){

        // const {handleChange, handleSubmit, state: {title, desciption, imgUrl, price, todos}} = this
            //destructing getting rid of the this below
        return (
            <div>
                <AddTodoForm handleChange={this.handleChange}title={this.state.title} description={this.state.description} price={this.state.price}/>
                <TodoList todos={this.state.todos}
                handleDelete={this.state.handleDelete}/>
            {/* some extra stuff with do do list */}

            </div>
        )
    }
}

export default App

//npm i axios