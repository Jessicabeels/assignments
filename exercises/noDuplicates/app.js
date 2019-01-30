// var input = "bookkeeper larry";
// //Output: "bokepr lay"

// function noDuplicates(str) {
//     for (i = 0; i < str.length; i++) {
//         var arr = str.split('');
//         // return arr;
//         var uniqueArr = [];
//         for(let i = 0; i < arr.length; i++) {
//             if (uniqueArr.indexOf(arr[i])) === -1) {
//             uniqueArr.push(arr[i])
//         }
//     }

//     return uniqueArr;
    
// }

// console.log(noDuplicates("bookkeeper latty"))

// make the string an array so letters are separate
// compare duplicates
// remove duplicates

var input = "bookkeerp larry"
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

console.log(removeDuplicates(input)); // [ 'DELHI', 'NEWYORK', 'GOA', 'MUMBAI', 'CALIFORNIA' ]