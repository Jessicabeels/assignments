document
window

//1. Select and console.log that h1 in your app.js
var title = document.getElementById('title')

console.log(title)

//Part 1
//Creating and Editing Elements
    //Create the element
    var myH1 = document.createElement('h1')

//Give the element some content

    myH1.textContent = " Hello World" //<h1>"Hello World"</h1>
    myH1.innerHTML = "<h2>Hello World</h2>"
    //adds new tags or deletes your tags...be careful! 
    

//placing that element on the DOM

var container = document.getElementById('container')
// document.querySelector(container)
container.appendChild(myH1)

    console.log(myH1)


    //create element, textContent, gerElementById, AppendChild
    //imparative programming


//Part 2: 
    //1.create a div in your HTML and give it an ID
    //2. Create an h1 in js 

    var otherH1 = document.createElement('h1')

    //3. Give that h1 text Content

    otherH1.textContent = "Hello @ World"
    //4. select the div from your HTML

    //document.querySelector(myDiv)
    var myDiv = document.getElementById('myDiv')

    
    //5. append the h1 into the div so it shows up on the webpage

    myDiv.appendChild(otherH1)

    otherH1.textContent = "it is really cold"
    myDiv.textContent = "I don't really undersand what the purpose is of anything but .textcontent"

    //  so basically what I think I'm doing is, making a js thing that doesn't have a home, and then giving it msContentScript, but then assigning it to the location of another, myDiv, by first selecting this other SVGPathSegClosePath, and then appendeding it
    

    //what else can we add with .textContent? 
    //adding/ removing/toggling classes

    // var pTag = document.getElementsByClassName('my-class')
    // // console.log(pTag[0].classList.add("highlight"))
    // pTag[0].classList.add("highlight")
    // pTag[0].classList.remove("highlight")

    //adding/removing attributes

    var myImg = document.createElement('img')

    //https://images.unsplash.com/photo-1548736614-128923fa2a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80

    myImg.setAttribute("src", "https://images.unsplash.com/photo-1548736614-128923fa2a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80")
    myImg.style.width = "200px"
    myImg.style.height = "200px"
    container.appendChild(myImg)

    //ParentNode, chilnodes
    console.log(container.parentNode)
    console.log(container.childNode)


//dom code above fires and happens instantly...so far not good for things we want to postpone