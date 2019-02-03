document


var div = document.getElementById('box');
div.addEventListener('mouseover', blueFunction);

function blueFunction(){
    this.style = "background-color:blue";  
};



div.addEventListener('mousedown', redFunction);

function redFunction(){
    this.style = "background-color:red"
}

div.addEventListener('mouseup', yellowFunction);

function yellowFunction(){
    this.style = "background-color: yellow"
}

div.addEventListener('dblclick',greenFunction);

function greenFunction(){
    this.style = "background-color: green"
}

div.addEventListener('mouseout', orangeFunction);

function orangeFunction(){
    this.style = "background-color: orange"
}