// // // //what is a function : a collection of statements that perform a specific task 

// // // function sum() {
// // //     return  5 + 5;

// // // }

// // // console.log(sum());

// // // // lets make it easier and give parameters to make dynamic. what if we want to do 5 + 2? do we need to write whole new function? nah just new parameters
// // //     //parameters => placeholders

// // //     function sum(a,b) {
// // //         return  a + b

// // //     }

// // //     //arguments
// // //     // console.log(sum(5,2));

// // //     var result = sum (true, true)
// // //     console.log(result)

// // //     //Two ways to declare a function, and what's the difference between them. 
// // //     //difference between how they were read: hoisting, how javascript reads our doc and in what order.

// // //     //function declaration: availble everywhere on the webpage regardless of what order

// // //     //hoisting

// // //     myFunction();
// // //     myOtherFunc();
// // //     console.log("This is a fun")



// // //     function myFunction() {
// // //         console.log("function declaration")
// // //     }
// // // //declaarations are hoisted

// // //     //function expression
// // //     //forces you to organize your code...good practice 
// // //     var myOtherFunc = function(){
// // //         console.log("function expression ")
// // //     }


// // function multiply(num1, num2) {
// //     console.log(num1);
// // }
// // //arguments
// // // console.log(multiply(10, 10));


// // //scopes: global and local

// // function someFunc() {
// //     var a = "hello"
// //     console.log(a);
// // }

// // someFunc()


// // //local scope: anything inside these curly brackets only exists inside these curly brackets

// // function loopNums() {
// //     for (var i = 0; i < 10; i++) {
// //         console.log(i)
// //     }
// // }

// // loopNums();
// // // console.log("outside of the for loop " + i)

// // function myFunc(){
// //     //"a" will still console.log since its 
// //}


// function sayHello(){
//     console.log("Hello")
//     return true;
// }

// var result = sayHello()
// console.log(result) //Hello


