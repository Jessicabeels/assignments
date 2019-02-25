

let inscription = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
let message = []


const matchWords = (str) => {
    let pirateMess = str.split(' ').sort()
    let counts = []
    // let reps = pirateMess.filter((v,i) => pirateMess.indexOf(v)===i)
    for(let i = 0; i <= pirateMess.length; i++) {
        for (let j=0; j < pirateMess.length; j++)
        if(counts[pirateMess[i]] === counts[pirateMess[j]]){
            counts[pirateMess[i]] =1
        } else {
            return pirateMess
        }
    }
}


console.log(matchWords(inscription))





