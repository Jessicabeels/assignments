const todoList = document.getElementById("container")

const postForm = document.formStuff



///////////////GET////////////////////
//use axios to get list
function getStuff() {
    axios.get("https://api.vschool.io/jess/todo").then(function (response) {
        //console.log(response);
        let todos = response.data
        console.log(todos)
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
        description: postForm.todoDescription.value,
        priceInput: postForm.price.value,
        pic: postForm.pic.value
        
    }
    postForm.title.value = ""

    axios.post("http://api.vschoolio.jess/todo", newTodo).then(response => {
        todosListContainer.innerHTML = ""
        getStuff()
    }).catch(error => console.log(err))
})

getStuff()












///////////////////////Post, need an object for content
// function postStuff() {
//     axios.post("https://api.vschool.io/jess/todo", {
//         "title": "",
//         "description": "",
//         "price": "",
//         "img": ""
//         //newTodo
//     }).then(function (response) {
//         console.log(response)
//         var todos = response.data
//         listTodos(todos)
//     }).catch(function (error) {
//         console.log(error)
//     })


// }
//prevent a million dishes with a form and event listener


//Put, need an Id  to change content and an new object 


//Delete, need an Id  to delete content




// function listPostedTodos(todos) {
//     console.log(posttodos)
//     var titlePost = document.createElement('h2')
//     titlePost.textContent = posttodos.titlePost
//     todoList.appendChild(titlePost)
// }