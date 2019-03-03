function combined(arr){
    let combo = []
    for (var i = 0; i < arr.length; i++){
        for (var j =0; j < arr.length; j++){
            if (arr[i].length > arr[j].length) {
                combo = arr[i].join( arr[j] ) 
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

  