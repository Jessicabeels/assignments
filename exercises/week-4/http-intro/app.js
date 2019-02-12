var xhr = new XMLHttpRequest()
console.log(xhr)


xhr.onreadystatechange = function(){
    console.log(xhr.readyState) //1,2,3,4
    if(xhr.readyState === 4 && xhr.status === 200){
        //your data came back safely. now we need to grab it
        var jsonData = xhr.responseText
        console.log(jsonData)
        //so we can't use that jsonData in javascript so must pass it into a JS object
        var data = JSON.parse(jsonData)
        listData(data)
    }
}
//Open HTTP request
xhr.open("GET", "https://api.vschool.io/jess/todo/")


//send HTTP request
xhr.send()



function listData(arr){
    // console.log("were in the listData function")
    // console.log(arr)
    var firstTodo = arr[0]
    var title = document.createElement('h1')
    title.textContent = firstTodo.title
    document.getElementById('container').appendChild(title)
}





//with xhr we send out a get request
//readyState === 4 //when readystate === 4 irs ready to come back...we dont have to worry we just decalre it above
//code will run when ready state = 4. Check status
//xhr.status === 200 //200 means as expected
//these 2 things must be achieved b4 we can go