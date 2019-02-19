const todoList = document.getElementById("container")

const postForm = document.formStuff



///////////////GET////////////////////
//use axios to get list
function getStuff() {
    axios.get("https://api.vschool.io/jess/todo").then(function (response) {
        //console.log(response);
        const todos = response.data
        // console.log(todos)
        Promise.resolve(todos).then(res =>{
            listTodos(todos)
        })
    }).catch(error => console.log(error))
}

function listTodos(todosArr) {
    console.log(todosArr)
    for (let i = 0; i < todosArr.length; i++) {
        //3 sections
        //show up on the DOM, create elements
        const container = document.createElement('div')
        const title = document.createElement('h1')
        const pic = document.createElement('img')

        //edit the element/ give it content
        container.classList.add("todo-container")
        title.textContent = todosArr[i].title
        pic.setAttribute("src", todosArr[i].imgUrl)

        //add strike through
        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }

        //append
        container.appendChild(title)
        container.appendChild(pic)
        todoList.appendChild(container)
        
        //name id in html todoListcotainer

    }
}


///////////////Form///////////////////POST
//select form element

postForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        titleInput: postForm.todoTitle.value,
        // description: postForm.todoDescription.value,
        // priceInput: postForm.price.value,
        // pic: postForm.pic.value
        
    }
    console.log(newTodo)
    postForm.title.value = ""

    axios.post("http://api.vschool.io/jess/todo", newTodo).then(response => {
        todosListContainer.innerHTML = ""
        
    }).catch(err => console.log(err))
    getStuff()
})


getStuff()










