function countingCode(string) {
    var count = string.split(/co.e/g).length - 1
    return "Code or almost code appears " + count + " times in the string"
}

console.log(countingCode("codexxcope"))
//what is it giving me and what does it need back

function countCode (string){
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] + string[i + 1] + string[i + 3]=== 'coe' ){
            count ++

        }
    }
    return count;
}

console.log(countCode('aaacodebbcozebcope'))

function countedCode (string){
    return string.match(/co.e/g).length
}

console.log(countedCode('aaacodebbcozebcope'))