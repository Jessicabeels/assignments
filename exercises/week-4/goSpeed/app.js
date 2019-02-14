//Make a site that tracks how many times the user has clicked anywhere on the page
// (or a specific button if you prefer) and displays that click count to the user. 
var display = document.getElementById('container')
var btn = document.getElementById('click')
var btnReset = document.getElementById('reset')



var count = localStorage.getItem('clicks')
if (!count || count < 0){
    count = 0
}
display.textContent = count

btn.addEventListener('click', function(){
    count ++
    display.textContent = count
    localStorage.setItem("clicks",count)

})

btnReset.addEventListener('click', function(){
    display.textContent = 0
    localStorage.setItem("clicks", 0)
})

setTimeout(function(){
    btn.disabled = true;
 }, 20000);


//get clicks from the page

// localStorage.setItem.clicks('clicks', JSON.stringify(clicks))
// JSON.parse(data)

// var clickCount = JSON.parse()