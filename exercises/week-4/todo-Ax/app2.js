//import Axios from "axios";

const todoContiner = document.getElementById('todolist-conatiner')
const todoForm = document["add-todo-form"]


function getData() {
    axios.get("http://api.vschool.io/natej/todo").then(response => {
        const todos = response.data
        listTodos(todos)
    }).catch(err => console.log(err))

}

function listTodos(todosArr) {
    //make 1 todo show up, then reuse that code to make all the todos shoq up

    for (let i = 0; i < todosArr.length; i++) {
        //Make it show up on the DOM
        //Vreate elemtents
        const todoContiner = document.createElement('div')
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')

        //edit the element/ gibr it contetn
        todoContiner.classList.add("todo-container")
        title.textContent = todosArr[i].title
        imgUrl.setAttribute("src", todosArr[i].imgUrl)

        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }

        //apphend it to the FOM
        todoContiner.appendChild(title)
        todoContiner.appendChild(imgUrl)
        todosListContiner.appendChild(todoContiner)
        //name id in html todoListcotainer
    }
}

//if it is false should be crossed out


todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value
    }

    todoForm.title.value = ""

    axios.post("http://api.vschool.io/natej/todo", newTodo).then(response => {
        todosListContiner.innerHTML = ""
        getData()

    }).catch(err => console.log(err)) 
})

getData()