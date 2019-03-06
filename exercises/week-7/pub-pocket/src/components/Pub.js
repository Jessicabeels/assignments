import React from 'react'
// import { Link } from 'react-router-dom'
// import {  Route } from 'react-router-dom'
const Pub = (props) => {


    const { title, identifiers, subjects, language, publisher } = props

    //separate out the URL
    let foo = "hi" + identifiers[identifiers.length -1]
    let faa = foo.slice(6,foo.length)


    let subSubs = subjects.slice(', ').join(', ')
    // console.log( "Hi " + typeof subSubs)
    subSubs = `${subSubs[0].toUpperCase()}${subSubs.slice(1)}`
    // console.log( "Hi " + typeof subSubs)
    // console.log( subSubs)

        //remove weird empty letter from list
    subSubs = subSubs.substring(0, subSubs.lastIndexOf(", "));
    console.log(typeof subSubs)
    console.log(subSubs)

    // let subSubs = subjects.slice(', ')
    // // console.log( subSubs)
    // // console.log(typeof subSubs) //an object
    // subSubs = subSubs.toString().split(', ')
    // subSubs = `${subSubs[0].toUpperCase()}${subSubs.slice(1)}`
    // console.log( subSubs)
    // console.log(typeof subSubs) //string
    // // subSubs = subSubs.join(', ')
    



    //Separate out the ISSN
    let issn = identifiers[identifiers.length - 2]

    
    // console.log(foo)
    // console.log(typeof foo)
    // console.log("indentifiers:  typeof " + typeof identifiers)
    
    // let url=identifiers[3].join().replace("url:", "")
    
    

    return (
        <div className="pub-container">
            <h1>{title}</h1>
            {/* <Link to={faa}>Learn more</Link> */}
            <a target="_new" href={faa}>Learn More</a>



            <p> {"  " + subSubs + "  "}</p>
            <p>{issn}</p>
            {/* <a href={url}>Link</a>  */}
            
            {/* <p>Subjects: { subjects }</p> */}
            <p>Language: { language }</p>
            <p>Publisher: { publisher }</p>
        </div>
    )
}

export default Pub