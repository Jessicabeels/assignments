
function sum(num1, num2){
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        return "please provide numerical values"
    }
    if(!num1 || !num2) { 
    return num1 + num2
}
return num1 + num2
}

//module .exports makes this data available to all other files in the project
module.exports = {
    sum: sum 
}


//npm test to run the test