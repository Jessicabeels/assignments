console.dir(document);
//representing your HTML page directly
//Literal HTML document expresesd as an object tree 

var myH1 = document.getElementById('greeting')
var myBtm = document.getElementById('myBtn')
// console.log(document.getElementById('greeting'))


myBtn.addEventListener("click", function () {
    myH1.textContent = "Hello"
})
//assigns new text content


// console.log(window);
//what are we working with, what browser are we in, where are we located
//The users browser/agent

//so main layout on html, changes on JS
//html, css and javascript are like bones, skin and then motion 