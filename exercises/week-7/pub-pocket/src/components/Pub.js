import React from 'react'
// import { Link } from 'react-router-dom'
// import {  Route } from 'react-router-dom'
const Pub = (props) => {


    const { title, identifiers, subjects, language, publisher } = props
    let foo = "hi" + identifiers[identifiers.length -1]
    let faa = foo.slice(6,foo.length)

    let subSubs = subjects.slice(', ').join(', ')
    console.log(typeof subSubs)
    // console.log(foo)
    // console.log(typeof foo)
    // console.log("indentifiers:  typeof " + typeof identifiers)
    
    // let url=identifiers[3].join().replace("url:", "")
    
    

    return (
        <div className="pub-container">
            <h1>{title}</h1>
            {/* <Link to={faa}>Learn more</Link> */}
            <a target="_blank" href={faa}>Learn More</a>

            <p> {"  " + subSubs + "  "}</p>
            {/* <a href={url}>Link</a>  */}
            
            {/* <p>Subjects: { subjects }</p> */}
            <p>Language: { language }</p>
            <p>Publisher: { publisher }</p>
        </div>
    )
}

export default Pub