//Write a function that returns a 10 X 10 multiplication table (2D array).

//For example:

// multTable();
// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]

const multTable = (groups, indexes) => {
    var array = [];
    var g;
    var i;
  
    //---Loop for the groups
    for(g = 0; g < groups; g++){
  
      //---Create multidimensional array
      array[g] = [];
  
      //---Loop for the indexes of the each group
      for(i = 0; i < indexes; i++){
  
        array[g][i] = (g + 1) * (i + 1);
  
      }
  
    }
  
    return array;
  
}

console.log(multTable(3, 4, 5, 6, 7, 8, 9));


const tenTable = () => {
    var result = 'x ';
    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
            if(i == 0 && j > 0){
            result += '[' + j + ']';
        } else if(j == 0 && i>0){
            result += '[' + i + '] ';
        } else if(i>0 && j>0){
            result += (i*j) + ' ';
        }
    }
    result += '\n'
}
return result
}


console.log(tenTable());