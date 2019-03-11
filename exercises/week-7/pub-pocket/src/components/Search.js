import React from 'react'
import { withPubs } from '../Context/PubProvider'

const Search = (props) => {

const {title, authors, downloadUrl, publisher, topics, description } = props


// let descript= description.toLowerCase()



//lowercase all
//turn into an array based on period placement, 
//and then capitalize only first letter of first elemt of array. 

let currentIcon = "" 
console.log(description)
const realSubs = title.toString()

    if( realSubs.includes("Education")) {
        currentIcon = "fas fa-graduation-cap"
    } else if (realSubs.match(/Chem/gi)){
        currentIcon = "fas fa-flask"
    } else if (realSubs.match(/Ecolo/gi)){
        currentIcon = "fas fa-leaf"
    } else if (realSubs.match(/Library/gi)){
        currentIcon = "fas fa-book-reader"
    } else if (realSubs.match(/Law/gi)){
        currentIcon = "fas fa-gavel"
    } else if (realSubs.match(/Bio/gi)){
        currentIcon = "fab fa-pagelines"
    } else if (realSubs.match(/Math/gi)){
        currentIcon = "fas fa-sort-numeric-up"
    } else if (realSubs.match(/Medicine/gi)){
        currentIcon = "fas fa-hospital"
    } else if (realSubs.match(/Physics/gi)){
        currentIcon = "fas fa-atom"
    } else if (realSubs.match( /web/gi)){
        currentIcon = "fas fa-laptop"
    }  else if (realSubs.match( /ortho/gi)){
        currentIcon = "fas fa-bone"
    }










// if button clicked then show in saved pub container












return (
    <div className="pub-container">
    
        <h1>{title}</h1>
        <h4>Authors: {authors}</h4>
        <a target="_new" href={downloadUrl}>Learn more</a>
        <i className ={currentIcon}></i>
        <p>Publisher: {publisher}</p>
        <p>Topics: {topics}</p>
        <p>Description: {description}</p>
        <button onClick={() => props.saveStuff(props.title)}> Save </button>
        {/* <p>{descript}</p> */}
    </div>
)


}

export default withPubs(Search)