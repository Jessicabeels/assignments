import React from 'react'

const Pub = (props) => {


    const { title, identifiers, subjects, language, publisher } = props

    //separate out the URL
    let myurl = "hi" + identifiers[identifiers.length -1]
    let thisUrl = myurl.slice(6,myurl.length)


    let subSubs = subjects.slice(', ').join(', ')
    // console.log( "Hi " + typeof subSubs)
    subSubs = `${subSubs[0].toUpperCase()}${subSubs.slice(1)}`
    // console.log( "Hi " + typeof subSubs)
    // console.log( subSubs)

        //remove weird empty letter from list
    subSubs = subSubs.substring(0, subSubs.lastIndexOf(", "));
    
     // console.log( "Hi " + typeof subSubs)



    //Separate out the ISSN
    let issn = identifiers[identifiers.length - 2]

    
    // console.log(foo)
    // console.log(typeof foo)
    // console.log("indentifiers:  typeof " + typeof identifiers)
    
    // let url=identifiers[3].join().replace("url:", "")
    
   
    let currentIcon = "" 
   

    const strSubs = subjects.toString()

    if( subjects.includes("Education")) {
        currentIcon = "fas fa-graduation-cap"
    } else if (strSubs.match(/Chem/gi)){
        currentIcon = "fas fa-flask"
    } else if (strSubs.match(/Ecolo/gi)){
        currentIcon = "fas fa-leaf"
    } else if (strSubs.match(/Library/gi)){
        currentIcon = "fas fa-book-reader"
    } else if (strSubs.match(/Law/gi)){
        currentIcon = "fas fa-gavel"
    } else if (strSubs.match(/Bio/gi)){
        currentIcon = "fab fa-pagelines"
    } else if (strSubs.match(/Math/gi)){
        currentIcon = "fas fa-sort-numeric-up"
    } else if (strSubs.match(/Medicine/gi)){
        currentIcon = "fas fa-hospital"
    } else if (strSubs.match(/Physics/gi)){
        currentIcon = "fas fa-atom"
    } else if (strSubs.match(/web/gi)){
        currentIcon = "fas fa-laptop"
    } else if (strSubs.match(/ortho/gi)){
        currentIcon = "fas fa-bone"
    }

    // console.log(typeof subSubs)
    // console.log(subSubs)


    //     console.log(currentIcon)
    return (
        <div className="pub-container">
            <h1>{title}</h1>
            <p>Publisher: { publisher }</p>
            {/* <Link to={thisUrl}>Learn more</Link> */}
            <a target="_new" href={thisUrl}>Learn More</a>
            {/* <i className ="fas fa-graduation-cap"></i> */}
            <i className ={currentIcon}></i>


          
           

            <p> {"  " + subSubs + "  "}</p>

            <p>{issn}</p>
            {/* <a href={url}>Link</a>  */}
            
            {/* <p>Subjects: { subjects }</p> */}
            <p>Language: { language }</p>
            <button> Save </button>
            
        </div>
    )
}

export default Pub