function combined(arr){
    let combo = []
    for (var i = 0; i < arr.length; i++){
        for (var j =0; j < arr.length; j++){
            if (arr[i].length > arr[j].length) {
                combo = arr[i].concat( ' ' + arr[j] ) 
                return combo
            }
        }
    }
    // Find the 3 adjacent elements with longest combined length
}

console.log(combined(["this", "is", "an", "array"]))
// Output:  ["is", "an", "array"]
    // they have the longest combined length of any 3 adjacent elements. (9 characters)
    // In contract, ["this", "is", "an"] only has a combined length of 8 characters

// function combined(arr){
//     // Find the 3 adjacent elements with longest combined length

//     if (arr.length >= 3) {
    
//         let arr2 = []
//         for (let i = 0; i < arr.length - 2; i++) {
        
//             if (arr2[2]) {
//                 if ((arr[i].length + arr[i + 1].length + arr[i + 2].length) > (arr2[0].length + arr2[1].length + arr2[2].length)) {
//                     arr2 = []
//                     arr2 = arr.slice(i, i + 3)
//                 }   
                         
//             } else {
            
//                 arr2 = arr.slice(0, 3)
                
//             }

//         }
        
//         return arr2
        
//     } else {
    
//         return "Array too short."
        
//     }
// }    

// console.log(combined(["Find", "the", "3", "adjacent", "elements", "with", "longest", "combined", "length"])) // [ 'longest', 'combined', 'length' ]