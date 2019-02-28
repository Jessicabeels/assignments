// const xhr = new XMLHttpRequest() //no more!!!

// xhr.onreadystatechange = function() {// }

//Promies allow us to
    //resolve
    //reject

    function flipCoin(){
        const num = Math.floor(Math.random() * 2)
        if(num === 0){
            return 'heads'
        } else {
            return 'tails'
        }
    }

    console.log(flipCoin())

//     function testFlipCoin(){
//         new Promise((resolve, reject) => {
//             const side = flipCoin()
//             if(side === "heads"){
//                 resolve("It was Heads!")
//             } else if (side === "tails"){
//                 reject("it was tails")
//             }
//         })
//     }

// testFlipCoin()
//         .then(response => console.log("Response " + response))
//         .catch(error => console.log("Error" + error))

axios.get("some url").then(response => {
    listData(response.data)
})
///or 


function get(url){
    const xhr = new XMLHttpRequest()

    xhr.open("GET", url)
    xhr.send()

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
            } else if(xhr.readyState  === 4 && xhr.status !== 200){
                reject("error on server")
            }
        }
    })
}

get("starwars.api/people")
    .then(response => console.log(response))
    .catch(error => console.log(error))

///this does this

axios.get(url).then 

//but now we can do this! ^


