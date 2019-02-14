const todoList = document.getElementById('container')

const postForm = document.formStuff



///////////////GET////////////////////


//use axios to get list
function getStuff() {
    axios.get("https://api.vschool.io/jess/todo").then(function (response) {
        //console.log(response);
        const todos = response.data
        listTodos(todos)
    }).catch(error => console.log(error))
}

function listTodos(todosArr) {
    for (let i = 0; i < todosArr.length; i++) {
//3 sections
        //show up on the DOM
        const container = document.createElement('div')
        const title = document.createElement('h1')
        const pic = document.createElement('img')

        //edit the element/ give it content
        container.classList.add("todo-container")
        title.textContent = todos[i].title
        pic.setAttribute("src", todos[i].imgUrl)

        //add strike through
        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }

        //append
        todoList.appendChild(title)
        todosListContainer.appendChild(container)
        todoList.appendChild(pic)
        //name id in html todoListcotainer

    }
}


///////////////Form///////////////////


//select form element

postForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        titleInput: postForm.todoTitle.value,
        description: postForm.todoDescription.value,
        priceInput: postForm.price.value,
        pic: postForm.pic.value
        
    }
    postForm.title.value = ""

    
    //varibale new name = document name.input name.value
    var titleInput = postForm.todoTitle.value
    var descriptInput = postForm.todoDescription.value
    var priceInput = postForm.price.value
    var imgInput = postForm.price.value


    //var newTodo object
    var newTodo = {
        "title": titleInput,
        "description": descriptInput,
        "price": priceInput,
        "imgUrl": imgInput
    }

})












///////////////////////Post, need an object for content
function postStuff() {
    axios.post("https://api.vschool.io/jess/todo", {
        "title": "",
        "description": "",
        "price": "",
        "img": ""
        //newTodo
    }).then(function (response) {
        console.log(response)
        var todos = response.data
        listTodos(todos)
    }).catch(function (error) {
        console.log(error)
    })


}
//prevent a million dishes with a form and event listener


//Put, need an Id  to change content and an new object 


//Delete, need an Id  to delete content




function listPostedTodos(todos) {
    console.log(posttodos)
    var titlePost = document.createElement('h2')
    titlePost.textContent = posttodos.titlePost
    todoList.appendChild(titlePost)
}