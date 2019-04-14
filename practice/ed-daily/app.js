const asciiConvert = (c) => {
    if (c =  65){
        return "A"
    } else if (c = 109 ){
        return 'm'
    } else if (c = 91){
        return ']'
    } else if (c = 92){
        return '/'
    }
}


console.log(asciiConvert(65))