var input = "Bookkeeper larry"
function removeDuplicates(str){
    
    var arr = str.split('');
    var unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
            var str1 = unique_array.join().replace(/,/g,' ')
        }
    }
    return str1
}

console.log(removeDuplicates(input)); 