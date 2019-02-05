var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"
];


//First function: returns contents of the array, lyrics, to the console as a string, including necessary spaces.

function getLyrics(arr) {
    var str = arr.join(' ')
    return str
}

// console.log(getLyrics(lyrics));



//Second function: returns lyrics backwards ("pretty so I'm myself kiss Gotta...").


function reverseLyrics(arr) {
    var newStr = arr.reverse().join(' ')
    return newStr
}

// console.log(reverseLyrics(lyrics));


//Third function: returns a string of just every other word, (e.g. "this that cold Pfeiffer...").

function everyOther(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        } 
    }
    return newArr
}

console.log(everyOther(lyrics))