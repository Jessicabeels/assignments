const todoList = document.getElementById("container")

const postForm = document.formStuff



///////////////GET////////////////////
//use axios to get list
function getStuff() {
    axios.get("https://vschool-cors.herokuapp.com?url=https://api.vschool.io/jess/todo").then(function (response) {
        //console.log(response);
        const todos = response.data
        // console.log(todos)      
            listTodos(todos)
    }).catch(error => console.log(error))
}

function listTodos(todosArr) {
    // console.log(todosArr)
    for (let i = 0; i < todosArr.length; i++) {
        //3 sections
        //show up on the DOM, create elements
        const container = document.createElement('div')
        const title = document.createElement('h3')
        const price = document.createElement('h5')
        const description = document.createElement('h5')
        const pic = document.createElement('img')
        const delBtn = document.createElement('button')
        const checkbox = document.createElement('input')

        //edit the element/ give it content
        container.classList.add("todo-container")
        title.textContent = todosArr[i].title
        pic.setAttribute("src", todosArr[i].imgUrl)
        pic.setAttribute("class", "api-img" )
        price.textContent = todosArr[i].price
        description.textContent=todosArr[i].description

        //second edits
        container["data-todoID"] = todosArr[i]._id
        checkbox.type = 'checkbox'
        checkbox.checked = todosArr[i].completed
        delBtn.textContent = 'Delete'

        // //////
        // Checkbox PUT request for updating UI and DB
        checkbox.addEventListener("change", function(e){
            const ID = e.target.parentNode["data-todoID"]
            const updates = {
                completed: e.target.checked
            }
            // put request to mark it true/false completed
            axios.put(`https://api.vschool.io/jess/todo/${ID}`, updates).then(response => {
                todoList.innerHTML = ""
                getStuff()
            })
        })

        // Delete Button DELETE request
        delBtn.addEventListener("click", function(e){
            const ID = e.target.parentNode["data-todoID"]
            axios.delete(`https://api.vschool.io/jess/todo/${ID}`).then(response => {
                window.location.reload();
                e.target.parentNode.remove()
            })
        })


        //add strike through
        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }

        //append
        container.appendChild(delBtn)
        container.appendChild(checkbox)
        
        
        container.appendChild(title)
        container.appendChild(price)
        container.appendChild(description)
        
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
        title: postForm.todoTitle.value,
        description: postForm.todoDescription.value,
        price: postForm.price.value,
        imgUrl: postForm.imgUrl.value
        
    }
    console.log(newTodo)
    postForm.title.value = ""

    axios.post("https://api.vschool.io/jess/todo/", newTodo).then(response => {
        window.location.reload();
    console.log(response);
     todosList.innerHTML = ""
    //  getStuff()  
    
    }).catch(err => console.log(err))
    
})


getStuff()










